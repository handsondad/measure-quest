import { useMemo, useState } from 'react';

export default function ScaleLab() {
  const [height, setHeight] = useState(170);
  const result = useMemo(() => {
    const modelCubits = height / 52.5;
    return { modelCubits, roomPaces: 2000 / (height * 0.415), scale: height / 170 };
  }, [height]);
  return <section className="lab" id="scale-lab" aria-labelledby="lab-title"><div className="lab-header"><div><p className="eyebrow">Hands-on · Scale lab</p><h2 id="lab-title">你的身体，就是<br />一套古老的单位。</h2></div><p className="lead">这是一套用于思考的近似模型，不是古代单位的精确复原。拖动滑块，感受身体尺度为何直观、又为何难以成为共同标准。</p></div><div className="lab-shell"><section className="lab-controls"><h3>设定你的身高</h3><p>同一座 20 米长的房间，在不同人的“步”里有多长？</p><label className="field-label" htmlFor="height">身高 / HEIGHT</label><div className="range-row"><input id="height" type="range" min="140" max="210" value={height} onChange={(event) => setHeight(Number(event.target.value))} /><output>{height} cm</output></div><button className="button lab-reset" type="button" onClick={() => setHeight(170)}>回到平均值</button></section><section className="lab-result" aria-live="polite"><div className="ruler-stage"><div className="person" style={{ height: `${180 * result.scale}px` }} /><div className="measure-line" style={{ height: `${180 * result.scale}px` }}><span className="measure-label">{height} cm</span></div><div className="ruler-bar" style={{ width: `${Math.max(38, Math.min(57, height / 3.6))}%` }} /><span className="ruler-caption">一把想象中的肘尺</span></div><h3 className="result-title">你大约有 {result.modelCubits.toFixed(1)} 个 52.5 cm 尺度</h3><p className="result-copy">这里暂用固定的 52.5 cm 作为“肘尺”比较尺，并用与身高相关的步幅模型做示意。它的重点不是还原某一个历史单位，而是展示：只要尺度回到个人身体，每个人的读数就会改变。</p><div className="result-facts"><span className="fact">比较尺：52.5 cm</span><span className="fact">20 m ≈ {result.roomPaces.toFixed(1)} 步</span><span className="fact">这是近似实验模型</span></div></section></div></section>;
}
