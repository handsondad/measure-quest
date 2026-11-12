import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import type { Cue, FilmScene, Point, ViewId } from "../../data/films/types";
import { cameraAt, clockHands, ease, envelope, FRAME, partialPath, pathLength, pointAlong, turnAt, type Camera, type Vec } from "../../lib/film";
import { smooth } from "../../lib/motion";

const ink = "#4a3b2a";

/**
 * 标签、箭头、大字保持屏幕上的大小不变，k = 1 / 镜头放大倍数。
 * ui 在 k 的基础上再按舞台实际宽度放大文字，窄屏上也看得清。
 */
type Ctx = { t: number; k: number; ui: number; alpha: number; camera: Camera };

/** 舞台小于这个宽度（CSS 像素）时放大文字，最多放大 maxLegibility 倍 */
const comfortableWidth = 560;
const maxLegibility = 1.6;

/** 字幕性质的元素：坐标是镜头里的屏幕位置 */
function captionPoint([sx, sy]: Point, ctx: Ctx): Vec {
  return [ctx.camera.x + (sx / FRAME.width) * ctx.camera.width, ctx.camera.y + (sy / FRAME.height) * ctx.camera.height];
}

/** 大字和计数牌常常几块并排，只放大一半，免得互相挤到 */
const captionScale = (ctx: Ctx) => ctx.k * Math.sqrt(ctx.ui / ctx.k);

/** 放大后的文字块不能被画面边缘裁掉 */
function keepInside([x, y]: Vec, halfWidth: number, halfHeight: number, ctx: Ctx): Vec {
  const { camera } = ctx;
  const margin = 6 * ctx.ui;
  const clamp = (value: number, low: number, high: number) => (low > high ? (low + high) / 2 : Math.min(Math.max(value, low), high));
  return [
    clamp(x, camera.x + halfWidth + margin, camera.x + camera.width - halfWidth - margin),
    clamp(y, camera.y + halfHeight + margin, camera.y + camera.height - halfHeight - margin)
  ];
}

const polyline = (points: readonly Vec[]) => points.map((p) => p.join(",")).join(" ");

/** 星空里星星的位置每次都一样，不能用 Math.random */
const stars: readonly (readonly [number, number, number])[] = Array.from({ length: 70 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12543.1234;
  return [(a - Math.floor(a)) * FRAME.width, (b - Math.floor(b)) * FRAME.height, 1.5 + (i % 3)];
});

function Backdrop({ view, t }: { view?: ViewId; t: number }) {
  if (view === "grid") {
    const lines: ReactNode[] = [];
    for (let x = 0; x <= FRAME.width; x += 50) lines.push(<line key={`x${x}`} x1={x} y1={0} x2={x} y2={FRAME.height} strokeWidth={x % 250 ? 1.5 : 3} />);
    for (let y = 0; y <= FRAME.height; y += 50) lines.push(<line key={`y${y}`} x1={0} y1={y} x2={FRAME.width} y2={y} strokeWidth={y % 250 ? 1.5 : 3} />);
    return <g stroke="#9cc7ea" opacity={0.55}>{lines}</g>;
  }
  if (view === "space") {
    return (
      <g>
        {stars.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity={0.35 + 0.35 * Math.sin(t * 1.5 + i)} />
        ))}
      </g>
    );
  }
  if (view === "market") {
    const stripes = 10;
    const width = FRAME.width / stripes;
    return (
      <g>
        {Array.from({ length: stripes }, (_, i) => (
          <path key={i} d={`M${i * width} 0 H${(i + 1) * width} V90 Q${(i + 0.5) * width} 140 ${i * width} 90 Z`} fill={i % 2 ? "#fff6e8" : "#ff7a6b"} />
        ))}
        <rect x={0} y={720} width={FRAME.width} height={180} fill="#d9a066" />
        <rect x={0} y={710} width={FRAME.width} height={22} fill="#b97d43" />
        {[120, 420, 780, 1080].map((x) => <line key={x} x1={x} y1={760} x2={x + 60} y2={860} stroke="#c58d55" strokeWidth={6} strokeLinecap="round" />)}
      </g>
    );
  }
  return null;
}

function Label({ cue, ctx }: { cue: Extract<Cue, { kind: "label" }>; ctx: Ctx }) {
  const { k, ui, alpha } = ctx;
  const [ax, ay] = cue.at;
  const side = cue.side ?? (ax < 600 ? "left" : "right");
  const offset: Record<string, Vec> = { left: [-170 * ui, -40 * ui], right: [170 * ui, -40 * ui], top: [0, -120 * ui], bottom: [0, 120 * ui] };
  const size = 30 * ui;
  const width = [...cue.text].length * size + 28 * ui;
  const height = size + 20 * ui;
  const [px, py] = keepInside(cue.pos ?? [ax + offset[side][0], ay + offset[side][1]], width / 2, height / 2, ctx);
  const pop = ease.backOut((ctx.t - cue.from) / 0.45);
  const color = cue.color ?? ink;
  return (
    <g opacity={alpha}>
      <line x1={ax} y1={ay} x2={px} y2={py} stroke={color} strokeWidth={3 * k} strokeDasharray={`${8 * k} ${6 * k}`} />
      <circle cx={ax} cy={ay} r={8 * k} fill="#fff" stroke={color} strokeWidth={4 * k} />
      <g className="film-on-light" transform={`translate(${px} ${py}) scale(${Math.max(pop, 0.01)})`}>
        <rect x={-width / 2} y={-height / 2} width={width} height={height} rx={height / 2} fill="#fff" stroke={color} strokeWidth={3 * k} />
        <text className="film-text" fontSize={size} textAnchor="middle" dominantBaseline="central" fill={color}>{cue.text}</text>
      </g>
    </g>
  );
}

function Highlight({ cue, ctx }: { cue: Extract<Cue, { kind: "highlight" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const [w, h] = cue.size ?? [240, 240];
  const color = cue.color ?? "#ffb300";
  const glow = 0.8 + 0.2 * Math.sin(ctx.t * 4);
  return (
    <ellipse
      cx={x} cy={y} rx={w / 2} ry={h / 2}
      fill={color} fillOpacity={0.16 * glow} stroke={color} strokeWidth={5 * ctx.k}
      strokeDasharray={`${16 * ctx.k} ${10 * ctx.k}`} strokeDashoffset={-ctx.t * 40 * ctx.k} opacity={ctx.alpha}
    />
  );
}

function Pulse({ cue, ctx }: { cue: Extract<Cue, { kind: "pulse" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const color = cue.color ?? "#ff5a5f";
  const radius = cue.radius ?? 70;
  const rate = cue.rate ?? 1.2;
  const rings = [0, 1, 2].map((i) => {
    const phase = (((ctx.t - cue.from) * rate + i / 3) % 1 + 1) % 1;
    return <circle key={i} cx={x} cy={y} r={radius * phase} fill="none" stroke={color} strokeWidth={6 * ctx.k} opacity={(1 - phase) * ctx.alpha} />;
  });
  return <g>{rings}<circle cx={x} cy={y} r={10 * ctx.k} fill={color} opacity={ctx.alpha} /></g>;
}

function Flow({ cue, ctx }: { cue: Extract<Cue, { kind: "flow" }>; ctx: Ctx }) {
  const points = cue.path;
  const length = Math.max(pathLength(points), 1);
  const count = cue.count ?? 8;
  const speed = cue.speed ?? 220;
  const size = cue.size ?? 10;
  const color = cue.color ?? "#4fb6ff";
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        // speed 为 0 是一排静止的点（星座、秤星），两头都要摆上、不淡出
        const still = speed === 0;
        const u = still ? (count > 1 ? i / (count - 1) : 0.5) : ((((ctx.t - cue.from) * speed) / length + i / count) % 1 + 1) % 1;
        const [x, y] = pointAlong(points, u);
        const edge = still ? 1 : Math.min(1, u / 0.08, (1 - u) / 0.08);
        return cue.icon ? (
          <text key={i} x={x} y={y} fontSize={size * 2.6} textAnchor="middle" dominantBaseline="central" opacity={ctx.alpha * edge}>{cue.icon}</text>
        ) : (
          <circle key={i} cx={x} cy={y} r={size} fill={color} stroke="#fff" strokeWidth={2.5} opacity={ctx.alpha * edge} />
        );
      })}
    </g>
  );
}

function Arrow({ cue, ctx }: { cue: Extract<Cue, { kind: "arrow" }>; ctx: Ctx }) {
  const { k } = ctx;
  const points = cue.path;
  const progress = ease.inOut((ctx.t - cue.from) / (cue.draw ?? 0.8));
  const drawn = partialPath(points, Math.max(progress, 0.001));
  const color = cue.color ?? "#ff7a2f";
  const tip = drawn[drawn.length - 1];
  const prev = drawn.length > 1 ? drawn[drawn.length - 2] : points[0];
  const angle = Math.atan2(tip[1] - prev[1], tip[0] - prev[0]);
  const head = 26 * k;
  const wing = (turn: number): Vec => [tip[0] - head * Math.cos(angle + turn), tip[1] - head * Math.sin(angle + turn)];
  const mid = pointAlong(points, 0.5);
  const fullAngle = Math.atan2(points[points.length - 1][1] - points[0][1], points[points.length - 1][0] - points[0][0]);
  const steep = Math.abs(Math.cos(fullAngle)) < 0.55;
  const onLeft = mid[0] > 900;
  return (
    <g opacity={ctx.alpha}>
      <polyline points={polyline(drawn)} fill="none" stroke="#fff" strokeWidth={15 * k} strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={polyline(drawn)} fill="none" stroke={color} strokeWidth={8 * k} strokeLinecap="round" strokeLinejoin="round" />
      {progress > 0.05 && <polygon points={polyline([tip, wing(0.5), wing(-0.5)])} fill={color} stroke="#fff" strokeWidth={3 * k} strokeLinejoin="round" />}
      {cue.text && progress > 0.6 && (
        <text
          className="film-text"
          x={steep ? mid[0] + (onLeft ? -22 * k : 22 * k) : mid[0]}
          y={steep ? mid[1] : mid[1] - 30 * ctx.ui}
          fontSize={28 * ctx.ui}
          textAnchor={steep ? (onLeft ? "end" : "start") : "middle"}
          dominantBaseline={steep ? "central" : undefined}
          fill={color}
          opacity={smooth((progress - 0.6) / 0.4)}
        >{cue.text}</text>
      )}
    </g>
  );
}

function Line({ cue, ctx }: { cue: Extract<Cue, { kind: "line" }>; ctx: Ctx }) {
  const progress = ease.inOut((ctx.t - cue.from) / (cue.draw ?? 0.8));
  const drawn = partialPath(cue.path, Math.max(progress, 0.001));
  const width = cue.width ?? 6;
  return (
    <polyline
      points={polyline(drawn)} fill="none" stroke={cue.color ?? ink} strokeWidth={width}
      strokeDasharray={cue.dashed ? `${width * 3} ${width * 2}` : undefined}
      strokeLinecap="round" strokeLinejoin="round" opacity={ctx.alpha}
    />
  );
}

function Sprite({ cue, ctx }: { cue: Extract<Cue, { kind: "sprite" }>; ctx: Ctx }) {
  const points = cue.path;
  const local = ctx.t - cue.from;
  const [x, y] = points.length === 1 ? points[0] : pointAlong(points, ease.inOut(local / (cue.travel ?? 2)));
  const scale = points.length === 1 ? Math.max(ease.backOut(local / 0.5), 0.01) : 1;
  const rotate = turnAt(local, cue.rotate, cue.turnTo, cue.over) + (cue.spin ? local * 160 : cue.wobble ? Math.sin(local * 6) * 10 : 0);
  return (
    <text
      x={0} y={0} fontSize={cue.size ?? 56} textAnchor="middle" dominantBaseline="central" opacity={ctx.alpha}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      {cue.icon}
    </text>
  );
}

function Shape({ cue, ctx }: { cue: Extract<Cue, { kind: "shape" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const [w, h] = cue.size;
  const local = ctx.t - cue.from;
  let scale = Math.max(ease.backOut(local / 0.5), 0.01);
  let rotate = 0;
  if (cue.motion === "pulse") scale *= 1 + 0.06 * Math.sin(local * 5);
  if (cue.motion === "wiggle") rotate = Math.sin(local * 7) * 5;
  if (cue.motion === "grow") scale *= 0.35 + 0.65 * ease.inOut(local / (cue.over ?? 2));
  if (cue.motion === "shrink") scale *= 1 - 0.55 * ease.inOut(local / (cue.over ?? 2));
  const stroke = cue.outline ? { stroke: ink, strokeWidth: 4, strokeDasharray: "12 8" } : { stroke: "#fff", strokeWidth: 4 };
  const body =
    cue.shape === "circle" ? <ellipse cx={0} cy={0} rx={w / 2} ry={h / 2} fill={cue.color} {...stroke} />
      : <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={cue.shape === "pill" ? h / 2 : Math.min(18, h / 4)} fill={cue.color} {...stroke} />;
  return (
    <g className={cue.color === "none" ? undefined : "film-on-light"} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={ctx.alpha}>
      {body}
      {cue.text && <text className="film-text" fontSize={Math.min(30, h * 0.4, (w * 1.6) / [...cue.text].length)} textAnchor="middle" dominantBaseline="central" fill={ink}>{cue.text}</text>}
    </g>
  );
}

function Caption({ text, y, ctx }: { text: string; y: number; ctx: Ctx }) {
  return <text className="film-text" y={y} fontSize={30 * ctx.ui} textAnchor="middle" dominantBaseline="central" fill="#7a6a55">{text}</text>;
}

function Glyph({ cue, ctx }: { cue: Extract<Cue, { kind: "glyph" }>; ctx: Ctx }) {
  const local = ctx.t - cue.from;
  const size = cue.size ?? 220;
  const points = cue.path ? [cue.at, ...cue.path] : [cue.at];
  const [x, y] = points.length === 1 ? points[0] : pointAlong(points, ease.inOut(local / (cue.travel ?? 2)));
  let scale = points.length === 1 ? Math.max(ease.backOut(local / 0.5), 0.01) : 1;
  let rotate = 0;
  if (cue.motion === "pulse") scale *= 1 + 0.05 * Math.sin(local * 5);
  if (cue.motion === "wiggle") rotate = Math.sin(local * 7) * 5;
  return (
    <g transform={`translate(${x} ${y})`} opacity={ctx.alpha}>
      <text className="film-glyph" transform={`rotate(${rotate}) scale(${scale})`} y={size * 0.04} fontSize={size} textAnchor="middle" dominantBaseline="central" fill={cue.color ?? ink}>
        {cue.char}
      </text>
      {cue.caption && <Caption text={cue.caption} y={size * 0.62 + 22 * ctx.ui} ctx={ctx} />}
    </g>
  );
}

function Ruler({ cue, ctx }: { cue: Extract<Cue, { kind: "ruler" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const ticks = cue.ticks ?? 10;
  const every = cue.every ?? 1;
  const start = cue.start ?? 0;
  const grown = cue.length * Math.max(ease.inOut((ctx.t - cue.from) / (cue.draw ?? 1.2)), 0.001);
  const height = 76;
  const color = cue.color ?? "#ffd76a";
  const step = cue.length / ticks;
  const minor = step >= 60 ? 10 : step >= 30 ? 5 : step >= 16 ? 2 : 1;
  const marks: ReactNode[] = [];
  for (let i = 0; i <= ticks * minor; i += 1) {
    const at = (i * step) / minor;
    if (at > grown + 0.5) break;
    const major = i % minor === 0;
    const half = minor % 2 === 0 && i % (minor / 2) === 0;
    marks.push(<line key={`t${i}`} x1={at} y1={0} x2={at} y2={major ? 34 : half ? 24 : 14} stroke={ink} strokeWidth={major ? 4 : 2} />);
    if (major && every > 0 && (i / minor) % every === 0) {
      const n = start + i / minor;
      const last = i === ticks * minor;
      const label = `${n}${last && cue.unit ? cue.unit : ""}`;
      marks.push(
        <text key={`n${i}`} className="film-text" x={at} y={56} fontSize={24 * ctx.ui} textAnchor="middle" dominantBaseline="central" fill={ink}
          transform={cue.vertical ? `rotate(-90 ${at} 56)` : undefined}>{label}</text>
      );
    }
  }
  return (
    <g opacity={ctx.alpha} transform={`translate(${x} ${y})${cue.vertical ? " rotate(90)" : ""}`}>
      <g className="film-on-light">
        <rect x={-10} y={0} width={grown + 20} height={height} rx={10} fill={color} stroke="#c9962c" strokeWidth={4} />
        {marks}
      </g>
      {cue.caption && (
        <g transform={cue.vertical ? `translate(${cue.length / 2} ${-40 * ctx.ui}) rotate(-90)` : `translate(${cue.length / 2} ${height + 40 * ctx.ui})`}>
          <Caption text={cue.caption} y={0} ctx={ctx} />
        </g>
      )}
    </g>
  );
}

function Balance({ cue, ctx }: { cue: Extract<Cue, { kind: "balance" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const size = cue.size ?? 220;
  const tilt = turnAt(ctx.t - cue.from, cue.tilt ?? 0, cue.tiltTo, cue.over ?? 1.2);
  const a = (tilt * Math.PI) / 180;
  const ends: Vec[] = [[x - size * Math.cos(a), y - size * Math.sin(a)], [x + size * Math.cos(a), y + size * Math.sin(a)]];
  const post = size * 1.25;
  const drop = size * 0.55;
  const panWidth = size * 0.78;
  return (
    <g opacity={ctx.alpha}>
      <path d={`M${x - size * 0.45} ${y + post + 28} Q${x} ${y + post - 18} ${x + size * 0.45} ${y + post + 28} Z`} fill="#b98a4e" stroke="#8a6232" strokeWidth={4} />
      <rect x={x - 10} y={y} width={20} height={post} rx={8} fill="#c99a5b" stroke="#8a6232" strokeWidth={4} />
      {ends.map(([ex, ey], i) => {
        const item = i === 0 ? cue.left : cue.right;
        return (
          <g key={i}>
            <line x1={ex} y1={ey} x2={ex - panWidth / 2 + 8} y2={ey + drop} stroke="#8a6232" strokeWidth={3} />
            <line x1={ex} y1={ey} x2={ex + panWidth / 2 - 8} y2={ey + drop} stroke="#8a6232" strokeWidth={3} />
            <path d={`M${ex - panWidth / 2} ${ey + drop} Q${ex} ${ey + drop + 54} ${ex + panWidth / 2} ${ey + drop} Z`} fill="#ffd76a" stroke="#c9962c" strokeWidth={4} />
            {item && (
              <text className="film-text" x={ex} y={ey + drop - 30} fontSize={Math.min(size * 0.3, (panWidth * 1.1) / [...item].length)} textAnchor="middle" dominantBaseline="central" fill={ink}>
                {item}
              </text>
            )}
          </g>
        );
      })}
      <line x1={ends[0][0]} y1={ends[0][1]} x2={ends[1][0]} y2={ends[1][1]} stroke="#8a6232" strokeWidth={14} strokeLinecap="round" />
      <path d={`M${x} ${y - 4} l-14 -40 h28 z`} fill="#e5484d" transform={`rotate(${tilt} ${x} ${y})`} />
      <circle cx={x} cy={y} r={13} fill="#fff" stroke="#8a6232" strokeWidth={5} />
      {cue.caption && <g transform={`translate(${x} ${y + post + 70 * ctx.ui})`}><Caption text={cue.caption} y={0} ctx={ctx} /></g>}
    </g>
  );
}

function Clock({ cue, ctx }: { cue: Extract<Cue, { kind: "clock" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const r = (cue.size ?? 300) / 2;
  const hands = clockHands((cue.start ?? 10 * 3600 + 10 * 60) + Math.max(ctx.t - cue.from, 0) * (cue.speed ?? 1));
  const scale = Math.max(ease.backOut((ctx.t - cue.from) / 0.5), 0.01);
  const hand = (angle: number, length: number, width: number, color: string) => (
    <line x1={0} y1={length * 0.15} x2={0} y2={-length} stroke={color} strokeWidth={width} strokeLinecap="round" transform={`rotate(${angle})`} />
  );
  return (
    <g opacity={ctx.alpha} transform={`translate(${x} ${y})`}>
      <g className="film-on-light" transform={`scale(${scale})`}>
        <circle r={r} fill="#fffdf6" stroke="#ff9f43" strokeWidth={r * 0.08} />
        {Array.from({ length: 60 }, (_, i) => {
          const big = i % 5 === 0;
          return <line key={i} x1={0} y1={-r * 0.9} x2={0} y2={-r * (big ? 0.76 : 0.84)} stroke={ink} strokeWidth={big ? r * 0.035 : r * 0.015} transform={`rotate(${i * 6})`} />;
        })}
        {[12, 3, 6, 9].map((n) => {
          const angle = (n / 12) * Math.PI * 2;
          return <text key={n} className="film-text" x={Math.sin(angle) * r * 0.6} y={-Math.cos(angle) * r * 0.6} fontSize={r * 0.22} textAnchor="middle" dominantBaseline="central" fill={ink}>{n}</text>;
        })}
        {hand(hands.hour, r * 0.45, r * 0.07, ink)}
        {hand(hands.minute, r * 0.68, r * 0.045, ink)}
        {hand(hands.second, r * 0.8, r * 0.02, "#e5484d")}
        <circle r={r * 0.05} fill="#e5484d" />
      </g>
      {cue.caption && <Caption text={cue.caption} y={r + 34 * ctx.ui} ctx={ctx} />}
    </g>
  );
}

function Thermo({ cue, ctx }: { cue: Extract<Cue, { kind: "thermo" }>; ctx: Ctx }) {
  const [x, y] = cue.at;
  const height = cue.height ?? 420;
  const bulb = 46;
  const tube = 40;
  const level = cue.start + (cue.end - cue.start) * ease.inOut((ctx.t - cue.from) / (cue.over ?? 2));
  const top = y - bulb - height;
  const span = height - 30;
  const fillTop = y - bulb - 10 - span * Math.min(Math.max(level, 0), 1);
  const color = cue.color ?? "#e5484d";
  return (
    <g opacity={ctx.alpha}>
      <rect x={x - tube / 2 - 8} y={top - 8} width={tube + 16} height={height + 30} rx={(tube + 16) / 2} fill="#fff" stroke="#9fb3c8" strokeWidth={5} />
      <circle cx={x} cy={y} r={bulb + 8} fill="#fff" stroke="#9fb3c8" strokeWidth={5} />
      <rect x={x - tube / 2 + 8} y={fillTop} width={tube - 16} height={y - fillTop} rx={(tube - 16) / 2} fill={color} />
      <circle cx={x} cy={y} r={bulb - 4} fill={color} />
      {(cue.marks ?? []).map((mark) => {
        const my = y - bulb - 10 - span * mark.at;
        return (
          <g key={mark.text}>
            <line x1={x + tube / 2 + 8} y1={my} x2={x + tube / 2 + 32} y2={my} stroke={ink} strokeWidth={4} />
            <text className="film-text" x={x + tube / 2 + 44} y={my} fontSize={28 * ctx.ui} dominantBaseline="central" fill={ink}>{mark.text}</text>
          </g>
        );
      })}
    </g>
  );
}

function BigText({ cue, ctx }: { cue: Extract<Cue, { kind: "text" }>; ctx: Ctx }) {
  const size = { s: 34, m: 48, l: 72 }[cue.size ?? "m"] * captionScale(ctx);
  const chars = [...cue.text];
  const [x, y] = keepInside(captionPoint(cue.at, ctx), (chars.length * size) / 2, size / 2, ctx);
  return (
    <text className="film-text film-big" x={x} y={y} fontSize={size} textAnchor="middle" dominantBaseline="central" fill={cue.color ?? ink} opacity={ctx.alpha}>
      {chars.map((char, i) => (
        <tspan key={i} opacity={smooth((ctx.t - cue.from - i * 0.05) / 0.15)}>{char}</tspan>
      ))}
    </text>
  );
}

function Count({ cue, ctx }: { cue: Extract<Cue, { kind: "count" }>; ctx: Ctx }) {
  const [x, y] = captionPoint(cue.at, ctx);
  const value = cue.start + (cue.end - cue.start) * ease.inOut((ctx.t - cue.from) / (cue.over ?? 2));
  const { k } = ctx;
  const digits = String(Math.round(Math.max(Math.abs(cue.start), Math.abs(cue.end)))).length;
  return (
    <g className="film-on-light" opacity={ctx.alpha} transform={`translate(${x} ${y})`}>
      <rect x={-150 * k} y={-70 * k} width={300 * k} height={140 * k} rx={28 * k} fill="#fff" stroke={ink} strokeWidth={3 * k} />
      <text className="film-text" y={-34 * k} fontSize={Math.min(26 * captionScale(ctx), (270 * k) / [...cue.label].length)} textAnchor="middle" fill="#7a6a55">{cue.label}</text>
      <text className="film-text film-big" y={22 * k} fontSize={Math.min(58, 400 / (digits + (cue.unit ? 1.5 : 0))) * k} textAnchor="middle" fill={ink}>
        {Math.round(value)}<tspan fontSize={24 * k}> {cue.unit ?? ""}</tspan>
      </text>
    </g>
  );
}

function Meter({ cue, ctx }: { cue: Extract<Cue, { kind: "meter" }>; ctx: Ctx }) {
  const [x, y] = captionPoint(cue.at, ctx);
  const { k } = ctx;
  const value = cue.start + (cue.end - cue.start) * ease.inOut((ctx.t - cue.from) / (cue.over ?? 2));
  const width = 280 * k;
  return (
    <g opacity={ctx.alpha} transform={`translate(${x - width / 2} ${y})`}>
      <text className="film-text" y={-14 * k} fontSize={Math.min(26 * captionScale(ctx), width / [...cue.label].length)} fill={ink}>{cue.label}</text>
      <rect width={width} height={28 * k} rx={14 * k} fill="#fff" stroke={ink} strokeWidth={3 * k} />
      <rect width={Math.max(width * Math.min(Math.max(value, 0), 1), 0)} height={28 * k} rx={14 * k} fill={cue.color ?? "#4fb6ff"} />
    </g>
  );
}

function renderCue(cue: Cue, ctx: Ctx): ReactNode {
  switch (cue.kind) {
    case "label": return <Label cue={cue} ctx={ctx} />;
    case "highlight": return <Highlight cue={cue} ctx={ctx} />;
    case "pulse": return <Pulse cue={cue} ctx={ctx} />;
    case "flow": return <Flow cue={cue} ctx={ctx} />;
    case "arrow": return <Arrow cue={cue} ctx={ctx} />;
    case "line": return <Line cue={cue} ctx={ctx} />;
    case "sprite": return <Sprite cue={cue} ctx={ctx} />;
    case "shape": return <Shape cue={cue} ctx={ctx} />;
    case "glyph": return <Glyph cue={cue} ctx={ctx} />;
    case "ruler": return <Ruler cue={cue} ctx={ctx} />;
    case "balance": return <Balance cue={cue} ctx={ctx} />;
    case "clock": return <Clock cue={cue} ctx={ctx} />;
    case "thermo": return <Thermo cue={cue} ctx={ctx} />;
    case "text": return <BigText cue={cue} ctx={ctx} />;
    case "count": return <Count cue={cue} ctx={ctx} />;
    case "meter": return <Meter cue={cue} ctx={ctx} />;
    case "myth": return null;
  }
}

function Myth({ cue, t }: { cue: Extract<Cue, { kind: "myth" }>; t: number }) {
  const local = t - cue.from;
  const strike = smooth((local - 0.9) / 0.5);
  const right = smooth((local - 1.6) / 0.4);
  return (
    <div className="film-myth" style={{ opacity: envelope(t, cue.from, cue.to) }}>
      <span className="film-myth-wrong" style={{ "--strike": strike } as CSSProperties}>❌ {cue.wrong}</span>
      <span className="film-myth-right" style={{ opacity: right }}>✅ {cue.right}</span>
    </div>
  );
}

type Props = {
  scene: FilmScene;
  /** 这场戏里的时间（秒） */
  t: number;
  isLast: boolean;
  number: number;
};

export function FilmStage({ scene, t, isLast, number }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(comfortableWidth);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width || comfortableWidth));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  const camera = cameraAt(scene.camera, t);
  const k = 1 / camera.zoom;
  const ui = k * Math.min(Math.max(comfortableWidth / stageWidth, 1), maxLegibility);
  const sceneFade = isLast ? 1 : 1 - smooth((t - (scene.duration - 0.3)) / 0.3);

  return (
    <div ref={stageRef} className="film-stage" data-view={scene.view ?? "paper"}>
      <svg viewBox={`${camera.x} ${camera.y} ${camera.width} ${camera.height}`} role="img" aria-label={scene.title}>
        <Backdrop view={scene.view} t={t} />
        {scene.cues.map((cue, index) => {
          const alpha = envelope(t, cue.from, cue.to) * sceneFade;
          if (alpha <= 0.001) return null;
          return <g key={index}>{renderCue(cue, { t, k, ui, alpha, camera })}</g>;
        })}
      </svg>
      <span className="film-title"><b>{number}</b><span>{scene.title}</span></span>
      {scene.cues.map((cue, index) => (cue.kind === "myth" && t >= cue.from ? <Myth key={index} cue={cue} t={t} /> : null))}
    </div>
  );
}
