'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, Info, CircleCheck, Undo2, Redo2, Loader2 } from 'lucide-react';

import { File as UIFile } from 'lucide-react';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { withBasePath } from '@/lib/utils/path';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LegacyTextEditDialog } from './LegacyTextEditDialog';
import { LegacyEditorControls } from './LegacyEditorControls';
import { AnnotationExportDialog } from './AnnotationExportDialog';
import { PDFViewerControls } from '../PDFViewerControls';
import {
  replaceExistingText,
  type ReplaceExistingTextDiagnostics,
  type TextFitMode,
} from '@/lib/pdf/processors/replace-existing-text';

export interface LegacyAnnotatorToolProps {
  className?: string;
  file?: File | null;
  onFileChange?: (file: File | null) => void;
  hideHeaderCard?: boolean;
  onClear?: () => void;
}

/**
 * LegacyAnnotatorTool Component
 * 
 * Provides PDF editing capabilities using PDF.js viewer with annotation support.
 * Users can add text, draw, highlight, and add images to PDFs.
 * The PDF.js viewer has built-in save functionality (export button in toolbar).
 */
export function LegacyAnnotatorTool({
  className = '',
  file: externalFile,
  onFileChange,
  hideHeaderCard = false,
  onClear,
}: LegacyAnnotatorToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const [editorFrame, setEditorFrame] = useState<HTMLIFrameElement | null>(null);
  const tTools = useTranslations('tools.editPdf');
  
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const file = externalFile !== undefined ? externalFile : internalFile;

  const setFile = useCallback(
    (newFile: File | null) => {
      if (externalFile !== undefined) {
        onFileChange?.(newFile);
      } else {
        setInternalFile(newFile);
      }
    },
    [externalFile, onFileChange]
  );

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isTextReplacing, setIsTextReplacing] = useState(false);
  const [replacementNotice, setReplacementNotice] = useState<string | null>(null);
  const [replacementDiagnostics, setReplacementDiagnostics] =
    useState<ReplaceExistingTextDiagnostics | null>(null);
  const [textUndoCount, setTextUndoCount] = useState(0);
  const [textRedoCount, setTextRedoCount] = useState(0);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textUndoStackRef = useRef<File[]>([]);
  const textRedoStackRef = useRef<File[]>([]);

  // Sync external file prop changes
  useEffect(() => {
    if (externalFile) {
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(externalFile);
      });
    } else if (externalFile === null) {
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    }
  }, [externalFile]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      textUndoStackRef.current = [];
      textRedoStackRef.current = [];
      setTextUndoCount(0);
      setTextRedoCount(0);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(selectedFile);
      });
    }
  }, [setFile]);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  const handleIframeLoad = useCallback(() => {
    setEditorFrame(iframeRef.current);
    setTimeout(() => {
      setIsEditorReady(true);
      
      try {
        const iframe = iframeRef.current;
        if (iframe?.contentDocument) {
          const doc = iframe.contentDocument;

          // 1. Hide native PDF.js download/save buttons
          const downloadBtn = doc.getElementById('download');
          const secondaryDownloadBtn = doc.getElementById('secondaryDownload');
          if (downloadBtn) downloadBtn.style.display = 'none';
          if (secondaryDownloadBtn) secondaryDownloadBtn.style.display = 'none';
          
          // 2. Hide save button from CustomToolbar (pdfjs-annotation-extension)
          const customToolbar = doc.querySelector('.CustomToolbar');
          if (customToolbar) {
            const buttons = customToolbar.querySelectorAll('li, button');
            buttons.forEach((btn: Element) => {
              const text = btn.textContent?.trim();
              if (text === '\u4fdd\u5b58' || text === 'Save') {
                (btn as HTMLElement).style.display = 'none';
              }
            });
          }          // 3. Inject PDFCraft Enrichment Script
          const patchScript = doc.createElement('script');
          patchScript.textContent = `
            (function() {
              console.log('[PDFCraft Patch] Initializing annotation patches...');

              let undoStack = [];
              let redoStack = [];
              let lastStateStr = '';
              let isDoingUndoRedo = false;

              const toolNameTranslations = {
                'cloud': ${JSON.stringify(t('editPdf.annCloud'))},
                'rectangle': ${JSON.stringify(t('editPdf.annRectangle'))},
                'circle': ${JSON.stringify(t('editPdf.annCircle'))},
                'arrow': ${JSON.stringify(t('editPdf.annArrow'))},
                'freehand': ${JSON.stringify(t('editPdf.annFreehand'))},
                'freeText': ${JSON.stringify(t('editPdf.annFreeText'))},
                'freeHighlight': ${JSON.stringify(t('editPdf.annFreeHighlight'))},
                'note': ${JSON.stringify(t('editPdf.annNote'))},
                'signature': ${JSON.stringify(t('editPdf.annSignature'))},
                'stamp': ${JSON.stringify(t('editPdf.annStamp'))}
              };

              const initInterval = setInterval(() => {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (ext) {
                  clearInterval(initInterval);
                  console.log('[PDFCraft Patch] pdfjsAnnotationExtensionInstance found! Setting up patches...');
                  setupCloudFix();
                  setupColorPickerAndStroke();
                  setupUndoRedoAndAuthorPatch();
                  setupSnapping();
                  setupChineseFontPatch();
                  setupExistingTextEditing();
                }
              }, 200);

              function setupExistingTextEditing() {
                if (document.getElementById('pdfcraft-edit-existing-text')) return;
                const toolbar = document.querySelector('.CustomToolbar ul.buttons');
                if (!toolbar) return;

                const parentLang = window.parent?.document?.documentElement?.lang || 'en';
                const parentLocale = window.parent?.location?.pathname?.split('/')[1] || parentLang;
                const isSpanish = parentLocale.toLowerCase().startsWith('es');
                const labels = isSpanish
                  ? {
                      tool: 'Editar texto',
                      heading: 'Editar texto existente',
                      original: 'Texto original',
                      replacement: 'Texto nuevo',
                      apply: 'Aplicar',
                      confirm: 'Confirmar cambio',
                      cancel: 'Cancelar',
                      hint: 'Haz clic sobre un bloque de texto del PDF',
                      overflow: 'El texto nuevo no cabe en el área original.',
                      fit: 'Si no cabe',
                      preserve: 'Mantener tamaño',
                      shrink: 'Reducir para encajar',
                      expand: 'Ampliar el área',
                      signature: 'Editar el contenido invalida las firmas digitales existentes.'
                    }
                  : {
                      tool: 'Edit text',
                      heading: 'Edit existing text',
                      original: 'Original text',
                      replacement: 'New text',
                      apply: 'Apply',
                      confirm: 'Confirm change',
                      cancel: 'Cancel',
                      hint: 'Click a text block in the PDF',
                      overflow: 'The new text does not fit in the original area.',
                      fit: 'If it does not fit',
                      preserve: 'Keep original size',
                      shrink: 'Shrink to fit',
                      expand: 'Expand the area',
                      signature: 'Editing content invalidates existing digital signatures.'
                    };

                const item = document.createElement('li');
                item.id = 'pdfcraft-edit-existing-text';
                item.title = labels.tool;
                const selectItem = toolbar.querySelector('li[title="Select"]');
                if (selectItem?.nextSibling) {
                  toolbar.insertBefore(item, selectItem.nextSibling);
                } else {
                  toolbar.insertBefore(item, toolbar.firstChild);
                }

                const style = document.createElement('style');
                style.id = 'pdfcraft-existing-text-styles';
                style.textContent = \`
                  body.pdfcraft-text-edit-mode .textLayer { pointer-events: auto !important; }
                  body.pdfcraft-text-edit-mode .textLayer span {
                    cursor: text !important;
                    pointer-events: auto !important;
                    border-radius: 2px;
                    transition: outline-color .12s, background .12s;
                  }
                  body.pdfcraft-text-edit-mode .textLayer span:hover {
                    outline: 2px solid #2563eb !important;
                    background: rgba(37, 99, 235, .14) !important;
                  }
                  .pdfcraft-live-text-preview {
                    outline: 2px dashed #16a34a !important;
                    background: rgba(22, 163, 74, .10) !important;
                  }
                \`;
                document.head.appendChild(style);

                let active = false;
                let editingText = false;
                let requestId = 0;
                let selectionGeometry = null;
                let originalWidth = 0;
                let originalHeight = 0;
                let previewSpan = null;
                let previewOriginalText = '';

                function restorePreview() {
                  if (previewSpan) {
                    previewSpan.textContent = previewOriginalText;
                    previewSpan.classList.remove('pdfcraft-live-text-preview');
                  }
                  previewSpan = null;
                  previewOriginalText = '';
                }

                function closeTextEditor() {
                  restorePreview();
                  if (editingText) window.parent.postMessage({ type: 'pdfcraft:cancel-existing-text', payload: { requestId } }, window.location.origin);
                  editingText = false;
                }

                function setActive(nextActive) {
                  active = nextActive;
                  document.body.classList.toggle('pdfcraft-text-edit-mode', active);
                  item.classList.toggle('pdfcraft-active', active);
                  closeTextEditor();

                  document.getElementById('pdfcraft-text-edit-hint')?.remove();
                  if (active) {
                    const hint = document.createElement('div');
                    hint.id = 'pdfcraft-text-edit-hint';
                    hint.dataset.message = labels.hint;
                    document.body.appendChild(hint);
                  }
                }

                item.addEventListener('click', function(event) {
                  event.preventDefault();
                  event.stopPropagation();
                  setActive(!active);
                });

                document.addEventListener('keydown', function(event) {
                  if (event.key === 'Escape' && (active || editingText)) {
                    if (editingText) closeTextEditor();
                    else setActive(false);
                  }
                });

                document.addEventListener('click', async function(event) {
                  if (!active) return;
                  const target = event.target;
                  if (!(target instanceof HTMLElement)) return;
                  const span = target.closest('.textLayer span');
                  if (!span || !span.textContent?.trim()) return;

                  event.preventDefault();
                  event.stopPropagation();

                  const pageElement = span.closest('.page');
                  const pageNumber = Number(pageElement?.getAttribute('data-page-number'));
                  const app = window.PDFViewerApplication;
                  const pageView = app?.pdfViewer?.getPageView(pageNumber - 1);
                  const pdfPage = pageView?.pdfPage;
                  if (!pageElement || !pageNumber || !pdfPage) return;

                  const viewport = pdfPage.getViewport({ scale: 1 });
                  const pageRect = pageElement.getBoundingClientRect();
                  const textRect = span.getBoundingClientRect();
                  originalWidth = textRect.width;
                  originalHeight = textRect.height;
                  const x = (textRect.left - pageRect.left) / pageRect.width * viewport.width;
                  const top = (textRect.top - pageRect.top) / pageRect.height * viewport.height;
                  const width = textRect.width / pageRect.width * viewport.width;
                  const height = textRect.height / pageRect.height * viewport.height;
                  const y = viewport.height - top - height;

                  closeTextEditor();
                  previewSpan = span;
                  previewOriginalText = span.textContent;
                  requestId += 1;
                  editingText = true;
                  selectionGeometry = { page: pageNumber, text: previewOriginalText, x, y, width, height };
                  window.parent.postMessage({
                    type: 'pdfcraft:select-existing-text',
                    payload: { requestId, text: previewOriginalText, labels }
                  }, window.location.origin);
                }, true);

                window.addEventListener('message', function(event) {
                  if (event.source !== window.parent || event.origin !== window.location.origin) return;
                  const { type, payload } = event.data || {};
                  if (!editingText || payload?.requestId !== requestId) return;
                  if (type === 'pdfcraft:preview-existing-text' && typeof payload.text === 'string') {
                    previewSpan.textContent = payload.text;
                    previewSpan.classList.add('pdfcraft-live-text-preview');
                    const previewRect = previewSpan.getBoundingClientRect();
                    const lineCount = Math.max(1, payload.text.split(/\\r?\\n/).length);
                    const overflow = previewRect.width > originalWidth + 1 || lineCount * originalHeight > originalHeight + 1;
                    window.parent.postMessage({ type: 'pdfcraft:text-overflow', payload: { requestId, overflow } }, window.location.origin);
                  } else if (type === 'pdfcraft:close-existing-text') {
                    closeTextEditor();
                  } else if (type === 'pdfcraft:apply-existing-text' && typeof payload.replacementText === 'string') {
                    window.parent.postMessage({
                      type: 'pdfcraft:replace-existing-text',
                      payload: { ...selectionGeometry, replacementText: payload.replacementText, fitMode: payload.fitMode }
                    }, window.location.origin);
                    closeTextEditor();
                  }
                }, true);
              }

              function setupSnapping() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                const stage = ext?.stage || ext?.konvaStage || (window.Konva && window.Konva.stages[0]);
                if (!stage) return;
                
                console.log('[PDFCraft Patch] Setting up Konva Snapping Alignment...');
                
                stage.on('dragmove', function(e) {
                  const activeShape = e.target;
                  if (!activeShape || activeShape === stage) return;
                  
                  const shapes = stage.find('.annotation') || stage.find('Group') || stage.getChildren();
                  const snapOffset = 8;
                  let snapX = null;
                  let snapY = null;
                  
                  const activeBox = activeShape.getClientRect();
                  if (!activeBox) return;

                  shapes.forEach(shape => {
                    if (shape === activeShape || shape.name() === 'guideline') return;
                    const box = shape.getClientRect();
                    if (!box) return;
                    
                    // X-axis alignment
                    if (Math.abs(activeBox.x - box.x) < snapOffset) snapX = box.x;
                    if (Math.abs((activeBox.x + activeBox.width/2) - (box.x + box.width/2)) < snapOffset) {
                      snapX = box.x + box.width/2 - activeBox.width/2;
                    }
                    if (Math.abs((activeBox.x + activeBox.width) - (box.x + box.width)) < snapOffset) {
                      snapX = box.x + box.width - activeBox.width;
                    }
                    
                    // Y-axis alignment
                    if (Math.abs(activeBox.y - box.y) < snapOffset) snapY = box.y;
                    if (Math.abs((activeBox.y + activeBox.height/2) - (box.y + box.height/2)) < snapOffset) {
                      snapY = box.y + box.height/2 - activeBox.height/2;
                    }
                    if (Math.abs((activeBox.y + activeBox.height) - (box.y + box.height)) < snapOffset) {
                      snapY = box.y + box.height - activeBox.height;
                    }
                  });
                  
                  // Snap coordinates
                  if (snapX !== null) activeShape.x(snapX);
                  if (snapY !== null) activeShape.y(snapY);
                  
                  // Render red guide dashed lines as DOM overlays
                  drawGuides(stage, snapX, snapY);
                });
                
                stage.on('dragend', function() {
                  clearGuides();
                });
                
                function drawGuides(stg, sx, sy) {
                  let container = document.getElementById('pdfcraft-alignment-guides');
                  if (!container) {
                    container = document.createElement('div');
                    container.id = 'pdfcraft-alignment-guides';
                    container.style.cssText = 'position:absolute; inset:0; pointer-events:none; z-index:99999;';
                    stg.container().appendChild(container);
                  }
                  container.innerHTML = '';
                  
                  if (sx !== null) {
                    const l = document.createElement('div');
                    l.style.cssText = 'position:absolute; left:' + sx + 'px; top:0; bottom:0; border-left:1.5px dashed red;';
                    container.appendChild(l);
                  }
                  if (sy !== null) {
                    const l = document.createElement('div');
                    l.style.cssText = 'position:absolute; top:' + sy + 'px; left:0; right:0; border-top:1.5px dashed red;';
                    container.appendChild(l);
                  }
                }
                
                function clearGuides() {
                  const container = document.getElementById('pdfcraft-alignment-guides');
                  if (container) container.innerHTML = '';
                }
              }

              function setupChineseFontPatch() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                const pdfLib = window.pdfLib || ext?.pdfLib;
                if (!pdfLib) return;

                const originalSave = pdfLib.PDFDocument.prototype.save;
                pdfLib.PDFDocument.prototype.save = async function(saveOptions) {
                  console.log('[PDFCraft Patch] Intercepting save to inspect for Chinese text...');
                  
                  let hasChinese = false;
                  
                  // Inspect the annotation store inside PDFJS Annotation Extension
                  const annotationExtension = window.pdfjsAnnotationExtensionInstance;
                  const store = typeof annotationExtension?.getAnnotationStore === 'function'
                    ? annotationExtension.getAnnotationStore()
                    : null;
                  if (store && store.annotations) {
                    store.annotations.forEach(ann => {
                      if (ann.name === 'freeText' && /[\u4e00-\u9fa5]/.test(ann.text || '')) {
                        hasChinese = true;
                      }
                    });
                  }

                  if (hasChinese) {
                    try {
                      console.log('[PDFCraft Patch] Chinese text found. Embedding NotoSansSC-Regular font...');
                      const fontBytes = await fetch(${JSON.stringify(withBasePath('/fonts/NotoSansSC-Regular.ttf'))}).then(res => res.arrayBuffer());
                      const customFont = await this.embedFont(fontBytes, { subset: true });
                      
                      // Intercept subsequent font loading requests for Helvetica inside pdf-lib
                      const originalEmbedFont = this.embedFont;
                      this.embedFont = async function(fontToEmbed, embedOpts) {
                        if (fontToEmbed === pdfLib.StandardFonts.Helvetica || fontToEmbed === 'Helvetica') {
                          console.log('[PDFCraft Patch] Redirected Helvetica embed to NotoSansSC font');
                          return customFont;
                        }
                        return originalEmbedFont.call(this, fontToEmbed, embedOpts);
                      };
                    } catch (e) {
                      console.error('[PDFCraft Patch] Failed to embed Chinese font subset', e);
                    }
                  }

                  return originalSave.call(this, saveOptions);
                };
              }

              function setupCloudFix() {
                // Ensure double-click bypasses text layer blocking to complete drawing
                document.addEventListener('dblclick', function(e) {
                  const ext = window.pdfjsAnnotationExtensionInstance;
                  const activeTool = ext?.activeAnnotation?.name;
                  if (activeTool === 'cloud') {
                    const konvaContent = document.querySelector('.konvajs-content');
                    if (konvaContent) {
                      console.log('[PDFCraft Patch] Intercepted dblclick for cloud tool, dispatching to Konva stage.');
                      const dblEvent = new MouseEvent('dblclick', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: e.clientX,
                        clientY: e.clientY
                      });
                      konvaContent.dispatchEvent(dblEvent);
                    }
                  }
                }, true);

                // Add Enter key support to elegantly complete and close polygon drawing
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Enter') {
                    const ext = window.pdfjsAnnotationExtensionInstance;
                    const activeTool = ext?.activeAnnotation?.name;
                    if (activeTool === 'cloud') {
                      const konvaContent = document.querySelector('.konvajs-content');
                      if (konvaContent) {
                        console.log('[PDFCraft Patch] Intercepted Enter key for cloud tool, dispatching dblclick to end drawing.');
                        const dblEvent = new MouseEvent('dblclick', {
                          bubbles: true,
                          cancelable: true,
                          view: window
                        });
                        konvaContent.dispatchEvent(dblEvent);
                      }
                    }
                  }
                });
              }

              function setupColorPickerAndStroke() {
                // Inject picker for Highlight tool
                const hlColorPicker = document.getElementById('editorHighlightColorPicker');
                if (hlColorPicker) {
                  if (!hlColorPicker.querySelector('.pdfcraft-custom-hl-picker')) {
                    const picker = document.createElement('input');
                    picker.type = 'color';
                    picker.className = 'pdfcraft-custom-hl-picker';
                    picker.style.cssText = 'width:28px; height:28px; border:2px solid #ccc; border-radius:50%; padding:0; cursor:pointer; margin-left:8px; vertical-align:middle; background:none;';
                    
                    picker.addEventListener('input', function(e) {
                      const ext = window.pdfjsAnnotationExtensionInstance;
                      const selected = ext?.selectedAnnotation;
                      if (selected) {
                        ext.updateAnnotationStyle(selected, { color: e.target.value });
                      }
                    });
                    hlColorPicker.appendChild(picker);
                  }
                }

                // Dynamically observe CustomAnnotationMenu popups to inject controls
                const observer = new MutationObserver(function() {
                  const menu = document.querySelector('.CustomAnnotationMenu');
                  if (menu && menu.style.display !== 'none') {
                    injectCustomMenuControls(menu);
                  }
                });

                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['style', 'class']
                });
              }

              function injectCustomMenuControls(menu) {
                if (menu.querySelector('.pdfcraft-custom-controls')) return;

                console.log('[PDFCraft Patch] CustomAnnotationMenu opened, injecting custom controls...');

                const container = document.createElement('div');
                container.className = 'pdfcraft-custom-controls';
                container.style.cssText = 'border-top:1px solid #ccc; margin-top:8px; padding-top:8px; font-size:12px; display:flex; flex-direction:column; gap:8px; color:var(--toolbar-fg-color, #333);';

                const ext = window.pdfjsAnnotationExtensionInstance;
                const selected = ext?.selectedAnnotation;
                if (!selected) return;

                // 1. Custom Stroke Color Picker
                const colorRow = document.createElement('div');
                colorRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:8px;';
                
                const colorLabel = document.createElement('span');
                {t('editPdf.strokeColorLabel')}
                
                const colorPicker = document.createElement('input');
                colorPicker.type = 'color';
                colorPicker.style.cssText = 'width:50px; height:24px; border:1px solid #ccc; border-radius:4px; padding:0; cursor:pointer;';
                colorPicker.value = selected.style?.color || '#ff0000';

                colorPicker.addEventListener('change', function(e) {
                  const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                  if (curSelected) {
                    window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, { color: e.target.value });
                  }
                });

                colorRow.appendChild(colorLabel);
                colorRow.appendChild(colorPicker);
                container.appendChild(colorRow);

                // 2. Allow stroke width of 0 by adjusting native slider min
                const nativeSliders = menu.querySelectorAll('input[type="range"]');
                nativeSliders.forEach(slider => {
                  if (slider.getAttribute('min') === '1') {
                    slider.setAttribute('min', '0');
                    console.log('[PDFCraft Patch] Stroke width slider updated min to 0');
                  }
                });

                // 3. Shape Fill support (Rectangle, Circle, Cloud)
                const allowedFillTools = ['rectangle', 'circle', 'cloud'];
                if (allowedFillTools.includes(selected.name)) {
                  const fillRow = document.createElement('div');
                  fillRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:8px;';
                  
                  const leftPart = document.createElement('div');
                  leftPart.style.cssText = 'display:flex; align-items:center; gap:6px;';
                  
                  const fillCheckbox = document.createElement('input');
                  fillCheckbox.type = 'checkbox';
                  fillCheckbox.id = 'pdfcraft-fill-enabled';
                  fillCheckbox.style.cssText = 'cursor:pointer;';
                  fillCheckbox.checked = selected.style?.fillEnabled || false;
                  
                  const fillLabel = document.createElement('label');
                  fillLabel.htmlFor = 'pdfcraft-fill-enabled';
                  {t('editPdf.fillColorLabel')}
                  fillLabel.style.cssText = 'cursor:pointer; user-select:none;';

                  leftPart.appendChild(fillCheckbox);
                  leftPart.appendChild(fillLabel);

                  const fillColorPicker = document.createElement('input');
                  fillColorPicker.type = 'color';
                  fillColorPicker.style.cssText = 'width:50px; height:24px; border:1px solid #ccc; border-radius:4px; padding:0; cursor:pointer;';
                  fillColorPicker.value = selected.style?.fillColor || '#ffffff';
                  fillColorPicker.disabled = !fillCheckbox.checked;

                  fillCheckbox.addEventListener('change', function(e) {
                    fillColorPicker.disabled = !e.target.checked;
                    const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                    if (curSelected) {
                      window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, {
                        fillEnabled: e.target.checked,
                        fillColor: fillColorPicker.value
                      });
                    }
                  });

                  fillColorPicker.addEventListener('change', function(e) {
                    const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                    if (curSelected && fillCheckbox.checked) {
                      window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, {
                        fillColor: e.target.value
                      });
                    }
                  });

                  fillRow.appendChild(leftPart);
                  fillRow.appendChild(fillColorPicker);
                  container.appendChild(fillRow);
                }

                const styleContainer = menu.querySelector('.styleContainer') || menu;
                styleContainer.appendChild(container);
              }

              // D. Undo/Redo & Comment list labels auto-override
              function getAnnotationsSnapshot() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (!ext) return null;
                if (typeof ext.getAnnotationStore !== 'function') return null;
                const store = ext.getAnnotationStore();
                if (!store) return null;
                return JSON.stringify(store);
              }

              function setupUndoRedoAndAuthorPatch() {
                // Initialize undo stack with initial state
                const initialState = getAnnotationsSnapshot();
                if (initialState) {
                  undoStack.push(initialState);
                  lastStateStr = initialState;
                }

                // Periodically check for state changes and update UI elements
                setInterval(() => {
                  const ext = window.pdfjsAnnotationExtensionInstance;
                  if (!ext) return;

                  // Dynamic author override for tool name labels in comments list
                  const store = typeof ext.getAnnotationStore === 'function'
                    ? ext.getAnnotationStore()
                    : null;
                  let authorUpdated = false;
                  if (store && store.annotations) {
                    store.annotations.forEach(ann => {
                      const transName = toolNameTranslations[ann.name] || 'Annotation';
                      const targetAuthor = transName + ' (' + ${JSON.stringify(t('editPdf.unnamedUser'))} + ')';
                      if (ann.author !== targetAuthor && ann.author === ${JSON.stringify(t('editPdf.unnamedUser'))}) {
                        ann.author = targetAuthor;
                        authorUpdated = true;
                      }
                    });
                  }

                  const currentState = getAnnotationsSnapshot();
                  if (currentState && currentState !== lastStateStr) {
                    if (!isDoingUndoRedo) {
                      undoStack.push(currentState);
                      redoStack = []; // Reset redo stack on new operation
                      updateUndoRedoButtonsState();
                    }
                    lastStateStr = currentState;
                  }
                }, 500);

                // Inject Undo/Redo buttons UI
                injectUndoRedoButtons();
              }

              function performUndo() {
                if (undoStack.length <= 1) return;
                isDoingUndoRedo = true;
                const current = undoStack.pop();
                redoStack.push(current);
                const prev = undoStack[undoStack.length - 1];
                loadState(prev);
              }

              function performRedo() {
                if (redoStack.length === 0) return;
                isDoingUndoRedo = true;
                const next = redoStack.pop();
                undoStack.push(next);
                loadState(next);
              }

              function loadState(stateStr) {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (!ext) return;

                try {
                  const stateObj = JSON.parse(stateStr);
                  if (typeof ext.resetPdfjsAnnotationStorage === 'function') {
                    ext.resetPdfjsAnnotationStorage();
                  }
                  if (typeof ext.initAnnotations === 'function') {
                    ext.initAnnotations(stateObj);
                  }
                  if (typeof ext.reDrawAnnotation === 'function') {
                    ext.reDrawAnnotation();
                  }
                  lastStateStr = stateStr;
                  updateUndoRedoButtonsState();
                } catch (err) {
                  console.error('[PDFCraft Patch] Failed to load state', err);
                } finally {
                  setTimeout(() => {
                    isDoingUndoRedo = false;
                  }, 100);
                }
              }

              function injectUndoRedoButtons() {
                const customToolbar = document.querySelector('.CustomToolbar');
                if (customToolbar) {
                  if (customToolbar.querySelector('.pdfcraft-undo-btn')) return;
                  const btnList = customToolbar.querySelector('ul') || customToolbar;

                  const undoLi = document.createElement('li');
                  undoLi.className = 'pdfcraft-undo-btn';


                  const undoBtn = document.createElement('button');
                  undoBtn.type = 'button';
                  undoBtn.textContent = ${JSON.stringify(t('editPdf.undo'))};
                  undoBtn.className = 'toolbarButton';
                  undoBtn.disabled = true;
                  undoBtn.addEventListener('click', performUndo);
                  undoLi.appendChild(undoBtn);

                  const redoLi = document.createElement('li');
                  redoLi.className = 'pdfcraft-redo-btn';


                  const redoBtn = document.createElement('button');
                  redoBtn.type = 'button';
                  redoBtn.textContent = ${JSON.stringify(t('editPdf.redo'))};
                  redoBtn.className = 'toolbarButton';
                  redoBtn.disabled = true;
                  redoBtn.addEventListener('click', performRedo);
                  redoLi.appendChild(redoBtn);

                  if (btnList.firstChild) {
                    btnList.insertBefore(undoLi, btnList.firstChild);
                    btnList.insertBefore(redoLi, undoLi.nextSibling);
                  } else {
                    btnList.appendChild(undoLi);
                    btnList.appendChild(redoLi);
                  }
                }
              }

              function updateUndoRedoButtonsState() {
                const undoBtn = document.querySelector('.pdfcraft-undo-btn button');
                const redoBtn = document.querySelector('.pdfcraft-redo-btn button');
                
                if (undoBtn) {
                  const canUndo = undoStack.length > 1;
                  undoBtn.disabled = !canUndo;
                }
                if (redoBtn) {
                  const canRedo = redoStack.length > 0;
                  redoBtn.disabled = !canRedo;
                }
              }
            })();
          `;
          doc.body.appendChild(patchScript);
          console.log('[PDFCraft Patch] Enrichment script successfully injected into iframe!');
        }
      } catch (e) {
        console.warn('Could not access iframe content to inject patches', e);
      }
    }, 1000);
  }, [t]);

  const handleClear = useCallback(() => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setFile(null);
    setPdfUrl(null);
    setError(null);
    setIsEditorReady(false);
    setReplacementNotice(null);
    setReplacementDiagnostics(null);
    textUndoStackRef.current = [];
    textRedoStackRef.current = [];
    setTextUndoCount(0);
    setTextRedoCount(0);
    setEditorFrame(null);
    onClear?.();
  }, [pdfUrl, setFile, onClear]);

  const showFileVersion = useCallback((nextFile: File) => {
    setFile(nextFile);
    setIsEditorReady(false);
    setPdfUrl(URL.createObjectURL(nextFile));
  }, [setFile]);

  const handleExistingTextReplaced = useCallback((
    result: Blob,
    count: number,
    diagnostics?: ReplaceExistingTextDiagnostics
  ) => {
    if (!file) return;
    const editedFile = new File([result], file.name, { type: 'application/pdf' });
    textUndoStackRef.current.push(file);
    textRedoStackRef.current = [];
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(0);
    setReplacementNotice(`${count} text occurrence${count === 1 ? '' : 's'} replaced.`);
    setReplacementDiagnostics(diagnostics ?? null);
    showFileVersion(editedFile);
  }, [file, showFileVersion]);

  const handleTextUndo = useCallback(() => {
    if (!file || textUndoStackRef.current.length === 0 || isTextReplacing) return;
    const previousFile = textUndoStackRef.current.pop();
    if (!previousFile) return;
    textRedoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textUndoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(previousFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  const handleTextRedo = useCallback(() => {
    if (!file || textRedoStackRef.current.length === 0 || isTextReplacing) return;
    const nextFile = textRedoStackRef.current.pop();
    if (!nextFile) return;
    textUndoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textRedoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(nextFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.type !== 'pdfcraft:replace-existing-text' ||
        !file ||
        isTextReplacing
      ) {
        return;
      }

      const payload = event.data.payload as {
        page: number;
        text: string;
        replacementText: string;
        x: number;
        y: number;
        width: number;
        height: number;
        fitMode?: TextFitMode;
      };

      if (
        !payload ||
        !Number.isFinite(payload.page) ||
        !Number.isFinite(payload.x) ||
        !Number.isFinite(payload.y) ||
        !Number.isFinite(payload.width) ||
        !Number.isFinite(payload.height)
      ) {
        return;
      }

      setIsTextReplacing(true);
      setError(null);
      const match = {
        page: payload.page,
        text: payload.text,
        x: payload.x,
        y: payload.y,
        width: payload.width,
        height: payload.height,
        id: `inline-${payload.page}-${payload.x}-${payload.y}`,
        selected: true,
      };

      const result = await replaceExistingText(
        file,
        [match],
        {
          replacementText: payload.replacementText,
          fitMode: payload.fitMode ?? 'preserve',
        }
      );

      if (result.success && result.result) {
        handleExistingTextReplaced(
          result.result,
          result.replacedCount,
          result.diagnostics
        );
      } else {
        setError(result.error || 'Unable to edit the selected text.');
      }
      setIsTextReplacing(false);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [file, handleExistingTextReplaced, isTextReplacing]);

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      <PDFViewerControls key={`viewer:${pdfUrl}`} iframe={editorFrame} locale={locale} />
      <LegacyEditorControls key={`controls:${pdfUrl}`} iframe={editorFrame} locale={locale} undo={t('editPdf.undo')} redo={t('editPdf.redo')} exportError={tErrors('processingFailed')} />
      <AnnotationExportDialog key={`exports:${pdfUrl}`} iframe={editorFrame} locale={locale} closeLabel={t('buttons.close')} />
      <LegacyTextEditDialog key={`text:${pdfUrl}`} iframe={editorFrame} locale={locale} cancelLabel={t('buttons.cancel')} applyLabel={t('buttons.apply')} />
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {file && pdfUrl && (
        <div className="space-y-4">
          {!hideHeaderCard && (
            <Card className="p-6"  >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UIFile className="size-8 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClear}>
                  {t('buttons.clear') || 'Clear'}
                </Button>
              </div>
            </Card>
          )}

          {replacementNotice && (
            <Alert role="status"><CircleCheck aria-hidden="true" /><AlertDescription>{replacementNotice}</AlertDescription></Alert>
          )}

          <div
            className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-background p-2"
            aria-label={tTools('textHistory')}
          >
            <span className="mr-1 text-xs font-medium text-muted-foreground">
              {tTools('textHistory')}:
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextUndo}
              disabled={textUndoCount === 0 || isTextReplacing}
            >
              <Undo2 aria-hidden="true" />{tTools('textUndo')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextRedo}
              disabled={textRedoCount === 0 || isTextReplacing}
            >
              <Redo2 aria-hidden="true" />{tTools('textRedo')}
            </Button>
          </div>

          {replacementDiagnostics?.overflowDetected && (
            <Alert role="status"><Info aria-hidden="true" /><AlertDescription>{tTools('overflowAppliedWarning')}</AlertDescription></Alert>
          )}

          {replacementDiagnostics?.usedFallbackFont && (
            <Alert role="status"><Info aria-hidden="true" /><AlertDescription>{tTools('fallbackFontWarning')}</AlertDescription></Alert>
          )}

          {replacementDiagnostics?.hasDigitalSignatures && (
            <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
              <p className="text-sm font-medium">{tTools('signatureInvalidatedWarning')}</p>
            </AlertDescription></Alert>
          )}

          {/* PDF Viewer iframe */}
          <div className="relative border border-border rounded-md overflow-hidden bg-muted">
            <iframe
              ref={iframeRef}
              src={withBasePath(`/pdfjs-annotation-viewer/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
              className="w-full h-[700px] border-0"
              title="PDF Editor"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              onLoad={handleIframeLoad}
            />
            {!isEditorReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-background" role="status">
                <div className="text-center">
                  <Loader2 aria-hidden="true" className="mx-auto mb-2 size-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">{t('status.loading') || 'Loading...'}</p>
                </div>
              </div>
            )}
            {isTextReplacing && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-background" role="status">
                <div className="px-5 py-4 text-center">
                  <Loader2 aria-hidden="true" className="mx-auto mb-2 size-8 animate-spin text-primary" />
                  <p className="text-sm font-medium">Updating PDF text…</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LegacyAnnotatorTool;
