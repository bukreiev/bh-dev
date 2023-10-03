import { Outlet } from 'react-router-dom';
// import About from './components/Navigation/About';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Navigation />
          {/* <About /> */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
