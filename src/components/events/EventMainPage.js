import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Asidecard from './../upcomingBatches/aside/Asidecard';
import { trainersData } from './eventsData';
import style from "../upcomingBatches/UpcomingBatches.module.css";
import certificate from "../../assets/careerworkshop/certificate1.png";
import video from "../../assets/careerworkshop/video1.png";
import star from "../../assets/careerworkshop/stars-svgrepo-com.png";
import book from "../../assets/careerworkshop/book1.png";
import globe from "../../assets/careerworkshop/globe.png";
import bag from '../../assets/careerworkshop/briefcase.png';


const cardItems = [
    { img: certificate, labelHead: "Social Prachar", labelDown: "Certificate" },
    { img: video, labelHead: "IIM & IIT Alumni", labelDown: "Learning" },
    { img: star, labelHead: "Top", labelDown: "Instructors" },
    { img: book, labelHead: "Bonus", labelDown: "Resources" },
    { img: bag, labelHead: "Intern/Fulltime", labelDown: "Jobs" },
    { img: globe, labelHead: "Learn till you", labelDown: "Get Placed" },
];

const EventMainPage = () => {
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCards(trainersData);
    }, []);

    const handleOpen = (skill) => {
        navigate(`/events/${skill}`);
    };

    return (
        <div className="container">
            <div className="bg container pt-5">
                {/* Header Section */}
                <div className="text-start d-flex flex-wrap align-items-center justify-content-between mb-5">
                    <div className='col-md-12 mb-4'>
                        <h1 className='fw-bold'>Social Prachar <span style={{color:'#ff5003'}}>MasterClasses</span></h1>
                        <h4 className='text-muted'>Learn Tech Concepts From Industry Leaders Who Have Been there and done that!</h4>
                    </div>

                    {/* Aside Card Section */}

                    <div className={`d-flex flex-row align-items-center overflow-auto p-3`}>
                        {cardItems.map((item, idx) => (
                            <div key={idx} className="d-flex align-items-center me-4">
                                {/* Icon */}
                                <div
                                    className={`${style.icon} d-flex justify-content-center align-items-center p-2`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.labelHead}
                                        style={{ width: "40px", height: "40px", borderRadius: "8px" }}
                                    />
                                </div>
                                {/* Labels */}
                                <div className="ms-2 text-center">
                                    <p className="mb-0 fw-bold">{item.labelHead}</p>
                                    <span>{item.labelDown}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="row">
                    {/* Main Cards Section */}
                    <div className="col-md-12">
                        <div className="row">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="col-md-4 mb-4 shadow"
                                    onClick={() => handleOpen(card.skill)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="card" style={{ width: '100%' }}>
                                        <img src={card.image || 'placeholder.jpg'} className="card-img-top img-fluid" alt={card.skill} />
                                        <div className="card-body">
                                            <h5 className="card-title">{card.skill}</h5>
                                            <p className="card-text mb-1">Batch Starting Date: <span>{card.startDate || "TBD"}</span></p>
                                            <h6 className="text-danger">Hurry, only {card.slots || "X"} slots remaining!</h6>
                                            <hr />
                                            <div className="d-flex justify-content-between">
                                                <h6>Students Registered: {card.studentsRegistered || "X"}</h6>
                                                <button className="fw-bold btn btn-primary">Open</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventMainPage;
