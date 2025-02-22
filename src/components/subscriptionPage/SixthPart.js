import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image from "../../assets/img8.jpg";
import logo from '../../assets/ANI-logo.png';
import style from './SixthPart.module.css';


const testimonials = [
    {
        name: "Crizio Sinuraya",
        major: "Digital Marketing, Western Michigan University",
        quote: "I really wanted to make my mark, set my own standards and have fun in the process. Adobe Creative Cloud All Apps helped me wow my class.",
        image: "/images/crizio.jpg",
        background: image,
        skillLogos: [
            { name: "HTML", logo: logo },
            { name: "CSS", logo: logo },
            { name: "JavaScript", logo: logo },
            // { name: "React", logo: logo },
        ],
    },
    {
        name: "Jane Doe",
        major: "Graphic Design, NYU",
        quote: "Adobe tools helped me push my creativity to new heights and create stunning designs.",
        image: "/images/jane.jpg",
        background: image,
        skillLogos: [
            { name: "HTML", logo: logo },
            { name: "CSS", logo: logo },
            { name: "JavaScript", logo: logo },
            // { name: "React", logo: logo },
        ],
    },
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);
    const handlePrev = () => setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    const handleNext = () => setIndex(index === testimonials.length - 1 ? 0 : index + 1);

    return (
        <div className="bg-light">
            <div className="container col-md-8 p-5">
                <h3 className="text-center pt-4 pb-4">Students come and Start Here</h3>

                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                    {testimonials.map((testimonial, idx) => (
                        <Carousel.Item key={idx}>
                            <div className="bg-white pb-5">
                                <div
                                    className="d-flex flex-column align-items-center justify-content-center text-center position-relative mb-5"
                                    style={{
                                        backgroundImage: `url(${testimonial.background})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minHeight: "400px",
                                        color: "#fff",
                                        width: "100%",
                                    }}
                                >
                                    {/* Profile Image */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className={`rounded-circle border position-absolute shadow ${style.circleImage}`}
                                        style={{ width: "120px", height: "120px", top: "320px" }}
                                    />


                                    <div className="d-flex position-absolute top-100 end-0">
                                        {testimonial.skillLogos.map((skill, skillIdx) => (
                                            <div key={skillIdx} className="text-center pe-3">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className={`${style.skillLogos} img-fluid`}
                                                    style={{ width: "40px", height: "40px" }}
                                                />

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Skill Logos */}
                              
                            </div>

                            {/* Testimonial Text */}
                            <div className="text-center m-4" style={{ minHeight: "100px" }}>
                                <p className="fw-bold">
                                    <a href="#" className="text-dark text-decoration-none">{testimonial.name}</a> - {testimonial.major}
                                </p>
                                <p className="fst-italic">{testimonial.quote}</p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>

                {/* Custom Navigation Buttons */}
                <div className="d-flex justify-content-center align-items-center mt-3 rounded-3" style={{ background: "#e4e4e4", width: "fit-content", margin: "auto"}}>
                    <button className="btn btn-light mx-2" onClick={handlePrev}>
                        <FaArrowLeft className="text-dark" />
                    </button>

                    {/* Dots Indicators */}
                    <div className="d-flex">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className="mx-1 rounded-circle"
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: idx === index ? "black" : "gray",
                                }}
                            ></div>
                        ))}
                    </div>

                    <button className="btn btn-light mx-2" onClick={handleNext}>
                        <FaArrowRight className="text-dark" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
