import { Link } from 'react-router-dom';
import { featuredStories } from '../data';

export default function Stories() {
  return <><section className="page-hero"><div><p className="eyebrow">Stories · verified starting points</p><h1>数字背后，<br />是人类如何<br /><em className="display">达成共识。</em></h1><p className="lead">从一项制度、一场投票或一次定义变迁进入度量衡。每张故事卡都标明了可继续核对的机构来源。</p></div><span className="page-number">03</span></section><section className="stories-section">{featuredStories.map((story) => <article className="featured-story" key={story.id}><div><p className="eyebrow">{story.eyebrow}</p><h2>{story.title}</h2><p>{story.summary}</p><div className="story-actions"><Link className="button primary" to={`/${story.chapterSlug}`}>进入相关知识 →</Link><a className="source-link" href={story.url} target="_blank" rel="noreferrer">核对来源：{story.source} ↗</a></div></div></article>)}</section></>;
}