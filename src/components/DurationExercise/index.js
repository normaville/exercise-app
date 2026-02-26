import React, { useState, useEffect } from "react";

export default function DurationExercise({ name, setMenu }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60).toString().padStart(2, "0");
    const secs = (s % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="app-viewport duration-view">
      <h2 className="view-title">{name}</h2>
      
      {/* Album cover */}
      <div className="media-box">
        <span className="music-note">♫</span>
      </div>

      <div className="timer-section">
        <p className="status-label">{running ? "Workout Active" : "Ready"}</p>
        <h1 className="timer-display">{formatTime(seconds)}</h1>
      </div>

      <div className="timer-controls">
        <button className="icon-btn main" onClick={() => setRunning(!running)}>
          {running ? "Ⅱ" : "▶"}
        </button>
        <button className="icon-btn" onClick={() => { setRunning(false); setSeconds(0); }}>
          ↺
        </button>
      </div>

      <button className="nav-back-btn" onClick={setMenu}>←</button>
    </div>
  );
}
