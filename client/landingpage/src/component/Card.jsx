import React from 'react'
import {IoFingerPrintSharp, IoChevronForward} from 'react-icons/io5'
import {IoIosDesktop} from 'react-icons/io';
import {TbDeviceCctv} from 'react-icons/tb';
import {IconContext} from 'react-icons';
import {motion} from 'framer-motion';

let easeing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show:{
    transition:{
      staggerchildren:0.2,
    }
  }
};

const item = {
  hidden:{opacity:0, y:30},
  show:{
      opacity:1,
      y:0,
      transition:{
        ease:'easeInOut',
        duration:.3
      }
  }
}

const title = {
  hidden:{
    y:60,
    opacity:1,
    transition:{
      delay:.2,
      duration:0.6,
      ease:easeing
    }
  }
};

const hoverEffect = {
  whileHover:{
    scale:1.5, 
    rotate:630,
    borderRaius:'100%'
  },
  whileTap:{
    scale:.8, 
    rotate:630,
    borderRaius:'100%'
  }
}


function Card() {
  return (
    <motion.div className='service_container'>
      <motion.div className='title_wrapper' variants={title}>
        <motion.span className='service_title'initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{opacity:0}} transition={{duration:.5, delay:1.8}}>Our Services</motion.span>
        <motion.h2 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{opacity:0}} transition={{duration:1, delay:2.3}}>Premium products for our beloved customers <br />feel the technology.</motion.h2>
      </motion.div>


      <motion.div className='service_card' variants={container} initial='hidden' exit='exit' whileInView="show" viewport={{once:false}}>
        
        <motion.div className='card' variants={item}>
          <motion.span className='service_icon' style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
            <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
              <IoFingerPrintSharp/>
            </IconContext.Provider>
          </motion.span>
          <h3>Security syetems<br/>For Houses, ...</h3>
          <a href="#">
            <span>learn more</span>
              <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                <IoChevronForward/>
              </IconContext.Provider>
          </a>
        </motion.div>

        <motion.div className='card' variants={item}>
          <motion.span className='service_icon' style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
            <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
              <IoIosDesktop/>
            </IconContext.Provider>
          </motion.span>
          <h3>Biometrics systems<br/>For Doors, ...</h3>
          <a href="#">
            <span>learn more</span>
              <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                <IoChevronForward/>
              </IconContext.Provider>
          </a>
        </motion.div>

        <motion.div className='card' variants={item}>
          <motion.span className='service_icon' style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
            <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
              <TbDeviceCctv/>
            </IconContext.Provider>
          </motion.span>
          <h3>Security syetems<br/>For Houses, ...</h3>
          <a href="#">
            <span>learn more</span>
              <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                <IoChevronForward/>
              </IconContext.Provider>
          </a>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Card