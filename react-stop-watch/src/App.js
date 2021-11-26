import "./App.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [state, setState] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    return pauseTimer;
  }, []);

  const startTimer = () => {
    if (timerRef.current === null)
      timerRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };

  return (
    <div className="App">
      <h1 className="timer-head"> Stop Watch Timer </h1>
      <h3 className="timer">{state}</h3>
      <button onClick={startTimer} className="watch-btn">START</button>
      <button onClick={pauseTimer} className="watch-btn">PAUSE</button>
      <button onClick={resetTimer} className="watch-btn">RESET</button>
    </div>
  );
}
