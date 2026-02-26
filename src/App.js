import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  const exercises = [
    { name: "Sit Ups", type: "repetition" },
    { name: "Outdoor Run", type: "duration" },
    { name: "Plank", type: "duration" }
  ];

  // Logic to switch between Menu and Exercise Screen
  if (currentExercise) {
    const Component = currentExercise.type === "repetition" ? RepetitionExercise : DurationExercise;
    return <Component name={currentExercise.name} setMenu={() => setCurrentExercise(null)} />;
  }

  return (
    <div className="app-viewport">
      <header className="header">
        <h1 className="main-title">Welcome back, Jane</h1>
      </header>
      
      <div className="card-container">
        {exercises.map((ex) => (
          <div key={ex.name} className="exercise-card" onClick={() => setCurrentExercise(ex)}>
            <span className="card-text">{ex.name}</span>
            <div className="play-circle">▶</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
