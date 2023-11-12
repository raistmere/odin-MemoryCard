import { useState } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay.jsx';
import Counter from './components/Counter.jsx';

function App() {
  return (
    <>
      <Counter />
      <CardDisplay />
    </>
  )
}

export default App
