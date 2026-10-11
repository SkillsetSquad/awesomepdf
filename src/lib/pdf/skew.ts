/** Local scan analysis: find horizontal ink lines using a row-projection score. */
export interface ScanPixels { width: number; height: number; data: Uint8ClampedArray }
export interface ScanSkew { angle: number; confidence: number }

export function estimateScanSkew(image: ScanPixels, maximumAngle: number): ScanSkew {
  const { width, height, data } = image;
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 2 || height < 2
    || data.length !== width * height * 4 || !Number.isFinite(maximumAngle) || maximumAngle <= 0 || maximumAngle > 30) {
    throw new Error('Invalid scan analysis dimensions or angle limit.');
  }
  // Limit the projection cost independently of the selected rendering resolution.
  const stride = Math.max(1, Math.ceil(Math.max(width, height) / 800));
  const points: [number, number][] = [];
  let samples = 0;
  for (let y = stride; y < height - stride; y += stride) for (let x = stride; x < width - stride; x += stride) {
    samples++;
    const offset = (y * width + x) * 4;
    const lightness = data[offset] * 0.299 + data[offset + 1] * 0.587 + data[offset + 2] * 0.114;
    if (data[offset + 3] > 127 && lightness < 160) points.push([(x - width / 2) / stride, (y - height / 2) / stride]);
  }
  if (points.length < 80 || points.length > samples * 0.35) return { angle: 0, confidence: 0 };
  const radius = Math.ceil(Math.hypot(width, height) / stride / 2) + 2;
  const rows = new Float64Array(radius * 2 + 2);
  const score = (angle: number) => {
    rows.fill(0);
    const radians = angle * Math.PI / 180, cos = Math.cos(radians), sin = Math.sin(radians);
    for (const [x, y] of points) {
      const row = y * cos - x * sin + radius;
      const lower = Math.floor(row), fraction = row - lower;
      rows[lower] += 1 - fraction; rows[lower + 1] += fraction;
    }
    let value = 0;
    for (const count of rows) value += count * count;
    return value;
  };
  const baseline = score(0);
  let bestAngle = 0, bestScore = baseline;
  // Search outside the correction limit too, so an out-of-range tilt is not
  // mistaken for a weaker local peak within that limit.
  for (let angle = -30; angle <= 30; angle += 0.5) {
    const value = score(angle);
    if (value > bestScore) { bestScore = value; bestAngle = angle; }
  }
  const coarseAngle = bestAngle;
  for (let step = -10; step <= 10; step++) {
    const angle = coarseAngle + step * 0.05;
    if (Math.abs(angle) > 30) continue;
    const value = score(angle);
    if (value > bestScore) { bestScore = value; bestAngle = angle; }
  }
  const confidence = (bestScore - baseline) / bestScore;
  // A boundary peak can be a tilt beyond the allowed range; leave it unchanged.
  if (confidence < 0.05 || Math.abs(bestAngle) < 0.15 || Math.abs(bestAngle) > maximumAngle || Math.abs(bestAngle) >= 29.9) return { angle: 0, confidence };
  return { angle: Math.round(bestAngle * 100) / 100, confidence };
}

/** PDF-space correction around the visible page center, fitted inside the same box. */
export function scanCorrectionMatrix(box: { x: number; y: number; width: number; height: number }, clockwiseScanAngle: number): [number, number, number, number, number, number] {
  const radians = clockwiseScanAngle * Math.PI / 180, cos = Math.cos(radians), sin = Math.sin(radians);
  const scale = Math.min(box.width / (box.width * Math.abs(cos) + box.height * Math.abs(sin)), box.height / (box.height * Math.abs(cos) + box.width * Math.abs(sin)));
  const a = cos * scale, b = sin * scale, c = -sin * scale, d = cos * scale;
  const centerX = box.x + box.width / 2, centerY = box.y + box.height / 2;
  return [a, b, c, d, centerX - a * centerX - c * centerY, centerY - b * centerX - d * centerY];
}
