import React from "react";
import upcommingImg from "../../assets/upcomming.jpg";

import upCommingStyle from '../upComming/upComming.module.css'
import ArrowButton from "../extraComponents/arrowButton";
import BulbText from "../extraComponents/bulbText";

import upcommingEventsArray from '../extraComponents/upcommingEventsArray'

import { Link, useNavigate } from "react-router-dom";

const UpComming = () => {

  const Navigate=useNavigate();

  const handleClick=(i)=>{
    Navigate(`/getTickets/${i}`)
  }

  return (
    <>
      <div className="containerFluidForPadding py-5">
        <div className="d-flex justify-content-center">
          <div className={`${upCommingStyle.upCommingCenterText}`} >

          <BulbText
          BulbText="Our Event"
          bulbTitle="Upcoming Events"
          GreyText="You ll find something to spark your curiosity and enhance"
        />
          </div>
        </div>

        {
            
            upcommingEventsArray.map((upCommingEvent,i)=>(

          <div className={`${upCommingStyle.upcommingCard} row py-2`} key={i}>
            <div className={`col ${upCommingStyle.colUpcommingCard} `} >
              <img src={upCommingEvent.upcommingImgOne} />

              <div className={`row ${upCommingStyle.rowUpcommingCard} ps-3`}>
                <div className="col-lg-9 col-md-8">

                <div>
                <div className={`${upCommingStyle.upcommingCardFirstText}`}>
                  <p>
                  <i className="bi bi-calendar2-date"></i>
                  {upCommingEvent.smallTextOne}</p>
                  <p><i className="bi bi-stopwatch"></i>
                  {upCommingEvent.smallTextTwo}</p>
                  <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  {upCommingEvent.smallTextThree}</p>
                </div>
                <div className={`${upCommingStyle.upcommingCardSecondText}`} >
                  <p>
                  {upCommingEvent.BigText}
                  </p>
                </div>
              </div>
                </div>

                <div className="col-lg-3 col-md-4 ArrowBtn">
              
              <ArrowButton ArrowText='Get Ticket' handleClick={(e)=>{handleClick(i)}}/>
                    
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
