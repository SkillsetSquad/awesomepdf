'use client';

import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFavorites } from '@/hooks/useFavorites';
import { Button, type ButtonSize } from '@/components/ui/button';

export interface FavoriteButtonProps {
  toolId: string;
  toolName?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  onToggle?: (isFavorite: boolean) => void;
}

export function FavoriteButton({ toolId, toolName, className, size = 'md', showLabel = false, onToggle }: FavoriteButtonProps) {
  const t = useTranslations('tools.favorite');
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const favorite = isFavorite(toolId);
  const label = favorite ? t('remove') : t('add');
  const buttonSize: ButtonSize = showLabel ? ({ sm: 'sm', md: 'default', lg: 'lg' } as const)[size] : ({ sm: 'icon-sm', md: 'icon', lg: 'icon-lg' } as const)[size];

  return <Button variant={favorite ? 'secondary' : 'ghost'} size={buttonSize} className={className} disabled={!isLoaded} aria-label={toolName ? `${label}: ${toolName}` : label} aria-pressed={favorite} onClick={() => {
    toggleFavorite(toolId);
    onToggle?.(!favorite);
  }}>
    <Star className={favorite ? 'fill-current' : undefined} aria-hidden="true" />
    {showLabel && (favorite ? t('saved') : t('add'))}
  </Button>;
}

export default FavoriteButton;
