import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Bot_avatar from "./bot_components/bot_avatar/Bot_avatar";


const Config = {
  initialMessages: [createChatBotMessage(`Hello world`)],

  botName: "Sofliza",

  customComponents:{
    botAvatar: (props) => <Bot_avatar {...props} />
  },

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

  state: {
    movieTitles: [
      "The lord of the rings", 
      "con air"
    ]
  }

}

export default Config