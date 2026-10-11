/**
 * Fuzzy text matching shared by tool search. Kept free of tool-registry imports so
 * client code that only needs matching does not bundle the registry.
 */

/**
 * Calculate fuzzy match score between query and text
 * Returns a score between 0 and 1, where 1 is a perfect match
 */
export function fuzzyMatch(query: string, text: string): number {
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedText = text.toLowerCase();

  // Empty query matches nothing
  if (!normalizedQuery) {
    return 0;
  }

  // Exact match gets highest score
  if (normalizedText === normalizedQuery) {
    return 1;
  }

  // Contains exact query as substring
  if (normalizedText.includes(normalizedQuery)) {
    // Score based on position and length ratio
    const position = normalizedText.indexOf(normalizedQuery);
    const lengthRatio = normalizedQuery.length / normalizedText.length;
    // Earlier position and higher length ratio = better score
    const positionScore = 1 - position / normalizedText.length;
    return 0.7 + 0.2 * lengthRatio + 0.1 * positionScore;
  }

  // Word-based matching
  const queryWords = normalizedQuery.split(/\s+/);
  const textWords = normalizedText.split(/\s+/);

  let matchedWords = 0;
  for (const queryWord of queryWords) {
    for (const textWord of textWords) {
      if (textWord.includes(queryWord) || queryWord.includes(textWord)) {
        matchedWords++;
        break;
      }
    }
  }

  if (matchedWords > 0) {
    return 0.4 + 0.3 * (matchedWords / queryWords.length);
  }

  // Character-based fuzzy matching (for typos)
  let matchedChars = 0;
  let queryIndex = 0;

  for (let i = 0; i < normalizedText.length && queryIndex < normalizedQuery.length; i++) {
    if (normalizedText[i] === normalizedQuery[queryIndex]) {
      matchedChars++;
      queryIndex++;
    }
  }

  if (matchedChars === normalizedQuery.length) {
    // All characters found in order
    return 0.3 + 0.2 * (matchedChars / normalizedText.length);
  }

  // Partial character match
  if (matchedChars > normalizedQuery.length * 0.5) {
    return 0.1 + 0.2 * (matchedChars / normalizedQuery.length);
  }

  return 0;
}
