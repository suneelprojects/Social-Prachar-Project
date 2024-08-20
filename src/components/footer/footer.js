import React from "react";
import footerStyle from "./footer.module.css";
import women from "../../assets/women-1.png";
import studyHub from '../../assets/Studyhub.png'
import ParallaxEffect from '../extraComponents/ParallaxEffect'

import wavesPic from '../../assets/waves.png'
import BookSvg from '../../assets/book.png'

import { Link } from "react-router-dom";

const Footer = () => {

    const images = [
        { src: wavesPic,
          className:'objectOne',
           dataValue: '5', alt: 'Image 1' },
        { src: BookSvg,
          className:'objectTwo', 
          dataValue: '5', alt: 'Image 2' }
      ];


    var iconsArray=[<i className="bi bi-facebook"></i>,<i className="bi bi-instagram"></i>,<i className="bi bi-linkedin"></i>
        ,<i className="bi bi-youtube"></i>,<i className="bi bi-instagram"></i>
    ];
    var useFullLinks=[<b>Usefull Links</b>,'Course',
        'Mission & Vision',
        'Join a Carrer',
        'Zoom Meeting',
        'Pricing Plan']

  return (
    <div className="containerFluidForPadding footerHover ">
        {/* footer certificate starts */}
        <ParallaxEffect images={images}/>
      <div className="">
        <div className={`row ${footerStyle.footerCertificate}`}>
            <div className={`col-xl-4 ${footerStyle.certificateImg}`} id={`${footerStyle.certificateImg}`} >
            <img src={women} />

            </div>

            <div className={`col-xl-4 ${footerStyle.certificateText}`} id={`${footerStyle.certificateText}`}>
            <p className={`${footerStyle.gateWaytitle}`}>
            Skills Certificate From<br/> the Studyhub
            </p>
            </div>

            <div className={`col-xl-4 ${footerStyle.certificateBtn}`} id={`${footerStyle.certificateBtn}`}>
            <button className="btn btn-light">view All Button <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
            </div>

        

        </div>

        {/* footer certificate ends */}

        {/* footer code starts */}

        <div className={`row ${footerStyle.fotterList}`}>
            <div className={`col-12 col-sm-12 col-md-6 col-lg-3`}>
                <div>

                <div>
                <img src={studyHub}/>
                </div>
                
                    <p>
                    We are passionate education dedicated to providing high-quality resources learners all backgrounds.
                    </p>
                
                </div>

            
                
                <div className="d-flex gap-4">
                    {
                        iconsArray.map((icon,i)=>(
                            <div className={`${footerStyle.mediaIcon}`} key={i}>
                    
                    {icon}
                    </div>
                        ))
                    }
                    
                </div>
            </div>

            <div className={`col-12 col-sm-12  col-md-6 col-lg-3 ${footerStyle.fotterListMediaQuery}`}>
                <div>
                    {
                        useFullLinks.map((LinksList,i)=>(
                            <div className={`${footerStyle.useFullLink}`} key={i}>{LinksList}</div>
                            
                        ))
                    }
                </div>
            </div>

            {/* second list starts */}

            <div className={`col-12 col-sm-12  col-md-6 col-lg-3 ${footerStyle.fotterListMediaQuery}`}>
                <div>
                    {
                        useFullLinks.map((LinksList,i)=>(
                            <div className={`${footerStyle.Explore}`} key={i}>{LinksList}</div>
                        ))
                    }
                </div>
            </div>

            {/* second list ends */}

            {/* fouth list starts */}

            <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                <div>
                    <div>
                    <b>Newsletter</b>
                    </div>
                   
                    <p>Subscribe Our newsletter get update our new course</p>
                   
                    <div>
                    <div className={`${footerStyle.subscribe}`}>
                <input type="email" placeholder="Enter your Email" />
                <button className="btn">Subscribe</button>
                </div>
                    </div>
                    <div>
                    <input type="checkbox"/><p>I agree to the terms of use and privacy policy.</p>
                    </div>
                </div>
                
            </div>


        </div>




      </div>

        {/* footer certificate ends */}
        <div className={`${footerStyle.copyRight}`}>
            <p>
            Copyright © 2024 All Rights Reserved by Social Tech
            </p>
        </div>

    </div>
  );
};

export default Footer;
