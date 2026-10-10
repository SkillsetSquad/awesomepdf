'use client';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';


import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { tools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { ToolNodeData } from '@/types/workflow';
import * as LucideIcons from 'lucide-react';
import { Search, GripVertical, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';
import { WORKFLOW_TOOL_DROP_EVENT } from './dragEvents';

interface ToolSidebarProps {
    onDragStart: (event: React.DragEvent, nodeData: ToolNodeData) => void;
    onDragEnd?: () => void;
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    onToolAdded?: () => void;
}

interface CategoryGroup {
    id: string;
    name: string;
    icon: string;
    tools: typeof tools;
}

interface PointerDragState {
    pointerId: number;
    nodeData: ToolNodeData;
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
    hasMoved: boolean;
}

/**
 * Tool Sidebar for the workflow editor
 * Displays available tools grouped by category
 */
export function ToolSidebar({
    onDragStart,
    onDragEnd,
    isCollapsed = false,
    onToggleCollapse,
    onToolAdded,
}: ToolSidebarProps) {
    const tWorkflow = useTranslations('workflow');
    const locale = useLocale() as Locale;

    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
        new Set(['input', 'flow-control', 'organize-manage', 'convert-to-pdf', 'output'])
    );
    const pointerDragRef = useRef<PointerDragState | null>(null);

    // Format tool ID to human readable name
    const formatToolId = (id: string): string => {
        return id
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Helper function to get tool name with fallback using getToolContent
    const getToolName = (toolId: string): string => {
        if (toolId === 'pdf-input') {
            return tWorkflow('pdfInput') || (locale === 'zh' ? 'PDF 输入源 (PDF Input)' : 'PDF Input');
        }
        if (toolId === 'image-input') {
            return tWorkflow('imageInput') || (locale === 'zh' ? '图片输入源 (Image Input)' : 'Image Input');
        }
        if (toolId === 'file-input') {
            return tWorkflow('fileInput') || (locale === 'zh' ? '通用文件输入 (File Input)' : 'File Input');
        }
        if (toolId === 'condition-gateway') {
            return tWorkflow('conditionGateway') || (locale === 'zh' ? '条件分支 (Condition Gateway)' : 'Condition Gateway');
        }
        if (toolId === 'download-pdf') {
            return tWorkflow('downloadPdf') || (locale === 'zh' ? '下载 PDF (Download PDF)' : 'Download PDF');
        }
        if (toolId === 'download-zip') {
            return tWorkflow('downloadZip') || (locale === 'zh' ? '打包 ZIP 下载 (Download ZIP)' : 'Download ZIP');
        }
        const content = getToolContent(locale, toolId);
        if (content && content.title) {
            return content.title;
        }
        return formatToolId(toolId);
    };

    // Group tools by category
    const categories: CategoryGroup[] = useMemo(() => {
        const categoryMap: Record<string, typeof tools> = {};

        // Input source nodes (inspired by BentoPDF)
        const inputTools: typeof tools = [
            {
                id: 'pdf-input',
                slug: 'pdf-input',
                icon: 'file-text',
                category: 'input' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['.pdf'],
                outputFormat: 'pdf',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['input', 'pdf-source'],
                relatedTools: [],
            },
            {
                id: 'image-input',
                slug: 'image-input',
                icon: 'images',
                category: 'input' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.tif', '.svg', '.heic'],
                outputFormat: 'image',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['input', 'image-source'],
                relatedTools: [],
            },
            {
                id: 'file-input',
                slug: 'file-input',
                icon: 'folder-input',
                category: 'input' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['*'],
                outputFormat: '*',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['input', 'file-source'],
                relatedTools: [],
            },
        ];
        categoryMap['input'] = inputTools;

        // Flow control gateway node
        const flowControlTools: typeof tools = [
            {
                id: 'condition-gateway',
                slug: 'condition-gateway',
                icon: 'git-fork',
                category: 'flow-control' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['*'],
                outputFormat: '*',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['conditional-branching', 'file-count', 'file-size', 'file-format'],
                relatedTools: [],
            },
        ];
        categoryMap['flow-control'] = flowControlTools;

        // Output and export terminal nodes
        const outputTools: typeof tools = [
            {
                id: 'download-pdf',
                slug: 'download-pdf',
                icon: 'file-down',
                category: 'output' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['.pdf'],
                outputFormat: '.pdf',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['download', 'rename'],
                relatedTools: [],
            },
            {
                id: 'download-zip',
                slug: 'download-zip',
                icon: 'archive',
                category: 'output' as unknown as typeof tools[0]['category'],
                acceptedFormats: ['*'],
                outputFormat: '.zip',
                maxFileSize: Infinity,
                maxFiles: 100,
                features: ['zip', 'archive'],
                relatedTools: [],
            },
        ];
        categoryMap['output'] = outputTools;

        // Tools that require interactive UI and should be excluded from workflow
        const interactiveToolsBlacklist = new Set([
            'pdf-multi-tool',    // Interactive multi-tool
            'edit-pdf',          // Canvas editor required
            'sign-pdf',          // Signature drawing required
            'crop-pdf',          // Visual crop selection required
            'bookmark',          // Bookmark editing required
            'add-stamps',        // Position interaction required
            'form-filler',       // Form field interaction required
            'form-creator',      // Form design required
            'rotate-custom',     // Per-page rotation settings required
            'view-metadata',     // Read-only viewer tool
            'compare-pdfs',      // Visual comparison interface required
            'add-attachments',   // File selection for attachments required
            'edit-attachments',  // Attachment management interaction required
            'page-dimensions',   // Analysis only, no PDF output
            'validate-signature', // Read-only signature verification, no PDF output
        ]);

        tools
            .filter(tool => !interactiveToolsBlacklist.has(tool.id))
            .forEach(tool => {
                if (!categoryMap[tool.category]) {
                    categoryMap[tool.category] = [];
                }
                categoryMap[tool.category].push(tool);
            });

        const categoryOrder = [
            'input',
            'flow-control',
            'organize-manage',
            'edit-annotate',
            'convert-to-pdf',
            'convert-from-pdf',
            'optimize-repair',
            'secure-pdf',
            'output',
        ];

        const categoryNames: Record<string, string> = {
            'input': tWorkflow('inputCategory') || (locale === 'zh' ? '输入源' : 'Input Sources'),
            'flow-control': tWorkflow('flowControl') || (locale === 'zh' ? '流程控制' : 'Flow Control'),
            'organize-manage': locale === 'zh' ? '文档组织' : 'Organize & Manage',
            'edit-annotate': locale === 'zh' ? '编辑与标注' : 'Edit & Annotate',
            'convert-to-pdf': locale === 'zh' ? '转换为 PDF' : 'Convert to PDF',
            'convert-from-pdf': locale === 'zh' ? '从 PDF 导出' : 'Convert from PDF',
            'optimize-repair': locale === 'zh' ? '压缩与优化' : 'Optimize & Repair',
            'secure-pdf': locale === 'zh' ? '安全与隐私' : 'Security & Privacy',
            'output': tWorkflow('outputCategory') || (locale === 'zh' ? '输出与交付' : 'Output & Export'),
        };

        const categoryIcons: Record<string, string> = {
            'input': 'upload',
            'flow-control': 'git-fork',
            'organize-manage': 'files',
            'edit-annotate': 'pencil',
            'convert-to-pdf': 'file-up',
            'convert-from-pdf': 'file-down',
            'optimize-repair': 'zap',
            'secure-pdf': 'shield',
            'output': 'download',
        };

        return categoryOrder
            .filter(cat => categoryMap[cat])
            .map(cat => ({
                id: cat,
                name: categoryNames[cat],
                icon: categoryIcons[cat],
                tools: categoryMap[cat],
            }));
    }, [locale]);

    // Filter tools based on search query
    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categories;

        const query = searchQuery.toLowerCase();
        return categories
            .map(cat => ({
                ...cat,
                tools: cat.tools.filter(tool => {
                    const translatedName = getToolName(tool.id);
                    return (
                        tool.id.toLowerCase().includes(query) ||
                        translatedName.toLowerCase().includes(query)
                    );
                }),
            }))
            .filter(cat => cat.tools.length > 0);
    }, [categories, searchQuery]);

    const handleDragStart = (e: React.DragEvent, tool: typeof tools[0]) => {
        // Cancel pointer fallback drag since native HTML5 drag-and-drop has taken over
        pointerDragRef.current = null;
        onDragStart(e, createNodeData(tool));
    };

    const createNodeData = (tool: typeof tools[0]): ToolNodeData => ({
        toolId: tool.id,
        label: getToolName(tool.id),
        icon: tool.icon,
        category: tool.category,
        acceptedFormats: tool.acceptedFormats,
        outputFormat: tool.outputFormat,
        status: 'idle',
        progress: 0,
        settings: tool.id === 'condition-gateway' ? {
            conditionType: 'file-count',
            operator: 'greater-than',
            value: 1,
            sizeUnit: 'MB',
        } : tool.id === 'download-pdf' ? {
            filename: 'output.pdf',
        } : tool.id === 'download-zip' ? {
            filename: 'output.zip',
        } : {},
    });

    const handlePointerDown = (e: React.PointerEvent, tool: typeof tools[0]) => {
        if (e.button !== 0) return;

        pointerDragRef.current = {
            pointerId: e.pointerId,
            nodeData: createNodeData(tool),
            startX: e.clientX,
            startY: e.clientY,
            lastX: e.clientX,
            lastY: e.clientY,
            hasMoved: false,
        };
    };

    /**
     * Double-click adds the tool to the canvas center.
     * Dispatches the same event used by pointer-based fallback drops so that
     * WorkflowEditor places the node at the resolved screen coordinates.
     */
    const handleDoubleClick = (tool: typeof tools[0]) => {
        // Cancel any in-flight pointer drag intent so it does not race with the dblclick.
        pointerDragRef.current = null;

        const flowEl =
            (typeof document !== 'undefined'
                ? (document.querySelector('.react-flow') as HTMLElement | null)
                : null);

        let clientX: number;
        let clientY: number;
        if (flowEl) {
            const rect = flowEl.getBoundingClientRect();
            // Add a small random offset so consecutive double-clicks do not
            // perfectly stack the new nodes on top of each other.
            const jitter = () => (Math.random() - 0.5) * 80;
            clientX = rect.left + rect.width / 2 + jitter();
            clientY = rect.top + rect.height / 2 + jitter();
        } else if (typeof window !== 'undefined') {
            clientX = window.innerWidth / 2;
            clientY = window.innerHeight / 2;
        } else {
            return;
        }

        window.dispatchEvent(new CustomEvent(WORKFLOW_TOOL_DROP_EVENT, {
            detail: {
                nodeData: createNodeData(tool),
                clientX,
                clientY,
            },
        }));
        onToolAdded?.();
    };

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            const dragState = pointerDragRef.current;
            if (!dragState || dragState.pointerId !== event.pointerId) return;

            dragState.lastX = event.clientX;
            dragState.lastY = event.clientY;
            if (
                Math.abs(event.clientX - dragState.startX) > 6 ||
                Math.abs(event.clientY - dragState.startY) > 6
            ) {
                dragState.hasMoved = true;
            }
        };

        const handlePointerUp = (event: PointerEvent) => {
            const dragState = pointerDragRef.current;
            if (!dragState || dragState.pointerId !== event.pointerId) return;

            pointerDragRef.current = null;
            if (!dragState.hasMoved) return;

            window.dispatchEvent(new CustomEvent(WORKFLOW_TOOL_DROP_EVENT, {
                detail: {
                    nodeData: dragState.nodeData,
                    clientX: event.clientX || dragState.lastX,
                    clientY: event.clientY || dragState.lastY,
                },
            }));
        };

        const handlePointerCancel = (event: PointerEvent) => {
            const dragState = pointerDragRef.current;
            if (dragState && dragState.pointerId === event.pointerId) {
                pointerDragRef.current = null;
            }
        };

        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        window.addEventListener('pointercancel', handlePointerCancel);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointercancel', handlePointerCancel);
        };
    }, []);

    // Get icon component dynamically
    const getIcon = (iconName: string) => {
        const pascalName = iconName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (LucideIcons as any)[pascalName] || LucideIcons.FileText;
    };

    // Collapsed view
    if (isCollapsed) {
        return (
            <div className="w-12 h-full bg-background border-r border-border flex flex-col items-center py-2">
                <Button variant="ghost" size="icon-sm" aria-label={tWorkflow('toolbox') || 'Toolbox'}
                    onClick={onToggleCollapse}
                    className="mb-2"
                    title={tWorkflow('toolbox') || 'Toolbox'}
                >
                    <PanelLeftOpen className="w-5 h-5 text-primary" />
                </Button>
                <div className="w-8 h-px bg-border mb-2" />
                {/* Show category icons when collapsed */}
                {categories.slice(0, 6).map(category => {
                    const CategoryIcon = getIcon(category.icon);
                    return (
                        <Button variant="ghost" size="icon-sm" aria-label={category.name}
                            key={category.id}
                            onClick={onToggleCollapse}
                            className="mb-1"
                            title={category.name}
                        >
                            <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                        </Button>
                    );
                })}
            </div>
        );
    }

    return (
        <aside className="flex h-full w-72 shrink-0 flex-col border-e bg-background" aria-label={tWorkflow('toolbox')}>
            <div className="flex items-start justify-between gap-2 border-b p-4">
                <div><h2 className="font-semibold">{tWorkflow('toolbox')}</h2><p className="mt-1 text-xs text-muted-foreground">{tWorkflow('dragToAdd')}</p></div>
                <Button variant="ghost" size="icon-sm" onClick={onToggleCollapse} aria-label={tWorkflow('toolbox')}><PanelLeftClose aria-hidden="true" /></Button>
            </div>
            <div className="border-b p-3"><div className="relative">
                <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input aria-label={tWorkflow('searchTools')} placeholder={tWorkflow('searchTools')} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="ps-9" />
            </div></div>
            <Accordion type="multiple" value={Array.from(expandedCategories)} onValueChange={(values) => setExpandedCategories(new Set(values))} className="min-h-0 flex-1 overflow-y-auto">
                {filteredCategories.map(category => {
                    const CategoryIcon = getIcon(category.icon);
                    return <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger className="px-3 py-3"><span className="flex min-w-0 flex-1 items-center gap-2"><CategoryIcon className="size-4 shrink-0" aria-hidden="true" /><span>{category.name}</span><Badge variant="secondary" className="ms-auto">{category.tools.length}</Badge></span></AccordionTrigger>
                        <AccordionContent className="px-2 pb-2">
                            {category.tools.map(tool => {
                                const ToolIcon = getIcon(tool.icon);
                                const toolName = getToolName(tool.id);
                                return <Button key={tool.id} variant="ghost" size="sm" draggable
                                    onDragStart={(event) => handleDragStart(event, tool)} onDragEnd={onDragEnd}
                                    onPointerDown={(event) => handlePointerDown(event, tool)} onDoubleClick={() => handleDoubleClick(tool)}
                                    onClick={(event) => { if (event.detail === 0) handleDoubleClick(tool); }}
                                    title={`${toolName} — ${tWorkflow('addToWorkflowHint')}`}
                                    className="group w-full cursor-grab justify-start select-none active:cursor-grabbing">
                                    <GripVertical className="size-3 text-muted-foreground" aria-hidden="true" /><ToolIcon aria-hidden="true" /><span className="truncate">{toolName}</span>
                                </Button>;
                            })}
                        </AccordionContent>
                    </AccordionItem>;
                })}
            </Accordion>
            <p className="border-t p-3 text-center text-xs text-muted-foreground">{tools.length} {tWorkflow('toolsAvailable')}</p>
        </aside>
    );
}

export default ToolSidebar;
