import React from "react";
import flowtingBtn from "../../assets/flowtingBtn.png";
import girl from "../../assets/girl.jpg";
import bulb from "../../assets/bulb.png";
import videoGifStyle from './videoGif.module.css'

// import VideoPlayer from 'react-video-js-player';
import gifPic from "../../assets/gifPic.png";
import BulbText from "../extraComponents/bulbText";
const GateWay = () => {
  return (
    <>
    <div className="containerFluidForPadding">

      <div className={`row mt-5 mb-5 ${videoGifStyle.gateWayContainer} `}>
        {/* left side box code start */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
          <div className={`${videoGifStyle.leftSideOfVideoGif}`}>
            <div className={`${videoGifStyle.reviewBtn}`}>
              <div>
                <p className={`${videoGifStyle.gateWayBigText}`}>4.8K</p>
                <br />
                <p className={`${videoGifStyle.gateWaySmallText}`}>Positive Reviews</p>
              </div>

              <img src={flowtingBtn} />
            </div>
            <div className={`${videoGifStyle.girlImage}`}>
              <img src={girl} />
            </div>

            <div className={`${videoGifStyle.gifVideo}`}>
              <img src={gifPic} />
            </div>
          </div>
        </div>
        {/* left side box code end */}
        {/* right side box code start */}

        <div className={`mt-5  col-12 col-sm-12 col-md-12  col-lg-12 col-xl-6 ${videoGifStyle.rightSideOfVideoGif}`}>
          
          <BulbText BulbText='Gateway to Lifelong Learning'
          bulbTitle='Know Social Prachar Empowering Learners Worldwide'
          GreyText={`We are passionate about education and dedicated to providing \n high-quality learning resources for learners of all backgrounds.`} />

          <div className="row py-5 ">
            <div className={`${videoGifStyle.gateWayRowDiv} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 `}>
            
                <img src={flowtingBtn} />
                <div>
                <p className={`${videoGifStyle.gateWayRowDivTextOne}`}>Learn With Expert</p>
                <br />
                <p className={`${videoGifStyle.gateWayRowDivTextTwo}`} >
                  We are passionate education
                </p>
                </div>
              
            </div>

            <div className={`${videoGifStyle.gateWayRowDiv} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6`} >
             
                <img src={flowtingBtn} />
                <div>
                <p className={`${videoGifStyle.gateWayRowDivTextOne}`} >Expert Instructors</p>
                <br />
                <p className={`${videoGifStyle.gateWayRowDivTextTwo}`} >
                  We are passionate education
                </p>
                </div>
                
             
            </div>
          </div>

          {/* <hr />

          <div className="row py-4">
            <div className={`${videoGifStyle.gateWayRowDiv } col-9 col-sm-9 col-md-9 col-lg-9 col-xl-6`} id={`${videoGifStyle.imgIcons}`}>
              <img src={flowtingBtn}  />
              <div>
              <text className="gateWayRowDivTextOne">William James</text>
              <br />
              <text className="gateWayRowDivTextTwo">
                CEO, Studyhub Online Education
              </text>
              </div>
              
            </div>

            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-6">
              <button className="btn">About Us</button>
            </div>
          </div> */}
        </div>
        {/* right side box code end */}
    </div>
    </div>
    </>
  );
};

export default GateWay;
