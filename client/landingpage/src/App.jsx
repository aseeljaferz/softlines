import './App.scss';
import {FaBehance, FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar}
 from 'react-icons/io5';
import {BsChatRightTextFill} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import {HiMenuAlt1} from 'react-icons/hi';
import {CiFacebook} from 'react-icons/ci';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import Card from './component/Card'
import desktop from './images/desktop.png'


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
      staggerDirection:-1
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




function App() {
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
            {/* <span></span>
            <span></span>
            <span></span> */}
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
            <motion.div className='btn btn_primary' variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Live Chat
              <IconContext.Provider value={{color:"#14da8f", size:"18px"}}>
                <BsChatRightTextFill/>
              </IconContext.Provider>
            </motion.div>
            <motion.div className='btn btn_secondary' variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Aathuvan
              {/* <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <BsChatRightTextFill/>
              </IconContext.Provider> */}
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
          <motion.img src={desktop} /*style={{height:450}}*/className="imgStyle" alt="desktop" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>

      </motion.div>

       <Card/>

      <footer className='footer'>
        <div className='sb_footer section_padding'>
          <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
              <h4>For Business</h4>
              <a href="/employer" className='link'>
                <p>Employer</p>
              </a>
              <a href="/healthplan" className='link'>
                <p>Healthplan</p>
              </a>
              <a href="/individual" className='link'>
                <p>Individual</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Resources</h4>
              <a href="/resource" className='link'>
                <p>Resource center</p>
              </a>
              <a href="/resource" className='link'>
                <p>Testimonials</p>
              </a>
              <a href="/resource" className='link'>
                <p>STV</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Partners</h4>
              <a href="/employer" className='link'>
                <p>Swing Tech</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Company</h4>
              <a href="/about" className='link'>
                <p>About</p>
              </a>
              <a href="/press" className='link'>
                <p>Press</p>
              </a>
              <a href="/career" className='link'>
                <p>Career</p>
              </a>
              <a href="/contact" className='link'>
                <p>Contact</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Coming soon on</h4>
              <div className='socialmedia'>
                <p><CiFacebook style={{fontSize:"25px"}} /></p>
                <p><TiSocialTwitterCircular style={{fontSize:"25px"}}/></p>
                <p><AiOutlineLinkedin style={{fontSize:"25px"}}/></p>
                <p><AiOutlineInstagram style={{fontSize:"25px"}}/></p>
              </div>
            </div>
          </div>

          <hr />

          <div className='sb_footer-below'>
            <div className='sb_footer-copyright'>
              <p>
                @{new Date().getFullYear()} CodeInn. All right reserved.
              </p>
            </div>
            <div className='sb_footer-below-links'>
              <a href="/terms"><div>Terms and Conditions</div></a>
              <a href="/privacy"><div>Privacy</div></a>
              <a href="/security"><div>Security</div></a>
              <a href="/cookie"><div>Cookie and Declaration</div></a>
            </div>
          </div>

        </div>
      </footer>

    </motion.div>
  );
}

export default App;
