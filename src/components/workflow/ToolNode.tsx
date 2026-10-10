'use client';

import React, { memo } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { useLocale, useTranslations } from 'next-intl';
import { ToolNodeData } from '@/types/workflow';
import { getToolContent } from '@/config/tool-content';
import type { Locale } from '@/lib/i18n/config';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardAction, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ToolNodeProps {
    id: string;
    data: ToolNodeData;
    selected?: boolean;
    isConnectable?: boolean;
}

/**
 * Extract an intuitive 1-line parameter summary for the node card
 */
function getNodeSettingsSummary(toolId: string, settings?: Record<string, unknown>): string | null {
    if (!settings || Object.keys(settings).length === 0) {
        if (toolId === 'rotate-pdf') return '旋转: 90° 顺时针';
        if (toolId === 'compress-pdf') return '中等质量 (标准算法)';
        if (toolId === 'split-pdf') return '按单页拆分';
        if (toolId === 'download-pdf') return '保存: output.pdf';
        if (toolId === 'download-zip') return '归档: output.zip';
        return null;
    }

    switch (toolId) {
        case 'rotate-pdf': {
            const angle = settings.angle ?? 90;
            return `旋转: ${angle}°`;
        }
        case 'add-watermark': {
            const isImage = settings.watermarkType === 'image';
            const isRepeat = Boolean(settings.repeat);
            if (isImage) {
                return `图片水印${isRepeat ? ' (平铺)' : ''}`;
            }
            const text = String(settings.text || 'CONFIDENTIAL');
            return `${isRepeat ? '平铺水印: ' : '水印: '}"${text}"`;
        }
        case 'compress-pdf': {
            const quality = String(settings.quality || 'medium');
            const qualityMap: Record<string, string> = { low: '低体积', medium: '中等质量', high: '高质量', maximum: '极佳质量' };
            const algo = String(settings.algorithm || 'standard');
            return `${qualityMap[quality] || quality} (${algo})`;
        }
        case 'split-pdf': {
            const mode = String(settings.splitMode || 'every-page');
            if (mode === 'every-n-pages') {
                return `每 ${settings.pagesPerSplit || 1} 页拆分`;
            }
            if (mode === 'ranges' && settings.pageRanges) {
                return `范围: ${settings.pageRanges}`;
            }
            return '单页拆分';
        }
        case 'page-numbers': {
            const pos = String(settings.position || 'bottom-center');
            const posMap: Record<string, string> = {
                'top-left': '左上', 'top-center': '顶部居中', 'top-right': '右上',
                'bottom-left': '左下', 'bottom-center': '底部居中', 'bottom-right': '右下'
            };
            return `页码: ${posMap[pos] || pos} (第${settings.startNumber || 1}页起)`;
        }
        case 'download-pdf': {
            return `保存: ${settings.filename || 'output.pdf'}`;
        }
        case 'download-zip': {
            return `ZIP: ${settings.filename || 'output.zip'}`;
        }
        case 'djvu-to-pdf': {
            const dpi = settings.dpi || 150;
            return `DPI: ${dpi}`;
        }
        case 'condition-gateway': {
            const type = String(settings.conditionType || 'file-count');
            const op = String(settings.operator || 'greater-than');
            const opMap: Record<string, string> = {
                'greater-than': '>', 'less-than': '<', 'equals': '=',
                'not-equals': '!=', 'contains': '包含', 'ends-with': '结尾为'
            };
            const typeMap: Record<string, string> = {
                'file-count': '文件数', 'file-size': '大小', 'file-format': '格式'
            };
            return `${typeMap[type] || type} ${opMap[op] || op} ${settings.value ?? 1}${type === 'file-size' ? (settings.sizeUnit || 'MB') : ''}`;
        }
        case 'n-up-pdf': {
            return `${settings.pagesPerSheet || 4} 拼一版 (${settings.pageSize || 'A4'})`;
        }
        case 'extract-pages':
        case 'delete-pages': {
            return `页码: ${settings.pageRange || '1'}`;
        }
        case 'ocr-pdf': {
            return `OCR: ${settings.language || settings.languages || 'eng'}`;
        }
        case 'encrypt-pdf': {
            return settings.userPassword ? '设置密码保护' : '加密安全';
        }
        case 'flatten-pdf': {
            return '扁平化表单与注释';
        }
        case 'table-of-contents': {
            return `目录: "${settings.title || 'Table of Contents'}"`;
        }
        case 'header-footer': {
            const parts = [];
            if (settings.headerText) parts.push(`眉: "${settings.headerText}"`);
            if (settings.footerText) parts.push(`脚: "${settings.footerText}"`);
            return parts.join(' | ') || '页眉页脚';
        }
        case 'background-color': {
            return `背景色: ${settings.color || '#FFFFFF'}`;
        }
        case 'text-color': {
            return `文字色: ${settings.color || '#000000'}`;
        }
        default: {
            if (settings.filename) return `${settings.filename}`;
            if (settings.quality) return `质量: ${settings.quality}`;
            if (settings.color) return `颜色: ${settings.color}`;
            return null;
        }
    }
}

const ToolNode = memo(({ id, data, selected = false, isConnectable = true }: ToolNodeProps) => {
    const { deleteElements } = useReactFlow();
    const tCommon = useTranslations('common');
    const tWorkflow = useTranslations('workflow');
    const tCategories = useTranslations('home.categories');
    const locale = useLocale() as Locale;
    const iconName = data.icon.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>>)[iconName] || LucideIcons.FileText;
    const label = data.customTitle || getToolContent(locale, data.toolId)?.title || data.label;
    const categoryKey = data.category.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    const category = tCategories.has(categoryKey) ? tCategories(categoryKey) : tWorkflow(data.category === 'flow-control' ? 'flowControl' : 'outputCategory');
    const settingsSummary = getNodeSettingsSummary(data.toolId, data.settings);
    const outputs = data.outputFiles || [];
    const statusIcon = data.status === 'processing' ? LucideIcons.Loader2 : data.status === 'complete' ? LucideIcons.CheckCircle2 : data.status === 'error' ? LucideIcons.CircleAlert : LucideIcons.Circle;
    const StatusIcon = statusIcon;

    return <Card className={`relative w-72 gap-3 py-4 ${selected ? 'ring-2 ring-ring ring-offset-2 ring-offset-background' : ''} ${data.status === 'skipped' ? 'border-dashed' : ''}`}>
        <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="!size-3 !border-2 !border-background !bg-primary" title={data.acceptedFormats.join(', ')} />
        <CardHeader className="gap-2 px-4">
            <div className="flex flex-wrap gap-2"><Badge variant="secondary">{category}</Badge><Badge variant={data.status === 'error' ? 'destructive' : 'outline'}><StatusIcon aria-hidden={true} className={data.status === 'processing' ? 'animate-spin' : ''} />{tCommon(`status.${data.status}`)}</Badge></div>
            <CardTitle className="flex items-center gap-2 text-sm"><Icon className="size-4 shrink-0" aria-hidden={true} /><span className="min-w-0 break-words">{label}</span></CardTitle>
            <CardAction><Button variant="ghost" size="icon-sm" className="nodrag nopan" aria-label={`${tCommon('buttons.delete')}: ${label}`} onClick={event => { event.stopPropagation(); deleteElements({ nodes: [{ id }] }); }}><LucideIcons.X aria-hidden="true" /></Button></CardAction>
        </CardHeader>
        {(settingsSummary || data.status === 'processing' || data.error || outputs.length > 0) && <CardContent className="space-y-3 px-4">
            {settingsSummary && <p className="break-words text-xs text-muted-foreground">{settingsSummary}</p>}
            {data.status === 'processing' && <Progress value={Math.max(0, Math.min(100, data.progress))} aria-label={`${label}: ${tCommon('status.processing')}`} />}
            {data.status === 'error' && data.error && <Alert variant="destructive"><LucideIcons.CircleAlert aria-hidden="true" /><AlertDescription className="break-words">{data.error}</AlertDescription></Alert>}
            {data.status === 'complete' && outputs.length > 0 && <div className="nodrag nopan flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{outputs.length} {tWorkflow('filesCount')}</Badge>
                <Button variant="outline" size="sm" onClick={event => {
                    event.stopPropagation();
                    const first = outputs[0];
                    const url = URL.createObjectURL(first instanceof Blob ? first : first.blob);
                    window.open(url, '_blank');
                    setTimeout(() => URL.revokeObjectURL(url), 60000);
                }}><LucideIcons.Eye aria-hidden="true" />{tWorkflow('preview')}</Button>
                {['download-pdf', 'download-zip'].includes(data.toolId) && <Button size="sm" onClick={event => {
                    event.stopPropagation();
                    outputs.forEach((file, index) => {
                        const blob = file instanceof Blob ? file : file.blob;
                        const originalName = file instanceof Blob ? undefined : file.filename;
                        const extension = data.toolId === 'download-zip' ? 'zip' : 'pdf';
                        const url = URL.createObjectURL(blob);
                        const anchor = document.createElement('a');
                        anchor.href = url;
                        anchor.download = originalName || (data.settings?.filename as string) || `workflow-output-${index + 1}.${extension}`;
                        document.body.appendChild(anchor);
                        anchor.click();
                        anchor.remove();
                        setTimeout(() => URL.revokeObjectURL(url), 5000);
                    });
                }}><LucideIcons.Download aria-hidden="true" />{tCommon('buttons.download')}</Button>}
            </div>}
        </CardContent>}
        <CardFooter className="justify-between gap-2 px-4 text-xs text-muted-foreground"><span className="min-w-0 truncate" title={data.acceptedFormats.join(', ')}>{data.acceptedFormats.slice(0, 1).join(', ') || '*'}</span><LucideIcons.ArrowRight className="size-3 shrink-0" aria-hidden="true" /><span className="min-w-0 truncate">{data.outputFormat || '*'}</span></CardFooter>
        <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="!size-3 !border-2 !border-background !bg-primary" title={data.outputFormat} />
    </Card>;
});

ToolNode.displayName = 'ToolNode';
export default ToolNode;
