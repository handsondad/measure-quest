import { Link, useParams } from 'react-router-dom';
import { chapters } from '../data';
import SIUnitAtlas from './SIUnitAtlas';

export default function ChapterPage() {
  const { slug } = useParams();
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  const chapter = chapters[index];
  if (!chapter) return <section className="page-hero"><div><p className="eyebrow">404</p><h1>这一页<br />尚未被<br /><em className="display">测量。</em></h1><Link className="button primary" to="/">回到首页 →</Link></div></section>;

  const next = chapters[index + 1];
  return <><section className="page-hero"><div><p className="eyebrow">{chapter.number} / {chapter.label}</p><h1>{chapter.title}<br /><em className="display">的尺度。</em></h1><p className="lead">{chapter.summary}</p></div><span className="page-number">{chapter.number}</span></section><div className="page-layout"><article className="article"><div className="question-card"><span>本章问题</span><p>{chapter.question}</p></div><div className="chapter-facts">{chapter.facts.map(([value, label]) => <div className="chapter-fact" key={value}><b>{value}</b><span>{label}</span></div>)}</div>{chapter.sections.map(([heading, body]) => <section className="lesson-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}{chapter.slug === 'si-units' && <SIUnitAtlas />}<blockquote>测量的价值，不在于数字本身，而在于它让不同的人可以对同一个世界达成共识。</blockquote><div className="chapter-actions"><Link className="button" to="/learn">回到知识地图</Link>{next && <Link className="button primary" to={`/${next.slug}`}>下一章：{next.title} →</Link>}</div></article><aside className="aside-nav"><p>全站地图</p>{chapters.map((item) => <Link key={item.slug} to={`/${item.slug}`}>{item.number} · {item.title}</Link>)}</aside></div></>;
}
