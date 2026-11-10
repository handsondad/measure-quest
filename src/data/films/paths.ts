import type { Point } from "./types.ts";

/** 圆（或一段圆弧）上的点。角度照钟面算：0 是正上方，顺时针，单位是度 */
export function arc(center: Point, r: number, fromDeg = 0, toDeg = 360, steps = 48): Point[] {
  const out: Point[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const a = ((fromDeg + ((toDeg - fromDeg) * i) / steps) * Math.PI) / 180;
    out.push([Math.round(center[0] + r * Math.sin(a)), Math.round(center[1] - r * Math.cos(a))]);
  }
  return out;
}

/** 手一拃一拃量过去的弧线：从 x0 起量 count 拃，每拃 width 长、拱起 lift 高 */
export function spans(x0: number, y: number, count: number, width: number, lift: number): Point[] {
  const out: Point[] = [[x0, y]];
  for (let i = 0; i < count; i += 1) {
    const x = x0 + i * width;
    out.push([x + width * 0.25, y - lift * 0.8], [x + width * 0.5, y - lift], [x + width * 0.75, y - lift * 0.8], [x + width, y]);
  }
  return out;
}
