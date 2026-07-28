import { references } from '../data';

export default function Resources() {
  return <><section className="page-hero"><div><p className="eyebrow">08 / SOURCES</p><h1>继续追问，<br />继续<br /><em className="display">核对。</em></h1><p className="lead">好的科普从不止于结论。这里收集继续追溯测量史、国际标准和计量制度的可靠入口。</p></div><span className="page-number">08</span></section><section className="resource-section"><div className="section-intro"><div><p className="eyebrow">Reference desk</p><h2>把好奇心<br />送回出处。</h2></div><p className="lead">优先查阅维护单位、规定标准和保留历史资料的机构页面；对于流传故事，也请继续寻找能互相印证的原始材料。</p></div><div className="resource-grid">{references.map((reference) => <a className="resource-card" key={reference.url} href={reference.url} target="_blank" rel="noreferrer"><span>PRIMARY SOURCE ↗</span><h3>{reference.title}</h3><p>{reference.note}</p><strong>访问资料 →</strong></a>)}</div></section></>;
}
