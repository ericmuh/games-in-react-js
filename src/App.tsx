import React, { useEffect, useReducer } from "react";
import "./App.css";

function App() {
  const [choice, setChoice] = React.useState("");
  const [result, setResult] = React.useState("");

  const ResultReducer = (_computerChoice: any, action: any) => {
    switch (action.type) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
      default:
        return "";

    }
  };


  const checkResults = () => {
    if (computerChoice === choice) {
      setResult("its a draw!");
    }
    if (computerChoice === "rock" && choice === "paper") {
      setResult("you win!");
    }
    if (computerChoice === "rock" && choice === "scissors") {
      setResult("you lost!");
    }
    if (computerChoice === "paper" && choice === "scissors") {
      setResult("you win!");
    }
    if (computerChoice === "paper" && choice === "rock") {
      setResult("you lose!");
    }
    if (computerChoice === "scissors" && choice === "rock") {
      setResult("you win!");
    }
    if (computerChoice === "scissors" && choice === "paper") {
      setResult("you lose!");
    }
  };
  const initialState: any = "";
  const [computerChoice, dispatch] = useReducer(ResultReducer, initialState);

  const handleClick = (e: any) => {
    dispatch({ type: Math.floor(Math.random() * 3) + 1 });
    setChoice(e.target.id);
    checkResults()
    console.log(e.target.id);
  };

  return (
    <div className="App">
      <h2>Your Choice: {choice}</h2>
      <h2>Computer Choice: {computerChoice}</h2>

      <button id="rock" onClick={handleClick}>
        Rock
      </button>
      <button id="paper" onClick={handleClick}>
        Paper
      </button>
      <button id="scissors" onClick={handleClick}>
        Scissors
      </button>
      <h1>{result} : {computerChoice}:{choice}</h1>
    </div>
  );
}

export default App;
