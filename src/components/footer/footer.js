import React from "react";
import footerStyle from "./footer.module.css";
import footerImg from "../../assets/footer2_cta_image.png";
import spLogo from '../../assets/SP_Logo.png'

import ParallaxEffect from '../extraComponents/ParallaxEffect'
import googlePlay from '../../assets/google.png'
import AppleStore from '../../assets/AppleStore.png'

import wavesPic from '../../assets/waves.png'
import BookSvg from '../../assets/book.png'
import whiteBulb from '../../assets/whiteBulb.png'

const Footer = () => {

    const images = [
        { src: wavesPic,
          className:'objectOne',
           dataValue: '5', alt: 'Image 1' },
        { src: BookSvg,
          className:'objectTwo', 
          dataValue: '5', alt: 'Image 2' }
      ];


    var iconsArray=[{icon:<i className="bi bi-facebook"></i>,
        iconLink:`https://www.facebook.com/socialprachar/`
    },
    {icon:<i className="bi bi-instagram"></i>,
    iconLink:`https://www.instagram.com/socialprachar_institute/`},
    {icon:<i className="bi bi-linkedin"></i>,
    iconLink:`https://www.linkedin.com/company/6635034/admin/dashboard/`}
    ,{icon:<i className="bi bi-youtube"></i>,
    iconLink:`https://youtube.com/@socialprachar?si=jPmucrBrLin2Ppu6`},
    {icon:<i class="bi bi-twitter-x"></i>,
    iconLink:`https://x.com/i/flow/login?redirect_after_login=%2Fsocial_prachar`}
    ];
    const OfficeDetails=[<b>Head Office : </b>,'#508, 5th Floor,',
        'Manjeera Majestic Commercial,',
        'JNTU - HiTech City Road,',
        'KPHB, Hyderabad - 500072',
        'Contact: +91-8019 479 419']
    const TrainingCenter=[<b>Training Center</b>,'#301, 4th Floor,',
            'Sathyabhama Commercial Complex, ',
            'BhagyaNagar Colony,',
            'KPHB, Hyderabad – 500072',
            'Contact: +91-8019 479 419']    
    const QuickLinks=[<b>Quick Links</b>,'Full Stack Web Development',
        'AWS + DevOps',
        'Data Science + AI',
        'Digital Marketing',
        'Private Policy']
        
    const NavToAppleStore=()=>{
        window.open(`https://apps.apple.com/us/app/classplus/id1324522260`, "_blank");
    }
    const NavToPlayStore=()=>{
        window.open(`https://play.google.com/store/apps/details?id=co.diy7.vjaau&hl=en_IN`, "_blank");
    }
    const NavToSocialPrachar=(iconLink)=>{
        window.open(iconLink, "_blank");
    }

  return (
    <>
    <div className="containerFluidForPadding footerHover ">
        {/* footer certificate starts */}
        <ParallaxEffect images={images}/>
      <div className="">
        <div className={`row row-cols-sm-12 row-gap-5 py-3 ${footerStyle.footerCertificate}`}>
           
            
            <div className={`col ${footerStyle.certificateText}`}>
                <div className="d-block">
                <span className="d-flex">
                    <img src={whiteBulb}/>
                    <h4>Learn On The Go</h4>
                </span>
                <p>
                Build your Skills Certificate From<br/> the SocailPrachar Online course
                </p>
                <div className={` ${footerStyle.StoreBtns}`} >
                    
               <img src={AppleStore} className="me-3" onClick={NavToAppleStore}/>
                <img src={googlePlay} onClick={NavToPlayStore}/>
                </div>
                </div>
                
            </div>

            <div className={`col  ${footerStyle.certificateImg}`} id={`${footerStyle.certificateImg}`}>
            <img src={footerImg} />
            </div>
        

        </div>

        {/* footer certificate ends */}

        {/* footer code starts */}

        <div className={`row ${footerStyle.fotterList}`}>
            <div className={`col-12 col-sm-12 col-md-6 col-lg-3`}>
                <div>

                <div className={footerStyle.spLogo}>
                
                <img src={spLogo}/>
                </div>
                
                    <p>
                    We are passionate education dedicated to providing high-quality resources learners all backgrounds.
                    </p>
                
                </div>

            
                
                <div className="d-flex gap-4">
                    {
                        iconsArray.map((iconItem,i)=>(
                            <div className={`${footerStyle.mediaIcon}`} key={i}>
                    
                    {<span onClick={()=>NavToSocialPrachar(iconItem.iconLink)}>{iconItem.icon}</span>}
                    </div>
                        ))
                    }
                    
                </div>
            </div>

            <div className={`col-12 col-sm-12  col-md-6 col-lg-3 ${footerStyle.fotterListMediaQuery}`}>
                <div>
                    {
                        OfficeDetails.map((LinksList,i)=>(
                            <div className={`${footerStyle.useFullLink}`} key={i}>{LinksList}</div>
                            
                        ))
                    }
                </div>
            </div>

            {/* second list starts */}

            <div className={`col-12 col-sm-12  col-md-6 col-lg-3 ${footerStyle.fotterListMediaQuery}`}>
                <div>
                    {
                        TrainingCenter.map((LinksList,i)=>(
                            <div className={`${footerStyle.Explore}`} key={i}>{LinksList}</div>
                        ))
                    }
                </div>
            </div>

            {/* second list ends */}

            {/* fouth list starts */}

            <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                <div>
                {
                        QuickLinks.map((LinksList,i)=>(
                            <div className={`${footerStyle.Explore}`} key={i}>{LinksList}</div>
                        ))
                    }
                </div>
                
            </div>


        </div>




      </div>

        {/* footer certificate ends */}

    </div>
        <div className={`${footerStyle.copyRight}`}>
            <p>
            Copyright © 2024 All Rights Reserved by SocailPrachar
            </p>
        </div>
    </>
  );
};

export default Footer;
