import React, { useEffect } from "react";
import "./App.css";

function App() {
  const [choice, setChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const [result, setResult] = React.useState("");

  const computerAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
      setComputerChoice("rock");
    }
    if (randomNumber === 2) {
      setComputerChoice("scissors");
    }
    if (randomNumber === 3) {
      setComputerChoice("paper");
    }
  };

  const handleClick = (e: any) => {
    setChoice(e.target.id);
    computerAnswer();
    getResult();
    console.log(e.target.id);
  };


  const getResult=()=> {
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
  }

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
      <h1>{result}</h1>
    </div>
  );
}

export default App;
