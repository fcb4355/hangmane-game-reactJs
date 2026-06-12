// import React Library.
import { useContext } from "react";

// Context
import DataContext from "../contexts/DataContext.jsx";

function HangmanIllustration() {

   const { tries } = useContext(DataContext);

   return (
      <div className="hangman-illustration-container">
         <div className="illustration">
            <img src={`/src/assets/hangman-${tries}.svg`} alt="Illustration Hangmane" loading="lazy" />
         </div>
         <div className="mt-6 text-center text-2xl text-white">Hangmane Game</div>
      </div>
   )
}

export default HangmanIllustration