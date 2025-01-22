import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import footerStyle from "./footer.module.css";
import footerImg from "../../assets/footer2_cta_image.png";
import spLogo from '../../assets/SP_Logo.png';
import ParallaxEffect from '../extraComponents/ParallaxEffect.js';
import googlePlay from '../../assets/google_play.svg';
import AppleStore from '../../assets/app_store.svg';
import wavesPic from '../../assets/waves.png';
import BookSvg from '../../assets/book.png';
import whiteBulb from '../../assets/whiteBulb.png';

const Footer = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const images = [
        { src: wavesPic, className: 'objectOne', dataValue: '5', alt: 'Waves Image' },
        { src: BookSvg, className: 'objectTwo', dataValue: '5', alt: 'Book Image' },
    ];

    const iconsArray = [
        { icon: <i className="bi bi-facebook"></i>, iconLink: 'https://www.facebook.com/socialprachar/' },
        { icon: <i className="bi bi-instagram"></i>, iconLink: 'https://www.instagram.com/socialprachar_institute/' },
        { icon: <i className="bi bi-linkedin"></i>, iconLink: 'https://www.linkedin.com/company/6635034/admin/dashboard/' },
        { icon: <i className="bi bi-youtube"></i>, iconLink: 'https://youtube.com/@socialprachar?si=jPmucrBrLin2Ppu6' },
        { icon: <i className="bi bi-twitter-x"></i>, iconLink: 'https://x.com/i/flow/login?redirect_after_login=%2Fsocial_prachar' },
    ];

    const OfficeDetails = [
        <b>Head Office:</b>, '#508, 5th Floor,', 'Manjeera Majestic Commercial,', 'JNTU - HiTech City Road,', 'KPHB, Hyderabad - 500072', 'Contact: +91-8019 479 419'
    ];

    const TrainingCenter = [
        <b>Training Center:</b>, '#301, 4th Floor,', 'Sathyabhama Commercial Complex,', 'BhagyaNagar Colony,', 'KPHB, Hyderabad – 500072', 'Contact: +91-8019 479 419'
    ];

    const QuickLinks = [
        { name: 'Full Stack Web Development', path: '/full-stack-web-development' },
        { name: 'AWS + DevOps', path: '/aws-devops' },
        { name: 'Data Science + AI', path: '/data-science-ai' },
        { name: 'Digital Marketing', path: '/digital-marketing' },
        { name: 'Privacy Policy', path: '/privacy-policy' }
    ];

    const NavToAppleStore = () => {
        window.open(`https://apps.apple.com/us/app/classplus/id1324522260`, "_blank");
    }

    const NavToPlayStore = () => {
        window.open(`https://play.google.com/store/apps/details?id=co.diy7.vjaau&hl=en_IN`, "_blank");
    }

    const navigateToSocial = (iconLink) => {
        window.open(iconLink, "_blank");
    };

    const handleNavigate = (path) => {
        navigate(path); // Use navigate to change the route
    };

    return (
        <>
            <div className="container-fluid footerHover">
                {/* Footer certificate */}
                <ParallaxEffect images={images} />
                <div>
                    <div className={`row row-cols-sm-12 row-gap-5 py-3 ${footerStyle.footerCertificate}`}>
                        <div className={`col ${footerStyle.certificateText}`}>
                            <div className="d-block">
                                <span className={`d-flex ms-1 ${footerStyle.whiteBulb}`}>
                                    <img src={whiteBulb} />
                                    <h4>Learn On The Go</h4>
                                </span>
                                <p>
                                    Build your Skills For Better Tomorrow<br /> Learn Till You Get Placed
                                </p>
                                <div className={`${footerStyle.StoreBtns}`}>
                                    <img src={AppleStore} className={footerStyle.AppleStore} onClick={NavToAppleStore} />
                                    <img src={googlePlay} onClick={NavToPlayStore} />
                                </div>
                            </div>
                        </div>

                        <div className={`col  ${footerStyle.certificateImg}`} id={`${footerStyle.certificateImg}`}>
                            <img src={footerImg} />
                        </div>
                    </div>

                    {/* Footer Lists */}
                    <div className={`row ${footerStyle.fotterList}`}>
                        {/* First Column */}
                        <div className="col-12 col-md-3">
                            <div className={footerStyle.spLogo}>
                                <img src={spLogo} alt="SP Logo" />
                            </div>
                            <p>
                                SocialPrachar, founded by an IIM alumnus, is a leading EdTech company with 10+ years of expertise. We’ve trained 16,000+ students and achieved a 95% placement success rate with packages.
                                Offering cutting-edge programs in Full Stack, Data Science, AI, and Cloud.
                            </p>
                            <div className="d-flex gap-4">
                                {iconsArray.map((iconItem, i) => (
                                    <div className={footerStyle.mediaIcon} key={i} onClick={() => navigateToSocial(iconItem.iconLink)}>
                                        {iconItem.icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Second Column - Office Details */}
                        <div className="col-12 col-md-3">
                            {OfficeDetails.map((detail, i) => (
                                <div className={footerStyle.useFullLink} key={i}>{detail}</div>
                            ))}
                        </div>

                        {/* Third Column - Training Center */}
                        <div className="col-12 col-md-3">
                            {TrainingCenter.map((detail, i) => (
                                <div className={footerStyle.Explore} key={i}>{detail}</div>
                            ))}
                        </div>

                        {/* Fourth Column - Quick Links */}
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                            <b>Job Guarantee Programs</b>
                            <div>
                                {QuickLinks.map((link, i) => (
                                    <div className={`${footerStyle.Explore}`} key={i} onClick={() => handleNavigate(link.path)}>
                                        {link.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className={footerStyle.copyRight}>
                <p>Copyright © 2025 All Rights Reserved by Social Prachar</p>
            </div>
        </>
    );
};

export default Footer;
