import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
// import Blog from './components/Blog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/bh-dev/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
