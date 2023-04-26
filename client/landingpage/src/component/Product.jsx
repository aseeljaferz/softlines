import React from 'react'
import { Card } from 'react-bootstrap'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import biometric1 from "../assets/biometric/biometric-1.jpg";
import biometric2 from "../assets/biometric/biometric-2.jpg";
import biometric3 from "../assets/biometric/biometric-3.webp";
import biometric4 from "../assets/biometric/biometric-4.webp";
import biometric5 from "../assets/biometric/biometric-5.webp";
import biometric6 from "../assets/biometric/biometric-6.jpg";

import cctv1 from "../assets/cctv/cctv-1.avif";
import cctv2 from "../assets/cctv/cctv-2.jpg";
import cctv3 from "../assets/cctv/cctv-3.webp";
import cctv4 from "../assets/cctv/cctv-4.webp";
import cctv5 from "../assets/cctv/cctv-5.avif";
import cctv6 from "../assets/cctv/cctv-6.jpg";
import { Footer } from './Footer';
import './products.css'
// #14ba8f
const Product = () => {
  return (
    <>
    <div className='bg-img' style={{backgroundImage:`url(${process.env.PUBLIC_URL+ "/wave.svg"})`,
    backgroundRepeat:'no-repeat'
    }}>
       <h1 className='main-heading'>Our Products</h1>
      <Card className='contain-card' style={{ width: '80%', }}>
          <Card.Body className='container'>
             <h1 className='heading'>CCTV</h1>
             <Swiper effect={'coverflow'}
             grabCursor={true}
             centeredSlides={true}
             loop={true}
             slidesPerView={'auto'}
             coverflowEffect={
                {
                    rotate:0,
                    stretch:0,
                    depth:100,
                    modifier:2.5,

                }
             }
             pagination={{el:'.swiper-pagination',clickable:true}}
             navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable:true,

             }}
             modules={[EffectCoverflow,Pagination,Navigation]}
             className='swiper_container'
             >
                <SwiperSlide>
                    <img src={cctv1} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cctv2} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cctv3} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cctv4} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cctv5} alt="" srcset="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cctv6} alt="" srcset="" />
                </SwiperSlide>

                    <div className="slider-controller">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
             </Swiper>
          </Card.Body>
      </Card>
      <Card className='contain-card auto-mx-0' style={{ width: '80%', }}>
        <Card.Body className='container'>
                <h1 className='heading'>BIOMETRIC</h1>
                <Swiper effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:2.5,

                    }
                }
                pagination={{el:'.swiper-pagination',clickable:true}}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable:true,

                }}
                modules={[EffectCoverflow,Pagination,Navigation]}
                className='swiper_container'
                >
                    <SwiperSlide>
                        <img src={biometric1} alt="" srcset="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={biometric2} alt="" srcset="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={biometric3} alt="" srcset="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={biometric4} alt="" srcset="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={biometric5} alt="" srcset="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={biometric6} alt="" srcset="" />
                    </SwiperSlide>

                        <div className="slider-controller">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                </Swiper>
            </Card.Body>
      </Card>

      <div className='footer-comp'>
        <Footer/>
        </div>
       

    </div>
    
   
    </>
  )
}

export default Product