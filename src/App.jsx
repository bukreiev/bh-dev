import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Navigation />
          <Outlet />
        </main>
      </div>
    </>
  );
}
