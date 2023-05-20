import React from 'react'
import {IconContext} from 'react-icons';
import {FaWhatsapp, FaPhone} from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import {IoMailOutline} from 'react-icons/io5';
import {HiMenuAlt1} from 'react-icons/hi';
import {motion} from 'framer-motion';
import '../App.scss'
import { useNavigate, useLocation } from 'react-router-dom';

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate:{
      transition:{
        delayChildren:0.4,
        staggerChildren:0.2,
        staggerDirection:1
      }
    }
  }

  const header ={
    initial:{
      y:-60,
      opacity:0,
      transition:{duration:0.05, ease:easeing}
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easeing
      }
    }
  };

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
        <motion.header variants={stagger} className="headerBox">
        <IconContext.Provider value={{color:"#14da8f", size:"30px", className:"icon_container"}}>
              <div className='icon' style={{cursor:'pointer'}} id='icon1'>
        {location.pathname!=='/' && <button style={{ border:'none', backgroundColor:'white' }} onClick={() => navigate(-1)}><FaArrowLeft/></button>}
       {/* <button style={{ border:'none' }} onClick={() => navigate(-1)}><FaArrowLeft/></button> */}
       </div>
            </IconContext.Provider>
        <motion.div className="logo_wrapper" variants={header}>SOFT<span>LINES</span></motion.div>
        <motion.div className='menu_container' variants={stagger}>
          <motion.span variants={header}>
            <IconContext.Provider value={{color:"#14da8f", size:"30px", className:"icon_container"}}>
              <div className='icon' style={{cursor:'pointer'}} id='icon1'><a
        href="https://wa.me/7904577526"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      ><FaWhatsapp/></a></div>
            </IconContext.Provider>
            <IconContext.Provider value={{size:"25px", className:"icon_continer"}}>
            <div className='icon' style={{cursor:'pointer'}}> <a href="tel:7904577526"><FaPhone/></a></div>
            </IconContext.Provider>
              
            
          </motion.span>
          <motion.span variants={header} className="email">
            <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
              <div className='icon'><a href="mailto:aathavans.20it@kongu.edu"><IoMailOutline/></a></div>
              softlineerode@gmail.com
            </IconContext.Provider>
          </motion.span>
          <motion.span className='menu' variants={header}>
            <div className='icon' style={{ fontSize:"25px" }} > <HiMenuAlt1/> </div>
          </motion.span>
        </motion.div>
      </motion.header>
    </div>
  )
}

export default Navbar