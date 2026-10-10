/**
 * SavedProjectsPanel Component
 * Requirements: 10.2
 *
 * Displays saved projects and allows resuming interrupted operations
 */

'use client';

import React, { useCallback, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FolderOpen, Trash2, Play, Pause, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useProjectStorage } from '@/lib/hooks/useProjectStorage';
import { formatDate } from '@/lib/storage/recent-files';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardAction, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { type Locale } from '@/lib/i18n/config';

export interface SavedProjectsPanelProps {
  locale: Locale;
  toolId?: string;
  translations: {
    title: string;
    empty: string;
    clearAll: string;
    resume: string;
    delete: string;
    inProgress: string;
    paused: string;
    completed: string;
    progress: string;
    files: string;
  };
  onResumeProject?: (projectId: string) => void;
}

const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case 'in_progress':
      return <Clock className="h-4 w-4 text-primary" aria-hidden="true" />;
    case 'paused':
      return <Pause className="h-4 w-4 text-muted-foreground" aria-hidden="true" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-foreground" aria-hidden="true" />;
    default:
      return <AlertCircle className="h-4 w-4 text-muted-foreground" aria-hidden="true" />;
  }
};

export const SavedProjectsPanel: React.FC<SavedProjectsPanelProps> = ({
  locale,
  toolId,
  translations,
  onResumeProject,
}) => {
  const { projects, isLoading, isAvailable, removeProject, clearProjects } = useProjectStorage();
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Focus item when focusedIndex changes
  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      const firstFocusable = itemRefs.current[focusedIndex]?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      firstFocusable?.focus();
    }
  }, [focusedIndex]);

  const handleItemKeyDown = useCallback((event: React.KeyboardEvent, index: number, totalItems: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(index < totalItems - 1 ? index + 1 : 0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(index > 0 ? index - 1 : totalItems - 1);
        break;
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedIndex(totalItems - 1);
        break;
    }
  }, []);

  if (!isAvailable) {
    return null;
  }

  if (isLoading) {
    return (
      <Card><CardContent className="space-y-3" aria-busy="true" aria-label={translations.title}>
        <Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-5/6" />
      </CardContent></Card>
    );
  }

  // Filter projects by tool if toolId is provided
  const filteredProjects = toolId
    ? projects.filter((p) => p.toolId === toolId)
    : projects;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'in_progress':
        return translations.inProgress;
      case 'paused':
        return translations.paused;
      case 'completed':
        return translations.completed;
      default:
        return status;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><FolderOpen className="size-5" aria-hidden="true" />{translations.title}</CardTitle>
        {filteredProjects.length > 0 && <CardAction><Button variant="ghost" size="sm" onClick={() => clearProjects()}>
          <Trash2 aria-hidden="true" />{translations.clearAll}
        </Button></CardAction>}
      </CardHeader>
      <CardContent>
      {/* Content */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-6 text-sm text-muted-foreground">
          <FolderOpen className="h-8 w-8 mx-auto mb-2 opacity-50" aria-hidden="true" />
          {translations.empty}
        </div>
      ) : (
        <ul className="space-y-3" role="list" aria-label={translations.title}>
          {filteredProjects.map((project, index) => (
            <li
              key={project.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="rounded-md border p-3"
              onKeyDown={(e) => handleItemKeyDown(e, index, filteredProjects.length)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <StatusIcon status={project.status} />
                    <span className="text-sm font-medium text-foreground truncate">
                      {project.name}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{getStatusLabel(project.status)}</Badge>
                    <span>•</span>
                    <span>{formatDate(project.updatedAt)}</span>
                    {project.fileMetadata.length > 0 && (
                      <>
                        <span>•</span>
                        <span>{project.fileMetadata.length} {translations.files}</span>
                      </>
                    )}
                  </div>

                  {project.progress > 0 && project.progress < 100 && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span>{translations.progress}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} aria-label={`${translations.progress}: ${project.name}`} />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {project.status !== 'completed' && (
                    <Button asChild variant="ghost" size="icon-sm">
                      <Link href={`/${locale}/tools/${project.toolId}`} onClick={() => onResumeProject?.(project.id)} aria-label={translations.resume}>
                        <Play aria-hidden="true" />
                      </Link>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => removeProject(project.id)}
                    aria-label={translations.delete}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      </CardContent>
    </Card>
  );
};

export default SavedProjectsPanel;
