import type { CSSProperties } from "react";
import { labById } from "../../data/labs";
import type { LabId } from "../../data/questions";
import { BalanceLab } from "./BalanceLab";
import { GpsLab } from "./GpsLab";
import { HandSpanLab } from "./HandSpanLab";
import { PowerLab } from "./PowerLab";
import { PrefixLab } from "./PrefixLab";
import { SixtyLab } from "./SixtyLab";
import { ThermometerLab } from "./ThermometerLab";
import { VolumeLab } from "./VolumeLab";
import "./Labs.css";

const views: Record<LabId, () => JSX.Element> = {
  "hand-span": HandSpanLab,
  balance: BalanceLab,
  sixty: SixtyLab,
  thermometer: ThermometerLab,
  gps: GpsLab,
  prefix: PrefixLab,
  power: PowerLab,
  volume: VolumeLab
};

/** 一个能动手玩的小实验；inline 是嵌在对话气泡里的样子 */
export function LabView({ id, inline = false }: { id: LabId; inline?: boolean }) {
  const lab = labById(id);
  const View = views[id];
  if (!lab) return null;
  return (
    <section className={inline ? "lab is-inline" : "lab"} style={{ "--lab": lab.color } as CSSProperties} aria-label={`小实验：${lab.title}`}>
      <header className="lab-head">
        <span aria-hidden="true">{lab.emoji}</span>
        <div>
          <strong>{inline ? "动手试试：" : ""}{lab.title}</strong>
          <small>{lab.hook}</small>
        </div>
      </header>
      <View />
    </section>
  );
}
