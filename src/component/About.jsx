import React from 'react'
import { Footer } from './Footer'
import {motion} from 'framer-motion';
import './about.css'
import Navbar from './Navbar';

let easeing = [0.6, -0.05, 0.01, 0.99];


const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:1.2, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const fadeInUpImg = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:1.0, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      delay:0.4,
      ease:easeing
    }
  }
};

const fadeInUpContent = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:1.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.9,
      delay:0.7,
      ease:easeing
    }
  }
};


const header ={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
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


const About = () => {
  return (
    <>
    <motion.div initial='initial' animate='animate'>
    <Navbar/>
     <section className='about'>
        <div className="row">
            <div className="column">
               <motion.span variants={fadeInUpImg}>
                <div className="about-img"></div>
                <br />
                <div className="about-img2"></div>
                </motion.span>
            </div>
            <div className="column">
            <div className="tabs">
                     <motion.span variants={header}>
                        <h2>About Us</h2>
                    </motion.span>
            </div>
                    <div className="tab-content">
                        <div className="content">
                        <motion.div variants={fadeInUp}>
                            <h2>All you want to know about us!</h2>
                        </motion.div>
                        <motion.div variants={fadeInUpContent}>
                            <p>Welcome to Soft Line, your trusted source for state-of-the-art security devices. We specialize in providing cutting-edge solutions to protect your home, business, and loved ones. With a passion for innovation and a commitment to excellence, we are dedicated to delivering top-quality security products that bring you peace of mind.</p>
                            <h3>Our Products</h3>
                            <p>We offer a wide range of security devices designed to meet various needs and scenarios. From robust surveillance cameras and smart locks to motion sensors and alarm systems, our products are meticulously selected to provide you with the highest level of security. Each device undergoes rigorous testing to ensure durability, reliability, and seamless integration into your existing security infrastructure.</p>
                            <h3>Quality and Reliability</h3>
                            <p>
                            At Soft Line, we understand that your security cannot be compromised. That's why we prioritize quality and reliability in every product we offer. Our security devices are sourced from trusted manufacturers known for their commitment to excellence. We rigorously test and evaluate each device to ensure it meets our stringent standards before making it available to our valued customers.</p>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>            
     </section>
    </motion.div>
        <Footer/>
     </>
  )
}

export default About
