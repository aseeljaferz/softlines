import React from 'react'
import { Chatbot } from 'react-chatbot-kit'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import Config from './config'
import 'react-chatbot-kit/build/main.css';
import './chat_bot.css'
 
function ChatBot() {
  return (
    <div className='App'>
        <header className='App-header'>
          <Chatbot  config={Config} messageParser={MessageParser} actionProvider={ActionProvider}/>
        </header>
    </div>
  )
}

export default ChatBot