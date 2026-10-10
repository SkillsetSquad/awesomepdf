'use client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardAction } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';


import React, { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
    Clock,
    CheckCircle,
    XCircle,
    Trash2,
    RotateCcw,
    TrendingUp,
    Calendar,
    Timer
} from 'lucide-react';
import { loadExecutionHistory, deleteExecutionRecord, clearExecutionHistory, getExecutionStatistics } from '@/lib/workflow/history';
import type { WorkflowExecutionRecord } from '@/types/workflow-history';
import { logger } from '@/lib/utils/logger';

interface WorkflowHistoryProps {
    onLoadFromHistory?: (record: WorkflowExecutionRecord) => void;
}

/**
 * Workflow Execution History Viewer
 * Displays past workflow executions with details and statistics
 */
export function WorkflowHistory({ onLoadFromHistory }: WorkflowHistoryProps) {
    const tWorkflow = useTranslations('workflow');
    const tCommon = useTranslations('common');
    const locale = useLocale();
    const [confirmation, setConfirmation] = useState<{ kind: 'record'; id: string } | { kind: 'all' } | null>(null);
    const returnFocusRef = useRef<HTMLElement | null>(null);
    const historyHeadingRef = useRef<HTMLHeadingElement>(null);
    const [records, setRecords] = useState<WorkflowExecutionRecord[]>([]);
    const [selectedRecord, setSelectedRecord] = useState<WorkflowExecutionRecord | null>(null);
    const [statistics, setStatistics] = useState<ReturnType<typeof getExecutionStatistics> | null>(null);

    // Load history on mount
    useEffect(() => {
        refreshHistory();
    }, []);

    const refreshHistory = () => {
        const history = loadExecutionHistory();
        setRecords(history);
        setStatistics(getExecutionStatistics());
    };

    const confirmDeletion = () => {
        if (confirmation?.kind === 'record') {
            deleteExecutionRecord(confirmation.id);
            if (selectedRecord?.id === confirmation.id) setSelectedRecord(null);
        } else if (confirmation?.kind === 'all') {
            clearExecutionHistory();
            setSelectedRecord(null);
        }
        refreshHistory();
    };

    const pendingRecord = confirmation?.kind === 'record' ? records.find(record => record.id === confirmation.id) : null;

    const formatDuration = (ms?: number): string => {
        if (!ms) return '-';
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        if (hours > 0) {
            return `${hours}h ${minutes % 60}m`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        } else {
            return `${seconds}s`;
        }
    };

    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat(locale, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-foreground" />;
            case 'failed':
                return <XCircle className="w-5 h-5 text-destructive" />;
            case 'running':
                return <Clock className="w-5 h-5 text-primary animate-spin" />;
            default:
                return <Clock className="w-5 h-5 text-muted-foreground" />;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return tWorkflow('complete') || 'Completed';
            case 'failed':
                return tWorkflow('error') || 'Failed';
            case 'running':
                return tWorkflow('running') || 'Running';
            default:
                return status;
        }
    };

    return (
        <div className="space-y-4 p-4">
            {statistics && <Card className="py-4"><CardContent className="grid grid-cols-3 gap-3 px-4 text-center">
                {[
                    { label: tWorkflow('totalExecutions'), value: statistics.total },
                    { label: tWorkflow('successRate'), value: `${statistics.successRate.toFixed(0)}%` },
                    { label: tWorkflow('avgDuration'), value: formatDuration(statistics.avgDuration) },
                ].map(stat => <div key={stat.label}><p className="text-lg font-semibold tabular-nums">{stat.value}</p><p className="text-xs text-muted-foreground">{stat.label}</p></div>)}
            </CardContent></Card>}
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 ref={historyHeadingRef} tabIndex={-1} className="flex items-center gap-2 text-sm font-semibold"><Clock className="size-4" aria-hidden="true" />{tWorkflow('executionHistory')}<Badge variant="secondary">{records.length}</Badge></h3>
                {!!records.length && <Button variant="ghost" size="sm" onClick={(event) => { returnFocusRef.current = event.currentTarget; setConfirmation({ kind: 'all' }); }}><Trash2 aria-hidden="true" />{tWorkflow('clearAll')}</Button>}
            </div>
            {records.length ? <Accordion type="single" collapsible value={selectedRecord?.id || ''} onValueChange={(value) => setSelectedRecord(records.find(record => record.id === value) || null)} className="space-y-3">
                {records.map(record => <Card key={record.id} className="gap-0 py-4"><AccordionItem value={record.id} className="border-0">
                    <CardHeader className="gap-2 px-4">
                        <AccordionTrigger className="min-w-0 py-0">
                            <span className="flex min-w-0 items-center gap-2">{getStatusIcon(record.status)}<span className="truncate">{record.workflowName || tWorkflow('unnamedWorkflow')}</span></span>
                        </AccordionTrigger>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant={record.status === 'failed' ? 'destructive' : 'secondary'}>{getStatusText(record.status)}</Badge>
                            <span className="flex items-center gap-1"><Calendar className="size-3" aria-hidden="true" />{formatDate(record.startTime)}</span>
                            <span className="flex items-center gap-1"><Timer className="size-3" aria-hidden="true" />{formatDuration(record.duration)}</span>
                            <span>{record.nodes?.length || 0} {tWorkflow('nodes')}</span><span>{record.fileCount || 0} {tWorkflow('filesCount')}</span>
                        </div>
                        <CardAction><Button variant="ghost" size="icon-sm" aria-label={`${tCommon('buttons.delete')}: ${record.workflowName || tWorkflow('unnamedWorkflow')}`}
                            onClick={(event) => { returnFocusRef.current = event.currentTarget; setConfirmation({ kind: 'record', id: record.id }); }}><Trash2 aria-hidden="true" /></Button></CardAction>
                    </CardHeader>
                    <AccordionContent className="space-y-3 px-4 pt-3 pb-0">
                        <div className="flex flex-wrap gap-2"><Badge variant="secondary"><CheckCircle aria-hidden="true" />{record.successfulNodes || 0}/{record.totalNodes || 0} {tWorkflow('nodesSuccess')}</Badge>
                            {(record.totalNodes || 0) > (record.successfulNodes || 0) && <Badge variant="destructive"><XCircle aria-hidden="true" />{(record.totalNodes || 0) - (record.successfulNodes || 0)} {tWorkflow('nodesFailed')}</Badge>}
                        </div>
                        {record.errorMessage && <Alert variant="destructive"><XCircle aria-hidden="true" /><AlertDescription>{record.errorMessage}</AlertDescription></Alert>}
                        <div className="flex flex-wrap gap-2">
                            {onLoadFromHistory && record.nodes && record.edges && <Button variant="outline" size="sm" onClick={() => onLoadFromHistory(record)}><RotateCcw aria-hidden="true" />{tWorkflow('loadWorkflow')}</Button>}
                            <Button variant="ghost" size="sm" onClick={() => { logger.log('Workflow Details:', { nodes: record.nodes || [], edges: record.edges || [], record }); toast.info(tWorkflow('detailsInConsole')); }}><TrendingUp aria-hidden="true" />{tWorkflow('viewDetails')}</Button>
                        </div>
                    </AccordionContent>
                </AccordionItem></Card>)}
            </Accordion> : <Card><CardContent className="space-y-2 text-center"><Clock className="mx-auto size-8 text-muted-foreground" aria-hidden="true" /><p className="text-sm">{tWorkflow('noHistory')}</p><p className="text-xs text-muted-foreground">{tWorkflow('noHistoryHint')}</p></CardContent></Card>}
            <AlertDialog open={!!confirmation} onOpenChange={(open) => { if (!open) setConfirmation(null); }}>
                <AlertDialogContent dir={locale === 'ar' ? 'rtl' : 'ltr'} onCloseAutoFocus={(event) => { event.preventDefault(); (returnFocusRef.current?.isConnected ? returnFocusRef.current : historyHeadingRef.current)?.focus(); }}>
                    <AlertDialogHeader><AlertDialogTitle>{confirmation?.kind === 'all' ? tWorkflow('clearAll') : `${tCommon('buttons.delete')}${pendingRecord ? `: ${pendingRecord.workflowName || tWorkflow('unnamedWorkflow')}` : ''}`}</AlertDialogTitle>
                        <AlertDialogDescription>{confirmation?.kind === 'all' ? tWorkflow('confirmClearAllHistory') : tWorkflow('confirmDelete')}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter><AlertDialogCancel>{tCommon('buttons.cancel')}</AlertDialogCancel><AlertDialogAction variant="destructive" onClick={confirmDeletion}>{tCommon('buttons.delete')}</AlertDialogAction></AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

export default WorkflowHistory;
