import React from 'react';
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
import Button from '../Career_workshop/ButtonDemoBooking/Button';
import SubscriptionSteps from '../../components/subscriptionPage/SubscriptionSteps.js';


const SubscriptionHeader = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="d-flex justify-content-center">
                        <h1 className="fw-bold text-center col-md-10">
                            Upskill Yourself with Hyderabad’s First Subscription-Based Learning Plan!
                        </h1>
                    </div>

                    <div className="col-md-6 p-5">
                        <h2 className='fw-bold text-start' style={{ color: '2c2c2c' }}>Working Professionals Save 65% with SocialPrachar's Subscription Plan!</h2>
                        <h4 className='py-3'><FontAwesomeIcon icon={faTags} className='px-2'/>One Subscription – Learn Multiple Courses!</h4>
                        <p>Get unlimited access to <span className='fw-bold'>Full Stack Development, Data Science, AI, Cloud, and more</span> with SocialPrachar's <span className='fw-bold'>all-in-one subscription.</span> Gain hands-on experience, expert mentorship, and AI-powered career tools—all at an unbeatable price!</p>
                        <p className='fw-bold'>
                            <FaRobot className="me-2" size={30}/> Exclusive AI-driven tools & career support included!
                        </p>
                        <p className='fw-bold'>
                            <FaRupeeSign className="me-2" size={30}/> EMI starts at just ₹50/day
                        </p>
                        <p>Invest in your future—One Subscription, <span className='fw-bold'>Unlimited Learning!</span> </p>
                        <div className="d-flex gap-3 justify-content-start my-3">
                            {/* <button className="btn btn-outline-dark px-4 rounded-pill">Free Trial</button>
                            <button className="btn btn-primary px-4 rounded-pill">Buy Now</button> */}
                            <Button />
                            {/* <SuccessStoriesForm /> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <video src="" className="" controls></video> */}
                        <p src="" alt="" style={{ background: 'black', color: 'white' }}>hii</p>
                    </div>
                </div>
            </div>

            <SecondPart />
            <SubscriptionSteps/>
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
