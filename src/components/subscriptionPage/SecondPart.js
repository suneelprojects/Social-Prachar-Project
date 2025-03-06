import React from "react";
import style from './SecondPart.module.css';
import { FaBookOpen } from 'react-icons/fa';
import RegisterForm from './FormButton';
import HeaderStyle from '../Pageslices/Enrollbutton/Enrollbutton.module.css';


const cardContent = [

    {
        logoImage: "https://via.placeholder.com/60",
        title: <>Ultimate Job-Ready Pack – <span style={{ color: '#ff5003' }}>₹40,000/-</span> (For Serious Professionals & Career Changers)</>,
        subTitle: ["Advanced Live Training (Online or Classroom) + Internship",
            "Master high - demand skills & gain deep expertise",
            "Covers Data Analytics + Data Science + AI, Full Stack Java + React, MERN Stack",
            "Includes resume building, mock interviews & career support",
            "Ideal for professionals aiming for high - paying tech jobs"],
        color: style.card_acrobat,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: <><span style={{ color: '#ff5003' }}>Custom Learning Pack </span>– Tailored Pricing (For Working Professionals Seeking Personalized Learning)</>,
        subTitle: ["Customized learning paths based on your career goals",
            "Select courses & modules as per your requirements",
            "Flexible learning schedule – Online, Live Training, or Hybrid",
            "Mentorship, career guidance & skill - building support",
            "Best for professionals looking for specific upskilling in their domain"],
        color: style.card_premiere,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: <>Starter Pack – <span style={{ color: '#ff5003' }}>₹12,000/-</span> (For Beginners & Self-Paced Learners)</>,
        subTitle: ["100% Online Learning with 1-Year App Access",
            "Learn at your own pace with expert - designed courses",
            "Access to Digital Marketing, Data Analytics, AWS, DevOps",
            "Perfect for working professionals & freshers looking to upskill"],
        color: style.card_adobe,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: <>Pro Learning Pack –<span style={{ color: '#ff5003' }}> ₹18,000/-</span> (For Those Who Want Interactive Learning)</>,
        subTitle: ["Live Training(Online or Classroom) + Recorded Sessions",
            "Expert mentorship with real - world projects",
            "Covers Data Analytics, Digital Marketing, AWS, DevOps",
            "Ideal for learners who prefer structured, instructor - led sessions"],
        color: style.card_photoshop,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: <>Career Growth Pack –<span style={{ color: '#ff5003' }}> ₹28,000/-</span> (For Job Seekers & Career Switchers)</>,
        subTitle: ["Live Training(Online or Classroom) + Internship + Hybrid Learning",
            "Hands - on industry projects & case studies",
            "Gain expertise in Data Analytics + Data Science, AWS + DevOps, Full Stack Java, MERN Stack",
            "Best for those looking to build strong technical foundations & real - world experience"],
        color: style.card_illustrator,
    },

];

const SecondPart = () => {
    return (
        <>

            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    {/* Header */}
                    <h3 className="text-center">
                        Start Your Learning Journey Today –
                        <span className="fw-bold" style={{ color: '#553cdf' }}> Affordable EMI Plans</span> Available!
                    </h3>
                    <h2 className="fw-bold text-center">
                        <FaBookOpen className="me-2" fontSize={50} /> Choose Your Perfect Learning Plan
                    </h2>

                    {/* First Row - 3 Cards */}
                    <div className="row g-4 justify-content-center mt-3 px-lg-5">
                        {cardContent.slice(2, 5).map((card, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <div className={`card rounded-5 p-4 shadow-lg ${card.color} h-100 d-flex flex-column`}>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title mb-3 fw-bold">{card.title}</h5>
                                        <ul className="list-unstyled flex-grow-1">
                                            {card.subTitle?.map((point, i) => (
                                                <li key={i} className="py-1 d-flex align-items-start">
                                                    <span className="me-2">•</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <RegisterForm label={"Know more"} className="btn btn-light rounded-5 mt-auto" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 2 Cards (One Large, One Small) */}
                    <div className="row g-4 justify-content-center mt-3 px-lg-5">
                        {/* Large Card */}
                        <div className="col-lg-8 col-md-6 col-sm-12 d-flex">
                            <div className={`card rounded-5 p-4 shadow-lg ${cardContent[0].color} h-100 d-flex flex-column`}>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h1 className="card-title mb-3 fw-bold">{cardContent[0].title}</h1>
                                    <ul className="list-unstyled flex-grow-1 fs-5">
                                        {cardContent[0].subTitle.map((point, index) => (
                                            <li key={index} className="py-2 d-flex align-items-start">
                                                <span className="me-2">•</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <RegisterForm label={"Know more"} className="btn btn-light  text-black rounded-5 mt-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Small Card */}
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                            <div className={`card rounded-5 p-4 shadow-lg ${cardContent[1].color} h-100 d-flex flex-column`}>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title mb-3 fw-bold">{cardContent[1].title}</h5>
                                    <ul className="list-unstyled flex-grow-1">
                                        {cardContent[1].subTitle.map((point, index) => (
                                            <li key={index} className="py-2 d-flex align-items-start">
                                                <span className="me-2">•</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <RegisterForm label={"Know more"} className="btn btn-light  text-black rounded-5 mt-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <h5 className="fw-bold text-center">
                        Not sure which plan suits you? Talk to our experts & get a personalized roadmap!
                    </h5>
                </div>
            </div>

        </>

    );
};

export default SecondPart;
