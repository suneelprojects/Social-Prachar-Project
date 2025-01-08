import React from 'react';
import style from './AsideStyle.module.css';
import certificate from '../../../assets/careerworkshop/certificate11.jpeg';
import video from '../../../assets/careerworkshop/video(1).jpeg';
import star from '../../../assets/careerworkshop/star11.jpeg';
import book from '../../../assets/careerworkshop/book11.jpeg';
import quiz from '../../../assets/careerworkshop/chat (1).png';
import globe from '../../../assets/careerworkshop/globe.png';

const Asidecard = () => {
    const cardItems = [
        { img: certificate, labelHead: "Social Prachar", labelDown: "Certificate" },
        { img: video, labelHead: "Live", labelDown: "Learning" },
        { img: star, labelHead: "Top", labelDown: "Instructors" },
        { img: book, labelHead: "Bonus", labelDown: "Resources" },
        { img: quiz, labelHead: "Live", labelDown: "Quizzes" },
        { img: globe, labelHead: "Real", labelDown: "World Topics" },
    ];

    return (
        <div className={`${style.asideCard} card shadow-lg shadow`} style={{ width: "auto"}}>
            <div className={`${style.cardBody} card-body`}>
                {/* Header */}
                <h5 className="card-title fw-bold">Why Join</h5>
                <h6 className="card-subtitle mb-4 text-muted">Social Prachar Masterclasses</h6>

                {/* Features Grid */}
                <div className="row row-cols-2 g-3">
                    {cardItems.map((item, idx) => (
                        <div className="col d-flex align-items-center" key={idx}>
                            {/* Icon */}
                            <div className={`${style.icon} d-flex justify-content-center align-items-center p-2`}>
                                <img src={item.img} alt={item.labelHead} style={{ width: '40px', height: '40px',borderRadius:'8px'}} />
                            </div>
                            {/* Labels */}
                            <div className="ms-3">
                                <p className="mb-0 fw-bold">{item.labelHead}</p>
                                <span>{item.labelDown}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* User Rating */}
                <div className={`${style.rating} border p-2 mt-4 d-flex justify-content-between align-items-center`}>
                    <span className="fw-bold">Average User Rating</span>
                    <div className="d-flex align-items-center">
                        <span className="text-warning fs-6">⭐⭐⭐⭐⭐</span>
                        <span className="ms-2 fw-bold">4.8/5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Asidecard;
