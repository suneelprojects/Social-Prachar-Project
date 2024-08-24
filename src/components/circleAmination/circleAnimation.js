import React from "react";
import flowtingBtn from "../../assets/flowtingBtn.png";
import leftImg from "../../assets/circleimgleft.jpg";
import rightImg from "../../assets/circleimgRight.png";
import ArrowButton from "../extraComponents/arrowButton";
import BulbText from "../extraComponents/bulbText";

import circleAnimationStyle from '../circleAmination/circleAnimation.module.css'

import wavesPic from '../../assets/waves.png'
import BookSvg from '../../assets/book.png'
import ParallaxEffect from "../extraComponents/ParallaxEffect";




const CircleAnimation = () => {

  const images = [
    { src: wavesPic,
      className:'objectOne',
       dataValue: '5', alt: 'Image 1' },
    { src: BookSvg,
      className:'objectTwo', 
      dataValue: '5', alt: 'Image 2' }
  ];

    var circleAnimationArray=['Expert Instructors','Interactive Learning'
      ,'Affordable Learning','Career Advance' ,'Course Selection','Support Community'
    ];

  return (
    <>
    <div className={`${circleAnimationStyle.circleAnimationContainer } container-fluid `} id="circleAnimationHover">
    <ParallaxEffect images={images} />

      <div className="row    containerFluidForPadding ">
        {/* left side box code start */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className={`${circleAnimationStyle.leftSideOfCircleAni}`} >
            
            
            <div className={`${circleAnimationStyle.leftImg}`} >
              <img src={leftImg} />
            </div>
            
            <div className={`${circleAnimationStyle.rightImg}`} >
              <img src={rightImg} />
            </div>
          </div>
        </div>
        {/* left side box code end */}
        {/* right side box code start */}

        <div className={`col-12 col-sm-12 col-md-12  col-lg-6 col-xl-6  mt-5 ${circleAnimationStyle.rightSideOfCircleAni} `} >
          
          <BulbText BulbText='Why Choose Us'
          bulbTitle={`Social Prachar Your Path to\nExcellence & Success`}
          GreyText={`We are passionate about education and dedicated to \n providing high-quality learning resources for learners of all backgrounds.`}/>

          <div className={`row row-cols-2 row-col-sm-2 row-cols-lg-4 row-cols-xl-3 py-4 row-gap-4 ${circleAnimationStyle.circleAnimationRowDiv}`}>
            
            {
              circleAnimationArray.map((circleAnimationDivItem,i)=>(
                <div className={`${circleAnimationStyle.circleAnimationDiv}  col`} key={i}>
                <img src={flowtingBtn} />
                    
                        
                        <p>
                        {circleAnimationDivItem}
                        </p>
                   
              </div>
              ))
            }
         
                
          
          </div>
         

          <div className={`${circleAnimationStyle.whiteBtn}`} >
          
          <ArrowButton ArrowText='View All Button'/>

          </div>
        </div>
        {/* right side box code end */}
      </div>
    </div>

    </>
  );
};

export default CircleAnimation;
