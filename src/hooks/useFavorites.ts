'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'pdfcraft-favorite-tools';
const FAVORITES_CHANGED_EVENT = 'pdfcraft-favorites-changed';
let memoryFavorites: string[] = [];

function readFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return memoryFavorites;
  }
}

/** Keep cards and directory filters synchronized without changing the existing storage key. */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    memoryFavorites = readFavorites();
    setFavorites(memoryFavorites);
    setIsLoaded(true);
    const onLocalChange = (event: Event) => setFavorites((event as CustomEvent<string[]>).detail);
    const onStorageChange = (event: StorageEvent) => {
      if (event.key !== null && event.key !== FAVORITES_STORAGE_KEY) return;
      memoryFavorites = readFavorites();
      setFavorites(memoryFavorites);
    };
    window.addEventListener(FAVORITES_CHANGED_EVENT, onLocalChange);
    window.addEventListener('storage', onStorageChange);
    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, onLocalChange);
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  const updateFavorites = useCallback((update: (current: string[]) => string[]) => {
    // Read the latest list before updating so a sibling control cannot overwrite it.
    const next = update(readFavorites());
    memoryFavorites = next;
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Favorites still work for this session when persistence is unavailable.
    }
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT, { detail: next }));
  }, []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);
  const toggleFavorite = useCallback((id: string) => updateFavorites((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]), [updateFavorites]);
  const addFavorite = useCallback((id: string) => updateFavorites((current) => current.includes(id) ? current : [...current, id]), [updateFavorites]);
  const removeFavorite = useCallback((id: string) => updateFavorites((current) => current.filter((value) => value !== id)), [updateFavorites]);
  const clearFavorites = useCallback(() => updateFavorites(() => []), [updateFavorites]);

  return { favorites, isLoaded, isFavorite, toggleFavorite, addFavorite, removeFavorite, clearFavorites, favoritesCount: favorites.length };
}

export default useFavorites;
