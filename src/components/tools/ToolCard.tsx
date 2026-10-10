'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Tool, ToolCategory } from '@/types/tool';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export interface ToolCardProps {
  /** Tool data to display */
  tool: Tool;
  /** Current locale for URL generation */
  locale: string;
  /** Optional additional CSS classes */
  className?: string;
  /** Localized content */
  localizedContent?: { title: string; description: string };
}

const categoryTranslationKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate',
  'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf',
  'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair',
  'secure-pdf': 'securePdf',
};

/**
 * ToolCard component displays a single PDF tool with icon, name, and description.
 * Includes hover effects and links to the tool page.
 */
export function ToolCard({ tool, locale, className = '', localizedContent }: ToolCardProps) {
  const t = useTranslations();
  const toolUrl = `/${locale}/tools/${tool.slug}`;

  // Get a human-readable name from the tool ID
  // Use localized title if available, otherwise fallback to formatting the ID
  const toolName = localizedContent?.title || tool.id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate a description from features
  // Use localized description (metaDescription) if available
  const description = localizedContent?.description || tool.features
    .slice(0, 3)
    .map(f => f.replace(/-/g, ' '))
    .join(', ');

  const IconComponent = getToolIcon(tool.icon);

  const categoryName = t(`home.categories.${categoryTranslationKeys[tool.category]}`);

  return (
    <Card className={`relative h-full ${className}`} data-testid="tool-card-container">
      <CardHeader>
        <div className="text-primary" data-testid="tool-card-icon" aria-hidden="true"><IconComponent className="size-5" data-icon={tool.icon} /></div>
        <CardAction className="relative z-10"><FavoriteButton toolId={tool.id} toolName={toolName} size="sm" /></CardAction>
        <CardTitle className="pt-2 leading-snug"><h3 data-testid="tool-card-name">
          <Link href={toolUrl} data-testid="tool-card" className="after:absolute after:inset-0 after:rounded-xl hover:underline focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring">{toolName}</Link>
        </h3></CardTitle>
        <CardDescription className="line-clamp-3" data-testid="tool-card-description">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto"><Badge variant="secondary" className="whitespace-normal">{categoryName}</Badge></CardFooter>
    </Card>
  );
}

export default ToolCard;
