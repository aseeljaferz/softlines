import React from 'react'
import './options.scss'

function Options(props) {

    const options = [
        {
          text: "Yes",
          handler: props.actionProvider.handleOptionYesforHelp,
          id: 1,
        },
        { 
            text: "No", 
            handler: props.actionProvider.handleOptionNoforHelp, 
            id: 2 
        },
        { 
            text: "Just Checking", 
            handler: props.actionProvider.handleOptionJustCheckingforHelp, 
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

export default Options