
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
    const lowercase = message.toLowerCase();

    if(lowercase.includes("hello")){
      this.actionProvider.greet();
    }

    if(lowercase.includes("yes")){
      this.actionProvider.handleOptionYesforHelp();
    }

    if(lowercase.includes("no")){
      this.actionProvider.handleOptionNoforHelp();
    }

    if(lowercase.includes("just checking")){
      this.actionProvider.handleOptionJustCheckingforHelp();
    }

  }
}
  
export default MessageParser;

