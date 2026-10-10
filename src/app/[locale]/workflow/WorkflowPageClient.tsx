'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { Loader2 } from 'lucide-react';

function WorkflowLoading() {
    const t = useTranslations('common');
    return <div className="flex h-full items-center justify-center gap-3" role="status">
        <Loader2 className="size-6 animate-spin" aria-hidden="true" />{t('status.loading')}
    </div>;
}

// ReactFlow requires browser APIs; only the editor is loaded on the client.
const WorkflowEditor = dynamic(
    () => import('@/components/workflow/WorkflowEditor').then(mod => mod.WorkflowEditor),
    { ssr: false, loading: WorkflowLoading }
);

export default function WorkflowPageClient() {
    return <WorkflowEditor />;
}
