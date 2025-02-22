import React, { useState, useRef, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import videoSrc from "../../assets/01-5.jpg";

const cardData = [
    {
        video: videoSrc,
        title: "Create show-stopping images with Lightroom and Photoshop.",
        description:
            "Make basic photo edits in Lightroom. Then hop into Photoshop to create something totally unique and totally you.",
    },
    {
        video: videoSrc,
        title: "Enhance your photography with precision.",
        description:
            "Use powerful editing tools to fine-tune your photos and bring your vision to life.",
    },
    {
        video: videoSrc,
        title: "Transform your images like a pro.",
        description:
            "Discover new creative possibilities with advanced features and AI-powered tools.",
    },
];

const FifthPart = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRef = useRef([]);
    const togglePlayPause = (index, videoRef) => {
        if (playingVideo === index) {
            videoRef.current.pause();
            setPlayingVideo(null);
        } else {
            if (playingVideo !== null) document.getElementById(`video-${playingVideo}`).pause();
            videoRef.current.play();
            setPlayingVideo(index);
        }
    };

    return (
        <div className="container my-5">
            <h3 className="pt-5 fw-bold text-center">Everything works together.</h3>
            <div className="row mt-4">
                {cardData.map((card, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="">
                                <div className="video-wrapper position-relative mt-4">
                                    <video
                                        id={`video-${index}`}
                                        ref={videoRef}
                                        className="w-100 rounded"
                                        controls
                                    >
                                        <source src={card.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <button
                                        className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 translate-middle"
                                        onClick={() => togglePlayPause(index, videoRef)}
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {playingVideo === index ? <FaPause /> : <FaPlay />}
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <p className="fw-bold">{card.title}</p>
                                    <p className="text-muted">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FifthPart;
