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

  greet = () => {
    const message = this.createChatBotMessage("Hello Friend.")
    this.addMessageToState(message);
  }

  handleOptionYesforHelp = () =>{
    const message = this.createChatBotMessage(
      "Fentastic!, Here are the things I can help you with.",
      {
      widget: "handleOptionYesforHelp"
      }
    );
    this.addMessageToState(message)
  }

  handleOptionNoforHelp = () =>{
    const message = this.createChatBotMessage(
      "Okay, no worries! Just remember, I'm here to help anytime you need it!"
    );
    this.addMessageToState(message)
  }

  handleOptionJustCheckingforHelp = () =>{
    const message = this.createChatBotMessage(
      "Thanks for reaching out and checking in!"
    );
    this.addMessageToState(message)
  }

  //"Thanks for reaching out and checking in!

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }

 }
 
 export default ActionProvider;