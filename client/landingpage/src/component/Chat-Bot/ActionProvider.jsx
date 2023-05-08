// import { Message } from "semantic-ui-react";

// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
    //  createClientMessage,
    //  stateRef,
    //  createCustomMessage,
    //  ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
    //  this.createClientMessage = createClientMessage;
    //  this.stateRef = stateRef;
    //  this.createCustomMessage = createCustomMessage;
   }   

  helloWorldHandler = () => {
    const message =this.createChatBotMessage("Hi!!, I'm softliza")
    this.setChatbotmessage(message)
  } 

  setChatbotmessage = (message) => {
    this.setState(state => ({...state, messages: [...state.messages, message] }))  
  }

 }
 
 export default ActionProvider;