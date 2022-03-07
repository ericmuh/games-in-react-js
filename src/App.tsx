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
        break;
    }
  };
  const initialState: any = "";
  const [computerChoice, dispatch] = useReducer(ResultReducer, initialState);


  const handleClick = (e: any) => {
    dispatch({ type: Math.floor(Math.random() * 3) + 1 });
    setChoice(e.target.id);
    console.log(result);
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
      {/* <h1>{result}</h1> */}
    </div>
  );
}

export default App;
