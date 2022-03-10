import React, { useEffect, useReducer } from "react";
import "./App.css";
import { cardArray } from "./variables";
import blank from "./images/blank.png";
import white from "./images/white.png";

function App() {
  cardArray.sort(() => 0.5 - Math.random());
  let cardsChosen:any[]  = [];
  let cardsChosenId:any[] = [];
  let cardsWon = [];

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", blank);
      cards[optionTwoId].setAttribute("src", blank);
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", white);
      cards[optionTwoId].setAttribute("src", white);
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", blank);
      cards[optionTwoId].setAttribute("src", blank);
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    // resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      // resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard(e: any) {
    let cardId = e.target.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    e.target.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
  const handleClick = (e: any) => {
    flipCard(e);
  };
  return (
    <div className="App">
      <div className="grid">
        {cardArray.map((card, key) => (
          <img
            key={key}
            src={blank}
            alt={card.name}
            data-id={key}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
