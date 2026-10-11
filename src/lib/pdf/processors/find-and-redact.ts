/**
 * Find and Redact Processor
 * Requirements: 5.1
 * 
 * Search for specific text/patterns across all pages and redact matching content.
 * Useful for batch redacting sensitive information like account numbers, names, etc.
 */

import { extractRedactionText, removePDFContent, type RedactionRect } from '../redaction-engine';

/**
 * Text match found in the PDF
 */
export interface TextMatch {
    /** Page number (1-indexed) */
    page: number;
    /** Text content that matched */
    text: string;
    /** X coordinate from left edge (in points) */
    x: number;
    /** Y coordinate from bottom edge (in points) - PDF coordinates */
    y: number;
    /** Width of the text (in points) */
    width: number;
    /** Height of the text (in points) */
    height: number;
    /** Unique identifier for this match */
    id: string;
    /** Exact glyph bounds in native PDF coordinates, including descenders. */
    bounds?: RedactionRect;
    /** Whether this match is selected for redaction */
    selected: boolean;
}

/**
 * Search options for finding text
 */
export interface SearchOptions {
    /** Single search term or pattern (for backwards compatibility) */
    searchTerm?: string;
    /** Multiple search terms (comma or newline separated in input) */
    searchTerms?: string[];
    /** Whether to use case-sensitive matching */
    caseSensitive: boolean;
    /** Whether to use regex pattern matching */
    useRegex: boolean;
    /** Whether to match whole words only */
    wholeWord: boolean;
}

/**
 * Parse search input into multiple terms
 */
export function parseSearchTerms(input: string): string[] {
    // Split by comma (both English and Chinese), newline, trim whitespace, and filter empty strings
    return input
        .split(/[,，\n]/)
        .map(term => term.trim())
        .filter(term => term.length > 0);
}

/**
 * Redaction options
 */
export interface FindAndRedactOptions extends SearchOptions {
    /** Color for the redaction boxes (default: black) */
    color?: { r: number; g: number; b: number };
    /** Whether to add a border around redaction boxes */
    addBorder?: boolean;
    /** Replacement text to show in redacted areas */
    replacementText?: string;
    /** Explicit selection. An empty array selects nothing. */
    selectedMatchIds?: string[];
}

/**
 * Search result containing all matches
 */
export interface SearchResult {
    success: boolean;
    matches: TextMatch[];
    totalCount: number;
    pagesWithMatches: number[];
    error?: string;
}

/**
 * Redaction result
 */
export interface RedactionResult {
    success: boolean;
    result?: Blob;
    error?: string;
    redactedCount: number;
}

/**
 * Progress callback type
 */
export type ProgressCallback = (progress: number, message?: string) => void;

/**
 * Search for text in a PDF document
 * Returns all matches with their positions for preview
 */
export async function searchTextInPDF(
    file: File,
    options: SearchOptions,
    onProgress?: ProgressCallback
): Promise<SearchResult> {
    try {
        if (!file) throw new Error('No file provided');
        const terms = options.searchTerms?.length ? options.searchTerms : options.searchTerm ? [options.searchTerm] : [];
        const patterns = terms.filter(term => term.trim()).map(term => {
            let source = options.useRegex ? term : term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            if (options.wholeWord) source = `\\b(?:${source})\\b`;
            return new RegExp(source, options.caseSensitive ? 'g' : 'gi');
        });
        if (!patterns.length) throw new Error('Search term is required');
        onProgress?.(10, 'Loading the local text engine...');
        const lines = await extractRedactionText(file);
        const matches: TextMatch[] = [];
        const seen = new Set<string>();
        for (const line of lines) {
            // JS regex offsets count UTF-16 units; glyphs can contain surrogate pairs.
            const glyphs = line.chars.flatMap(char => Array.from({ length: char.text.length }, () => char));
            const text = line.chars.map(char => char.text).join('');
            for (const pattern of patterns) {
                pattern.lastIndex = 0;
                let match: RegExpExecArray | null;
                while ((match = pattern.exec(text)) !== null) {
                    if (!match[0].length) { pattern.lastIndex++; continue; }
                    const chars = glyphs.slice(match.index, match.index + match[0].length);
                    const bounds: RedactionRect = [Math.min(...chars.map(c => c.rect[0])), Math.min(...chars.map(c => c.rect[1])),
                        Math.max(...chars.map(c => c.rect[2])), Math.max(...chars.map(c => c.rect[3]))];
                    const key = `${line.page}:${bounds.join(':')}:${match[0]}`;
                    if (seen.has(key)) continue;
                    seen.add(key);
                    matches.push({ page: line.page, text: match[0], x: bounds[0], y: chars[0].origin[1],
                        width: bounds[2] - bounds[0], height: bounds[3] - bounds[1], bounds,
                        id: `match-${matches.length}`, selected: true });
                }
            }
        }
        onProgress?.(100, 'Search complete');
        return { success: true, matches, totalCount: matches.length,
            pagesWithMatches: [...new Set(matches.map(match => match.page))].sort((a, b) => a - b) };
    } catch (error) {
        return { success: false, matches: [], totalCount: 0, pagesWithMatches: [],
            error: error instanceof Error ? error.message : 'Failed to search PDF' };
    }
}

/**
 * Apply redactions to found text matches
 */
export async function applyFindAndRedact(
    file: File,
    matches: TextMatch[],
    options: Omit<FindAndRedactOptions, keyof SearchOptions>,
    onProgress?: ProgressCallback
): Promise<RedactionResult> {
    try {
        if (!file) throw new Error('No file provided');
        const selected = options.selectedMatchIds !== undefined
            ? matches.filter(match => options.selectedMatchIds!.includes(match.id))
            : matches.filter(match => match.selected);
        if (!selected.length) throw new Error('No matches selected for redaction');
        if (selected.some(match => !match.bounds)) throw new Error('Search again to obtain exact redaction bounds');
        const color = options.color ?? { r: 0, g: 0, b: 0 };
        const channels = [color.r, color.g, color.b];
        if (channels.some(c => !Number.isFinite(c) || c < 0 || c > 255)) throw new Error('Invalid redaction color');
        const hex = '#' + channels.map(c => Math.round(c).toString(16).padStart(2, '0')).join('');
        onProgress?.(10, 'Removing selected PDF content...');
        const bytes = await removePDFContent(file, selected.map(match => ({
            page: match.page, coordinates: 'pdf',
            rect: match.bounds!,
            color: hex, label: options.replacementText, border: options.addBorder,
        })));
        onProgress?.(100, 'Complete!');
        return { success: true, result: new Blob([bytes], { type: 'application/pdf' }), redactedCount: selected.length };
    } catch (error) {
        return { success: false, redactedCount: 0, error: error instanceof Error ? error.message : 'Failed to apply redactions' };
    }
}

/**
 * Combined function to search and redact in one step
 */
export async function findAndRedact(
    file: File,
    options: FindAndRedactOptions,
    onProgress?: ProgressCallback
): Promise<RedactionResult> {
    // First, search for matches
    const searchResult = await searchTextInPDF(
        file,
        {
            searchTerm: options.searchTerm,
            searchTerms: options.searchTerms,
            caseSensitive: options.caseSensitive,
            useRegex: options.useRegex,
            wholeWord: options.wholeWord,
        },
        (progress, message) => onProgress?.(progress * 0.5, message)
    );

    if (!searchResult.success || searchResult.matches.length === 0) {
        return {
            success: searchResult.success,
            error: searchResult.error || 'No matches found',
            redactedCount: 0,
        };
    }

    // Then apply redactions
    return applyFindAndRedact(
        file,
        searchResult.matches,
        {
            color: options.color,
            addBorder: options.addBorder,
            replacementText: options.replacementText,
            selectedMatchIds: options.selectedMatchIds,
        },
        (progress, message) => onProgress?.(50 + progress * 0.5, message)
    );
}

export default {
    searchTextInPDF,
    applyFindAndRedact,
    findAndRedact,
    parseSearchTerms,
};
