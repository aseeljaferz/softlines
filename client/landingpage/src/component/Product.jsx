import React from 'react'
// import { Card } from 'react-bootstrap'
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
import './product.scss'
import Navbar from './Navbar';
// #14ba8f
const Product = () => {
  return (
    <>

<div className="container">
    <Navbar/>
      <h1 className="heading">Product Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            {/* <img src={cctv1} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv1} width="10%" alt="Logo" />
                <div className="card-text">TP-Link Tapo 360° 2MP 1080p Full HD Pan/Tilt Home Security Wi-Fi Smart Camera| Alexa Enabled| 2-Way Audio| Night Vision| Motion Detection| Sound and Light Alarm| Indoor CCTV (Tapo C200) White</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv2} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv h1h1</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv2} alt="Logo" />
                <div className="card-text">CP PLUS 3 MP Full HD Smart Wi-fi CCTV Camera | 360° Pan & Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Up to 128 GB) | Alexa & OK Google | 2-Way Talk | IR Distance 10Mtr | CP-E35A</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv3} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv h1h1</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv3} alt="Logo" />
                <div className="card-text">3MP 1296p High Definition Outdoor CCTV Security Wi-Fi Smart Camera | Alexa Enabled | Weatherproof | Night Vision | 2-Way Audio | SD Storage (Tapo C310) White</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv4} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv h1h1</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv4} alt="Logo" />
                <div className="card-text">Conbre MultipleXR2 Pro HD Smart WiFi Wireless IP CCTV Security Camera | Night Vision | 2-Way Audio | Support 64 GB Micro SD Card Slot</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv5} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv h1h1</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv5} alt="Logo" />
                <div className="card-text">SUKHAD Wired 4-Realistic Look Dummy Security CCTV Bullet Camera with LED Light Indication (Silver, 17 X 7 X 21.5 cm) - Pack of 4</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv6} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">cctv h1h1</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Surveillance cameras</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={cctv6} alt="Logo" />
                <div className="card-text">CP PLUS 3MP Full HD Smart Wi-fi CCTV Home Security Camera | 360° View | 2 Way Talk | Cloud Monitor | Motion Detect | Night Vision | Supports SD Card, Alexa & Ok Google | 15 Mtr, White- CP-E31A</div>
            </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            {/* <img src={cctv1} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric1} width="10%" alt="Logo" />
                <div className="card-text">ZKTeco Biometric Fingerprint Time Attendance Clock Employee Checking-in Recorder with Build-in SSR Excel Software (Silver)</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv2} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric2} alt="Logo" />
                <div className="card-text">eSSL K90 Pro Biometric Time Attendance and Machine, 185 x 140 x 30 mm, Black</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv3} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric3} alt="Logo" />
                <div className="card-text">Team Office Fingerprint, Card, Wi-Fi and Cloud Based Attendance Device(Finger, Wi-Fi, Battery, Black)</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv4} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric4} alt="Logo" />
                <div className="card-text">Yukonics Precision PB510 Biometric Fingerprint USB Scanner with 1 Year RD Service & Latest Version Device (Black)</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv5} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric5} alt="Logo" />
                <div className="card-text">SecuGen Hamster Pro 20 Biometric Finger Print Scanner (Black) Without RD Service</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <img src={cctv6} alt="" srcset="" /> */}
            <div className="card">
                <div className="card-header">
                    <div className="profile">
                        <span className="letter">biometric</span>
                    </div>
                    <div className="card-title-group">
                        <h5 className="card-title">Biometric sensors</h5>
                        {/* <div className="card-date">8 Haziran 2021, Salı</div> */}
                    </div>
                </div>
                <img className="card-image" src={biometric6} alt="Logo" />
                <div className="card-text">eSSL K90 Pro Biometric Time Attendance and Machine, 185 x 140 x 30 mm, Black</div>
            </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <div className='footer-comp'>
        <Footer/>
      </div>

    </div>
    </>
  )
}

export default Product