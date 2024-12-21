import React, { useEffect, useRef, useState } from "react";
import styles from "./Certificate.module.css";
import certificateStyling from './CertificateStyling.module.css';
import background from '../../../assets/background.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCrown, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import EnrollButton from '../Enrollbutton/Enrollbutton';
import certificate from '../../../assets/AssetsOfDetailsPage/1-1.png';
import { data } from '../../Cards/CardData';
import { useParams } from "react-router-dom";

const TimelineComponent = () => {
    const [progressHeight, setProgressHeight] = useState(0);
    const timelineRef = useRef(null);
    const cardRefs = useRef([]);
    const { slug } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // Update progress line based on visible cards
    const updateProgress = () => {
        if (!cardRefs.current.length) return;

        const totalCards = cardRefs.current.filter((ref) => ref !== null).length;
        const visibleCards = cardRefs.current.filter((card) => {
            if (!card) return false; // Check for null ref
            const rect = card.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }).length;

        // Calculate progress based on visible cards
        const progress = (visibleCards / totalCards) * 100;
        setProgressHeight(progress);
    };

    useEffect(() => {
        // Initialize cardRefs array based on levelcardIndex length
        if (card && card.levelcardIndex) {
            cardRefs.current = Array(card.levelcardIndex.length).fill(null);
        }
        // Set up scroll and resize event listeners
        const handleScroll = () => updateProgress();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        // Initial update
        updateProgress();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [card]);

    return (
        <>
            {/* Timeline Section */}
            <div
                className={styles.timelineContainer}
                ref={timelineRef}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={styles.timelineHeading}>
                    {card ? (
                        <p>Your Path to Becoming a Job-Ready <span style={{ color: "#ff5003" }}>{card.timeLineHeading}</span> Starts Here!</p>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className={styles.courseLevel}>
                    <div className={styles.timelineLine}>
                        <div
                            className={styles.progressLine}
                            style={{ height: `${progressHeight}%` }}
                        />
                    </div>

                    {/* Dynamic Level Cards */}
                    {card && card.levelcardIndex && card.levelcardIndex.map((level, index) => (
                        <div
                            key={index}
                            className={`${styles.levelCard} ${styles[`level${index + 1}`]}`}
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <div className={styles.levelIcon}>
                                <FontAwesomeIcon icon={level.icon} className={level.iconClass} />
                            </div>
                            <div className={styles.levelContent}>
                                <h3 className={styles.levelTitle}>{level.title}</h3>
                                <p className={styles.levelDescription}>
                                    {level.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Section */}
            <div className={certificateStyling.content}>
                <div className={certificateStyling.certificateContainer}>
                    <div className={certificateStyling.textContainer}>
                        <h3 className={certificateStyling.heading}>
                            Get<span>&nbsp; Certified</span>
                        </h3>
                        <div className={certificateStyling.descriptionContainer}>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faCrown} />
                                </span>
                                Earn your credentials of Expertise
                            </p>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faShareNodes} />
                                </span>
                                Share your verified certificate
                            </p>
                            <p className={certificateStyling.description}>
                                <span className={certificateStyling.symbol}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                Add certificate on LinkedIn
                            </p>
                            <div className={certificateStyling.btn}>
                                <EnrollButton label="Upskill Today" />
                            </div>
                        </div>
                    </div>
                    <div className={certificateStyling.imageContainer}>
                        <img
                            src={card && card.certificate ? card.certificate : certificate} 
                            alt="Certificate Preview"
                            className={certificateStyling.certificateImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelineComponent;
