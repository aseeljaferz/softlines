import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Bot_avatar from "./bot_components/bot_avatar/Bot_avatar";
import Options from "./bot_components/Options/Options.jsx";
import Help from './bot_components/Options-solution/Help.jsx'



const Config = {

  botName: "Sofliza", 

  customStyles: {
    //overrides the chstbot message styles
    botMessageBox: {
      backgroundColor:"#14da8f",
    },
    //Overrides the chatbot button Styles
    chatButton: {
      backgroundColor:"#14da8f",
    }
  },

  initialMessages: [createChatBotMessage(`Hello, what do you want to learn`,{
    widget: "options"
  })],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "handleOptionYesforHelp",
      widgetFunc: (props) => <Help {...props} />,
      props: {
        questions: [
          {
            question: "Do you need help in finding products?",
            answer: "Then choose form the options",
            id: 1,
          },
          {
            question: "Want to know about us?",
            answer: "Then choose form the options",
            id: 2,
          },
        ],
      },
    },
  ],

  // customComponents:{
  //   botAvatar: (props) => <Bot_avatar {...props} />
  // },

  

  // state: {
  //   todos: []
  // },

  

}

export default Config