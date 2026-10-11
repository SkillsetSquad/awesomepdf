import { describe, expect, it } from 'vitest';
import { estimateScanSkew, scanCorrectionMatrix, type ScanPixels } from '@/lib/pdf/skew';

function scan(angle: number, width = 640, height = 800): ScanPixels {
  const data = new Uint8ClampedArray(width * height * 4).fill(255);
  const slope = Math.tan(angle * Math.PI / 180);
  for (let row = 100; row < height - 100; row += 40) for (let x = 80; x < width - 80; x++) {
    if (Math.floor(x / 30) % 4 === 0) continue;
    const baseline = row + slope * (x - width / 2);
    for (let thickness = 0; thickness < 3; thickness++) {
      const y = Math.round(baseline) + thickness;
      if (y < 0 || y >= height) continue;
      const offset = (y * width + x) * 4; data[offset] = data[offset + 1] = data[offset + 2] = 20;
    }
  }
  return { width, height, data };
}

describe('Scan tilt analysis', () => {
  it.each([-12, -5.4, -2, 0, 1.5, 5, 12])('detects ink-line tilt %s° without measuring the white background', angle => {
    const found = estimateScanSkew(scan(angle), 15); expect(found.angle).toBeCloseTo(angle, 1);
    if (angle) expect(found.confidence).toBeGreaterThan(0.05);
  });
  it('respects the maximum angle and leaves an out-of-range tilt unchanged', () => {
    expect(estimateScanSkew(scan(8), 3).angle).toBe(0); expect(estimateScanSkew(scan(8), 15).angle).toBeCloseTo(8, 1);
  });
  it.each([255, 0])('does not rotate uniform pages with pixel value %s', value => {
    const data = new Uint8ClampedArray(200 * 300 * 4).fill(value); for (let i = 3; i < data.length; i += 4) data[i] = 255;
    expect(estimateScanSkew({ width: 200, height: 300, data }, 10).angle).toBe(0);
  });
  it('keeps the same angle when analysis is downsampled for large scans', () => { expect(estimateScanSkew(scan(-3, 1600, 2000), 10).angle).toBeCloseTo(-3, 1); });
  it.each([-8, 8])('fits the corrected visible corners within nonzero page-box origins (%s°)', angle => {
    const box = { x: 130, y: 90, width: 500, height: 700 }, [a, b, c, d, e, f] = scanCorrectionMatrix(box, angle);
    for (const [x, y] of [[130, 90], [630, 90], [130, 790], [630, 790]]) {
      const tx = a * x + c * y + e, ty = b * x + d * y + f;
      expect(tx).toBeGreaterThanOrEqual(130 - 1e-8); expect(tx).toBeLessThanOrEqual(630 + 1e-8); expect(ty).toBeGreaterThanOrEqual(90 - 1e-8); expect(ty).toBeLessThanOrEqual(790 + 1e-8);
    }
    expect(a * 380 + c * 440 + e).toBeCloseTo(380); expect(b * 380 + d * 440 + f).toBeCloseTo(440);
  });
});
