import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../../assets/AssetsOfDetailsPage/Job Ready Courses.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SeventhPart = () => {
    const sliderRef = useRef(null); // Reference to the slider

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    const cards = [
        { title: "Card 1", text: "Some quick example text.", img: image },
        { title: "Card 2", text: "More sample text.", img: "https://via.placeholder.com/150" },
        { title: "Card 3", text: "Another card for testing.", img: "https://via.placeholder.com/150" },
        { title: "Card 4", text: "One more card.", img: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="container py-5">
            <h3 className="text-center">It’s easy to get started.</h3>
            <p className="text-center">
                Whatever your skill level, you’ll find plenty of step-by-step Creative Cloud tutorials to match your interests.
            </p>

            {/* React Slick Slider */}
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="p-3">
                            <div className="card shadow-sm" style={{ width: "100%" }}>
                                <img src={card.img} className="card-img-top" alt={card.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-outline-dark px-4 rounded-pill">Free Trial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom Navigation Buttons */}
                <div className="d-flex justify-content-center mt-3" style={{gap:'120px'}}>
                    <button
                        className="btn btn-dark d-flex align-items-center rounded-5"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <FaArrowLeft />
                        
                    </button>
                    <button
                        className="btn btn-dark d-flex align-items-center gap-2 rounded-5"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeventhPart;
