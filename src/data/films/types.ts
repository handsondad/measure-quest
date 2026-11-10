/**
 * 讲解动画：每个问题一部短片，由几场戏组成，每场戏配对话里的一轮问答。
 *
 * 画面坐标是 1200×900，坐标都写成 [x, y]。底图是画出来的：奶油色的纸、方格纸、星空、菜市场。
 * 一场戏里的每个元素都只由时间 t 决定，所以能暂停、拖动、从任意一帧开始看。
 */

/** paper 奶油色的纸（默认）、grid 方格纸、space 星空、market 菜市场的摊位 */
export type ViewId = "paper" | "grid" | "space" | "market";

export type Point = readonly [number, number];

type Timed = {
  /** 出现的时间（秒，从这场戏开头算） */
  readonly from: number;
  /** 消失的时间，不写就留到这场戏结束 */
  readonly to?: number;
};

export type Cue = Timed &
  (
    /** 贴在某处的标签，带一根引线；pos 是标签放的位置，不写就放在 side 那一边 */
    | { readonly kind: "label"; readonly at: Point; readonly text: string; readonly pos?: Point; readonly side?: "left" | "right" | "top" | "bottom"; readonly color?: string }
    /** 一圈柔光，把注意力引到一块地方上；size 是这块地方的宽高 */
    | { readonly kind: "highlight"; readonly at: Point; readonly size?: readonly [number, number]; readonly color?: string }
    /** 一圈圈往外扩的波纹：信号、提醒、声音 */
    | { readonly kind: "pulse"; readonly at: Point; readonly color?: string; readonly radius?: number; readonly rate?: number }
    /** 一串小点（或小图标）沿路线一直流动：光、信号、传过去的东西。speed 写 0 就是沿路线均匀摆开、不动的一排（星座、秤星） */
    | { readonly kind: "flow"; readonly path: readonly Point[]; readonly color?: string; readonly icon?: string; readonly count?: number; readonly speed?: number; readonly size?: number }
    /** 一笔画出来的箭头，可以带一句话 */
    | { readonly kind: "arrow"; readonly path: readonly Point[]; readonly color?: string; readonly text?: string; readonly draw?: number }
    /** 一笔画出来的线，没有箭头：子午线、量的那一段、记号 */
    | { readonly kind: "line"; readonly path: readonly Point[]; readonly color?: string; readonly width?: number; readonly draw?: number; readonly dashed?: boolean }
    /**
     * 一个表情图标：一个点就原地弹出来，几个点就沿路线走一趟（用 travel 秒）。
     * rotate 是一开始转的角度（度），写了 turnTo 就在 over 秒里转到那个角度。
     */
    | {
        readonly kind: "sprite";
        readonly icon: string;
        readonly path: readonly Point[];
        readonly size?: number;
        readonly travel?: number;
        readonly spin?: boolean;
        readonly wobble?: boolean;
        readonly rotate?: number;
        readonly turnTo?: number;
        readonly over?: number;
      }
    /** 示意图形：桌子、方块、地球……可以写字 */
    | {
        readonly kind: "shape";
        readonly shape: "circle" | "rect" | "pill";
        readonly at: Point;
        readonly size: readonly [number, number];
        readonly color: string;
        readonly text?: string;
        readonly motion?: "pulse" | "wiggle" | "grow" | "shrink";
        /** grow / shrink 用几秒变完，默认 2 */
        readonly over?: number;
        /** 加一圈虚线边，里面照样用 color 填；只要框不要底色就把 color 写成 "none" */
        readonly outline?: boolean;
      }
    /** 一个大字（手写体），比如「度」「量」「衡」；写了 path 就沿路线挪过去 */
    | {
        readonly kind: "glyph";
        readonly char: string;
        readonly at: Point;
        readonly size?: number;
        readonly color?: string;
        readonly caption?: string;
        readonly path?: readonly Point[];
        readonly travel?: number;
        readonly motion?: "pulse" | "wiggle";
      }
    /**
     * 一把尺子，at 是左上角，往右（vertical 就往下）在 draw 秒里长出来。
     * length 是画面上多长，ticks 是分几大格，每 every 格写一个数字（从 start 数起），unit 写在最后一个数字后面。
     * 爸爸没说过的数字不能上屏幕，这时把 every 写成 0，尺子上就只有刻度没有数字。
     */
    | {
        readonly kind: "ruler";
        readonly at: Point;
        readonly length: number;
        readonly ticks?: number;
        readonly every?: number;
        readonly start?: number;
        readonly unit?: string;
        readonly color?: string;
        readonly draw?: number;
        readonly vertical?: boolean;
        readonly caption?: string;
      }
    /**
     * 一架天平，at 是支架顶上的转轴。left、right 是两个盘子里放的东西（一个或几个表情）。
     * tilt 是横梁歪的角度（度，正数右边往下沉），写了 tiltTo 就在 over 秒里转过去。size 是半根横梁长。
     */
    | {
        readonly kind: "balance";
        readonly at: Point;
        readonly left?: string;
        readonly right?: string;
        readonly tilt?: number;
        readonly tiltTo?: number;
        readonly over?: number;
        readonly size?: number;
        readonly caption?: string;
      }
    /** 一个钟面。start 是钟上一开始的时间（从 0 点算的秒数），speed 是比真的钟快几倍（默认 1） */
    | { readonly kind: "clock"; readonly at: Point; readonly size?: number; readonly start?: number; readonly speed?: number; readonly caption?: string }
    /** 一支温度计，at 是玻璃泡的中心；液柱从 start 涨（或落）到 end（0～1），marks 是刻度旁的字 */
    | {
        readonly kind: "thermo";
        readonly at: Point;
        readonly height?: number;
        readonly start: number;
        readonly end: number;
        readonly over?: number;
        readonly color?: string;
        readonly marks?: readonly { readonly at: number; readonly text: string }[];
      }
    /**
     * 一行大字，用来点出关键词。text、count、meter 是字幕性质的：坐标指的是
     * 镜头里看到的屏幕位置（同样按 1200×900），镜头怎么推拉都留在原处。
     */
    | { readonly kind: "text"; readonly at: Point; readonly text: string; readonly size?: "s" | "m" | "l"; readonly color?: string }
    /** 数字从 start 数到 end，比如 0 → 60 秒 */
    | { readonly kind: "count"; readonly at: Point; readonly label: string; readonly start: number; readonly end: number; readonly unit?: string; readonly over?: number }
    /** 一根进度条，从 start 涨（或落）到 end，取值 0～1 */
    | { readonly kind: "meter"; readonly at: Point; readonly label: string; readonly start: number; readonly end: number; readonly color?: string; readonly over?: number }
    /** 常见误会：先写错误的说法再划掉，然后换成正确的说法 */
    | { readonly kind: "myth"; readonly wrong: string; readonly right: string }
  );

/** 镜头：在 t 秒时对准 at，放大 zoom 倍；两个关键帧之间平滑推拉 */
export type CameraKey = { readonly t: number; readonly at: Point; readonly zoom: number };

export type FilmScene = {
  /** 配对话里第几轮（从 0 数） */
  readonly turn: number;
  /** 这场戏的小标题，不超过 12 个字 */
  readonly title: string;
  /** 底图，不写就是奶油色的纸 */
  readonly view?: ViewId;
  readonly camera?: readonly CameraKey[];
  /** 秒 */
  readonly duration: number;
  readonly cues: readonly Cue[];
};

export type Film = {
  readonly question: string;
  readonly scenes: readonly FilmScene[];
};
