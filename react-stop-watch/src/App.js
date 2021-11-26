import './App.css';
import React, { useState, useEffect, useRef } from 'react';
function App() {
  var [time,setTime] = useState(0);
  const timerRef = useRef(null);
  var [end,setEnd] = useState(null);
  useEffect(()=>{
    return pauseTimer;
  },[])
  const startTimer = () =>{
    if(timerRef.current === null){
      timerRef.current = setInterval(()=>{
        setTime((prev) => prev+1);
        endTimer();
      },1000)
      
    }
  }
  const pauseTimer = () =>{
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  const resetTimer = () =>{
    pauseTimer();
    setTime(0);
  }
  const handleChange = (e) =>{
   //console.log( e.target.value)
   var num = Number(e.target.value);
   setTime(num);
  }
  
  const handleChange2 = (e) =>{
   //console.log( e.target.value)
   var  end = Number(e.target.value);
   setEnd(end);
  }
  const endTimer = () =>{
    console.log(time,end);
    time = time+1;
    if(time === end){
    clearInterval(timerRef.current);
    timerRef.current = null;
    }
    // end--;
  }
  
  return (
    <div className="App">
      <h1 className="timer-head">Stop Watch Timer </h1>
      <h3 className="timer">{time}</h3>
      <label>Start Time: </label>
      <input type="number" placeholder="...Enter Start time" onChange={handleChange} className="input-box" />
      <br/>
      <label>End Time: </label>
      <input type="number" placeholder="...Enter End time" onChange={handleChange2} className="input-box" />
      <br/>
      <button className="watch-btn" onClick={startTimer}>START</button>
      <button className="watch-btn" onClick={pauseTimer}>PAUSE</button>
      <button className="watch-btn" onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
  