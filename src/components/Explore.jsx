import { Link } from 'react-router-dom';
import { chapters, collections } from '../data';

export default function Explore() {
  return <><section className="page-hero"><div><p className="eyebrow">Knowledge map</p><h1>不止一条<br /><em className="display">测量之路。</em></h1><p className="lead">按你的问题进入，而不是按文档顺序阅读。每一条路径都连接故事、概念、日常技术与可以继续验证的资料。</p></div><span className="page-number">∞</span></section><section className="collection-section">{collections.map((collection) => <article className="collection-row" key={collection.id}><div><p className="eyebrow">{collection.id}</p><h2>{collection.name}</h2><p>{collection.description}</p></div><div className="collection-links">{collection.chapterSlugs.map((slug) => { const chapter = chapters.find((item) => item.slug === slug); return <Link key={slug} to={`/${slug}`}><span>{chapter.number}</span>{chapter.title} <b>→</b></Link>; })}</div></article>)}</section></>;
}