import React,{useState} from 'react'
import {FcAssistant} from 'react-icons/fc';
import './chat_bot_button.scss'
import './chat_bot.scss'
import Config from './config'
import Chatbot from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function Chatbotbutton() {

    const[change,setChange]=useState(true);

  return (
    <div className='bot_fixed_align'>
        <div className='bot_absolute_align'> 
        <div className='bot_align'>
            <div>
            <button type='submit' className='bot_button_placement' onClick={()=>setChange(!change)}>
                <FcAssistant className='button' rounded={true}/>
            </button>
            </div>
            <div className='bot_body'>
                {change &&
                    <div className='App'>
                        <div style={{maxWidth: "300px"}}>
                            <Chatbot 
                                config={Config} 
                                messageParser={MessageParser} 
                                actionProvider={ActionProvider}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
    </div>
  )
}
export default Chatbotbutton;