import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  // State for tracking which screen/exercise is active
  const [currentExercise, setCurrentExercise] = useState(null);

  let screen;

  if (currentExercise) {
    // SCREEN 2: The Exercise Screen
    if (currentExercise.type === "repetition") {
      screen = <RepetitionExercise name={currentExercise.name} />;
    } else {
      screen = <DurationExercise name={currentExercise.name} />;
    }
  } else {
    // SCREEN 1: The Menu Screen
    screen = (
      <div>
        <h1>Select an Exercise</h1>
        <button onClick={() => setCurrentExercise({ name: "Pushups", type: "repetition" })}>
          Pushups
        </button>
        <button onClick={() => setCurrentExercise({ name: "Running", type: "duration" })}>
          Running
        </button>
        <button onClick={() => setCurrentExercise({ name: "Plank", type: "duration" })}>
          Plank
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      {screen}
    </div>
  );
}

export default App;
