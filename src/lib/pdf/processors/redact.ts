/**
 * Redact PDF Processor
 *
 * Removes selected PDF content through the local PyMuPDF engine.
 * Canvas effects below are preview helpers only.
 */

import { removePDFContent, type EngineRedaction, type RedactionRect } from '../redaction-engine';

export type RedactionStyle = 'blackout' | 'whiteout' | 'mosaic' | 'blur' | 'custom-color';

/**
 * Coordinate point for freehand paths
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Redaction Area or Brush Stroke on a specific page
 */
export interface RedactionArea {
  /** Unique ID */
  id?: string;
  /** Drawing shape type: 'rect' (box) or 'brush' (freehand stroke) */
  type?: 'rect' | 'brush';
  /** Page number (1-indexed) */
  page: number;
  /** X coordinate (relative to pageWidth) */
  x: number;
  /** Y coordinate (relative to pageHeight) */
  y: number;
  /** Width */
  width: number;
  /** Height */
  height: number;
  /** Freehand path coordinate points (when type === 'brush') */
  path?: Point[];
  /** Brush stroke width in points/pixels (default: 20) */
  strokeWidth?: number;
  /** Page reference width */
  pageWidth?: number;
  /** Page reference height */
  pageHeight?: number;
  /** Redaction style */
  style?: RedactionStyle;
  /** Fill color for blackout/custom-color (default #000000) */
  color?: string;
  /** Draft outline color for UI display */
  draftColor?: string;
  /** Mosaic block size in pixels (default: 10) */
  blockSize?: number;
  /** Blur radius in pixels (default: 8) */
  blurRadius?: number;
  /** Optional text label overlay (e.g. "REDACTED") */
  label?: string;
}

/**
 * Validate redaction areas
 */
export function validateRedactionAreas(
  areas: RedactionArea[],
  totalPages: number
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!areas?.length) return { valid: false, errors: ['No redaction areas specified'] };
  areas.forEach((area, index) => {
    const at = `at area #${index + 1}`;
    if (!Number.isInteger(area.page) || area.page < 1 || area.page > totalPages) errors.push(`Invalid page number ${area.page} ${at}`);
    for (const [name, value] of Object.entries({ 'X coordinate': area.x, 'Y coordinate': area.y, Width: area.width, Height: area.height })) {
      if (!Number.isFinite(value) || value < 0) errors.push(`${name} cannot be negative or non-finite ${at}`);
    }
    if (area.type === 'brush') {
      if (!area.path?.length) errors.push(`Brush path cannot be empty ${at}`);
      if (area.path?.some(pt => !Number.isFinite(pt.x) || !Number.isFinite(pt.y) || pt.x < 0 || pt.y < 0)) errors.push(`Invalid brush coordinates ${at}`);
      if (area.strokeWidth !== undefined && (!Number.isFinite(area.strokeWidth) || area.strokeWidth <= 0)) errors.push(`Brush stroke width must be positive ${at}`);
    } else if (area.width === 0 || area.height === 0) {
      errors.push(`Width and height must be positive ${at}`);
    }
    if ([area.pageWidth, area.pageHeight].some(v => v !== undefined && (!Number.isFinite(v) || v <= 0))) errors.push(`Invalid reference page dimensions ${at}`);
    if (area.style === 'mosaic' || area.style === 'blur') errors.push(`Blur and mosaic cannot permanently redact content ${at}`);
    if (area.color && !/^#[\da-f]{6}$/i.test(area.color)) errors.push(`Invalid opaque redaction color ${at}`);
  });
  return { valid: errors.length === 0, errors };
}

/**
 * Options for redacting PDF
 */
export interface RedactOptions {
  /**
   * If true, rasterizes all pages for maximum uniformity.
   * If false, preserves remaining text and vector content on all pages.
   * Default: false
   */
  flattenAllPages?: boolean;
  /**
   * @deprecated Metadata stripping is always enforced for redaction outputs.
   */
  stripMetadata?: boolean;
  /**
   * @deprecated Annotation and form removal is always enforced for redaction outputs.
   */
  purgeAnnotations?: boolean;
  /**
   * Rendering scale for rasterized pages (higher = crisper, default: 2.0)
   */
  renderScale?: number;
  /**
   * @deprecated Flattened output uses lossless PNG images.
   */
  outputQuality?: number;
}

/** The same conservative brush coverage is used by preview and export. */
export function getBrushRedactionRects(area: RedactionArea): RedactionRect[] {
  const radius = (area.strokeWidth ?? 20) / 2;
  return (area.path ?? []).flatMap((point, index, path) => {
    const previous = path[Math.max(0, index - 1)];
    const steps = Math.max(1, Math.ceil(Math.hypot(point.x - previous.x, point.y - previous.y) / radius));
    return Array.from({ length: steps }, (_, step): RedactionRect => {
      const x0 = previous.x + (point.x - previous.x) * step / steps;
      const y0 = previous.y + (point.y - previous.y) * step / steps;
      const x1 = previous.x + (point.x - previous.x) * (step + 1) / steps;
      const y1 = previous.y + (point.y - previous.y) * (step + 1) / steps;
      return [Math.min(x0, x1) - radius, Math.min(y0, y1) - radius,
        Math.max(x0, x1) + radius, Math.max(y0, y1) + radius];
    });
  });
}

/**
 * Apply solid color blackout or whiteout to a canvas region
 */
export function applySolidFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color = '#000000',
  label?: string
): void {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

  if (label) {
    ctx.fillStyle = color === '#000000' ? '#ffffff' : '#000000';
    const fontSize = Math.max(10, Math.min(18, Math.floor(h * 0.6)));
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x + w / 2, y + h / 2, w - 4);
  }
  ctx.restore();
}

/**
 * Apply pixelate / mosaic to a canvas region
 */
export function applyPixelate(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  blockSize = 10
): void {
  const roundX = Math.max(0, Math.floor(x));
  const roundY = Math.max(0, Math.floor(y));
  const roundW = Math.min(ctx.canvas.width - roundX, Math.ceil(w));
  const roundH = Math.min(ctx.canvas.height - roundY, Math.ceil(h));

  if (roundW <= 0 || roundH <= 0) return;

  const imageData = ctx.getImageData(roundX, roundY, roundW, roundH);
  const data = imageData.data;
  const actualBlock = Math.max(2, Math.floor(blockSize));

  for (let by = 0; by < roundH; by += actualBlock) {
    for (let bx = 0; bx < roundW; bx += actualBlock) {
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let aSum = 0;
      let count = 0;

      const blockH = Math.min(actualBlock, roundH - by);
      const blockW = Math.min(actualBlock, roundW - bx);

      for (let dy = 0; dy < blockH; dy++) {
        for (let dx = 0; dx < blockW; dx++) {
          const idx = ((by + dy) * roundW + (bx + dx)) * 4;
          rSum += data[idx];
          gSum += data[idx + 1];
          bSum += data[idx + 2];
          aSum += data[idx + 3];
          count++;
        }
      }

      if (count > 0) {
        const rAvg = Math.round(rSum / count);
        const gAvg = Math.round(gSum / count);
        const bAvg = Math.round(bSum / count);
        const aAvg = Math.round(aSum / count);

        for (let dy = 0; dy < blockH; dy++) {
          for (let dx = 0; dx < blockW; dx++) {
            const idx = ((by + dy) * roundW + (bx + dx)) * 4;
            data[idx] = rAvg;
            data[idx + 1] = gAvg;
            data[idx + 2] = bAvg;
            data[idx + 3] = aAvg;
          }
        }
      }
    }
  }

  ctx.putImageData(imageData, roundX, roundY);
}

/**
 * Apply fast box blur to a canvas region
 */
export function applyBlur(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius = 8
): void {
  const roundX = Math.max(0, Math.floor(x));
  const roundY = Math.max(0, Math.floor(y));
  const roundW = Math.min(ctx.canvas.width - roundX, Math.ceil(w));
  const roundH = Math.min(ctx.canvas.height - roundY, Math.ceil(h));

  if (roundW <= 0 || roundH <= 0) return;

  const actualRadius = Math.max(1, Math.min(30, Math.floor(radius)));
  const imageData = ctx.getImageData(roundX, roundY, roundW, roundH);
  const data = imageData.data;
  const temp = new Uint8ClampedArray(data);

  // Multi-pass horizontal + vertical box blur for near-gaussian softness
  const passes = 2;
  for (let p = 0; p < passes; p++) {
    // Horizontal pass
    for (let row = 0; row < roundH; row++) {
      for (let col = 0; col < roundW; col++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0;
        const start = Math.max(0, col - actualRadius);
        const end = Math.min(roundW - 1, col + actualRadius);

        for (let k = start; k <= end; k++) {
          const idx = (row * roundW + k) * 4;
          r += temp[idx];
          g += temp[idx + 1];
          b += temp[idx + 2];
          a += temp[idx + 3];
          count++;
        }

        const outIdx = (row * roundW + col) * 4;
        data[outIdx] = Math.round(r / count);
        data[outIdx + 1] = Math.round(g / count);
        data[outIdx + 2] = Math.round(b / count);
        data[outIdx + 3] = Math.round(a / count);
      }
    }
    temp.set(data);

    // Vertical pass
    for (let col = 0; col < roundW; col++) {
      for (let row = 0; row < roundH; row++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0;
        const start = Math.max(0, row - actualRadius);
        const end = Math.min(roundH - 1, row + actualRadius);

        for (let k = start; k <= end; k++) {
          const idx = (k * roundW + col) * 4;
          r += temp[idx];
          g += temp[idx + 1];
          b += temp[idx + 2];
          a += temp[idx + 3];
          count++;
        }

        const outIdx = (row * roundW + col) * 4;
        data[outIdx] = Math.round(r / count);
        data[outIdx + 1] = Math.round(g / count);
        data[outIdx + 2] = Math.round(b / count);
        data[outIdx + 3] = Math.round(a / count);
      }
    }
    temp.set(data);
  }

  ctx.putImageData(imageData, roundX, roundY);
}

/**
 * Apply a freehand brush stroke redaction to a canvas
 */
export function renderBrushOnCanvas(
  ctx: CanvasRenderingContext2D,
  area: RedactionArea,
  canvasWidth: number,
  canvasHeight: number
): void {
  if (!area.path || area.path.length === 0) return;

  const scaleX = area.pageWidth ? canvasWidth / area.pageWidth : 1;
  const scaleY = area.pageHeight ? canvasHeight / area.pageHeight : 1;
  const strokeW = Math.max(1, (area.strokeWidth || 20) * scaleX);

  const pts = area.path.map((pt) => ({
    x: pt.x * scaleX,
    y: pt.y * scaleY,
  }));

  const drawStrokePath = (c: CanvasRenderingContext2D, offsetX = 0, offsetY = 0) => {
    c.beginPath();
    c.lineCap = 'round';
    c.lineJoin = 'round';
    c.lineWidth = strokeW;

    if (pts.length === 1) {
      c.arc(pts[0].x - offsetX, pts[0].y - offsetY, strokeW / 2, 0, Math.PI * 2);
      c.fill();
    } else {
      c.moveTo(pts[0].x - offsetX, pts[0].y - offsetY);
      for (let i = 1; i < pts.length; i++) {
        c.lineTo(pts[i].x - offsetX, pts[i].y - offsetY);
      }
      c.stroke();
    }
  };

  const style = area.style || 'blackout';

  if (style === 'blackout' || style === 'whiteout' || style === 'custom-color') {
    ctx.save();
    const fillColor =
      style === 'whiteout'
        ? '#ffffff'
        : style === 'custom-color'
        ? area.color || '#000000'
        : '#000000';
    ctx.strokeStyle = fillColor;
    ctx.fillStyle = fillColor;
    drawStrokePath(ctx);
    ctx.restore();
    return;
  }

  // Handle mosaic or blur along brush stroke using clipping mask
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of pts) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const padding = Math.ceil(strokeW / 2) + 2;
  const bx = Math.max(0, Math.floor(minX - padding));
  const by = Math.max(0, Math.floor(minY - padding));
  const bw = Math.min(canvasWidth - bx, Math.ceil(maxX + padding) - bx);
  const bh = Math.min(canvasHeight - by, Math.ceil(maxY + padding) - by);

  if (bw <= 0 || bh <= 0) return;

  try {
    if (typeof document !== 'undefined' && ctx.canvas) {
      const effectCanvas = document.createElement('canvas');
      effectCanvas.width = bw;
      effectCanvas.height = bh;
      const effectCtx = effectCanvas.getContext('2d', { willReadFrequently: true });

      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = bw;
      maskCanvas.height = bh;
      const maskCtx = maskCanvas.getContext('2d');

      if (effectCtx && maskCtx) {
        // Copy original background pixels into effect canvas
        effectCtx.drawImage(ctx.canvas, bx, by, bw, bh, 0, 0, bw, bh);

        if (style === 'mosaic') {
          applyPixelate(effectCtx, 0, 0, bw, bh, (area.blockSize || 10) * scaleX);
        } else if (style === 'blur') {
          applyBlur(effectCtx, 0, 0, bw, bh, (area.blurRadius || 8) * scaleX);
        }

        // Draw brush stroke on mask canvas
        maskCtx.fillStyle = '#ffffff';
        maskCtx.strokeStyle = '#ffffff';
        drawStrokePath(maskCtx, bx, by);

        // Mask the effect with the brush path
        maskCtx.globalCompositeOperation = 'source-in';
        maskCtx.drawImage(effectCanvas, 0, 0);

        // Blit back onto original canvas
        ctx.save();
        ctx.drawImage(maskCanvas, bx, by);
        ctx.restore();
        return;
      }
    }
  } catch (err) {
    console.warn('Masked brush composite failed, falling back to solid stroke:', err);
  }

  // Fallback if masking canvas is unavailable (e.g. headless unit tests)
  ctx.save();
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#000000';
  drawStrokePath(ctx);
  ctx.restore();
}

/**
 * Apply a single redaction area to a canvas
 */
export function renderRedactionAreaOnCanvas(
  ctx: CanvasRenderingContext2D,
  area: RedactionArea,
  canvasWidth: number,
  canvasHeight: number
): void {
  if (area.type === 'brush' && area.path && area.path.length > 0) {
    renderBrushOnCanvas(ctx, area, canvasWidth, canvasHeight);
    return;
  }

  const scaleX = area.pageWidth ? canvasWidth / area.pageWidth : 1;
  const scaleY = area.pageHeight ? canvasHeight / area.pageHeight : 1;

  const rx = Math.floor(area.x * scaleX);
  const ry = Math.floor(area.y * scaleY);
  const rw = Math.ceil(area.width * scaleX);
  const rh = Math.ceil(area.height * scaleY);

  if (rw <= 0 || rh <= 0) return;

  switch (area.style) {
    case 'mosaic':
      applyPixelate(ctx, rx, ry, rw, rh, (area.blockSize || 10) * scaleX);
      break;
    case 'blur':
      applyBlur(ctx, rx, ry, rw, rh, (area.blurRadius || 8) * scaleX);
      break;
    case 'whiteout':
      applySolidFill(ctx, rx, ry, rw, rh, '#ffffff', area.label);
      break;
    case 'custom-color':
      applySolidFill(ctx, rx, ry, rw, rh, area.color || '#000000', area.label);
      break;
    case 'blackout':
    default:
      applySolidFill(ctx, rx, ry, rw, rh, '#000000', area.label);
      break;
  }
}

/**
 * Execute Redaction on PDF
 */
export async function redactPDF(
  file: File | ArrayBuffer,
  redactionsByPage: Record<number, RedactionArea[]>,
  options: RedactOptions = {},
  onProgress?: (percent: number, message: string) => void
): Promise<Uint8Array> {
  const areas = Object.entries(redactionsByPage).flatMap(([page, redactions]) => {
    if (redactions.some(area => area.page !== Number(page))) throw new Error('Redaction page does not match its page group');
    return redactions;
  });
  const validation = validateRedactionAreas(areas, Number.MAX_SAFE_INTEGER);
  if (!validation.valid) throw new Error(validation.errors.join('; '));
  const engineAreas: EngineRedaction[] = [];
  for (const area of areas) {
    const color = area.style === 'whiteout' ? '#ffffff' : area.style === 'custom-color' ? area.color ?? '#000000' : '#000000';
    const base = { page: area.page, coordinates: 'display' as const, pageWidth: area.pageWidth, pageHeight: area.pageHeight, color, label: area.label };
    if (area.type === 'brush' && area.path) {
      // Conservative rectangular envelopes cover every brush segment, including round caps.
      engineAreas.push(...getBrushRedactionRects(area).map(rect => ({ ...base, rect })));
    } else {
      engineAreas.push({ ...base, rect: [area.x, area.y, area.x + area.width, area.y + area.height] });
    }
  }
  onProgress?.(10, 'Loading the local redaction engine...');
  const result = await removePDFContent(file, engineAreas, {
    flattenAllPages: options.flattenAllPages,
    renderScale: options.renderScale,
  });
  onProgress?.(100, 'Redaction completed successfully!');
  return result;
}

export type RedactionOptions = RedactOptions;

export interface RedactionResult {
  success: boolean;
  pdfBytes?: Uint8Array;
  error?: string;
}

export const applyRedactions = redactPDF;
