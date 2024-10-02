import React from "react";
import flowtingBtn from "../../assets/flowtingBtn.png";
import girl from "../../assets/girl.jpg";
import videoGifStyle from './videoGif.module.css'
import videoConImg1 from '../../assets/videoConImg1.png'
import videoConImg2 from '../../assets/videoConImg2.png'
import gifPic from "../../assets/gifPic.png";
import BulbText from "../extraComponents/bulbText";
import SPVideo from "./SPVideo";

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
              <div className={videoGifStyle.playBtn}>
                <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg></button></div>
              <SPVideo/>
            </div>
          </div>
        </div>
        {/* left side box code end */}
        {/* right side box code start */}

        <div className={`mt-5  col-12 col-sm-12 col-md-12  col-lg-12 col-xl-6 ${videoGifStyle.rightSideOfVideoGif}`}>
          
          <BulbText BulbText='Gateway to Lifelong Learning'
          bulbTitle='Know SocialPrachar Empowering Learners Worldwide'
          GreyText={`We are passionate about education and dedicated to providing \n high-quality learning resources for learners of all backgrounds.`} />

          <div className="row py-5 ">
            <div className={`${videoGifStyle.gateWayRowDiv} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 `}>
            
                <img src={videoConImg1} />
                <div>
                <p className={`${videoGifStyle.gateWayRowDivTextOne}`}>Learn With Expert</p>
                <br />
                <p className={`${videoGifStyle.gateWayRowDivTextTwo}`} >
                  We are passionate education
                </p>
                </div>
              
            </div>

            <div className={`${videoGifStyle.gateWayRowDiv} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6`} >
             
                <img src={videoConImg2} />
                <div>
                <p className={`${videoGifStyle.gateWayRowDivTextOne}`} >Expert Instructors</p>
                <br />
                <p className={`${videoGifStyle.gateWayRowDivTextTwo}`} >
                  We are passionate education
                </p>
                </div>
                
             
            </div>
          </div>

          
        </div>
        {/* right side box code end */}
    </div>
    </div>
    </>
  );
};

export default GateWay;
