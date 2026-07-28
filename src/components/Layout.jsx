import { Link, NavLink } from 'react-router-dom';

const navigation = [['/stories', '故事'], ['/learn', '知识地图'], ['/lab', '实验室'], ['/si-units', 'SI 单位'], ['/resources', '资料库']];

export default function Layout({ children }) {
  return <><header className="site-header"><Link className="brand" to="/" aria-label="MeasureQuest 首页">MeasureQuest</Link><nav className="site-nav" aria-label="主要导航">{navigation.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active-link' : undefined}>{label}</NavLink>)}</nav></header><main>{children}</main><footer className="site-footer"><span>MeasureQuest · 一部关于共同尺度的田野指南</span><Link to="/resources">Sources & further reading →</Link></footer></>;
}
