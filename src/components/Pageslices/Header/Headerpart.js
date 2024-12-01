import React, { useEffect, useRef, useState } from 'react';

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
import RedLine from '../../../assets/AssetsOfDetailsPage/RedLine.webp';
import questionMark from '../../../assets/AssetsOfDetailsPage/RedQuestionmark.svg';
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


const Headerpart = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const redLineRef = useRef(null);
    const header1Ref = useRef(null);
    const header2Ref = useRef(null);
    const doughtsPartRef = useRef(null);
    

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // useEffect(() => {
    //     const cardDetails = data.find(card => card.courseID === parseInt(cardId));
    //     setCard(cardDetails);
    // }, [cardId]);


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

    return (
        <div className={style.headerContainer}>
            <img src={BackgroundImg} alt="Background" className={style.backgroundImage} />
            <div className={style.contentContainer}>
                <div className={style.symbolsContainer}>
                    <h2 className={style.headerText}>
                        {card && (isMobile
                            ? <>{card.Header2} <span className={style.highlightedWord}>{card.Duration}</span></>
                            : <>{card.Header1} <span className={style.highlightedWord}>{card.Duration}</span></>)}
                    </h2>
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
                    {card && <img src={card.courseImage} alt="Course" className={style.headerImage} />}
                    <div className={style.EnrollButtonContent}>
                        {card && !isMobile && <Enrollbutton label="Enroll Now" courseID={card.id} className={style.EnrollButton} />}
                        <span><img src={FollowerImg} alt="Follower group" className={style.FollowerImage} /></span>
                        <div className={style.reviewContainer}>
                            <div className={style.FollowerStars}>
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={starSymbol} alt="Star" className={style.star} />
                                ))}
                            </div>
                            <span className={style.FollowerCount}>10K+ reviews (4.9 of 5)</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.scrollSection}>
                <p>Trusted by Learners Working At Top Companies</p>
                <div className={style.logoContainer}>
                    <div className={style.logoScroll1}>
                        <img src={company1Logo} alt="Company 1" className={style.logo} />
                        <img src={company2Logo} alt="Company 2" className={style.logo} />
                        <img src={company3Logo} alt="Company 3" className={style.logo} />
                        <img src={company4Logo} alt="Company 4" className={style.logo} />
                        <img src={company5Logo} alt="Company 5" className={style.logo} />
                        <img src={company6Logo} alt="Company 6" className={style.logo} />
                        <img src={company7Logo} alt="Company 7" className={style.logo} />
                        <img src={company8Logo} alt="Company 8" className={style.logo} />
                        <img src={company9Logo} alt="Company 9" className={style.logo} />
                        <img src={company10Logo} alt="Company 10" className={style.logo} />
                    </div>
                    <div className={style.logoScroll2}>
                        <img src={company11Logo} alt="Company 1" className={style.logo} />
                        <img src={company12Logo} alt="Company 2" className={style.logo} />
                        <img src={company13Logo} alt="Company 3" className={style.logo} />
                        <img src={company14Logo} alt="Company 4" className={style.logo} />
                        <img src={company15Logo} alt="Company 5" className={style.logo} />
                        <img src={company16Logo} alt="Company 6" className={style.logo} />
                        <img src={company17Logo} alt="Company 7" className={style.logo} />
                        <img src={company18Logo} alt="Company 8" className={style.logo} />
                        <img src={company19Logo} alt="Company 9" className={style.logo} />
                        <img src={company20Logo} alt="Company 10" className={style.logo} />
                    </div>
                </div>
            </div>

            <div className={style.testimonials}>
                <Testmonials />
            </div>
            <div className={style.DoughtsPart} ref={doughtsPartRef}>
                <p ref={header1Ref} className={`${style.header1}`}>
                    {card?.selfQuestioningPart1}
                </p>
                <p ref={header2Ref} className={`${style.header2}`}>
                    {card?.selfQuestioningPart2}
                </p>
                <img
                    ref={redLineRef}
                    src={RedLine}
                    alt=""
                    className={`${style.redLine}`}
                />
                <div className={style.SelfQuestioning} data-aos="zoom-in" data-aos-duration="1000">
                    {card && card.questions && card.questions.map((question, index) => (
                        <div className={style.questionItem} key={index}>
                            <img src={questionMark} alt="Question mark" className={style.questionIcon} />
                            <p>{question}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Headerpart;
