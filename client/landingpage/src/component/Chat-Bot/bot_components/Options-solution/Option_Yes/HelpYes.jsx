import React from 'react'
import './helpYes.scss'

function HelpYes(props) {

    const options = [
        {
          text: "find about us ",
          handler: props.actionProvider.handleOptionNaviAbout,
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