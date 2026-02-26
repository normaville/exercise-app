import React, { useState } from "react";

export default function RepetitionExercise({ name, setMenu }) {
  const [count, setCount] = useState(0);
  
  return (
    <div className="app-viewport exercise-view">
      <h2 className="view-title">{name}</h2>
      <div className="counter-display">
        <button className="ctrl-btn" onClick={() => setCount(Math.max(0, count - 1))}>−</button>
        <span className="count-num">{count}</span>
        <button className="ctrl-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="action-row">
        <button className="secondary-btn" onClick={setMenu}>Exit</button>
        <button className="primary-btn">Done</button>
      </div>
      <button className="nav-back-btn" onClick={setMenu}>←</button>
    </div>
  );
}
