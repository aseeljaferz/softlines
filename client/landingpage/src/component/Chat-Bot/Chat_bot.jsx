import React from 'react'
import { Chatbot } from 'react-chatbot-kit'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import Config from './config'
import Navbar from '../Navbar'
import 'react-chatbot-kit/build/main.css';
import './chat_bot.scss'
 
function ChatBot() {
  return (
    <>
        <Navbar/>
    <div className='App'>
        <div style={{maxWidth: "300px"}}>
          <Chatbot 
            config={Config} 
            messageParser={MessageParser} 
            actionProvider={ActionProvider}
          />
        </div>
    </div>
    </>
  )
}

export default ChatBot