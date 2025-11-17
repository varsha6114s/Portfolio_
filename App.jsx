import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './pages/Portfolio';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
