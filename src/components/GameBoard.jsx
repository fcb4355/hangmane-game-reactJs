// import React Library.
import { useContext, useEffect } from "react";

// Components.
import GameKeyboard from "./GameKeyboard.jsx";

// Context
import DataContext from "../contexts/DataContext.jsx";

function GameBoard() {

   const { currentWord, tries, maxTries, trueButtonsClicked, setShowModal, setIsGameWon } = useContext(DataContext);
   const splitWord = currentWord.word.split('');
   const hintWord = currentWord.hint;

   // ---- Check Lose Game. ---- //
   useEffect(() => {
      if (tries === maxTries) {
         setShowModal(true);
         setIsGameWon(false);
      }
   }, [tries]);

   // ---- Check Won Game. ---- //
   useEffect(() => {
      const uniqueLetters = [...new Set(splitWord)];
      if (trueButtonsClicked.length === uniqueLetters.length) {
         setIsGameWon(true);
         setShowModal(true);
      }
   }, [trueButtonsClicked]);

   const missedWord = splitWord.map((word, index) => {
      return (
         <li key={index}
            className={trueButtonsClicked.includes(word) ? 'correct-word' : ''}>
            {trueButtonsClicked.includes(word) ? word : '*'}
         </li>
      )
   })

   return (
      <div className="game-board-container">
         <ul>
            {missedWord}
         </ul>

         <div className="hint-box my-6 text-center text-white">
            Hint : {hintWord}
         </div>

         <div className="guesses text-center text-white">
            Incorrect guesses : <span className="text-red-500 font-bold"> {tries} / {maxTries}</span>
         </div>

         <GameKeyboard />

      </div>
   )
}

export default GameBoard