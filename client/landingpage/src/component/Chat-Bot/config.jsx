import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Bot_avatar from "./bot_components/bot_avatar/Bot_avatar";
import Todos from "./bot_components/Todos/Todos";


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

  initialMessages: [createChatBotMessage(`Hello world`,)],

  // customComponents:{
  //   botAvatar: (props) => <Bot_avatar {...props} />
  // },

  

  // state: {
  //   todos: []
  // },

  // widgets: [
  //   {
  //     widgetName: "todos",
  //     widgetFunc: (props) => <Todos {...props} />,
  //     mapStateToProps: ["todos"],
  //   }
  // ]

}

export default Config