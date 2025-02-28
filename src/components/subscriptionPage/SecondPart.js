import React from "react";
import style from './SecondPart.module.css';
import { FaBookOpen } from 'react-icons/fa';

const cardContent = [
    {
        logoImage: "https://via.placeholder.com/60",
        title: " Starter Pack – ₹12,000 (For Beginners & Self-Paced Learners)",
        subTitle: ["✔ 100% Online Learning with 1-Year App Access",
            "✔ Learn at your own pace with expert - designed courses",
            "✔ Access to Digital Marketing, Data Analytics, AWS, DevOps",
            "✔ Perfect for working professionals & freshers looking to upskill"],
        color: style.card_adobe,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: " Pro Learning Pack – ₹18,000 (For Those Who Want Interactive Learning)",
        subTitle: ["Live Training(Online or Classroom) + Recorded Sessions",
            "Expert mentorship with real - world projects",
            "Covers Data Analytics, Digital Marketing, AWS, DevOps",
            "Ideal for learners who prefer structured, instructor - led sessions"],
        color: style.card_photoshop,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Career Growth Pack – ₹28,000 (For Job Seekers & Career Switchers)",
        subTitle: ["Live Training(Online or Classroom) + Internship + Hybrid Learning",
            "Hands - on industry projects & case studies",
            "Gain expertise in Data Analytics + Data Science, AWS + DevOps, Full Stack Java, MERN Stack",
            "Best for those looking to build strong technical foundations & real - world experience"],
        color: style.card_illustrator,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: " Ultimate Job-Ready Pack – ₹40,000 (For Serious Professionals & Career Changers)",
        subTitle: ["Advanced Live Training (Online or Classroom) + Internship",
            "Master high - demand skills & gain deep expertise",
            "Covers Data Analytics + Data Science + AI, Full Stack Java + React, MERN Stack",
            "Includes resume building, mock interviews & career support",
            "Ideal for professionals aiming for high - paying tech jobs"],
        color: style.card_acrobat,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: " Custom Learning Pack – Tailored Pricing (For Working Professionals Seeking Personalized Learning)",
        subTitle: ["Customized learning paths based on your career goals",
            "Select courses & modules as per your requirements",
            "Flexible learning schedule – Online, Live Training, or Hybrid",
            "Mentorship, career guidance & skill - building support",
            "Best for professionals looking for specific upskilling in their domain"],
        color: style.card_premiere,
    },
];

const SecondPart = () => {
    return (
        <>

            <div className="container py-5">

                <div className="row g-4 justify-content-center px-5">
                    <h3 className="text-center">Start Your Learning Journey Today – Affordable EMI Plans Available!</h3>
                    <h2 className="fw-bold"> <FaBookOpen className="me-2" fontSize={50} /> Choose Your Perfect Learning Plan</h2>
                    {/* First Row: Two Cards */}
                    <div className="row g-4 justify-content-center mt-3 px-5">
                        {/* First Card (Larger - col-md-8) */}
                        <div className="col-md-8 col-sm-12 d-flex">
                            <div className={`card rounded-5 p-4 shadow-lg ${cardContent[0].color} h-100 d-flex flex-column`}>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="card-title mb-0 ms-2 fw-bold">{cardContent[0].title}</h4>
                                    </div>

                                    {/* Bullet Points */}
                                    <div className="ps-3 flex-grow-1">
                                        <ul className="list-unstyled">
                                            {cardContent[0].subTitle.map((point, index) => (
                                                <li key={index} className="py-2 d-flex align-items-start">
                                                    <span className="me-2">•</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <a href="#" className="btn btn-primary rounded-5 border border-white text-white mt-auto">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Second Card (Smaller - col-md-4) */}
                        <div className="col-md-4 col-sm-12 d-flex">
                            <div className={`card rounded-5 p-4 shadow-lg ${cardContent[1].color} h-100 d-flex flex-column`}>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center mb-2">
                                        <h4 className="card-title mb-0 ms-2 fw-bold">{cardContent[1].title}</h4>
                                    </div>

                                    {/* Bullet Points */}
                                    <div className="ps-3 flex-grow-1">
                                        <ul className="list-unstyled">
                                            {cardContent[1].subTitle.map((point, index) => (
                                                <li key={index} className="py-2 d-flex align-items-start">
                                                    <span className="me-2">•</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <a href="#" className="btn btn-primary rounded-5 border border-white text-white mt-auto">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Second Row: Three Cards */}
                <div className="row g-4 justify-content-center mt-3 px-5">
                    {cardContent.slice(2, 5).map((card, index) => (
                        <div key={index} className="col-md-4 col-sm-12 d-flex">
                            <div className={`card rounded-5 p-4 shadow-lg ${card.color} h-100 d-flex flex-column`}>
                                <div className="card-body d-flex flex-column">
                                    {/* Title */}
                                    <div className="d-flex align-items-center mb-3">
                                        <h5 className="card-title mb-0 ms-2 fw-bold">{card.title}</h5>
                                    </div>

                                    {/* Bullet Points List */}
                                    <div className="ps-3 mb-3 flex-grow-1">
                                        <ul className="list-unstyled">
                                            {card.subTitle?.map((point, i) => (
                                                <li key={i} className="py-1 d-flex align-items-start">
                                                    <span className="me-2">•</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button at the Bottom */}
                                    <a href="#" className="btn btn-primary rounded-5 border border-white text-white mt-3">
                                        Learn more
                                    </a>
                                </div>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>

                <h3 className="fw-bold text-center p-5"> Not sure which plan suits you? Talk to our experts & get a personalized roadmap! </h3>

            </div>

        </>

    );
};

export default SecondPart;
