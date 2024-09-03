import React from "react";
import pencileBook from "../../assets/pencileBook.png";

import getTicketsImg from "../../assets/upcomming.jpg";

import teachersImgOne from "../../assets/teacherImg.jpg";



import teacherStyle from '../teachers/teacher.module.css'

import { useParams } from 'react-router-dom';

import upcommingEventsArray from '../extraComponents/upcommingEventsArray'

import getTicketsStyles from "../getTickets/getTickets.module.css";
import TeacherContainer from "../teachers/teacherContainer";

import upCommingStyle from '../upComming/upComming.module.css'
import { Link } from "react-router-dom";
import ArrowButton from "../extraComponents/arrowButton";
import FooterBtn from '../footerButton/FooterBtn';
import Footer from '../footer/footer';


const GetTickets = () => {

  const { id } = useParams();
    const event = upcommingEventsArray[parseInt(id)];

    if (!event) {
        return <div>Event not found</div>;
    }

    var teachersArray = [
      {
        teachersImg: teachersImgOne,
        teachersFirstText: "Dana White",
        teachersSecondText: "UI/UX Exparet",
      },
      {
        teachersImg: teachersImgOne,
        teachersFirstText: "Elizabeth Olsen",
        teachersSecondText: "Assistant Teacher",
      },
      {
        teachersImg: teachersImgOne,
        teachersFirstText: "Jons Emon",
        teachersSecondText: "Assistant Teacher",
      },
      {
        teachersImg: teachersImgOne,
        teachersFirstText: "Mahmud Sujons",
        teachersSecondText: "Instructor",
      },
    ];

  var arrowTextArray = [
    {
      arrowHeading: "Inspirational Keynote Speakers : ",
      arrowSecond:
        "Engage in hands-on workshops facilitated by industry experts.Dive deep into practical skills and strategies to enhance your adaptability and resilience in the face of technological advancements.",
    },
    {
      arrowHeading: "Interactive Workshops : ",
      arrowSecond:
        "Connect with like-minded individuals, professionals, and mentors. Build a network that will support your personal and professional growth, fostering collaboration and idea exchange.",
    },
    {
      arrowHeading: "Networking Opportunities :",
      arrowSecond:
        "Hear from renowned thought leaders who will delve into topics such as artificial intelligence, sustainability, and the future of work. Gain valuable perspectives to help you thrive in an ever-evolving landscape.",
    },
    {
      arrowHeading: "Networking Opportunities : ",
      arrowSecond:
        "Hear from renowned thought leaders who will delve into topics such as artificial intelligence, sustainability, and the future of work. Gain valuable perspectives to help you thrive in an ever-evolving landscape.",
    },
    {
      arrowHeading: "Inspirational Keynote Speakers : ",
      arrowSecond:
        "Engage in hands-on workshops facilitated by industry experts.Dive deep into practical skills and strategies to enhance your adaptability and resilience in the face of technological advancements.",
    },
    {
      arrowHeading: "Registration : ",
      arrowSecond:
        "Engage in hands-on workshops facilitated by industry experts.Dive deep into practical skills and strategies to enhance your adaptability and resilience in the face of technological advancements.",
    },
  ];

  return (
    <div className="">
      {/* blue box and book container  start*/}
      <div
        className={`${getTicketsStyles.BookImgContainer} containerFluidForPadding
       d-flex justify-content-between align-items-center py-5`}
      >
        <div>
          <p className={`${getTicketsStyles.firstEventText}`}>Event Details</p>
          <p className={`${getTicketsStyles.SecondEventText}`}>
            Home &nbsp;  &gt; &nbsp;
            {
              event.BigText
            }
          </p>
        </div>
        <img src={pencileBook}  className={getTicketsStyles.pencileBook}/>
      </div>
      {/* blue box and book container ends */}


      {/* img container start */}


      <div
        className={`${getTicketsStyles.EventImgContainer} containerFluidForPadding`}

      >
        <div className="row"
       id="forFooterBtn"
       >
          <img src={event.upcommingImgOne} />
        </div>

        <div className="row my-5">
          <div className="col-12 col-sm-12  col-md-12 col-lg-12 col-xl-8">
            <div>
              <p className={`${getTicketsStyles.headerOfEvent}`}>
                About The Event
              </p>
              <p className={`${getTicketsStyles.textOFTheHeader}`}>
                Join us for the Future Minds Symposium, a thought-provoking
                educational event designed to inspire and empower individuals to
                navigate the challenges and opportunities of tomorrow’s world.
                This symposium brings together leading experts, visionaries, and
                innovators from various fields to explore cutting-edge ideas and
                share insights on shaping the future.
              </p>
            </div>

            {arrowTextArray.map((arrowTextItem, i) => (
              <div className="d-flex" key={i}>
                <div>
                  <i className="bi bi-arrow-90deg-right"></i>
                </div>
                <div className="ms-3">
                  <p className={`${getTicketsStyles.arrowHeadingText}`}>
                    {arrowTextItem.arrowHeading}
                  </p>
                  <p className={`${getTicketsStyles.arrowSecondText}`}>
                    {arrowTextItem.arrowSecond}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={` col-12 col-sm-12  col-md-12 col-lg-12 col-xl-4  `}>
            <div className={`${getTicketsStyles.eventInfo} p-5`}>
              <p className={`${getTicketsStyles.headerOfEvent} mb-4`}>
                Event Information
              </p>

              <div className="row">
                <div className={`${getTicketsStyles.iconsOfBox} col col-2`}>
                  <i className="bi bi-currency-rupee"></i>
                </div>
                <div className="d-flex  align-items-center justify-content-between col col-10">
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>Cost:</p>
                  <p className={`${getTicketsStyles.headerOfEvent}`}>$ 70.00</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className={`${getTicketsStyles.iconsOfBox} col col-2`}>
                  <i className="bi bi-calendar-month"></i>
                </div>
                <div className="d-flex lign-items-center justify-content-between col">
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>Date:</p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>
                    July 24,2023
                  </p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className={`${getTicketsStyles.iconsOfBox} col col-2`}>
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="d-flex align-items-center justify-content-between col">
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>
                    Total Slot:
                  </p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>54</p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className={`${getTicketsStyles.iconsOfBox} col col-2`}>
                  <i className="bi bi-lock"></i>
                </div>
                <div className="d-flex align-items-center justify-content-between col">
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>
                    Booked Slot:
                  </p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>0</p>
                </div>
              </div>
              <hr />

              <div className={`row ${getTicketsStyles.bookNowBtn}`}>
                <button className="btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
        <p className={`${getTicketsStyles.headerOfEvent}`}>
                About The Event
              </p>
        </div>

        <div className="row row-gap-2 row">
          <div className="col-12 col-lg-12 col-xl-8 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3187595305717!2d78.39101377493724!3d17.49229068341286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911b840a964d%3A0xa0f2c36503fd2bc9!2sManjira%20Majestic%20Parking!5e0!3m2!1sen!2sin!4v1723050664885!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={` col-12 col-lg-12   col-xl-4   col-md-12`}>
            <div className={`${getTicketsStyles.eventVenueInfo} px-5 py-4`}>
              <p className={`${getTicketsStyles.headerOfEvent} mb-4`}>
               Event Venue
              </p>
 
                <div className={`${getTicketsStyles.eventInfoContainer} col`}>
                  <p className={`${getTicketsStyles.textOFTheContHeader}`}>Venue:</p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>Yarra Park, Melbourne</p>
                </div>

              <div className={`${getTicketsStyles.eventInfoContainer} col`}>
                  <p className={`${getTicketsStyles.textOFTheContHeader}`}>Location:</p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>684 West College St. Sun City, USA</p>
                </div>


              <div className={`${getTicketsStyles.eventInfoContainer} col`}>
                  <p className={`${getTicketsStyles.textOFTheContHeader}`}>Phone Number:</p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>(+1) 0 221 457 441</p>
                </div>


              <div className={`d-flex justify-content-between align-items-center col`}>
                  <p className={`${getTicketsStyles.textOFTheContHeader}`}>Web Site:</p>
                  <p className={`${getTicketsStyles.textOFTheHeader}`}>http://www.studyhub.com</p>
                </div>

            </div>

          </div>
        </div>
      </div>
      {/* img container ends */}


      {/* teachers container starts */}
      <div className="containerFluidForPadding">

      <div className="my-5">
        <p className={`${getTicketsStyles.largeHeaderOfEvent}`}>
                Event Speakers
              </p>
        </div>

      <div className={`${teacherStyle.teachersImageAndIcon} row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-xl-4 row-cols-sm-1 row-gap-5`} >
        {teachersArray.map((teacher, i) => (
          <div className="col" key={i}>

           <TeacherContainer teachersFirstText={teacher.teachersFirstText}
            teachersSecondText={teacher.teachersSecondText} teachersImg={teacher.teachersImg}/>
          </div>
        ))}
      </div>



      </div>
      {/* teachers container ends */}

      {/* related events container starts */}

      <div className="containerFluidForPadding">
      <div className="my-5">
        <p className={`${getTicketsStyles.headerOfEvent}`}>
                Related Event
              </p>
        </div>
        <div className={` row  py-2`}>

        {
            
            upcommingEventsArray.map((upCommingEvent,i)=>(

            <div className={`col col-sm-12 col-md-6 col-lg-4 `}   key={i} 
            >
              <div className="p-4 " style={{border:'2px whitesmoke solid',backgroundColor:'whitesmoke',borderRadius:'10px'}}>

              <img src={upCommingEvent.upcommingImgOne} style={{width:'100%' }} />

              <div className={` ${upCommingStyle.rowUpcommingCard} `}>
               

                <div>
                <div className={`${upCommingStyle.upcommingCardFirstText}`}>
                  <p>
                  <i className="bi bi-calendar2-date"></i>
                  {upCommingEvent.smallTextOne}</p>
                  <p><i className="bi bi-stopwatch"></i>
                  {upCommingEvent.smallTextTwo}</p>
                  
                </div>
                <div className={`${upCommingStyle.upcommingCardSecondText}`} >
                  <p>
                  {upCommingEvent.BigText}
                  </p>
                </div>
              </div>
                

                <div className=" ArrowBtn d-flex justify-content-around">
                <div className={`${upCommingStyle.upcommingCardFirstText}`}>
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  {upCommingEvent.smallTextThree}</p>
                  </div>
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


      </div>
      {/* related events container ends */}

      <FooterBtn/>
      <Footer/>
    </div>
  );
};

export default GetTickets;
