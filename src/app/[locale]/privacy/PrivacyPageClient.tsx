import { useTranslations } from 'next-intl';
import { Shield, Lock, Eye, Server, Trash2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { type Locale } from '@/lib/i18n/config';

interface PrivacyPageClientProps {
  locale: Locale;
}

export default function PrivacyPageClient({ locale }: PrivacyPageClientProps) {
  const t = useTranslations();

  const privacyHighlights = [
    {
      icon: Server,
      title: 'No Server Uploads',
      description: 'Your files are never uploaded to any server. All processing happens locally in your browser.',
    },
    {
      icon: Lock,
      title: 'Local Processing',
      description: 'PDF operations are performed using JavaScript and WebAssembly directly on your device.',
    },
    {
      icon: Trash2,
      title: 'Automatic Cleanup',
      description: 'All file data is automatically cleared when you close the browser tab or navigate away.',
    },
    {
      icon: Eye,
      title: 'No Tracking',
      description: 'We don\'t track your file contents or personal information. Your documents remain private.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header locale={locale} />
      
      <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-4 pt-24 pb-12 sm:px-6">
        {/* Hero Section */}
        <section className="pb-8">
          <div className="w-full">
            <div className="max-w-3xl space-y-3">
              <div className="text-primary">
                <Shield className="size-6 text-primary" />
              </div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Your privacy is our top priority. {t('common.brand')} is designed from the ground up 
                to protect your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      <CardTitle><h2>{item.title}</h2></CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-8">
          <div className="w-full">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('common.brand')} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we handle your information when you use our PDF tools.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                2. How Our Service Works
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('common.brand')} is a client-side application. This means:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li>All PDF processing happens directly in your web browser</li>
                <li>Your files are never uploaded to our servers or any third-party servers</li>
                <li>We cannot see, access, or store your documents</li>
                <li>Your files remain on your device at all times</li>
              </ul>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                3. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                3.1 Your Files
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong>We do not collect your files.</strong> When you use our PDF tools, your files 
                are processed entirely within your browser. They are never transmitted to our servers.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                3.2 Usage Data
              </h3>
              <p className="text-muted-foreground mb-4">
                We may collect anonymous usage statistics to improve our service, such as:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li>Which tools are most popular</li>
                <li>General geographic region (country level)</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This data is aggregated and anonymized. It cannot be used to identify you personally.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                4. Local Storage
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('common.brand')} may use your browser&apos;s local storage to:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li>Remember your language preference</li>
                <li>Store your recent tool history</li>
                <li>Save work-in-progress for interrupted sessions</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This data is stored only on your device and is not transmitted to us.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                5. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                We use minimal cookies for essential functionality:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Preference cookies:</strong> Remember your settings like language preference</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do not use tracking cookies or advertising cookies.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('common.brand')} does not share your data with third parties. We do not use:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li>Third-party analytics that track individual users</li>
                <li>Advertising networks</li>
                <li>Social media tracking pixels</li>
                <li>External file processing services</li>
              </ul>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                7. Data Security
              </h2>
              <p className="text-muted-foreground mb-4">
                Since your files never leave your device, they are protected by your own device&apos;s 
                security measures. We recommend:
              </p>
              <ul className="list-disc ps-6 space-y-2 text-muted-foreground mb-4">
                <li>Using an up-to-date browser</li>
                <li>Keeping your operating system updated</li>
                <li>Using secure networks when handling sensitive documents</li>
              </ul>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                8. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                Since we don&apos;t collect personal data, there is no personal data to access, correct, 
                or delete. You can clear your browser&apos;s local storage at any time to remove any 
                preferences stored by {t('common.brand')}.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('common.brand')} is not directed at children under 13. We do not knowingly collect 
                any information from children.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us through our 
                contact page.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Badge */}
        <section className="py-8">
          <div className="w-full">
            <div className="max-w-2xl mx-auto text-center">
              <Alert className="text-start"><Shield aria-hidden="true" /><AlertTitle>{t('common.footer.privacyBadge')}</AlertTitle><AlertDescription>Your documents are processed securely in your browser</AlertDescription></Alert>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
