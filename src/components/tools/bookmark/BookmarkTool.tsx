'use client';
import { Check as UIEmojiCheck, Download as UIEmojiDownload, MapPin as UIEmojiMapPin, Pencil as UIEmojiPencil, Trash2, X as UIEmojiX } from 'lucide-react';

import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { GripVertical as UIGripVertical } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { appendChildBookmark, canMoveBookmark, findBookmark, getBookmarkMoveTargets, getBookmarkPlacement, getVisibleBookmarkIds, insertBookmarkAfter, moveBookmark, removeBookmark, removeBookmarks, selectBookmarkRange, type BookmarkNode, type BookmarkPlacement } from '@/lib/pdf/bookmark-tree';
import { useBookmarkDragScroll } from './useBookmarkDragScroll';
import { processBookmarks, BookmarkItem, BookmarkOptions } from '@/lib/pdf/processors/bookmark';
import type { ProcessOutput } from '@/types/pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

// Store pdfjs module reference
let pdfjsModule: typeof import('pdfjs-dist') | null = null;

// Load pdfjs module dynamically
const loadPdfjsLib = async () => {
  if (pdfjsModule) return pdfjsModule;

  const pdfjsLib = await import('pdfjs-dist');
  const { configurePdfjsWorker } = await import('@/lib/pdf/loader');

  if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    configurePdfjsWorker(pdfjsLib);
  }

  pdfjsModule = pdfjsLib;
  return pdfjsLib;
};

export interface BookmarkToolProps {
  className?: string;
}

type BookmarkDraft = Omit<BookmarkNode, 'pageNumber'> & { pageNumber: number | '' };

// Parse PDF outline to bookmark nodes
const parseOutline = async (
  outline: NonNullable<Awaited<ReturnType<PDFDocumentProxy['getOutline']>>>,
  doc: PDFDocumentProxy
): Promise<BookmarkNode[]> => {
  const result: BookmarkNode[] = [];

  for (const item of outline) {
    let pageNumber = 1;

    // Get destination page
    if (item.dest) {
      try {
        const dest = typeof item.dest === 'string'
          ? await doc.getDestination(item.dest)
          : item.dest;
        if (dest && dest[0]) {
          const pageRef = dest[0];
          const pageIndex = await doc.getPageIndex(pageRef);
          pageNumber = pageIndex + 1;
        }
      } catch {
        console.warn('Failed to get destination for bookmark:', item.title);
      }
    }

    // Handle style
    let style: 'bold' | 'italic' | 'bold-italic' | undefined = undefined;
    if (item.bold && item.italic) style = 'bold-italic';
    else if (item.bold) style = 'bold';
    else if (item.italic) style = 'italic';

    // Handle color (pdfjs color is [r, g, b] 0-255)
    let color: string | undefined = undefined;
    if (item.color && item.color.length === 3) {
      const r = item.color[0].toString(16).padStart(2, '0');
      const g = item.color[1].toString(16).padStart(2, '0');
      const b = item.color[2].toString(16).padStart(2, '0');
      color = `#${r}${g}${b}`;
    }

    const node: BookmarkNode = {
      id: `bm-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: item.title || 'Untitled',
      pageNumber,
      children: [],
      color,
      style,
      isExpanded: true,
    };

    // Parse children recursively
    if (item.items && item.items.length > 0) {
      node.children = await parseOutline(item.items, doc);
    }

    result.push(node);
  }

  return result;
};

// Convert BookmarkNode[] to BookmarkItem[] for processor
const convertToBookmarkItems = (nodes: BookmarkNode[]): BookmarkItem[] => {
  return nodes.map(node => ({
    id: node.id,
    title: node.title,
    pageNumber: node.pageNumber,
    color: node.color,
    style: node.style,
    expanded: node.isExpanded,
    children: node.children.length > 0 ? convertToBookmarkItems(node.children) : undefined,
  }));
};

/**
 * BookmarkTool Component - Visual Bookmark Editor
 * Provides a visual interface for editing PDF bookmarks with PDF preview
 */
export function BookmarkTool({ className = '' }: BookmarkToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Bookmark state
  const [bookmarks, setBookmarks] = useState<BookmarkNode[]>([]);
  const [selectedBookmarkId, setSelectedBookmarkId] = useState<string | null>(null);
  const [removalSelection, setRemovalSelection] = useState<Set<string>>(new Set());
  const [rangeAnchorId, setRangeAnchorId] = useState<string | null>(null);
  const [editingBookmark, setEditingBookmark] = useState<BookmarkDraft | null>(null);

  // Processing state
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // UI state
  const [isExtractingBookmarks, setIsExtractingBookmarks] = useState(false);
  const [confirmExtraction, setConfirmExtraction] = useState(false);
  const [extractionNotice, setExtractionNotice] = useState<string | null>(null);
  const extractButtonRef = useRef<HTMLButtonElement>(null);
  const [confirmRemoval, setConfirmRemoval] = useState(false);
  const [removedAll, setRemovedAll] = useState(false);
  const removeAllButtonRef = useRef<HTMLButtonElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const removalConfirmedRef = useRef(false);
  const [confirmSelectionRemoval, setConfirmSelectionRemoval] = useState(false);
  const [removalNotice, setRemovalNotice] = useState<string | null>(null);
  const removeSelectionButtonRef = useRef<HTMLButtonElement>(null);
  const selectionRemovalConfirmedRef = useRef(false);
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [dragOverNodeId, setDragOverNodeId] = useState<string | null>(null);
  const [dropPosition, setDropPosition] = useState<BookmarkPlacement | null>(null);
  const [movingBookmarkId, setMovingBookmarkId] = useState<string | null>(null);
  const [moveTargetId, setMoveTargetId] = useState('');
  const [movePlacement, setMovePlacement] = useState<BookmarkPlacement>('after');
  const [moveNotice, setMoveNotice] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const moveButtonRefs = useRef(new Map<string, HTMLButtonElement>());
  const moveFocusIdRef = useRef<string | null>(null);
  const draggedIdRef = useRef<string | null>(null);
  const dragEndedAtRef = useRef(0);
  const pendingRevealIdRef = useRef<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const processingRunRef = useRef(0);
  const isProcessing = status === 'processing';
  const isBusy = isLoading || isExtractingBookmarks || isProcessing;
  const selectionRemoval = useMemo(() => removeBookmarks(bookmarks, removalSelection), [bookmarks, removalSelection]);
  const visibleBookmarkIds = useMemo(() => getVisibleBookmarkIds(bookmarks), [bookmarks]);
  const clearRemovalSelection = useCallback(() => {
    setRemovalSelection(new Set());
    setRangeAnchorId(null);
  }, []);
  useBookmarkDragScroll(listRef, Boolean(draggedNodeId) && !isBusy);

  // New entries and moves can be outside the current scroll position.
  useEffect(() => {
    const id = pendingRevealIdRef.current;
    if (id) moveButtonRefs.current.get(id)?.scrollIntoView?.({ block: 'nearest' });
    pendingRevealIdRef.current = null;
  }, [bookmarks]);

  // Load PDF and extract existing bookmarks
  const loadPdf = useCallback(async (pdfFile: File) => {
    setIsLoading(true);
    try {
      const pdfjsLib = await loadPdfjsLib();
      const arrayBuffer = await pdfFile.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const doc = await loadingTask.promise;

      setPdfDoc(doc);
      setTotalPages(doc.numPages);
      setCurrentPage(1);

      // Extract existing bookmarks automatically on load
      setIsExtractingBookmarks(true);
      try {
        const outline = await doc.getOutline();
        if (outline && outline.length > 0) {
          const extracted = await parseOutline(outline, doc);
          setBookmarks(extracted);
        }
      } catch (err) {
        console.warn('Failed to extract bookmarks:', err);
      }
      setIsExtractingBookmarks(false);

    } catch (err) {
      setError('Failed to load PDF file.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Manually extract bookmarks from the current PDF
  const extractExistingBookmarks = async () => {
    if (!pdfDoc || isBusy) return;
    setError(null);
    setExtractionNotice(null);
    setIsExtractingBookmarks(true);
    try {
      const outline = await pdfDoc.getOutline();
      if (outline && outline.length > 0) {
        const extracted = await parseOutline(outline, pdfDoc);
        setBookmarks(extracted);
        setResult(null);
        setRemovedAll(false);
        setSelectedBookmarkId(null);
        clearRemovalSelection();
        setRemovalNotice(null);
        setEditingBookmark(null);
        setMoveNotice(null);
      } else {
        setExtractionNotice(tTools('bookmark.noBookmarksFound'));
      }
      setConfirmExtraction(false);
    } catch (err) {
      console.warn('Failed to extract bookmarks:', err);
      setError(tTools('bookmark.failedExtract'));
    } finally {
      setIsExtractingBookmarks(false);
    }
  };

  const handleExtractBookmarks = () => {
    if (bookmarks.length > 0) {
      setError(null);
      setConfirmExtraction(true);
    } else {
      void extractExistingBookmarks();
    }
  };

  // Render current page to canvas
  const renderPage = useCallback(async (pageNum: number) => {
    if (!pdfDoc || !canvasRef.current) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Calculate scale to fit container (max 600px width)
      const containerWidth = 600;
      const viewport = page.getViewport({ scale: 1 });
      const scale = Math.min(containerWidth / viewport.width, 1.5);
      const scaledViewport = page.getViewport({ scale });

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      await page.render({
        canvasContext: ctx,
        viewport: scaledViewport,
      }).promise;

    } catch (err) {
      console.error('Failed to render page:', err);
    }
  }, [pdfDoc]);

  // Render page when current page changes
  useEffect(() => {
    if (pdfDoc && currentPage > 0) {
      renderPage(currentPage);
    }
  }, [pdfDoc, currentPage, renderPage]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      processingRunRef.current += 1;
      setFile(files[0]);
      setPdfDoc(null);
      setStatus('idle');
      setError(null);
      setExtractionNotice(null);
      setConfirmExtraction(false);
      setConfirmRemoval(false);
      setConfirmSelectionRemoval(false);
      clearRemovalSelection();
      setRemovalNotice(null);
      setRemovedAll(false);
      setSelectedBookmarkId(null);
      setEditingBookmark(null);
      setMovingBookmarkId(null);
      setMoveNotice(null);
      draggedIdRef.current = null;
      setDraggedNodeId(null);
      setDragOverNodeId(null);
      setDropPosition(null);
      setResult(null);
      setBookmarks([]);
      loadPdf(files[0]);
    }
  }, [loadPdf, clearRemovalSelection]);

  const handleClearFile = useCallback(() => {
    processingRunRef.current += 1;
    setFile(null);
    setPdfDoc(null);
    setBookmarks([]);
    setResult(null);
    setError(null);
    setExtractionNotice(null);
    setConfirmExtraction(false);
    setConfirmRemoval(false);
    setConfirmSelectionRemoval(false);
    clearRemovalSelection();
    setRemovalNotice(null);
    setRemovedAll(false);
    setSelectedBookmarkId(null);
    setEditingBookmark(null);
    setMovingBookmarkId(null);
    setMoveNotice(null);
    draggedIdRef.current = null;
    setDraggedNodeId(null);
    setDragOverNodeId(null);
    setDropPosition(null);
    setStatus('idle');
    setCurrentPage(1);
    setTotalPages(0);
  }, [clearRemovalSelection]);

  const handleRemoveAllBookmarks = () => {
    if (isBusy || bookmarks.length === 0) return;
    removalConfirmedRef.current = true;
    setBookmarks([]);
    setSelectedBookmarkId(null);
    clearRemovalSelection();
    setRemovalNotice(null);
    setEditingBookmark(null);
    setMovingBookmarkId(null);
    setMoveNotice(null);
    draggedIdRef.current = null;
    setDraggedNodeId(null);
    setDragOverNodeId(null);
    setDropPosition(null);
    setResult(null);
    setError(null);
    setExtractionNotice(null);
    setStatus('idle');
    setRemovedAll(true);
    setConfirmRemoval(false);
  };

  const handleRemoveSelection = () => {
    if (isBusy || selectionRemoval.selectedCount === 0) return;
    selectionRemovalConfirmedRef.current = true;
    const updated = selectionRemoval.nodes;
    setBookmarks(updated);
    clearRemovalSelection();
    if (!findBookmark(updated, selectedBookmarkId)) setSelectedBookmarkId(null);
    if (editingBookmark && !findBookmark(updated, editingBookmark.id)) setEditingBookmark(null);
    if (!findBookmark(updated, movingBookmarkId)) setMovingBookmarkId(null);
    if (!findBookmark(updated, draggedIdRef.current)) {
      draggedIdRef.current = null;
      setDraggedNodeId(null);
      setDragOverNodeId(null);
      setDropPosition(null);
    } else if (!findBookmark(updated, dragOverNodeId)) {
      setDragOverNodeId(null);
      setDropPosition(null);
    }
    setResult(null);
    setError(null);
    setExtractionNotice(null);
    setMoveNotice(null);
    setRemovedAll(false);
    setStatus('idle');
    setRemovalNotice(tTools('bookmark.removedSelectionNotice', { count: selectionRemoval.removedCount }));
    setConfirmSelectionRemoval(false);
  };

  // Preview/insertion use the active entry; removal can include many entries.
  const handleBookmarkClick = (bookmark: BookmarkNode, event: React.MouseEvent) => {
    if (isBusy) return;
    const additive = event.ctrlKey || event.metaKey;
    setRemovalSelection(previous => {
      if (event.shiftKey) return selectBookmarkRange(visibleBookmarkIds, rangeAnchorId, bookmark.id, additive ? previous : undefined);
      if (!additive) return new Set([bookmark.id]);
      const next = new Set(previous);
      if (next.has(bookmark.id)) next.delete(bookmark.id);
      else next.add(bookmark.id);
      return next;
    });
    if (!event.shiftKey) setRangeAnchorId(bookmark.id);
    setSelectedBookmarkId(bookmark.id);
    setCurrentPage(bookmark.pageNumber);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (isBusy) return;
    setRemovalSelection(previous => {
      const next = new Set(previous);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
    setRangeAnchorId(id);
  };

  // Add new bookmark at current page
  const handleAddBookmark = useCallback(() => {
    const newBookmark: BookmarkNode = {
      id: `bm-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: tTools('bookmark.newBookmarkTitle', { page: currentPage }),
      pageNumber: currentPage,
      children: [],
      isExpanded: true,
    };
    setBookmarks(prev => insertBookmarkAfter(prev, newBookmark, selectedBookmarkId));
    setSelectedBookmarkId(newBookmark.id);
    setRemovalSelection(new Set([newBookmark.id]));
    setRangeAnchorId(newBookmark.id);
    setRemovalNotice(null);
    pendingRevealIdRef.current = newBookmark.id;
    setEditingBookmark(newBookmark);
    setResult(null);
    setRemovedAll(false);
    setMoveNotice(null);
  }, [currentPage, selectedBookmarkId, tTools]);

  // Add child bookmark
  const handleAddChild = useCallback((parentId: string) => {
    const newChild: BookmarkNode = {
      id: `bm-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: tTools('bookmark.newBookmarkTitle', { page: currentPage }),
      pageNumber: currentPage,
      children: [],
      isExpanded: true,
    };

    setBookmarks(prev => appendChildBookmark(prev, newChild, parentId));
    setSelectedBookmarkId(newChild.id);
    setRemovalSelection(new Set([newChild.id]));
    setRangeAnchorId(newChild.id);
    setRemovalNotice(null);
    pendingRevealIdRef.current = newChild.id;
    setEditingBookmark(newChild);
    setResult(null);
    setRemovedAll(false);
    setMoveNotice(null);
  }, [currentPage, tTools]);

  // Delete bookmark
  const handleDeleteBookmark = useCallback((id: string) => {
    const updated = removeBookmark(bookmarks, id);
    setBookmarks(updated);
    if (!findBookmark(updated, selectedBookmarkId)) setSelectedBookmarkId(null);
    if (editingBookmark && !findBookmark(updated, editingBookmark.id)) setEditingBookmark(null);
    setRemovalSelection(previous => new Set([...previous].filter(selectedId => findBookmark(updated, selectedId))));
    if (!findBookmark(updated, rangeAnchorId)) setRangeAnchorId(null);
    setRemovalNotice(null);
    setResult(null);
    setMoveNotice(null);
  }, [bookmarks, selectedBookmarkId, editingBookmark, rangeAnchorId]);

  // Update bookmark
  const handleUpdateBookmark = useCallback((updated: BookmarkDraft) => {
    // Ensure pageNumber is a valid number
    const pageNum = typeof updated.pageNumber === 'string' ? 1 : (updated.pageNumber || 1);
    const finalUpdate = { ...updated, pageNumber: pageNum };

    const updateIn = (nodes: BookmarkNode[]): BookmarkNode[] => {
      return nodes.map(node => {
        if (node.id === finalUpdate.id) {
          return { ...finalUpdate, children: node.children };
        }
        return { ...node, children: updateIn(node.children) };
      });
    };

    setBookmarks(prev => updateIn(prev));
    setEditingBookmark(null);
    setResult(null);
  }, []);

  // Toggle bookmark expansion
  const handleToggleExpand = useCallback((id: string) => {
    const toggleIn = (nodes: BookmarkNode[]): BookmarkNode[] => {
      return nodes.map(node => {
        if (node.id === id) {
          return { ...node, isExpanded: !node.isExpanded };
        }
        return { ...node, children: toggleIn(node.children) };
      });
    };

    setBookmarks(prev => toggleIn(prev));
  }, []);

  // Sort bookmarks by page number recursively, with title natural sort as fallback
  const handleSortBookmarks = useCallback(() => {
    const sortNodes = (nodes: BookmarkNode[]): BookmarkNode[] => {
      const sorted = [...nodes].sort((a, b) => {
        if (a.pageNumber !== b.pageNumber) {
          return a.pageNumber - b.pageNumber;
        }
        // Fallback to natural sort by title if on the same page
        return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
      });
      return sorted.map(node => ({
        ...node,
        children: sortNodes(node.children)
      }));
    };

    setBookmarks(prev => sortNodes(prev));
    setResult(null);
  }, []);

  const handleMoveNode = (sourceId: string, targetId: string, placement: BookmarkPlacement, focus = true) => {
    if (isBusy) return false;
    const updated = moveBookmark(bookmarks, sourceId, targetId, placement);
    if (updated === bookmarks) return false;
    const source = findBookmark(bookmarks, sourceId);
    setBookmarks(updated);
    setResult(null);
    setRemovalNotice(null);
    setMoveNotice(tTools('bookmark.movedNotice', { title: source?.title || '' }));
    pendingRevealIdRef.current = sourceId;
    if (focus) requestAnimationFrame(() => moveButtonRefs.current.get(sourceId)?.focus());
    return true;
  };

  const handleOpenMove = (id: string) => {
    if (isBusy || draggedIdRef.current || Date.now() - dragEndedAtRef.current < 250) return;
    moveFocusIdRef.current = id;
    setMovingBookmarkId(id);
    setMoveTargetId(getBookmarkMoveTargets(bookmarks, id)[0]?.node.id || '');
    setMovePlacement('after');
  };

  const handleDragEnd = () => {
    draggedIdRef.current = null;
    dragEndedAtRef.current = Date.now();
    setDraggedNodeId(null);
    setDragOverNodeId(null);
    setDropPosition(null);
  };

  const handleDragStart = (event: React.DragEvent, id: string) => {
    event.stopPropagation();
    if (isBusy) { event.preventDefault(); return; }
    draggedIdRef.current = id;
    setDraggedNodeId(id);
    event.dataTransfer.setData('application/x-awesomepdf-bookmark', id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, targetId: string) => {
    const sourceId = draggedIdRef.current;
    if (!sourceId) return;
    event.preventDefault();
    event.stopPropagation();
    if (isBusy || !canMoveBookmark(bookmarks, sourceId, targetId)) {
      event.dataTransfer.dropEffect = 'none';
      setDragOverNodeId(null);
      setDropPosition(null);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    event.dataTransfer.dropEffect = 'move';
    setDropPosition(getBookmarkPlacement(event.clientY, rect.top, rect.height));
    setDragOverNodeId(targetId);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetId: string) => {
    const sourceId = draggedIdRef.current;
    if (!sourceId) return;
    event.preventDefault();
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    handleMoveNode(sourceId, targetId, getBookmarkPlacement(event.clientY, rect.top, rect.height));
    handleDragEnd();
  };

  const movingBookmark = findBookmark(bookmarks, movingBookmarkId);
  const moveTargets = movingBookmarkId ? getBookmarkMoveTargets(bookmarks, movingBookmarkId) : [];

  // Process and save bookmarks
  const handleProcess = useCallback(async () => {
    if (!file || !pdfDoc || isBusy) return;

    const run = ++processingRunRef.current;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const options: BookmarkOptions = {
        action: 'add', // Use 'add' to replace all bookmarks
        bookmarks: convertToBookmarkItems(bookmarks),
      };

      const output: ProcessOutput = await processBookmarks(
        file,
        options,
        (prog) => {
          if (processingRunRef.current === run) {
            setProgress(prog);
          }
        }
      );

      if (processingRunRef.current !== run) return;
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to process bookmarks.');
        setStatus('error');
      }
    } catch (err) {
      if (processingRunRef.current !== run) return;
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setStatus('error');
    }
  }, [file, pdfDoc, bookmarks, isBusy]);

  // Render bookmark tree item
  const renderBookmarkItem = (bookmark: BookmarkNode, depth: number = 0) => {
    const isSelected = removalSelection.has(bookmark.id);
    const isActive = selectedBookmarkId === bookmark.id;
    const isEditing = editingBookmark?.id === bookmark.id;

    return (
      <div key={bookmark.id} data-bookmark-node={bookmark.id} role="listitem" style={{ marginInlineStart: depth > 0 ? 8 : 0 }}>
        <div
          data-bookmark-row={bookmark.id}
          onDragOver={(e) => handleDragOver(e, bookmark.id)}
          onDrop={(e) => handleDrop(e, bookmark.id)}
          onDragLeave={(event) => {
            if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
            if (dragOverNodeId === bookmark.id) { setDragOverNodeId(null); setDropPosition(null); }
          }}
          className={`group relative flex flex-wrap items-center gap-2 p-2 rounded cursor-pointer transition-colors border ${
            isSelected ? 'bg-accent text-accent-foreground border-primary' : 'border-transparent hover:bg-muted'
          } ${isActive ? 'ring-1 ring-border' : ''} ${
            dragOverNodeId === bookmark.id && dropPosition === 'inside' ? 'bg-primary/10 border-primary border-dashed' : ''
          }  ${
            draggedNodeId === bookmark.id ? 'opacity-30' : ''
          }`}
          onClick={event => handleBookmarkClick(bookmark, event)}
        >
          {dragOverNodeId === bookmark.id && dropPosition !== 'inside' && (
            <span aria-hidden="true" className={`pointer-events-none absolute inset-x-0 h-0.5 bg-primary ${dropPosition === 'before' ? 'top-0' : 'bottom-0'}`} />
          )}
          <span className="inline-flex min-h-8 min-w-8 items-center justify-center" onClick={event => event.stopPropagation()}>
            <Checkbox checked={isSelected} disabled={isBusy} className="size-6 sm:size-4"
              aria-label={tTools('bookmark.selectBookmark', { title: bookmark.title })}
              aria-describedby="bookmark-selection-hint"
              onCheckedChange={checked => handleCheckboxChange(bookmark.id, checked === true)}
            />
          </span>
          {/* Drag Handle */}
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground cursor-grab active:cursor-grabbing"
            ref={element => { if (element) moveButtonRefs.current.set(bookmark.id, element); else moveButtonRefs.current.delete(bookmark.id); }}
            aria-label={tTools('bookmark.moveBookmarkNamed', { title: bookmark.title })}
            aria-describedby="bookmark-move-hint" disabled={isBusy} draggable={!isBusy}
            onDragStart={event => handleDragStart(event, bookmark.id)} onDragEnd={handleDragEnd}
            onClick={event => { event.stopPropagation(); handleOpenMove(bookmark.id); }}
          >
            <UIGripVertical className="w-4 h-4" aria-hidden="true" />
          </Button>

          {/* Expand/collapse toggle */}
          {bookmark.children.length > 0 && (
            <Button variant="ghost" size="sm"
              disabled={isBusy}
              aria-label={tTools(bookmark.isExpanded ? 'bookmark.collapseBookmark' : 'bookmark.expandBookmark', { title: bookmark.title })}
              aria-expanded={Boolean(bookmark.isExpanded)}
              onClick={(e) => { e.stopPropagation(); handleToggleExpand(bookmark.id); }}
              className="w-5 h-5 flex items-center justify-center"
            >
              {bookmark.isExpanded ? '▼' : '▶'}
            </Button>
          )}
          {bookmark.children.length === 0 && <span className="w-5" />}

          {/* Bookmark content */}
          {isEditing ? (
            <fieldset disabled={isBusy} className="basis-full sm:basis-0 flex-1 min-w-0 flex flex-col gap-2 p-2 bg-muted rounded border border-border" onClick={(e) => e.stopPropagation()}>
              <div className="flex gap-2">
                <div className="min-w-0 flex-1">
                  <Label className="block text-[10px] uppercase mb-1" htmlFor="bookmarktool-field-1">{tTools('bookmark.title') || 'Title'}</Label>
                  <Input
                    type="text"
                    value={editingBookmark.title}
                    onChange={(e) => setEditingBookmark({ ...editingBookmark, title: e.target.value })}
                    className="w-full"
                    placeholder={tTools('bookmark.title') || 'Title'}
                    autoFocus id="bookmarktool-field-1" aria-label={tTools('bookmark.title') || 'Title'}
                  />
                </div>
                <div>
                  <Label className="block text-[10px] uppercase mb-1" htmlFor="bookmarktool-field-2">{tTools('bookmark.page') || 'Page'}</Label>
                  <div className="flex items-center gap-1">
                    <Input
                      type="text"
                      inputMode="numeric"
                      value={editingBookmark.pageNumber}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) {
                          setEditingBookmark({
                            ...editingBookmark,
                            pageNumber: val === '' ? '' : Math.min(totalPages, parseInt(val))
                          });
                        }
                      }}
                      className="w-14 h-8"
                      placeholder="1" id="bookmarktool-field-2" aria-label={tTools('bookmark.page') || 'Page'}
                    />
                    <Button variant="outline" size="icon-sm" aria-label={tTools('bookmark.setToCurrentPage') || 'Set to current page'}
                      type="button"
                      onClick={() => setEditingBookmark({ ...editingBookmark, pageNumber: currentPage })}
                      className="flex items-center justify-center"
                      title={tTools('bookmark.setToCurrentPage') || 'Set to current page'}
                    >
                      <UIEmojiMapPin className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex-shrink-0">
                  <Label className="block text-[10px] uppercase mb-1" htmlFor="bookmarktool-field-3">{tTools('bookmark.color') || 'Color'}</Label>
                  <Input
                    type="color"
                    value={editingBookmark.color || '#000000'}
                    onChange={(e) => setEditingBookmark({ ...editingBookmark, color: e.target.value })}
                    className="w-10 h-8 cursor-pointer"
                    title={tTools('bookmark.color') || 'Color'} id="bookmarktool-field-3" aria-label={tTools('bookmark.color') || 'Color'}
                  />
                </div>
                <div className="flex-1">
                  <Label className="block text-[10px] uppercase mb-1" htmlFor="bookmarktool-field-4">{tTools('bookmark.style') || 'Style'}</Label>
                  <NativeSelect
                    value={editingBookmark.style || ''}
                    onChange={(e) => setEditingBookmark({ ...editingBookmark, style: (e.target.value || undefined) as BookmarkNode['style'] })}
                    className="w-full h-8" id="bookmarktool-field-4" aria-label={tTools('bookmark.style') || 'Style'}
                  >
                    <NativeSelectOption value="">{tTools('bookmark.normal') || 'Normal'}</NativeSelectOption>
                    <NativeSelectOption value="bold">{tTools('bookmark.bold') || 'Bold'}</NativeSelectOption>
                    <NativeSelectOption value="italic">{tTools('bookmark.italic') || 'Italic'}</NativeSelectOption>
                    <NativeSelectOption value="bold-italic">{tTools('bookmark.boldItalic') || 'Bold & Italic'}</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div className="flex gap-1 self-end mb-0.5">
                  <Button size="sm" onClick={() => handleUpdateBookmark(editingBookmark)} title={t('buttons.save') || 'Save'} aria-label={t('buttons.save')}><UIEmojiCheck className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /></Button>
                  <Button size="sm" variant="ghost" onClick={() => setEditingBookmark(null)} title={t('buttons.cancel') || 'Cancel'} aria-label={t('buttons.cancel')}><UIEmojiX className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /></Button>
                </div>
              </div>
            </fieldset>
          ) : (
            <>
              <Button variant="ghost" disabled={isBusy} aria-pressed={isSelected} aria-current={isActive ? 'location' : undefined}
                className="h-auto min-w-0 flex-1 justify-start px-0 py-1 text-start"
                onClick={event => { event.stopPropagation(); handleBookmarkClick(bookmark, event); }}
              >
              <span
                className={`truncate text-sm ${
                  bookmark.style === 'bold' ? 'font-bold' :
                  bookmark.style === 'italic' ? 'italic' :
                  bookmark.style === 'bold-italic' ? 'font-bold italic' : ''
                }`}
                style={{ color: bookmark.color === '#000000' ? undefined : bookmark.color }}
              >
                {bookmark.title}
              </span>
              </Button>
              <span className="text-xs text-muted-foreground">p.{bookmark.pageNumber}</span>

              {/* Actions */}
              <div className="flex w-full justify-end gap-1 opacity-100 sm:w-auto sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100" style={{ opacity: isSelected ? 1 : undefined }}>
                <Button variant="ghost" size="icon-sm" aria-label={t('buttons.edit')}
                  disabled={isBusy}
                  onClick={(e) => { e.stopPropagation(); setSelectedBookmarkId(bookmark.id); setEditingBookmark(bookmark); }}

                  title={t('buttons.edit')}
                >
                  <UIEmojiPencil className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label={tTools('bookmark.addChild')}
                  disabled={isBusy}
                  onClick={(e) => { e.stopPropagation(); handleAddChild(bookmark.id); }}

                  title={tTools('bookmark.addChild')}
                >
                  +
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label={t('buttons.delete')}
                  disabled={isBusy}
                  onClick={(e) => { e.stopPropagation(); handleDeleteBookmark(bookmark.id); }}

                  title={t('buttons.delete')}
                >
                  ×
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Render children */}
        {bookmark.isExpanded && bookmark.children.length > 0 && (
          <div role="list" className="border-s border-border ms-2">
            {bookmark.children.map(child => renderBookmarkItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('bookmark.uploadLabel') || 'Upload PDF File'}
          description={tTools('bookmark.uploadDescription') || 'Drag and drop a PDF file to edit bookmarks.'}
        />
      )}

      {error && !confirmExtraction && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {extractionNotice && <Alert role="status"><AlertDescription>{extractionNotice}</AlertDescription></Alert>}
      {moveNotice && !result && !isProcessing && <Alert role="status"><AlertDescription>{moveNotice}</AlertDescription></Alert>}
      {removalNotice && !result && !isProcessing && <Alert role="status"><AlertDescription>{removalNotice}</AlertDescription></Alert>}
      {removedAll && bookmarks.length === 0 && !result && !isProcessing && (
        <Alert role="status"><AlertDescription>{tTools('bookmark.removedAllNotice')}</AlertDescription></Alert>
      )}

      <Dialog open={movingBookmarkId !== null} onOpenChange={open => { if (!open) setMovingBookmarkId(null); }}>
        <DialogContent showCloseButton={false} onCloseAutoFocus={event => {
          event.preventDefault();
          const button = moveButtonRefs.current.get(moveFocusIdRef.current || '');
          if (button) button.focus();
          else saveButtonRef.current?.focus();
        }}>
          <DialogHeader className="sm:text-start">
            <DialogTitle>{tTools('bookmark.moveBookmark')}</DialogTitle>
            <DialogDescription>{tTools('bookmark.moveDescription', { title: movingBookmark?.title || '' })}</DialogDescription>
          </DialogHeader>
          {moveTargets.length === 0 ? <p className="text-sm text-muted-foreground">{tTools('bookmark.noMoveTargets')}</p> : (
            <div className="space-y-4 [&_[data-slot=native-select-wrapper]]:w-full">
              <div className="space-y-2">
                <Label htmlFor="bookmark-move-target">{tTools('bookmark.moveTarget')}</Label>
                <NativeSelect id="bookmark-move-target" value={moveTargetId} disabled={isBusy} onChange={event => setMoveTargetId(event.target.value)}>
                  {moveTargets.map(({ node, depth }) => (
                    <NativeSelectOption key={node.id} value={node.id}>{'— '.repeat(depth)}{node.title} ({tTools('bookmark.page')} {node.pageNumber})</NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bookmark-move-position">{tTools('bookmark.movePosition')}</Label>
                <NativeSelect id="bookmark-move-position" value={movePlacement} disabled={isBusy} onChange={event => {
                  const value = event.target.value;
                  if (value === 'before' || value === 'after' || value === 'inside') setMovePlacement(value);
                }}>
                  <NativeSelectOption value="before">{tTools('bookmark.before')}</NativeSelectOption>
                  <NativeSelectOption value="after">{tTools('bookmark.after')}</NativeSelectOption>
                  <NativeSelectOption value="inside">{tTools('bookmark.inside')}</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setMovingBookmarkId(null)}>{t('buttons.cancel')}</Button>
            <Button disabled={isBusy || !movingBookmarkId || !canMoveBookmark(bookmarks, movingBookmarkId, moveTargetId)} onClick={() => {
              if (movingBookmarkId) handleMoveNode(movingBookmarkId, moveTargetId, movePlacement, false);
              setMovingBookmarkId(null);
            }}>{tTools('bookmark.moveButton')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={confirmSelectionRemoval} onOpenChange={setConfirmSelectionRemoval}>
        <AlertDialogContent onCloseAutoFocus={event => {
          event.preventDefault();
          if (selectionRemovalConfirmedRef.current) saveButtonRef.current?.focus();
          else removeSelectionButtonRef.current?.focus();
          selectionRemovalConfirmedRef.current = false;
        }}>
          <AlertDialogHeader className="sm:group-data-[size=default]/alert-dialog-content:text-start">
            <AlertDialogTitle>{tTools('bookmark.removeSelection')}</AlertDialogTitle>
            <AlertDialogDescription>{tTools('bookmark.removeSelectionConfirm', {
              selected: selectionRemoval.selectedCount, total: selectionRemoval.removedCount,
            })}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('buttons.cancel')}</AlertDialogCancel>
            <Button variant="destructive" disabled={isBusy || selectionRemoval.selectedCount === 0}
              onClick={handleRemoveSelection}>{tTools('bookmark.removeSelection')}</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={confirmRemoval} onOpenChange={setConfirmRemoval}>
        <AlertDialogContent onCloseAutoFocus={(event) => {
          event.preventDefault();
          if (removalConfirmedRef.current) saveButtonRef.current?.focus();
          else removeAllButtonRef.current?.focus();
          removalConfirmedRef.current = false;
        }}>
          <AlertDialogHeader>
            <AlertDialogTitle>{tTools('bookmark.removeAll')}</AlertDialogTitle>
            <AlertDialogDescription>{tTools('bookmark.removeAllConfirm')}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('buttons.cancel')}</AlertDialogCancel>
            <Button variant="destructive" onClick={handleRemoveAllBookmarks}>{tTools('bookmark.removeAll')}</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={confirmExtraction} onOpenChange={(open) => { if (!isExtractingBookmarks) setConfirmExtraction(open); }}>
        <AlertDialogContent onCloseAutoFocus={(event) => { event.preventDefault(); extractButtonRef.current?.focus(); }}>
          <AlertDialogHeader>
            <AlertDialogTitle>{tTools('bookmark.extractExisting')}</AlertDialogTitle>
            <AlertDialogDescription>{tTools('bookmark.replaceConfirm')}</AlertDialogDescription>
          </AlertDialogHeader>
          {error && <Alert variant="destructive"><UICircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
          {isExtractingBookmarks && <p role="status">{tTools('bookmark.extracting')}</p>}
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isExtractingBookmarks}>{t('buttons.cancel')}</AlertDialogCancel>
            <Button onClick={() => void extractExistingBookmarks()} disabled={isExtractingBookmarks}>{t('buttons.confirm')}</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {file && pdfDoc && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PDF Preview Panel */}
          <Card className="min-w-0 p-6"  >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{tTools('bookmark.pdfPreview') || 'PDF Preview'}</h3>
              <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isBusy}>
                {t('buttons.close') || 'Close'}
              </Button>
            </div>

            {/* Page navigation */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
              >
                ← {t('buttons.back') || 'Prev'}
              </Button>
              <span className="text-sm">
                Page {currentPage} / {totalPages}
              </span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
              >
                {t('buttons.next') || 'Next'} →
              </Button>
            </div>

            {/* Canvas */}
            <div className="flex justify-center bg-muted rounded p-4 overflow-auto max-h-[600px]">
              <canvas ref={canvasRef} className="shadow-lg" />
            </div>
          </Card>

          {/* Bookmark Editor Panel */}
          <Card className="min-w-0 p-6"  >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <h3 className="font-medium">{tTools('bookmark.bookmarksTitle') || 'Bookmarks'}</h3>
              <div className="flex flex-wrap gap-1">
                <Button
                  ref={extractButtonRef}
                  variant="secondary"
                  size="sm"
                  onClick={handleExtractBookmarks}
                  disabled={isBusy}
                  title={tTools('bookmark.extractExisting') || 'Extract Existing Bookmarks'}
                >
                  <UIEmojiDownload className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /> {tTools('bookmark.extractExisting') || 'Extract'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleSortBookmarks}
                  title={tTools('bookmark.sortByPage') || 'Sort by page number'}
                  disabled={bookmarks.length === 0 || isBusy}
                >
                  ↑↓ {tTools('bookmark.sort') || 'Sort'}
                </Button>
                <Button variant="destructive" size="sm" ref={removeAllButtonRef}
                  onClick={() => { removalConfirmedRef.current = false; setConfirmRemoval(true); }}
                  disabled={bookmarks.length === 0 || isBusy}
                >
                  <Trash2 aria-hidden="true" /> {tTools('bookmark.removeAll')}
                </Button>
                <Button variant="destructive" size="sm" ref={removeSelectionButtonRef}
                  onClick={() => { selectionRemovalConfirmedRef.current = false; setConfirmSelectionRemoval(true); }}
                  disabled={selectionRemoval.selectedCount === 0 || isBusy}
                >
                  <Trash2 aria-hidden="true" /> {tTools('bookmark.removeSelection')}
                </Button>
                <Button variant="default" size="sm" onClick={handleAddBookmark} disabled={isBusy}>
                  + {tTools('bookmark.addBookmark') || 'Add Bookmark'}
                </Button>
              </div>
            </div>

            <p className="mb-2 text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
              {tTools('bookmark.selectionCount', { count: selectionRemoval.selectedCount })}
            </p>

            {isExtractingBookmarks && (
              <p className="text-sm text-muted-foreground mb-4">{tTools('bookmark.extracting') || 'Extracting existing bookmarks...'}</p>
            )}

            {/* Bookmark list */}
            <div ref={listRef} className="border rounded max-h-[500px] overflow-y-auto">
              {bookmarks.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <p>{tTools('bookmark.noBookmarks') || 'No bookmarks yet. Click "Add Bookmark" to create one.'}</p>
                </div>
              ) : (
                <div role="list" aria-label={tTools('bookmark.bookmarksTitle')} className="p-2 space-y-1">
                  {bookmarks.map(bookmark => renderBookmarkItem(bookmark))}
                </div>
              )}
            </div>

            {/* Hint */}
            <div className="mt-2 space-y-1">
              <p id="bookmark-selection-hint" className="text-xs text-muted-foreground">{tTools('bookmark.selectionHint')}</p>
              <p className="text-xs text-muted-foreground">
                {tTools('bookmark.hint') || 'Click a bookmark to preview its page. Use +/✎/× to add child, edit, or delete.'}
              </p>
              <p className="text-xs text-muted-foreground">{tTools('bookmark.insertHint')}</p>
              <p id="bookmark-move-hint" className="text-xs text-primary font-medium">
                {tTools('bookmark.dragHint') || 'Drag and drop to reorder bookmarks.'}
              </p>
            </div>
          </Card>
        </div>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          onCancel={() => { processingRunRef.current += 1; setStatus('idle'); }}
          showPercentage
        />
      )}

      {file && pdfDoc && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            ref={saveButtonRef}
            variant="default"
            size="lg"
            onClick={handleProcess}
            disabled={isBusy}
            loading={isProcessing}
          >
            {isProcessing
              ? (t('status.processing') || 'Processing...')
              : (tTools('bookmark.saveButton') || 'Save Bookmarks')}
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', '_bookmarked.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('bookmark.successMessage') || 'Bookmarks saved successfully!'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default BookmarkTool;
