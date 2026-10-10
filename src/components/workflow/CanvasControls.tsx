'use client';

import { Panel, useReactFlow, useStore, useStoreApi } from 'reactflow';
import { useTranslations } from 'next-intl';
import { Plus, Minus, Maximize, Lock, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function CanvasControls() {
    const t = useTranslations('common.canvas');
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    const store = useStoreApi();
    const interactive = useStore((state) => state.nodesDraggable || state.nodesConnectable || state.elementsSelectable);
    const atMinZoom = useStore((state) => state.transform[2] <= state.minZoom);
    const atMaxZoom = useStore((state) => state.transform[2] >= state.maxZoom);
    const actions = [
        { key: 'zoomIn', icon: Plus, disabled: atMaxZoom, run: () => zoomIn() },
        { key: 'zoomOut', icon: Minus, disabled: atMinZoom, run: () => zoomOut() },
        { key: 'fitView', icon: Maximize, run: () => fitView() },
        { key: 'toggleEditing', icon: interactive ? Unlock : Lock, pressed: interactive, run: () => store.setState({
            nodesDraggable: !interactive, nodesConnectable: !interactive, elementsSelectable: !interactive,
        }) },
    ] as const;
    return <Panel position="bottom-left">
        <div className="flex flex-col gap-1 rounded-md border bg-card p-1">
            {actions.map((action) => <Tooltip key={action.key}><TooltipTrigger asChild>
                <Button variant="ghost" size="icon-sm" disabled={'disabled' in action ? action.disabled : undefined}
                    aria-pressed={'pressed' in action ? action.pressed : undefined} aria-label={t(action.key)} onClick={action.run}>
                    <action.icon aria-hidden="true" />
                </Button>
            </TooltipTrigger><TooltipContent side="right">{t(action.key)}</TooltipContent></Tooltip>)}
        </div>
    </Panel>;
}
