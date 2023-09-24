import About from './components/Navigation/About';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Navigation/Sidebar';

export default function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Navigation />
          <About />
        </main>
      </div>
    </>
  );
}
