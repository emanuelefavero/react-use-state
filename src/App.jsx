import './App.css';
import { LanguagesTabs } from './components/LanguagesTabs';

export function App() {
  return (
    <div className='app'>
      {/* HEADER */}
      <header className='header'>
        <div className='container'>
          <h1 className='font-semibold text-4xl'>Learn Web development</h1>
        </div>
      </header>

      {/* MAIN */}
      <main className='main'>
        <div className='container'>
          <LanguagesTabs />
        </div>
      </main>
    </div>
  );
}
