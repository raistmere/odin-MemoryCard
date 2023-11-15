import { useState } from 'react';
import CardDisplay from './components/CardDisplay.jsx';
import Counter from './components/Counter.jsx';
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Pokemon Memory Game</h1>
      <Counter />
      <CardDisplay />
    </>
  )
}

export default App
