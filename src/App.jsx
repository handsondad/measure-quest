import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import ChapterPage from './components/ChapterPage';
import Resources from './components/Resources';
import Explore from './components/Explore';
import LabPage from './components/LabPage';
import Stories from './components/Stories';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname]);
  return null;
}

export default function App() {
  return <Layout><ScrollToTop /><Routes><Route path="/" element={<Home />} /><Route path="/stories" element={<Stories />} /><Route path="/learn" element={<Explore />} /><Route path="/lab" element={<LabPage />} /><Route path="/resources" element={<Resources />} /><Route path="/:slug" element={<ChapterPage />} /><Route path="*" element={<ChapterPage />} /></Routes></Layout>;
}
