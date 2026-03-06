import React, { useState, useEffect } from "react";

export default function DurationExercise({ name, setMenu }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  // recording laps
  const [laps, setLaps] = useState([]);

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

  const recordLap = () => {
  setLaps([...laps, formatTime(seconds)]);
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
        {/* recordLap button here */}
        <button className="icon-btn lap" onClick={recordLap}>
          ⚑
        </button>
        <button className="icon-btn" onClick={() => { setRunning(false); setSeconds(0); }}>
          ↺
        </button>
      </div>

      <div className="laps-container">
        <h3>Laps</h3>
        {laps.length > 0 ? (
          <ul className="laps-list">
            {laps.map((lapTime, index) => (
              <li key={index} className="lap-item">
                <span>Lap {index + 1}</span>
                <span>{lapTime}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-laps">No laps recorded yet.</p>
        )}
      </div>

      <button className="nav-back-btn" onClick={setMenu}>←</button>
    </div>
  );
}
