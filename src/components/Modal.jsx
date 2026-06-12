// HeroUi
import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
} from "@heroui/react";

// import React Library.
import { useContext } from "react";

// Context
import DataContext from "../contexts/DataContext.jsx";

function _Modal() {

   const {
      isGameWon,
      currentWord,
      resetGame } = useContext(DataContext);

   const handleClickResetGame = () => {
      resetGame();
   }

   return (
      <Modal backdrop="blur" isOpen={true} hideCloseButton >
         <ModalContent>
            <>

               <ModalHeader className="flex flex-col gap-1">
                  {isGameWon
                     ?
                     <img src="./src/assets/won.gif" alt="Image" width={150} className="mx-auto" />
                     :
                     <img src="./src/assets/lost.gif" alt="Image" width={150} className="mx-auto" />
                  }
               </ModalHeader>

               <ModalBody>
                  {isGameWon
                     ?
                     <>
                        <p className="text-2xl font-semibold text-center">
                           Congratulations!
                        </p>
                        <p className="text-center text-large">
                           You guessed the word
                        </p>
                        <p className="text-green-700 text-center font-semibold text-xl">
                           {currentWord.word}
                        </p>
                     </>
                     :
                     <>
                        <p className="text-2xl font-semibold text-center">
                           Better Luck Next Time!
                        </p>
                        <p className="text-center text-large">
                           The correct word was
                        </p>
                        <p className="text-green-700 text-center font-semibold text-xl">
                           {currentWord.word}
                        </p>
                     </>
                  }
               </ModalBody>

               <ModalFooter>
                  <Button color="primary" variant="shadow" className="mx-auto" onClick={handleClickResetGame}>
                     Play Again
                  </Button>
               </ModalFooter>
            </>
         </ModalContent>
      </Modal>
   )
}

export default _Modal