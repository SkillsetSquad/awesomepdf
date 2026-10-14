#!/usr/bin/env python3
"""Check every exported public app page against its sitemap and rendered HTML."""
import argparse
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import struct
import sys
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.lang = self.direction = None
        self.titles, self.meta, self.canonicals, self.alternates = [], {}, [], []
        self.schemas, self.links, self.ids, self.text = [], [], set(), []
        self.h1_count = self.cards = 0
        self.title_text = None
        self.script_text = None
        self.in_script = self.in_style = False
        self.redirects = re.findall(r'NEXT_REDIRECT;(?:replace|push);([^;]+);(?:307|308);', source)
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'html':
            self.lang, self.direction = attrs.get('lang'), attrs.get('dir')
        if tag == 'title':
            self.title_text = []
        if tag == 'meta':
            if attrs.get('http-equiv', '').lower() == 'refresh':
                target = re.search(r'url=(.*)', attrs.get('content', ''), re.I)
                if target:
                    self.redirects.append(target.group(1).strip())
            key = attrs.get('name') or attrs.get('property')
            self.meta.setdefault(key, []).append(attrs.get('content', ''))
        if tag == 'link':
            if attrs.get('rel') == 'canonical':
                self.canonicals.append(attrs.get('href'))
            if attrs.get('rel') == 'alternate' and attrs.get('hreflang'):
                self.alternates.append((attrs['hreflang'], attrs.get('href')))
        if tag == 'h1':
            self.h1_count += 1
        if attrs.get('data-testid') == 'tool-card':
            self.cards += 1
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'script':
            self.in_script = True
            if attrs.get('type') == 'application/ld+json':
                self.script_text = []
        if tag == 'style':
            self.in_style = True

    def handle_endtag(self, tag):
        if tag == 'title' and self.title_text is not None:
            self.titles.append(''.join(self.title_text))
            self.title_text = None
        if tag == 'script':
            if self.script_text is not None:
                self.schemas.append(json.loads(''.join(self.script_text)))
            self.script_text = None
            self.in_script = False
        if tag == 'style':
            self.in_style = False

    def handle_data(self, value):
        if self.title_text is not None:
            self.title_text.append(value)
        if self.script_text is not None:
            self.script_text.append(value)
        if not self.in_script and not self.in_style:
            self.text.append(value)


def main():
    args = argparse.ArgumentParser(description=__doc__)
    args.add_argument('--site-url', default='https://awsomepdf.com')
    args.add_argument('--base-path', default='')
    args.add_argument('--out', default='out')
    args.add_argument('--report', default='docs/seo/export-audit.json')
    options = args.parse_args()
    root, output = Path.cwd(), Path(options.out)
    site = options.site_url.rstrip('/') + ('/' + options.base_path.strip('/') if options.base_path.strip('/') else '')
    locales = list(json.loads((root / 'src/lib/seo/copy.json').read_text()))
    registry = re.search(r'export const locales = \[(.*?)\] as const', (root / 'src/lib/i18n/config.ts').read_text()).group(1)
    if set(re.findall(r"'([^']+)'", registry)) != set(locales):
        raise ValueError('SEO copy does not cover the supported locale registry')
    manifest = json.loads((root / '.next/prerender-manifest.json').read_text())
    routes = {route for route in manifest['routes'] if any(route == '/' + loc or route.startswith('/' + loc + '/') for loc in locales)}
    url_for = lambda route: site + (route.rstrip('/') + '/' if route != '/' else '/')
    expected = {url_for(route) for route in routes}
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
    sitemap = ET.parse(output / 'sitemap.xml')
    entries = sitemap.findall('s:url', ns)
    actual = [entry.findtext('s:loc', namespaces=ns) for entry in entries]
    errors, titles, counts = [], {}, Counter()
    check = lambda ok, message: errors.append(message) if not ok else None
    check(set(actual) == expected, 'Sitemap differs from exported public routes')
    check(len(set(actual)) == len(actual), 'Sitemap contains duplicate URLs')
    entry_file = output / 'index.html'
    check(entry_file.is_file(), 'Root redirect is absent from the export')
    if entry_file.is_file():
        entry = Page(entry_file.read_text())
        target = '/' + options.base_path.strip('/') + '/en/' if options.base_path.strip('/') else '/en/'
        check(any(url in {'/en/', target, url_for('/en')} for url in entry.redirects), 'Root does not redirect to the English homepage')
        check(entry.canonicals == [url_for('/en')], 'Root redirect canonical does not match the English homepage')
    suffixes = {}
    for locale in locales:
        prefix = '/' + locale
        suffixes[locale] = {r[len(prefix):] for r in routes if r == prefix or r.startswith(prefix + '/')}
    for locale in locales:
        check(suffixes[locale] == suffixes['en'], f'{locale}: route coverage differs from English')
    for entry in entries:
        url = entry.findtext('s:loc', namespaces=ns)
        route = url[len(site):].rstrip('/') or '/'
        relative = route.lstrip('/')
        file = output / relative / 'index.html' if relative else output / 'index.html'
        if not file.is_file():
            errors.append(f'{url}: missing HTML')
            continue
        page = Page(file.read_text())
        locale = relative.split('/')[0] if relative else 'en'
        path = '/' + '/'.join(relative.split('/')[1:]) if '/' in relative else ''
        languages = {loc: url_for('/' + loc + path) for loc in locales}
        languages['x-default'] = url_for('/en' + path)
        prefix = url + ': '
        check(page.lang == locale, prefix + 'wrong HTML language')
        check(page.direction == ('rtl' if locale == 'ar' else 'ltr'), prefix + 'wrong text direction')
        check(len(page.titles) == 1 and bool(page.titles[0].strip()), prefix + 'missing or duplicate title')
        check(page.h1_count == 1, prefix + 'expected exactly one visible H1')
        check(page.canonicals == [url], prefix + 'canonical does not match exported URL')
        check(len(page.alternates) == len(languages) and dict(page.alternates) == languages, prefix + 'incomplete or inconsistent HTML language alternates')
        sitemap_alternates = [(a.get('hreflang'), a.get('href')) for a in entry.findall('x:link', ns)]
        check(len(sitemap_alternates) == len(languages) and dict(sitemap_alternates) == languages, prefix + 'sitemap language alternates disagree with HTML')
        for key in ['description', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']:
            check(len(page.meta.get(key, [])) == 1 and bool(page.meta[key][0].strip()), prefix + 'missing or duplicate ' + key)
        check(page.meta.get('og:url') == [url], prefix + 'Open Graph URL differs from canonical')
        check(page.meta.get('twitter:card') == ['summary_large_image'], prefix + 'missing large social preview')
        check(not any('noindex' in s for s in page.meta.get('robots', [])), prefix + 'public page is noindex')
        check(not any('PDFCraft' in s for s in page.titles + page.meta.get('description', [])), prefix + 'stale upstream brand in metadata')
        image_url = page.meta.get('og:image', [''])[0]
        image_path = output / image_url.removeprefix(site + '/')
        if image_path.is_file():
            data = image_path.read_bytes()
            check(data.startswith(b'\x89PNG\r\n\x1a\n') and struct.unpack('>II', data[16:24]) == (1200, 630), prefix + 'invalid social image dimensions')
        else:
            errors.append(prefix + 'social image is absent from export')
        schema_types = {s.get('@type') for s in page.schemas}
        check(bool(page.schemas), prefix + 'missing JSON-LD')
        check(not any('aggregateRating' in s for s in page.schemas), prefix + 'unverified review ratings')
        text = re.sub(r'\s+', ' ', ' '.join(page.text))
        check(not re.search(r'\{(?:count|languages|languageNames)\}', text), prefix + 'unresolved translation placeholder')
        for schema in page.schemas:
            check(schema.get('@context') == 'https://schema.org', prefix + 'invalid schema context')
            if schema.get('@type') == 'FAQPage':
                for question in schema['mainEntity']:
                    for value in [question['name'], question['acceptedAnswer']['text']]:
                        check(re.sub(r'\s+', ' ', value).strip() in text, prefix + 'FAQ schema is absent from readable content')
            if schema.get('@type') == 'HowTo':
                for step in schema['step']:
                    check(step.get('url', '').split('#')[0] == url and step.get('url', '').split('#')[-1] in page.ids, prefix + 'invalid how-to anchor')
            if schema.get('@type') == 'SoftwareApplication':
                check(schema.get('url') == url and schema.get('offers', {}).get('price') == '0', prefix + 'invalid software application URL or offer')
        if path.startswith('/tools/') and not path.startswith('/tools/category/'):
            check({'SoftwareApplication', 'FAQPage', 'HowTo', 'WebPage', 'BreadcrumbList'} <= schema_types, prefix + 'missing tool schema')
        if path == '/tools':
            tools_count = sum(s.startswith('/tools/') and not s.startswith('/tools/category/') for s in suffixes[locale])
            check(page.cards == tools_count, prefix + 'tool directory does not render every tool without JavaScript')
        if page.titles:
            titles.setdefault((locale, page.titles[0]), []).append(url)
        counts[locale if relative else 'entry'] += 1
    for title, urls in titles.items():
        check(len(urls) == 1, f'Duplicate title within one language {title}: {urls}')
    robots = (output / 'robots.txt').read_text()
    check(f'Sitemap: {site}/sitemap.xml' in robots, 'Robots sitemap URL differs from configured site')
    check('/_next/' not in robots and '/static/' not in robots, 'Robots blocks rendering assets')
    for file in [output / 'direct-pdf-editor/index.html', output / '404.html']:
        check(file.is_file() and any('noindex' in s for s in Page(file.read_text()).meta.get('robots', [])), str(file) + ': utility or error page must be noindex')
    source_manifest = json.loads((output / 'source-manifest.json').read_text())
    check(not any(p.startswith('docs/') for p in source_manifest['files']), 'Local docs leaked into source download')
    report = {'site': site, 'pages': len(actual), 'locales': counts, 'errors': errors, 'passed': not errors}
    destination = Path(options.report)
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
