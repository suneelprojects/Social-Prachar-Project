import React from "react";
import homeStyle from  "./home.module.css";
import bulb from "../../assets/bulb.png";
import homepic01 from "../../assets/01.png";
import iconMan from "../../assets/iconMan.png";
import flowtingBtn from '../../assets/flowtingBtn.png'
import ArrowButton from "../extraComponents/arrowButton";
import ParallaxEffect from '../extraComponents/ParallaxEffect'
import SvgBulb from '../../assets/bulbSvg.png'
import dumbelSvg from '../../assets/dumbel.png'
import BookSvg from '../../assets/book.png'

import yellowLine from '../../assets/yellowLine.png'


const Home = () => {
  const images = [
    { src: dumbelSvg,
      className:'objectOne',
       dataValue: '5', alt: 'Image 1' },
    { src: BookSvg,
      className:'objectTwo', 
      dataValue: '5', alt: 'Image 2' },
    { src: SvgBulb,
      className:'objectThree',
       dataValue: '5', alt: 'Image 3' },
  ];
  return (
    <>
    <div className="main-container" id="forFooterBtn">
    <ParallaxEffect images={images} />
      <div className= {`row containerFluidForPadding bg-body-tertiary forHoverEffect`}>
        {/* content side of home code starts */}
        <div className={`col-md-6 col-lg-6 col-xl-6 ${homeStyle.homeLeftSide}`} id="homeLeftSide">
          <div>
            <span className='bulbSpan'>
              <img src={bulb} />
            </span>
            <text className="blueText">Gateway to Lifelong Learning</text>
            <br />
            <text className={`${homeStyle.title}`}>
              Unlock Your Potential with Online Learning
    <img src={yellowLine} alt="yellowLine" className={`${homeStyle.yellowLine}`}/>

            </text>
            <br />
            <text className="greyText">
              Discover a world of knowledge and opportunities with our online
              education platform pursue a new career.
            </text>

            <div className="row mt-4 ">
              <div className="col-12 col-sm-12 col-xl-4">
                <ArrowButton ArrowText='View All Button'/>
              </div>
              <div className="col-12 col-sm-12 col-xl-6 d-flex justify-content-around">
                <div className={`${homeStyle.imgIcons } d-flex`}>
                  <img src={iconMan} />
                  <img src={iconMan} className={`${homeStyle.secondIconImg}`} />
                  <img src={iconMan} className={`${homeStyle.thirdIconImg}`} />
                  <div className={`${homeStyle.plusIcon}`}>+</div>
                </div>
                <text className="greyText">
                  <span className={`${homeStyle.studentNoText}`}>2k students</span>
                  <br />
                  Joint our online Class
                </text>
              </div>
            </div>
          </div>
        </div>
        {/* content side of home code ends */}
        
        <div className={`${homeStyle.homeRightSide} col-md-6 col-lg-6 col-xl-6 `} id="homeRightSide">
          
          <div className={`${homeStyle.forFlowingBtn}`}>

          <div className={`${homeStyle.flowtingLeftBtn}`}>
            <img src={flowtingBtn}/>
            <div >
            <text className={`${homeStyle.flowtingBtnFirst}`}>4.5</text><br/>
            <text className={`${homeStyle.flowtingBtnGreyText}`}>{"("}2.4k reviews{")"}</text>
            </div>
          </div>


          <div className={`${homeStyle.flowtingRightBtn}`}>
            
            <img src={flowtingBtn}/>
            <div >
            <text className={`${homeStyle.flowtingBtnFirst}`}>100+</text><br/>
            <text className={`${homeStyle.flowtingBtnGreyText}`}>{"("}Online Courses{")"}</text>
            </div>
            </div>

          

          </div>
          <div>
            
          </div>
         
          <img src={homepic01} className={`${homeStyle.homePic}`} />
          
        

        </div>
        {/* <FollowCursor/> */}
        
      </div>
      
    </div>

    </>
  );
};

export default Home;
