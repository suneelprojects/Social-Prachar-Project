import React from "react";
import style from './SecondPart.module.css';

const cardContent = [
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Adobe Express",
        subTitle: "Social posts that tell your story.",
        color: style.card_adobe,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Photoshop",
        subTitle: "Posters and flyers for what matters most.",
        color: style.card_photoshop,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Illustrator",
        subTitle: "Logos and graphics showcase your style.",
        color: style.card_illustrator,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Acrobat Pro",
        subTitle: "Resumes that stand out from the crowd.",
        color: style.card_acrobat,
    },
    {
        logoImage: "https://via.placeholder.com/60",
        title: "Premiere Pro",
        subTitle: "Videos that wow the room.",
        color: style.card_premiere,
    },
];

const SecondPart = () => {
    return (
        <>

            <div className="container py-5">
                
                <div className="row g-4 justify-content-center px-5">
                    <h2 className="text-center fw-bold">See what you can make with Creative Cloud All Apps.</h2>
                    {/* First Row: Two Cards */}
                    <div className="col-md-8 col-sm-12">
                        <div className={`card rounded-5 p-4 shadow-lg ${cardContent[0].color}`}>
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src={cardContent[0].logoImage}
                                        alt="Logo"
                                        className="me-2"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            background: "black",
                                            borderRadius: "10px",
                                        }}
                                    />
                                    <p className="card-title mb-0 ms-2 fw-bold">{cardContent[0].title}</p>
                                </div>
                                <h3 className="card-text col-md-6 lh-base">{cardContent[0].subTitle}</h3>
                                <a href="#" className="btn btn-primary rounded-5 border border-white text-white">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className={`card rounded-5 p-4 shadow-lg ${cardContent[1].color}`}>
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src={cardContent[1].logoImage}
                                        alt="Logo"
                                        className="me-2"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            background: "black",
                                            borderRadius: "10px",
                                        }}
                                    />
                                    <p className="card-title mb-0 ms-2 fw-bold">{cardContent[1].title}</p>
                                </div>
                                <h3 className="card-text lh-base">{cardContent[1].subTitle}</h3>
                                <a href="#" className="btn btn-primary rounded-5 border border-white text-white">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row: Three Cards */}
                <div className="row g-4 justify-content-center mt-3 px-5">
                    {cardContent.slice(2, 5).map((card, index) => (
                        <div key={index} className="col-md-4 col-sm-12">
                            <div className={`card rounded-5 p-4 shadow-lg ${card.color}`}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                        <img
                                            src={card.logoImage}
                                            alt="Logo"
                                            className="me-2"
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                background: "black",
                                                borderRadius: "10px",
                                            }}
                                        />
                                        <p className="card-title mb-0 ms-2 fw-bold">{card.title}</p>
                                    </div>
                                    <h3 className="card-text lh-base">{card.subTitle}</h3>
                                    <a href="#" className="btn btn-primary rounded-5 border border-white text-white">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
};

export default SecondPart;
