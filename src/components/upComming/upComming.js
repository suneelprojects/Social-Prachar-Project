import React from "react";
import upcommingImg from "../../assets/upcomming.jpg";

import upCommingStyle from '../upComming/upComming.module.css'
import ArrowButton from "../extraComponents/arrowButton";
import BulbText from "../extraComponents/bulbText";

import upcommingEventsArray from '../extraComponents/upcommingEventsArray'

import { Link } from "react-router-dom";

const UpComming = () => {

    // var upcommingEventsArray=[
    //     {
    //         upcommingImgOne:upcommingImg,
    //         smallTextOne:'July 24, 2023',
    //         smallTextTwo:'10:45 AM-01:30 PM',
    //         smallTextThree:'Yarra Park, Melbourne',
    //         BigText:'Edu Fest 2023: Igniting Minds Off On Transforming Lives'
    //     },
    //     {
    //         upcommingImgOne:upcommingImg,
    //         smallTextOne:'July 24, 2023',
    //         smallTextTwo:'10:45 AM-01:30 PM',
    //         smallTextThree:'Yarra Park, Melbourne',
    //         BigText:'Mind Masters Workshop: Unlock Your Cognitive Potential'
    //     }
    //     ,{
    //         upcommingImgOne:upcommingImg,
    //         smallTextOne:'July 24, 2023',
    //         smallTextTwo:'10:45 AM-01:30 PM',
    //         smallTextThree:'Yarra Park, Melbourne',
    //         BigText:'Tech Talks 2023: Navigating the Digital Frontier'
    //     }
    // ]

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
                  <i class="bi bi-calendar2-date"></i>
                  {upCommingEvent.smallTextOne}</p>
                  <p><i class="bi bi-stopwatch"></i>
                  {upCommingEvent.smallTextTwo}</p>
                  <p>
                  <i class="bi bi-geo-alt-fill"></i>
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
              <Link to={`/getTickets/${i}`}>
              <ArrowButton ArrowText='Get Ticket' />
              </Link>
                    
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
