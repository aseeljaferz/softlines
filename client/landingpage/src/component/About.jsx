import React from 'react'
import { Footer } from './Footer'
import './about.css'

const About = () => {
  return (
    <>
     <section className='about'>
        <div className="row">
            <div className="column">
                <div className="about-img"></div>
            </div>
            <div className="column">
            <div className="tabs">
                        <h2>ABOUT</h2>
            </div>
                    <div className="tab-content">
                        <div className="content">
                            <h2>All you want to know about us!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officiis tempora quasi nobis, delectus, voluptates sint aut veniam amet explicabo repellat, nulla impedit. Magnam quasi voluptatem odio veritatis, mollitia ab.</p>
                            <h3>Our Products</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis sapiente nesciunt odit est facere. Soluta ipsa officiis tempora nihil, explicabo architecto dolorum  iste sint suscipit perferendis aperiam, omnis adipisci!</p>
                        </div>
                    </div>
                </div>
            </div>            
     </section>
        <Footer/>
     </>
  )
}

export default About
