'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';


import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowInstance
} from 'reactflow';
import 'reactflow/dist/style.css';

import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Badge } from '@/components/ui/badge';
import { injectFormLogic, FormLogicRule } from '@/lib/pdf/processors/form-logic-designer';
import { loadPdfLib } from '@/lib/pdf/loader';
import {
  Workflow,
  Sparkles,
  Plus,
  Trash2,
  Settings2, Minus, Maximize
} from 'lucide-react';

// The field canvas uses the same surface, border and text tokens as application controls.
const fieldNodeStyle: React.CSSProperties = {
  background: 'var(--card)', border: '1px solid var(--border)',
  borderRadius: 'var(--radius)', color: 'var(--card-foreground)',
  padding: '12px', fontSize: '14px', minWidth: '150px', textAlign: 'start',
};

export function FormLogicDesignerTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.formLogicDesigner');

  const [file, setFile] = useState<File | null>(null);
  
  // React Flow state
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Available AcroForm fields extracted
  const [detectedFields, setDetectedFields] = useState<{name: string, type: string}[]>([]);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingFields, setIsLoadingFields] = useState(false);
  const [sourceField, setSourceField] = useState('');
  const [targetField, setTargetField] = useState('');
  const currentRun = useRef(0);
  const flow = useRef<ReactFlowInstance | null>(null);
  useEffect(() => () => { currentRun.current++; }, []);
  const busy = isLoadingFields || status === 'processing';
  const clearOutput = () => { currentRun.current++; setResult(null); setStatus('idle'); setError(null); };

  // Extract fields on upload
  const handleUpload = async (uploadedFiles: File[]) => {
    if (uploadedFiles.length > 0) {
      const selectedFile = uploadedFiles[0];
      const run = ++currentRun.current;
      setIsLoadingFields(true); setDetectedFields([]); setNodes([]); setEdges([]); setSourceField(''); setTargetField('');
      setFile(selectedFile);
      setResult(null);
      setError(null);
      setStatus('idle');

      try {
        const pdfLib = await loadPdfLib();
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer);
        const form = pdfDoc.getForm();
        const pdfFields = form.getFields();

        if (run !== currentRun.current) return;
          const fieldsList = pdfFields.map(f => {
            let type = 'Unknown';
            if (f instanceof pdfLib.PDFTextField) type = 'TextField';
            else if (f instanceof pdfLib.PDFCheckBox) type = 'CheckBox';
            else if (f instanceof pdfLib.PDFRadioGroup) type = 'RadioGroup';
            else if (f instanceof pdfLib.PDFDropdown) type = 'Dropdown';
            else if (f instanceof pdfLib.PDFButton) type = 'Button';
            return { name: f.getName(), type };
          });
          setDetectedFields(fieldsList);
          setupCanvas(fieldsList);
      } catch (err) {
        if (run === currentRun.current) { setError(err instanceof Error ? err.message : t('formLogicDesigner.noFields')); setStatus('error'); }
      } finally { if (run === currentRun.current) setIsLoadingFields(false); }
    }
  };

  const setupCanvas = (fieldsList: {name: string, type: string}[]) => {
    // Dynamically lay out nodes in a neat vertical flow on the canvas
    const flowNodes: Node[] = fieldsList.map((field, idx) => ({
      id: field.name,
      type: 'default',
      data: {
        label: (
          <div>
            <div className="font-bold text-foreground text-sm truncate">{field.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{field.type}</div>
          </div>
        )
      },
      position: { x: 50 + (idx % 2) * 200, y: 50 + Math.floor(idx / 2) * 100 },
      style: fieldNodeStyle,
    }));
    setNodes(flowNodes);
    setEdges([]);
  };

  const onConnect = useCallback((params: Connection | Edge) => {
    if (busy || !params.source || !params.target || params.source === params.target) return;
    currentRun.current++; setResult(null); setStatus('idle'); setError(null);
    setEdges(eds => addEdge({ ...params, animated: false, style: { stroke: 'var(--primary)' }, label: t('formLogicDesigner.triggerLink') }, eds));
  }, [busy, setEdges, t]);

  const handleProcess = async () => {
    if (!file || busy || !detectedFields.length || !edges.length) return;
    const run = ++currentRun.current;
    setResult(null); setError(null);

    setStatus('processing');
    setProgress(20);

    // Convert connections (Edges) back into FormLogicRule arrays
    const rules: FormLogicRule[] = edges.map(edge => {
      // Find source field type
      const srcField = detectedFields.find(f => f.name === edge.source);
      const isCheckbox = srcField?.type === 'CheckBox';

      return {
        source: edge.source,
        trigger: 'change',
        // Auto infer condition/action based on checkbox state
        condition: isCheckbox ? 'checked' : 'equals',
        value: isCheckbox ? 'Yes' : 'Enable',
        target: edge.target,
        action: 'enable',
      };
    });

    try {
      const output = await injectFormLogic(
        file,
        { rules },
        (p) => { if (run === currentRun.current) setProgress(p); }
      );

      if (run !== currentRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to inject logic rules.');
        setStatus('error');
      }
    } catch (err) {
      if (run === currentRun.current) { setError(err instanceof Error ? err.message : t('status.error')); setStatus('error'); }
    }
  };

  const handleReset = () => {
    clearOutput(); setIsLoadingFields(false); setSourceField(''); setTargetField('');
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setNodes([]);
    setEdges([]);
    setDetectedFields([]);
  };

  return (
    <Card className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-muted text-primary">
          <Workflow className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {tTools('optionsTitle')}
          </h2>
          <p className="text-xs text-muted-foreground">
            {tTools('uploadDescription')}
          </p>
        </div>
      </div>

      {!file ? (
        <FileUploader
          accept={['.pdf']}
          onFilesSelected={handleUpload}
          disabled={busy}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted border border-border">
            <div className="flex items-center gap-3">
              <Workflow className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium truncate max-w-md">{file.name}</span>
              <Badge variant="secondary">
                {t('formLogicDesigner.fieldsReady', { count: detectedFields.length })}
              </Badge>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              disabled={status === 'processing'}
              className="text-xs"
            >
              {t('buttons.reset')}
            </Button>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Control Panel / Instructions */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-3 p-4 rounded-xl bg-muted border border-border">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Settings2 className="w-3.5 h-3.5 text-primary" />
                  {t('formLogicDesigner.logicIntroTitle')}
                </h3>
                <ul className="text-[10px] text-muted-foreground space-y-2 list-disc pl-4 leading-relaxed">
                  <li>{t('formLogicDesigner.sourceField')} → {t('formLogicDesigner.targetField')}</li>
                  <li>{t('formLogicDesigner.logicIntro2')}</li>
                  <li>{t('formLogicDesigner.logicIntro3')}</li>
                </ul>
              </div>

              {status !== 'processing' && status !== 'complete' && (
                <Button
                  onClick={handleProcess}
                  disabled={busy || !detectedFields.length || !edges.length}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {tTools('processButton')}
                </Button>
              )}

              {status === 'processing' && (
                <ProcessingProgress progress={progress} status={status} />
              )}

              {status === 'complete' && result && (
                <div className="space-y-3">
                  <p role="status" className="text-sm">
                    {tTools('successMessage')}
                  </p>
                  <DownloadButton
                    file={result}
                    filename={file.name.replace(/\.pdf$/i, '_smart.pdf')}
                    className="w-full"
                  />
                </div>
              )}

              {status === 'error' && error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                  {error}
                </AlertDescription></Alert>
              )}
            </div>

            <div className="space-y-3 lg:col-span-3 min-w-0">
              {isLoadingFields && <p role="status">{t('status.loading')}</p>}
              {!isLoadingFields && !detectedFields.length && <Alert><AlertDescription>{t('formLogicDesigner.noFields')}</AlertDescription></Alert>}
              <div className="grid gap-3 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="form-source">{t('formLogicDesigner.sourceField')}</Label><NativeSelect id="form-source" value={sourceField} disabled={busy || !detectedFields.length} onChange={event => setSourceField(event.target.value)}><NativeSelectOption value="">—</NativeSelectOption>{detectedFields.map(field => <NativeSelectOption key={field.name} value={field.name}>{field.name}</NativeSelectOption>)}</NativeSelect></div><div className="space-y-2"><Label htmlFor="form-target">{t('formLogicDesigner.targetField')}</Label><NativeSelect id="form-target" value={targetField} disabled={busy || !detectedFields.length} onChange={event => setTargetField(event.target.value)}><NativeSelectOption value="">—</NativeSelectOption>{detectedFields.map(field => <NativeSelectOption key={field.name} value={field.name}>{field.name}</NativeSelectOption>)}</NativeSelect></div></div>
              <Button variant="outline" disabled={busy || !sourceField || !targetField || sourceField === targetField} onClick={() => onConnect({ source: sourceField, target: targetField, sourceHandle: null, targetHandle: null })}><Plus aria-hidden="true" />{t('formLogicDesigner.addConnection')}</Button>
              <ul className="space-y-2">{edges.map(edge => <li key={edge.id} className="flex items-center justify-between gap-3 rounded-md border p-3"><span className="break-words text-sm">{edge.source} → {edge.target}</span><Button variant="ghost" size="icon" disabled={busy} aria-label={`${t('formLogicDesigner.removeConnection')}: ${edge.source} → ${edge.target}`} onClick={() => { clearOutput(); setEdges(current => current.filter(item => item.id !== edge.id)); }}><Trash2 aria-hidden="true" /></Button></li>)}</ul>
            <div className="lg:col-span-3 h-[400px] border border-border rounded-xl overflow-hidden relative bg-muted">
              <div className="absolute top-3 left-3 bg-muted border border-border text-[10px] text-muted-foreground px-3 py-1 rounded z-15 font-mono shadow-md">
                {tTools('canvasTitle')}
              </div>
              <ReactFlow
                onInit={instance => { flow.current = instance; }}
                nodes={nodes}
                edges={edges}
                onNodesChange={changes => { if (!busy) onNodesChange(changes); }}
                onEdgesChange={changes => { if (!busy) { clearOutput(); onEdgesChange(changes); } }}
                onConnect={onConnect}
                nodesDraggable={!busy}
                nodesConnectable={!busy}
                elementsSelectable={!busy}
                deleteKeyCode={busy ? null : 'Backspace'}
                fitView
              >
                <Background color="var(--border)" gap={16} size={1} />
              </ReactFlow>
            </div><div className="flex flex-wrap gap-2" role="group" aria-label={tTools('canvasTitle')}><Button variant="outline" size="icon" aria-label={t('canvas.zoomIn')} onClick={() => flow.current?.zoomIn()}><Plus aria-hidden="true" /></Button><Button variant="outline" size="icon" aria-label={t('canvas.zoomOut')} onClick={() => flow.current?.zoomOut()}><Minus aria-hidden="true" /></Button><Button variant="outline" size="icon" aria-label={t('canvas.fitView')} onClick={() => flow.current?.fitView()}><Maximize aria-hidden="true" /></Button></div></div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default FormLogicDesignerTool;
