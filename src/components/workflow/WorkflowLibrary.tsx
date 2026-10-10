'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { logger } from '@/lib/utils/logger';
import { workflowTemplates } from '@/config/workflow-templates';
import { WorkflowTemplate, SavedWorkflow } from '@/types/workflow';
import { WorkflowHistory } from './WorkflowHistory';
import type { WorkflowExecutionRecord } from '@/types/workflow-history';
import {
    FileStack,
    Clock,
    Star,
    Trash2,
    Download,
    Copy,
    FolderOpen,
    Sparkles,
    Shield,
    Zap,
    RefreshCw,
    PanelRightClose,
    PanelRightOpen
} from 'lucide-react';

interface WorkflowLibraryProps {
    savedWorkflows: SavedWorkflow[];
    onLoadTemplate: (template: WorkflowTemplate) => void;
    onLoadWorkflow: (workflow: SavedWorkflow) => void;
    onDeleteWorkflow: (id: string) => void;
    onDuplicateWorkflow: (id: string) => void;
    onExportWorkflow: (workflow: SavedWorkflow) => void;
    onLoadFromHistory?: (record: WorkflowExecutionRecord) => void;
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
}

type TabType = 'templates' | 'saved' | 'favorites' | 'history';

/**
 * Workflow Library Panel
 * Displays templates and saved workflows
 */
export function WorkflowLibrary({
    savedWorkflows,
    onLoadTemplate,
    onLoadWorkflow,
    onDeleteWorkflow,
    onDuplicateWorkflow,
    onExportWorkflow,
    onLoadFromHistory,
    isCollapsed = false,
    onToggleCollapse,
}: WorkflowLibraryProps) {
    const tWorkflow = useTranslations('workflow');
    const tCommon = useTranslations('common');
    const locale = useLocale();
    const [activeTab, setActiveTab] = useState<TabType>('templates');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Template ID to translation key mapping
    const templateKeyMap: Record<string, string> = {
        'merge-compress': 'mergeCompress',
        'images-to-pdf-watermark': 'imagesToWatermarkedPdf',
        'pdf-to-images-compress': 'pdfToImages',
        'secure-pdf': 'securePdf',
        'document-prep': 'documentPrep',
        'optimize-for-web': 'optimizeForWeb',
        'split-and-watermark': 'splitAndWatermark',
        'office-to-pdf-merge': 'officeToMergedPdf',
        'rotate-and-number': 'rotateAndNumber',
        'print-ready': 'printReady',
        'grayscale-compress': 'grayscaleCompress',
        'extract-and-merge': 'extractAndMerge',
        'confidential-document': 'confidentialDocument',
        'pdf-to-docx-cleanup': 'pdfToEditableDoc',
        'comprehensive-optimization': 'fullOptimization',
        'pdf-to-presentation': 'pdfToPresentation',
        'unlock-and-edit': 'unlockAndEdit',
        'crop-and-resize': 'cropAndResize',
        'ebook-convert': 'ebookConvert',
        'batch-watermark': 'batchWatermark',
        'archive-prep': 'archivePrep',
        'report-assembly': 'reportAssembly',
        'invoice-processing': 'invoiceProcessing',
        'photo-album': 'photoAlbum',
    };

    // Get translated template name
    const getTemplateName = (template: WorkflowTemplate): string => {
        const key = templateKeyMap[template.id];
        if (key) {
            try {
                // Use a safer way to check if translation exists
                const fullKey = `workflowTemplates.${key}.name`;
                const translated = tWorkflow(fullKey);
                // next-intl returns the key itself if translation is missing in some configs
                if (translated && translated !== fullKey && !translated.includes('workflowTemplates.')) {
                    return translated;
                }
            } catch (e) {
                logger.warn(`Translation missing for template name: ${template.id}`);
            }
        }
        return template.name;
    };

    // Get translated template description
    const getTemplateDescription = (template: WorkflowTemplate): string => {
        const key = templateKeyMap[template.id];
        if (key) {
            try {
                const fullKey = `workflowTemplates.${key}.description`;
                const translated = tWorkflow(fullKey);
                if (translated && translated !== fullKey && !translated.includes('workflowTemplates.')) {
                    return translated;
                }
            } catch (e) {
                logger.warn(`Translation missing for template description: ${template.id}`);
            }
        }
        return template.description;
    };

    const tabs = [
        { id: 'templates' as const, label: tWorkflow('templates') || 'Templates', icon: Sparkles },
        { id: 'saved' as const, label: tWorkflow('saved') || 'Saved', icon: FolderOpen },
        { id: 'favorites' as const, label: tWorkflow('favorites') || 'Favorites', icon: Star },
        { id: 'history' as const, label: tWorkflow('history') || 'History', icon: Clock },
    ];

    const templateCategories = [
        { id: 'all', label: tWorkflow('allCategories') || 'All', icon: FileStack },
        { id: 'common', label: tWorkflow('common') || 'Common', icon: Clock },
        { id: 'conversion', label: tWorkflow('conversion') || 'Conversion', icon: RefreshCw },
        { id: 'optimization', label: tWorkflow('optimization') || 'Optimization', icon: Zap },
        { id: 'security', label: tWorkflow('security') || 'Security', icon: Shield },
    ];

    const filteredTemplates = selectedCategory === 'all'
        ? workflowTemplates
        : workflowTemplates.filter(t => t.category === selectedCategory);

    const favoriteWorkflows = savedWorkflows.filter(w => w.isFavorite);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(locale, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const renderSavedWorkflow = (workflow: SavedWorkflow, actions = true) => (
        <Card key={workflow.id} className="relative gap-3 py-4">
            <CardHeader className="px-4">
                <CardTitle><Button variant="ghost" className="h-auto justify-start whitespace-normal px-0 text-start after:absolute after:inset-0" onClick={() => onLoadWorkflow(workflow)}>
                    {workflow.isFavorite && <Star className="size-4" aria-hidden="true" />}{workflow.name}
                </Button></CardTitle>
                {workflow.description && <CardDescription>{workflow.description}</CardDescription>}
                <p className="text-xs text-muted-foreground">{formatDate(workflow.updatedAt)}</p>
            </CardHeader>
            {actions && <CardFooter className="relative z-10 gap-1 px-4">
                <Button variant="ghost" size="icon-sm" aria-label={`${tCommon('buttons.duplicate')}: ${workflow.name}`} onClick={() => onDuplicateWorkflow(workflow.id)}><Copy aria-hidden="true" /></Button>
                <Button variant="ghost" size="icon-sm" aria-label={`${tCommon('buttons.download')}: ${workflow.name}`} onClick={() => onExportWorkflow(workflow)}><Download aria-hidden="true" /></Button>
                <Button variant="ghost" size="icon-sm" aria-label={`${tCommon('buttons.delete')}: ${workflow.name}`} onClick={() => onDeleteWorkflow(workflow.id)}><Trash2 aria-hidden="true" /></Button>
            </CardFooter>}
        </Card>
    );

    if (isCollapsed) return <aside className="flex h-full w-12 shrink-0 flex-col items-center border-s py-2" aria-label={tWorkflow('templates')}>
        <Button variant="ghost" size="icon-sm" onClick={onToggleCollapse} aria-label={tCommon('accessibility.expandSection')}><PanelRightOpen aria-hidden="true" /></Button>
        {tabs.map(({ id, label, icon: Icon }) => <Button key={id} variant="ghost" size="icon-sm" aria-label={label} onClick={() => { setActiveTab(id); onToggleCollapse?.(); }}><Icon aria-hidden="true" /></Button>)}
    </aside>;

    return <Tabs value={activeTab} onValueChange={(value) => { if (value === 'templates' || value === 'saved' || value === 'favorites' || value === 'history') setActiveTab(value); }}
        className="h-full min-h-0 w-80 shrink-0 border-s bg-background" role="complementary" aria-label={tWorkflow('templates')}>
        <div className="flex items-center justify-between border-b px-4 py-2">
            <h2 className="text-sm font-semibold">{tWorkflow('templates')}</h2>
            <Button variant="ghost" size="icon-sm" onClick={onToggleCollapse} aria-label={tCommon('accessibility.collapseSection')}><PanelRightClose aria-hidden="true" /></Button>
        </div>
        <TabsList className="mx-3 grid h-auto w-[calc(100%-1.5rem)] grid-cols-4">
            {tabs.map(({ id, label, icon: Icon }) => <TabsTrigger key={id} value={id} className="flex-col gap-1 whitespace-normal text-xs"><Icon aria-hidden="true" />{label}</TabsTrigger>)}
        </TabsList>
        <div className="min-h-0 flex-1 overflow-y-auto">
            <TabsContent value="templates" className="space-y-4 p-4">
                <div className="flex flex-wrap gap-2" role="group" aria-label={tWorkflow('allCategories')}>
                    {templateCategories.map(({ id, label, icon: Icon }) => <Button key={id} variant={selectedCategory === id ? 'secondary' : 'outline'} size="sm" aria-pressed={selectedCategory === id} onClick={() => setSelectedCategory(id)}><Icon aria-hidden="true" />{label}</Button>)}
                </div>
                <div className="space-y-3">{filteredTemplates.map(template => <Card key={template.id} className="relative gap-3 py-4">
                    <CardHeader className="px-4">
                        <CardTitle><Button variant="ghost" className="h-auto justify-start whitespace-normal px-0 text-start after:absolute after:inset-0" onClick={() => onLoadTemplate(template)}>{getTemplateName(template)}</Button></CardTitle>
                        <CardDescription>{getTemplateDescription(template)}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex-wrap gap-2 px-4"><Badge variant="secondary">{template.nodes.length} {tWorkflow('nodes')}</Badge><Badge variant="secondary">{template.edges.length} {tWorkflow('connections')}</Badge></CardFooter>
                </Card>)}</div>
            </TabsContent>
            <TabsContent value="saved" className="space-y-3 p-4">
                {savedWorkflows.length ? savedWorkflows.map(workflow => renderSavedWorkflow(workflow)) : <Card><CardContent className="space-y-2 text-center"><FolderOpen className="mx-auto size-8 text-muted-foreground" aria-hidden="true" /><p className="text-sm">{tWorkflow('noSavedWorkflows')}</p><p className="text-xs text-muted-foreground">{tWorkflow('saveWorkflowHint')}</p></CardContent></Card>}
            </TabsContent>
            <TabsContent value="favorites" className="space-y-3 p-4">
                {favoriteWorkflows.length ? favoriteWorkflows.map(workflow => renderSavedWorkflow(workflow, false)) : <Card><CardContent className="space-y-2 text-center"><Star className="mx-auto size-8 text-muted-foreground" aria-hidden="true" /><p className="text-sm">{tWorkflow('noFavorites')}</p><p className="text-xs text-muted-foreground">{tWorkflow('favoriteHint')}</p></CardContent></Card>}
            </TabsContent>
            <TabsContent value="history" className="h-full"><WorkflowHistory onLoadFromHistory={onLoadFromHistory} /></TabsContent>
        </div>
    </Tabs>;
}

export default WorkflowLibrary;
