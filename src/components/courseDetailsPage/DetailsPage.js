import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCSS from './Details.module.css';
import { data } from '../Cards/CardData';
import user from '../../assets/usergroup.png';
import calendar from '../../assets/calendar-lines-pen.png';
import { items,Level } from '../Courses_category/Course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faGraduationCap, faList, faPen } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const DetailsPage = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState(null);
    const [showButton, setShowButton] = useState(false); // State for button visibility

    useEffect(() => {
        const cardDetails = data.find(card => card.id === parseInt(cardId));
        setCard(cardDetails);
    }, [cardId]);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight / 2) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!card) {
        return <div>Loading...</div>;
    }

    const category = items[card.categoryIndex] || 'Unknown Category';
    const level = Level[card.levelIndex] || 'Unknown level';

    return (
        <div className={DetailsCSS.detailsPage}>
            <div className={DetailsCSS.Headpart}>
                <div className={DetailsCSS.DetailsHeader}>
                    <div className={DetailsCSS.PageSlice}>
                        <a href="/">Home</a>
                        <span> &gt; </span>
                        <a href="/courses">Courses</a>
                        <span> &gt; </span>
                        <span>{card.text}</span>
                    </div>
                    <h2 className={DetailsCSS.title}>{card.text}</h2>
                    <div className={DetailsCSS.info}>
                        <div className={DetailsCSS.ratings}>
                            {Array.from({ length: 5 }, (_, starIndex) => (
                                <span key={starIndex} className={starIndex < card.rating ? DetailsCSS.filledStar : DetailsCSS.emptyStar}>
                                    ★
                                </span>
                            ))}
                            <span className={DetailsCSS.Rating}>{card.rating}.00<span className={DetailsCSS.no_of_ratings}>({card.no_of_ratings} Rating)</span></span>
                        </div>
                        <div className={DetailsCSS.Updated}>
                            <img src={user} alt="" />
                            <span className={DetailsCSS.students}>{card.students} Students</span>
                        </div>
                        <div className={DetailsCSS.Updated}>
                            <img src={calendar} alt="" />
                            <span className={DetailsCSS.lastUpdated}>Last Updated: {card.lastUpdated}</span>
                        </div>
                    </div>
                    <div className={DetailsCSS.author}>
                        <p><img src={card.authorImage} alt={card.name} /></p>
                        <div className={DetailsCSS.authorDetails}>
                            <p>By <span>{card.name}</span></p>
                            <p>Categories: <span>{category}</span></p>
                        </div>
                    </div>
                </div>

                <div className={DetailsCSS.classDetails}>
                    <div className={DetailsCSS.classVideo}>
                        <iframe
                            src={card.videoSrc}
                            title="Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className={DetailsCSS.courseDetails}>
                        <button className={DetailsCSS.startLearning}>Start Learning</button>
                        <p>This course includes:</p>
                        <div className={DetailsCSS.detailsItem}>
                            <div>
                                <FontAwesomeIcon icon={faList} className={DetailsCSS.icon} />
                                <span className={DetailsCSS.label}>Level</span>
                            </div>
                            <div className={DetailsCSS.value}>{level}</div>
                        </div>
                        <div className={DetailsCSS.detailsItem}>
                            <div>
                                <FontAwesomeIcon icon={faGraduationCap} className={DetailsCSS.icon} />
                                <span className={DetailsCSS.label}>Total Enrolled</span>
                            </div>
                            <div className={DetailsCSS.value}>{card.students} Total Enrolled</div>
                        </div>
                        <div className={DetailsCSS.detailsItem}>
                            <div>
                                <FontAwesomeIcon icon={faClock} className={DetailsCSS.icon} />
                                <span className={DetailsCSS.label}>Duration</span>
                            </div>
                            <div className={DetailsCSS.value}>{card.duration} Duration</div>
                        </div>
                        <div className={DetailsCSS.detailsItem}>
                            <div>
                                <FontAwesomeIcon icon={faPen} className={DetailsCSS.icon} />
                                <span className={DetailsCSS.label}>Last Updated</span>
                            </div>
                            <span className={DetailsCSS.value}>{card.lastUpdated} Last Updated</span>
                        </div>

                        <div className={DetailsCSS.shareOptions}>
                            <p>Share</p>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className={DetailsCSS.iconSize} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className={DetailsCSS.iconSize} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className={DetailsCSS.iconSize} />
                            </a>
                            <a href="mailto:?subject=Check this out!" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className={DetailsCSS.iconSize} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {showButton && (
                <button className={DetailsCSS.scrollButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span>&#10095;&#10095;</span>
                </button>
            )}
        </div>
    );
};

export default DetailsPage;