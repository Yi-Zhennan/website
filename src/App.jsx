import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="case-study/:id" element={<CaseStudy />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
