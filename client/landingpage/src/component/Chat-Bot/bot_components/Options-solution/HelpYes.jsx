// import React, { useState } from "react";

// import FlashCard from "./FlashCard";

// const Help = (props) => {
//   console.log(props);
//   let [questionIndex, setQuestionIndex] = useState(0);

//   const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

//   const currentQuestion = props.questions[questionIndex];

//   if (!currentQuestion) {
//     return <p>Quiz over.</p>;
//   }

//   return (
//     <FlashCard
//       question={currentQuestion.question}
//       answer={currentQuestion.answer}
//       incrementIndex={incrementIndex}
//     />
//   );
// };

// export default Help;

import React from 'react'
import './helpYes.scss'

function HelpYes(props) {

    const options = [
        {
          text: "find about us ",
          handler: props.actionProvider.handleOptionYesforHelp,
          id: 1,
        },
        { 
            text: "No", 
            handler: () => {}, 
            id: 2 
        },
        { 
            text: "Just Checking", 
            handler: () => {}, 
            id: 3 
        },
      ];
    
      const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
          {option.text}
        </button>
      ));

  return (
    <div className="options-container">
        {buttonsMarkup}
    </div>
  )
}

export default HelpYes