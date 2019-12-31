import React from 'react';
import './App.css';
import {Calculator} from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          String Calculator
        </p>
      </header>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
