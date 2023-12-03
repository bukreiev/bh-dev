import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="content">
      <Navigation />
      <Routes>
        <Route path="/" element="">
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}
