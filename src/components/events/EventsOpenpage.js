import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trainersData } from "./eventsData";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Footer from "../footer/footer";
import style from './events.module.css';


const EventsOpenPage = () => {
    const { skill } = useParams();
    const navigate = useNavigate();

    // Find the trainer based on skill
    const trainer = trainersData.find((item) => item.skill === skill);

    if (!trainer) {
        return <h2 className="text-center mt-5 text-danger">Trainer Not Found</h2>;
    }

    return (
        <>

            <div>
                {/* <button
                    className="btn btn-primary fw-bold shadow-lg"
                    style={{
                        position: "fixed",
                        bottom: "150px",
                        right: "100px",
                        width: "100px",
                        height: "70px",
                        borderRadius: "50%",
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "1000",
                    }}
                    onClick={() => navigate("/register")}
                >
                    Register
                </button> */}

                <button className={style.brutalistButton} style={{
                    zIndex: "1000", position: "fixed",
                    bottom: "100px",
                    right: "150px",
                }}>
                    <div className={style.msLogo}>
                        <div className={style.msLogoSquare}></div>
                        <div className={style.msLogoSquare}></div>
                        <div className={style.msLogoSquare}></div>
                        <div className={style.msLogoSquare}></div>
                    </div>
                    <div className={style.buttonText}>
                        {/* <span>Get it from</span> */}
                        <span>Register Now</span>
                    </div>
                </button>
            </div>

            <div className="container mt-5">
                {/* Back Button */}
                <button
                    className="btn btn-outline-dark mb-3 fw-bold d-flex align-items-center gap-2"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft /> Back
                </button>

                {/* Trainer Profile Card */}
                <div className="card shadow-lg p-4 rounded-4 border-0">
                    <div className="row align-items-center">
                        {/* Trainer Details */}
                        <div className="col-md-6">
                            <h2 className="fw-bold text-dark">{trainer.name}</h2>
                            <h5 className="text-primary fw-semibold">{trainer.skill} Expert</h5>
                            <p className="text-muted fs-5">Experience: {trainer.experience} Years</p>
                            <p className="lead text-dark">{trainer.bio}</p>

                            {/* Enroll Button */}
                            {/* <button
                            className="btn btn-success px-4 py-2 fw-bold mt-3"
                            onClick={() => navigate("/enroll")}
                        >
                            Enroll Now 🚀
                        </button> */}
                        </div>

                        {/* Trainer Image */}
                        <div className="col-md-4 text-center">
                            <img
                                src={trainer.image || "placeholder.jpg"}
                                alt={trainer.name}
                                className="img-fluid rounded-circle shadow-lg"
                                style={{ width: "250px", height: "250px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Masterclass Details */}
                <div className="mt-5 p-4 bg-light rounded-3 shadow-sm">
                    <h3 className="fw-bold text-dark mb-3">📚 About this Masterclass</h3>
                    <p className="fs-5 text-muted">{trainer.aboutMasterclass}</p>
                </div>

                {/* What You Will Gain */}
                <div className="mt-4 p-4 bg-white rounded-3 shadow-sm">
                    <h3 className="fw-bold text-dark mb-3">🎯 What will you gain From this Masterclass</h3>
                    <ul className="list-group list-group-flush">
                        {trainer.whatWillyouGetFromSession.map((point, index) => (
                            <li
                                key={index}
                                className="fs-5 d-flex align-items-center gap-2 py-2 px-3 list-group-item border-0"
                                style={{ backgroundColor: "rgba(0, 128, 0, 0.1)", borderRadius: "10px", marginBottom: "8px" }}
                            >
                                <FaCheckCircle className="text-success" /> {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default EventsOpenPage;
