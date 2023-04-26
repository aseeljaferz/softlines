import React from 'react'
import {CiFacebook} from 'react-icons/ci';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import './Footer.scss'

export const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='sb_footer section_padding'>
          <div className='sb_footer-links'>
            <div className='sb_footer-links_div'>
              <h4>For Business</h4>
              <a href="/employer" className='link'>
                <p>Employer</p>
              </a>
              <a href="/employee" className='link'>
                <p>Employee</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Resources</h4>
              <a href="/resource" className='link'>
                <p>Resource center</p>
              </a>
              <a href="/resource" className='link'>
                <p>Products</p>
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
                <p>Services</p>
              </a>
              <a href="/contact" className='link'>
                <p>Contact</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Coming soon on</h4>
              <div className='socialmedia'>
                <p><CiFacebook style={{fontSize:"25px", color:"rgb(6,117,232)"}} /></p>
                <p><TiSocialTwitterCircular style={{fontSize:"25px", color:"rgb(29,161,242)"}}/></p>
                <p><AiOutlineLinkedin style={{fontSize:"25px", color:"rgb(29,161,242)"}}/></p>
                <p><AiOutlineInstagram style={{fontSize:"25px", color:""}} className="instagram"/></p>
              </div>
            </div>
          </div>

          <hr />

          <div className='sb_footer-below'>
            <div className='sb_footer-copyright'>
              <p>
                @{new Date().getFullYear()} SoftLines. All right reserved.
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
    </div>
  )
}
