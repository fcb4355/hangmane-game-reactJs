import GameBoard from "./components/GameBoard.jsx";
import HangmanIllustration from "./components/HangmanIllustration.jsx";
import _Modal from "./components/Modal.jsx";

// Game Questions File.
import wordList from './assets/data.js';

// Contexts.
import DataContext from './contexts/DataContext.jsx';
import { useState } from "react";

function App() {

   const randomIndex = Math.floor(Math.random() * wordList.length);

   const maxTries = 6; // Note: - If MaxTries is more than 6 causing a problem displaying the game image. //
   const [currentIndex, setCurrentIndex] = useState(randomIndex);
   const [currentWord, setCurrentWord] = useState(wordList[currentIndex]);
   const [tries, setTries] = useState(0);
   const [clickedButton, setClickedButton] = useState(null);
   const [allButtonsClicked, setAllButtonsClicked] = useState([]);
   const [trueButtonsClicked, setTrueButtonClicked] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [isGameWon, setIsGameWon] = useState(false);

   const resetGame = () => {
      const nextIndex = Math.floor(Math.random() * wordList.length);
      setCurrentIndex(nextIndex);
      setCurrentWord(wordList[nextIndex]);
      setTries(0);
      setClickedButton(null);
      setAllButtonsClicked([]);
      setTrueButtonClicked([]);
      setShowModal(false);
   }

   const hangmaneGameData = {
      maxTries,
      currentIndex,
      setCurrentIndex,
      currentWord,
      setCurrentWord,
      tries,
      setTries,
      clickedButton,
      setClickedButton,
      allButtonsClicked,
      setAllButtonsClicked,
      trueButtonsClicked,
      setTrueButtonClicked,
      showModal,
      setShowModal,
      isGameWon,
      setIsGameWon,
      resetGame
   };

   return (
      <DataContext.Provider value={hangmaneGameData} >
         <div className="game-container">
            <HangmanIllustration />
            <GameBoard />
            {showModal && <_Modal />}
         </div>
         <div className="select-none absolute bottom-1 left-1 bg-gradient-to-tr from-red-700 to-blue-600 p-2 text-white text-sm rounded-md">Created By 🧡 Youcef Mellaoui 🧡</div>
      </DataContext.Provider >
   );
}

export default App;
