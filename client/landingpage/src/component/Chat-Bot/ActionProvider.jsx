// import { Message } from "semantic-ui-react";

// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
   }   

  // helloWorldHandler = () => {
  //   const message =this.createChatBotMessage("Hi!!, I'm softliza")
  //   this.setChatbotmessage(message)
  // } 

  // todosHandler = () => {
  //   const message = this.createChatBotMessage("Sure. Here is your todos.", {
  //     widget: "todos",
  //   });
  //   this.setChatbotmessage(message)
  // }

  // setChatbotmessage = (message) => {
  //   this.setState(state => ({
  //     ...state, 
  //     messages: [...state.messages, message] 
  //   }))  
  // }

 }
 
 export default ActionProvider;