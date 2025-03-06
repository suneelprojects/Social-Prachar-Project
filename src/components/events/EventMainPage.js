import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Asidecard from './../upcomingBatches/aside/Asidecard';
import { trainersData } from './eventsData';

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
                    <div className='col-md-8'>
                        <h1>Social Prachar MasterClasses</h1>
                        <h5>Learn Tech Concepts From Industry Leaders Who Have Been there and done that!</h5>
                    </div>

                    {/* Aside Card Section */}
                    <div className="col-md-4">
                        <div className="sticky_asidecard">
                            <Asidecard />
                        </div>
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
