import React, { useEffect, useRef, useState } from 'react';
import JD_course from '../../../assets/AssetsOfDetailsPage/JD_course.png';
import Buttonstyle from '../Enrollbutton/Enrollbutton.module.css';
// headerpage logos
import unlockLogo from '../../../assets/AssetsOfDetailsPage/masterclass/unlock.png';
import booksymbol from '../../../assets/AssetsOfDetailsPage/masterclass/open-book.png';
import successLogo from '../../../assets/AssetsOfDetailsPage/masterclass/success.png';
import partnershipLogo from '../../../assets/AssetsOfDetailsPage/masterclass/hand-shake.png';
import MobileIconLogo from '../../../assets/AssetsOfDetailsPage/masterclass/mobile-development.png';

import style from './Header.module.css';
import Enrollbutton from './../Enrollbutton/Enrollbutton';
import BackgroundImg from '../../../assets/AssetsOfDetailsPage/background.png';
import FollowerImg from '../../../assets/AssetsOfDetailsPage/FollowewrGroup.webp';
import starSymbol from '../../../assets/AssetsOfDetailsPage/star.svg';
import { data } from '../../Cards/CardData';
import { useNavigate, useParams } from 'react-router-dom';
import company1Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Accenture.png';
import company2Logo from '../../../assets/AssetsOfDetailsPage/masterclass/AWS.png';
import company3Logo from '../../../assets/AssetsOfDetailsPage/masterclass/CISCO.jpg';
import company4Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Cognizant.png';
import company5Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Fusion Technologies.jpeg';
import company6Logo from '../../../assets/AssetsOfDetailsPage/masterclass/GOC.jpg';
import company7Logo from '../../../assets/AssetsOfDetailsPage/masterclass/pinaca_Technology.jpeg';
import company8Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Honeywell.png';
import company9Logo from '../../../assets/AssetsOfDetailsPage/masterclass/MOURI Tech.png';
import company10Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Micron Technologies.png';
import company11Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Sonata_Software_Logo.png';
import company12Logo from '../../../assets/AssetsOfDetailsPage/masterclass/SucceedTechnologies.png';
import company13Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Sutherland.png';
import company14Logo from '../../../assets/AssetsOfDetailsPage/masterclass/TCS.jpg';
import company15Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tech Mahindra.jpeg';
import company16Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tiger Analytics.png';
import company17Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Tricubics.png';
import company18Logo from '../../../assets/AssetsOfDetailsPage/masterclass/Yotta_Data_Services_Logo.jpg';
import company19Logo from '../../../assets/AssetsOfDetailsPage/masterclass/amber_flux_private_limited_logo.jpeg';
import company20Logo from '../../../assets/AssetsOfDetailsPage/masterclass/dell_technologies_logo.png';
import Testmonials from './../Testmonials/Testmonials';
import Masterclass from './../Masterclass/Masterclass';
import SignInForm from '../Enrollbutton/PopupSignInForm';
import HeaderSignInForm from './HeaderSignInForm';

const logos = [
    { src: company1Logo, alt: "Company 1" },
    { src: company2Logo, alt: "Company 2" },
    { src: company3Logo, alt: "Company 3" },
    { src: company4Logo, alt: "Company 4" },
    { src: company5Logo, alt: "Company 5" },
    { src: company6Logo, alt: "Company 6" },
    { src: company7Logo, alt: "Company 7" },
    { src: company8Logo, alt: "Company 8" },
    { src: company9Logo, alt: "Company 9" },
    { src: company10Logo, alt: "Company 10" },
    { src: company11Logo, alt: "Company 11" },
    { src: company12Logo, alt: "Company 12" },
    { src: company13Logo, alt: "Company 13" },
    { src: company14Logo, alt: "Company 14" },
    { src: company15Logo, alt: "Company 15" },
    { src: company16Logo, alt: "Company 16" },
    { src: company17Logo, alt: "Company 17" },
    { src: company18Logo, alt: "Company 18" },
    { src: company19Logo, alt: "Company 19" },
    { src: company20Logo, alt: "Company 20" }
];

const Headerpart = (courseID) => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const redLineRef = useRef(null);
    const doughtsPartRef = useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // below the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1025);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.DoughtsPartVisible);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (doughtsPartRef.current) observer.observe(doughtsPartRef.current);
        if (redLineRef.current) observer.observe(redLineRef.current);

        return () => {
            if (doughtsPartRef.current) observer.unobserve(doughtsPartRef.current);
            if (redLineRef.current) observer.unobserve(redLineRef.current);
        };
    }, []);



    const togglePopup = () => {
        if (isPopupVisible) {
            // Close the form
            setIsPopupVisible(false);
        } else {
            // Open the form
            setIsPopupVisible(true);
        }
    };
    
    const downloadRoadmap = (url) => {
        const course = data.find(course => course.courseID === courseID);
        const link = document.createElement('a');
        link.href = url; 
        link.download = 'career-roadmap.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <div className={style.headerContainer}>
            <img src={BackgroundImg} alt="Background" className={style.backgroundImage} />
            <div className={style.contentContainer}>
                <div className={style.symbolsContainer}>
                    <h3 className={style.headerText}>
                        {card && (
                            <>
                                {card.Header} <span className={style.highlightedWord}>{card.Duration}</span>
                            </>
                        )}
                    </h3>
                    <div className={style.symbolItemContent}>
                        <div className={style.symbolItem}>
                            <img
                                src={unlockLogo}
                                alt="Book symbol"
                                className={style.symbol1}
                            />
                            <span className={style.symbolText}>Unlock 12+ LPA with In-Demand Skills</span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={booksymbol}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}> Flexible Learning: Classroom & Online Options </span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={successLogo}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}>17,000+ Successful Career Transitions Since 2014</span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={partnershipLogo}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}> 550+ Batches Completed, 350+ Hiring Partners</span>
                        </div>
                        <div className={style.symbolItem}>
                            <img
                                src={MobileIconLogo}
                                alt="Book symbol"
                                className={style.symbol}
                            />
                            <span className={style.symbolText}>Lifetime LMS Access & Dedicated Mobile App</span>
                        </div>
                    </div>
                </div>
                <div className={style.HeaderPicture}>
                    {card && (
                        <img
                            src={JD_course}
                            alt="Course"
                            className={`img-fluid ${style.headerImage} shadow`}
                        />
                    )}
                    <div className={style.EnrollButtonContent}>
                        {card && !isMobile && <Enrollbutton label="Enroll Now" courseID={card.id} className={style.EnrollButton} />}
                        <span><img src={FollowerImg} alt="Follower group" className={style.FollowerImage} /></span>
                        <div className={style.reviewContainer}>
                            <div className={style.FollowerStars}>
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={starSymbol} alt="Star" className={style.star} />
                                ))}
                            </div>
                            <span className={style.FollowerCount}> 426 reviews (4.7 of 5)</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.scrollSection}>
                <p>Trusted by Learners Working At Top Companies</p>
                <div className={style.logoContainer}>
                    <div className={style.logoScroll1}>
                        {logos.slice(0, 10).map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className={style.logo} />
                        ))}
                    </div>
                    <div className={style.logoScroll2}>
                        {logos.slice(10).map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className={style.logo} />
                        ))}
                    </div>
                </div>
            </div>


            <div className={style.testimonials}>
                <div className={`d-flex m-4 ${isMobile ? 'flex-column text-center' : 'justify-content-center align-items-center gap-2'}`}>
                    <h3 className="fw-bold">
                        <span style={{ color: '#ff5003' }}> Know More</span> About {card && card.text}
                    </h3>
                    <button className={`btn btn-primary fw-bold ${Buttonstyle.shinebtn}`} onClick={togglePopup}>
                        Download Roadmap
                    </button>
                    {isPopupVisible && <HeaderSignInForm onClose={togglePopup} courseID={courseID} />}
                </div>
                <Testmonials />
            </div>
        </div>
    );
};

export default Headerpart;
