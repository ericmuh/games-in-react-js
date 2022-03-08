import React, { useEffect, useReducer } from "react";
import "./App.css";
import { cardArray } from "./variables";
import blank from "./images/blank.png"
function App() {
  cardArray.sort(() => 0.5 - Math.random());
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  return (
    <div className="App">
      <div className="grid">
        {cardArray.map((card, key) => (
          <img key={key} src={blank} alt={card.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
