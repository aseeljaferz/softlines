
// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // this.state = state;
  }
  
  parse(message) {
    // const lowercase = message.toLowerCase()
    // console.log(this.state);

    // if(lowercase.includes("hello world")){
    //   this.actionProvider.helloWorldHandler()
    // }

    // if(lowercase.includes("todos")){
    //   this.actionProvider.todosHandler()
    // }

    console.log(message);

  }
}
  
export default MessageParser;

