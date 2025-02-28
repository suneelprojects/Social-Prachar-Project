import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SubscriptionSteps = () => {
        const sliderRef = useRef(null);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
            ],
        };

        const cards = [
            {
                title: "Step 1: Choose Your Subscription Plan",
                text: ["✅ One subscription = Access to multiple job-ready courses",
                    "✅ Learn in live trainer - led online or hybrid classes(JNTU KPHB for hybrid)",
                    "✅ Gain skills for 20 + job roles"]
            },
            {
                title: "Step 2: Start Learning!",
                text: ["✅ Live, interactive classes (Not self-paced)",
                    "✅ 1 - year access to learning app & recorded videos",
                    "✅ Flexible learning – Switch courses within your plan(Min. 45 days per course)",
                    "✅ Learn as many courses as possible within your subscription"]
            },
            {
                title: "Step 3: Build Your Profile & Get Job-Ready", text: ["✅ AI Resume Builder & profile optimization",
                    "✅ Mock interviews & soft skills training",
                    "✅ Job portal access for top career opportunities"],
            },
            {
                title: "Step 4: Get Hired!", text: ["✅ Start interviewing from Month 2 based on performance",
                    "✅ HR team assistance for job placements across India",
                    "✅ Secure a high - paying job with salaries up to ₹12 LPA"]
            },
        ];

        return (
            <div className="container py-5">
                <h3 className="text-center fw-bold">Unlock Your IT Career – One Subscription, Endless Possibilities!.</h3>
                <p className="text-center">
                    Whatever your skill level, you’ll find plenty of step-by-step Creative Cloud tutorials to match your interests.
                </p>

                {/* React Slick Slider */}
                <div>
                    <Slider ref={sliderRef} {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} className="p-3">
                                <div className="card shadow-sm h-100 d-flex flex-column justify-content-center rounded-5 pt-3" style={{ width: "100%", minHeight: "350px" }}>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        {/* Title */}
                                        <h5 className="card-title fw-bold text-start">{card.title}</h5>

                                        {/* Text List */}
                                        <div className="card-text text-start ps-3">
                                            {card.text.map((item, idx) => (
                                                <li key={idx} className="mb-1">{item}</li>
                                            ))}
                                        </div>

                                        {/* Button at the bottom */}
                                        <div className="mt-auto d-flex justify-content-end">
                                            <button className="btn btn-outline-dark px-4 rounded-pill">Free Trial</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>



                    {/* Custom Navigation Buttons */}
                    <div className="d-flex justify-content-center mt-3" style={{ gap: '120px' }}>
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

export default SubscriptionSteps;