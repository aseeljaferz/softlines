import React from 'react'
import { Footer } from './Footer'
import {motion} from 'framer-motion';
import './about.css'

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

const transition = {duration:1.4, ease:[0.6, 0.01,-0.05,0.9]}

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
     <section className='about'>
        <div className="row">
            <div className="column">
               <motion.span variants={fadeInUpImg}>
                <div className="about-img"></div>
                </motion.span>
            </div>
            <div className="column">
            <div className="tabs">
                     <motion.span variants={header}>
                        <h2>About</h2>
                    </motion.span>
            </div>
                    <div className="tab-content">
                        <div className="content">
                        <motion.div variants={fadeInUp}>
                            <h2>All you want to know about us!</h2>
                        </motion.div>
                        <motion.div variants={fadeInUpContent}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officiis tempora quasi nobis, delectus, voluptates sint aut veniam amet explicabo repellat, nulla impedit. Magnam quasi voluptatem odio veritatis, mollitia ab.</p>
                            <h3>Our Products</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis sapiente nesciunt odit est facere. Soluta ipsa officiis tempora nihil, explicabo architecto dolorum  iste sint suscipit perferendis aperiam, omnis adipisci!</p>
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
