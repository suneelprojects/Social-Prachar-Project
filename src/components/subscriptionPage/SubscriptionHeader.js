import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
import Footer from './../footer/footer';
import Accordian from './Accordian';
import Google from './Google';
import Linkedin from './Linkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FaRobot, FaRupeeSign } from 'react-icons/fa';
import style from '../Career_workshop/ButtonDemoBooking/Button.module.css';
import RegisterForm from './FormButton';
import JD_course from '../../assets/AssetsOfDetailsPage/JD_course.png';
import { useParams } from 'react-router-dom';


const SubscriptionHeader = () => {
    const [weekDate, setWeekDate] = useState("");
    useEffect(() => {
        const today = new Date();
        const daysUntilWednesday = (3 - today.getDay() + 7) % 7;
        const nextWednesday = new Date(today);
        nextWednesday.setDate(today.getDate() + daysUntilWednesday);

        setWeekDate(nextWednesday.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }));
    }, []);

    const { userType } = useParams();
    console.log("User Type:", userType); 
    const displayText = userType === "students" ? "Students can" : "Working Professionals";
    const changePlan = userType === "students" ? "6999 INR/Month (6 Months EMI)" :"EMI starts at just ₹50/day";

    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="text-center">
                        <h1 className="fw-bold col-md-10 mx-auto">
                            Upskill Yourself with <span style={{ color: '#ff5003' }}>Hyderabad’s #1 Subscription-Based</span> Learning Plan!
                        </h1>
                    </div>

                    <div className="row align-items-center px-3 px-md-5 py-4">
                        {/* Left Content Section */}
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <h2 className="fw-bold" style={{ color: '#2c2c2c' }}>
                                {displayText} <span style={{ color: '#ff5003' }}>Save 95%</span> with SocialPrachar's Subscription Plan!
                            </h2>
                            <h4 className="py-3" style={{ color: '#443cdf' }}>
                                <FontAwesomeIcon icon={faTags} className="px-2" />
                                One Subscription – Learn Multiple Courses!
                            </h4>
                            <p>
                                Get unlimited access to <span className="fw-bold">Full Stack Development, Data Science, AI, Cloud, and more</span> with SocialPrachar's <span className="fw-bold">all-in-one subscription.</span>
                                Gain hands-on experience, expert mentorship, and AI-powered career tools—all at an unbeatable price!
                            </p>
                            <p className="fw-bold">
                                <FaRobot className="me-2" size={24} /> Exclusive AI-driven tools & career support included!
                            </p>
                            <p className="fw-bold">
                                <FaRupeeSign className="me-2" size={24} />{changePlan}
                            </p>
                            <p>
                                Invest in your future—One Subscription, <span className="fw-bold">Unlimited Learning!</span>
                            </p>
                            <div className="text-center">
                                <RegisterForm label={"Book Free Demo Now"} className={`${style.button} my-3 fw-bold`} />
                                <p className="fw-bold" style={{ fontSize: '18px' }}>
                                    Register by <span style={{ color: '#4941e1', fontSize: '22px' }}>{weekDate}</span> to unlock exclusive bonuses
                                </p>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="col-12 col-md-6 text-center">
                            <img
                                src={JD_course}
                                alt="Subscription Course"
                                className="img-fluid rounded"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    borderRadius: "15px",
                                    background: "black"
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <SecondPart />
            <ThirdPart />
            <FourthPart />
            <Linkedin />
            <Google />
            <Accordian />
            <Footer />
        </>
    );
};

export default SubscriptionHeader;