import React from "react";

import upCommingStyle from '../upComming/upComming.module.css'
import ArrowButton from "../extraComponents/arrowButton";
import BulbText from "../extraComponents/bulbText";

import upcommingEventsArray from '../extraComponents/upcommingEventsArray'


const UpComming = () => {


  const handleClick=(ZoomLink)=>{
    window.location.href =ZoomLink
  }

  return (
    <>
      <div className={`container py-5 ${upCommingStyle.containerXl}`}>
        <div className="d-flex justify-content-center">
          <div className={`${upCommingStyle.upCommingCenterText}`} >

          <BulbText
          BulbText="Our Webinars"
          bulbTitle="Upcoming Free Webinars"
          GreyText="You ll find something to spark your curiosity and enhance"
        />
          </div>
        </div>

        {
            
            upcommingEventsArray.map((upCommingEvent,i)=>(

          <div className={`${upCommingStyle.upcommingCard} row py-2`} key={i}>
            <div className={`col-12  col-sm-12 col-md-12 col-lg-3 col-xl-3 ${upCommingStyle.colUpcommingCard} `} >
              <img src={upCommingEvent.upcommingImgOne} />
  
            </div>
            <div className={`col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9  ${upCommingStyle.colUpcommingCard}`}>
              <div className={`row ${upCommingStyle.rowUpcommingCard} ps-3`}>
                <div className="col-lg-9 col-md-8 d-flex justify-content-center">

                <div>
                <div className={`${upCommingStyle.upcommingCardFirstText}`}>
                  
                  <p><i className="bi bi-stopwatch"></i>
                  90 Minutes</p>
                  <p>
                  <i className="bi bi-camera-video"></i>
                  Zoom Webinar</p>
                </div>
                <div className={`${upCommingStyle.upcommingCardSecondText}`} >
                  <p>
                  {upCommingEvent.BigText}
                  </p>
                  <p>
                  What is {upCommingEvent.BigText}
                  </p>
                  <p>
                  How to Crack Your First Job as a {upCommingEvent.BigText} with 3 to 12 LPA
                  </p>
                 
                </div>
              </div>
                </div>

                <div className="col-lg-3 col-md-4 ArrowBtn">
              
              <ArrowButton ArrowText='Enroll Now' handleClick={()=>{handleClick(upCommingEvent.ZoomLink)}}/>
                    
                </div>
              </div>

            </div>
          </div>
            ))

        }
      </div>
    </>
  );
};

export default UpComming;
