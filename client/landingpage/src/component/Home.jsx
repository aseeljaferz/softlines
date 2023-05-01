import '../App.scss';
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoStar}
 from 'react-icons/io5';
import {BsChatRightTextFill} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import {HiMenuAlt1} from 'react-icons/hi';
import Cards from './Cards'
import { Footer } from './Footer';
import desktop from '../images/desktop.png'
// import Product from './Product';
import {Link} from "react-router-dom";

import {motion} from 'framer-motion';

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
      duration:0.6, ease:easeing
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

const transition = {duration:1.4, ease:[0.6, 0.01,-0.05,0.9]}

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const lastName = {
  initial:{
    y:0,
  },
  animate:{
    y:-20,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
}

const btnGroup = {
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
}

const star ={
  initial:{
    y:60,
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




function Home() {
  return (
      <motion.div initial='initial' animate='animate'>

      <motion.header variants={stagger} className="headerBox">
        <motion.div className="logo_wrapper" variants={header}>SOFT<span>LINES</span></motion.div>
        <motion.div className='menu_container' variants={stagger}>
          <motion.span variants={header}>
            <IconContext.Provider value={{color:"#000", size:"18px", className:"icon_container"}}>
              <div className='icon' id='icon1'><FaBehance/></div>
              <div className='icon'><FaDribbble/></div>
            </IconContext.Provider>
          </motion.span>
          <motion.span variants={header} className="email">
            <IconContext.Provider value={{color:"#000", size:"18px"}}>
              <div className='icon'><IoMailOutline/></div>
              hellow@example.com
            </IconContext.Provider>
          </motion.span>
          <motion.span className='menu' variants={header}>
            <div className='icon' style={{ fontSize:"25px" }} > <HiMenuAlt1/> </div>
          </motion.span>
        </motion.div>
      </motion.header>

      <motion.div className='content_wrapper' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3,ease:easeing}}>
        <div className='left_content_wrapper'>
          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate='animate' className='first'>
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>O</motion.span>
              <motion.span variants={letter}>F</motion.span>
              <motion.span variants={letter}>T</motion.span>
              <motion.span variants={letter}>L</motion.span>
              <motion.span variants={letter}>I</motion.span>
              <motion.span variants={letter}>N</motion.span>
              <motion.span variants={letter}>E</motion.span>
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter} className="second">c</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>m</motion.span>
              <motion.span variants={letter}>p</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>e</motion.span>
            </motion.span>
            <div className='secondLine'>
            <motion.span variants={lastName} initial="initial" animate='animate' className='first'>
              <motion.span variants={letter}>T</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>c</motion.span>
              <motion.span variants={letter}>h</motion.span>
              <motion.span variants={letter}>-</motion.span>
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>.</motion.span>
            </motion.span>
            </div>
          </motion.h2>
          <motion.p variants={fadeInUp} className="quote">ALerting today for Better Tomorrow <br />Here, Security Never Sleeps</motion.p>
          <motion.div className='btn_group' variants={stagger}>
            <motion.div className='btn btn_primary' variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} >Live Chat
              <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                <BsChatRightTextFill/>
              </IconContext.Provider> 
            </motion.div>
            <motion.div className='btn btn_secondary' variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}> <Link to="/products" className="product-link">Products</Link>
            </motion.div>
          </motion.div>
          <motion.div className='review_container' variants={stagger}>
            <motion.p className='total_review' variants={star}>100+ Reviews</motion.p>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
              <motion.span variants={stagger} whileHover={{scale:1.2, rotate:180, borderRadius:'100%', cursor:'pointer'}} ><IoStar/></motion.span>
              <motion.span variants={stagger} whileHover={{scale:1.2, rotate:180, borderRadius:'100%', cursor:'pointer'}} ><IoStar/></motion.span>
              <motion.span variants={stagger} whileHover={{scale:1.2, rotate:180, borderRadius:'100%', cursor:'pointer'}} ><IoStar/></motion.span>
              <motion.span variants={stagger} whileHover={{scale:1.2, rotate:180, borderRadius:'100%', cursor:'pointer'}} ><IoStar/></motion.span>
              <motion.span variants={stagger} whileHover={{scale:1.2, rotate:180, borderRadius:'100%', cursor:'pointer'}} ><IoStar/></motion.span>
            </IconContext.Provider>
            <motion.p className='more_reviev'variants={star}>More than 100+ people taking our services.</motion.p>
          </motion.div>
        </div>

        <motion.div className='right_content_wrapper'>
          <motion.img src={desktop} className="imgStyle" alt="desktop" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>

      </motion.div>

       <Cards/>

       <Footer/>

      
      
    </motion.div>
  );
}

export default Home;
