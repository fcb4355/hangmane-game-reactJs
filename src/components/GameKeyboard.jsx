import { Button } from "@heroui/react";

// import React Library.
import { useContext } from "react";

// Context
import DataContext from "../contexts/DataContext.jsx";

function GameKeyboard() {

   const {
      trueButtonsClicked,
      setTrueButtonClicked,
      setTries,
      currentWord,
      setClickedButton,
      allButtonsClicked,
      setAllButtonsClicked } = useContext(DataContext);

   const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   const wordArray = currentWord.word.split('');

   const hanelClickButton = (btn) => {
      setClickedButton(btn);
      setAllButtonsClicked([...allButtonsClicked, btn]);

      // Check if The Button Clicked In The Word Array.
      if (wordArray.includes(btn.toLowerCase())) {
         setTrueButtonClicked([...trueButtonsClicked, btn.toLowerCase()]);
      } else {
         setTries((prev) => prev + 1);
      }
   }


   const buttons = alphabet.map((button, i) => {
      return (
         <Button
            isIconOnly
            color="primary"
            key={i}
            onClick={() => hanelClickButton(button)}
            isDisabled={allButtonsClicked.includes(button)}
            isLoading={allButtonsClicked.includes(button)}
         >
            {button}
         </Button>
      )
   })

   return (
      <div className="keyboard-box-container mt-5 flex flex-wrap justify-center gap-1">

         {buttons}

      </div>
   )
}

export default GameKeyboard

