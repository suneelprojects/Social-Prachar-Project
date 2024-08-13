import React from "react";

import BulbText from "../extraComponents/bulbText";

import './studentFBSwiperStyle.css'
import StudentFBSwiper from "./studentFBSwiper";

import carouselDotStyle from './carouselDot.module.css'



import twinkel from '../../assets/twinkel.png'

import verticalWave from '../../assets/verticalWave.png'
import ParallaxEffect from "../extraComponents/ParallaxEffect";


const CarouselDot = () => {

  const images = [
    { src: twinkel,
      className:'objectOne',
       dataValue: '5', alt: 'Image 1' },
    { src: verticalWave,
      className:'objectTwo', 
      dataValue: '5', alt: 'Image 2' }
  ];

  return (
    <>
      <div className="containerFluidForPadding">
        <div id="carouselDot">
          <div className="d-flex justify-content-center">
            <div className={`${carouselDotStyle.CarouselCenterText}`} >
              <BulbText
                BulbText="Student Review"
                bulbTitle="Our Students Feedback"
                GreyText="You'll find something to spark your curiosity and enhance"
              />
            </div>
          </div>
          
          <ParallaxEffect images={images}/>
          <StudentFBSwiper/>
        </div>
      </div>
    </>
  );
};

export default CarouselDot;
