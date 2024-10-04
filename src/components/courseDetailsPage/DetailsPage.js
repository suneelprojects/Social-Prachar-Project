import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsCSS from './Details.module.css';
import { data } from '../Cards/CardData';
import tickmark from '../../assets/tickmark.png';
import { items, Level } from './../Courses_category/Course';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faGraduationCap, faList, faPen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CountDownSide from '../countDown/CountDownSide';
import { auth } from '../../firebase';
import Footer from "../footer/footer";
import FooterBtn from "../footerButton/footerBtn";
import Loading from '../extraComponents/loading';

const DetailsPage = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState(null);
    const [showButton, setShowButton] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const navigate = useNavigate();

    const handleStartLearning = () => {
        if (user) {
            const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
            const isCourseEnrolled = enrolledCourses.some(course => course.courseID === card.courseID);
            if (!isCourseEnrolled) {
                enrolledCourses.push(card);
                localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
            }
            navigate('/profile/enrolled-courses/enrolled');
        } else {
            navigate('/login');
        }
    };

    const handleClickShow = () => {
        setShowMore(!showMore);
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const cardDetails = data.find(card => card.courseID === parseInt(cardId));
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
        return <div><Loading/></div>;
    }

    const previewLength = 150;
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
                        </div>
                        <div className={DetailsCSS.Updated}>
                            <span><FontAwesomeIcon icon={faUsers} className={DetailsCSS.userIcon} /></span>
                            <span className={DetailsCSS.students}>{card.students} Students</span>
                        </div>
                    </div>
                    <div className={DetailsCSS.author}>
                        <p><img src={card.authorImage} alt={card.name} /></p>
                        <div className={DetailsCSS.authorDetails}>
                            <p>Categories: <span>{card.title}</span></p>
                        </div>
                    </div>
                    <CountDownSide />
                </div>

                <div className={DetailsCSS.wholeContent}>
                    <div className={DetailsCSS.classDetails}>
                        <div className={DetailsCSS.classVideo}>
                            <img src={card.bannerImage} alt="" />
                            <div className={DetailsCSS.aboutCourse}>
                                <h2>About Course</h2>
                                <p>
                                    {showMore ? card.About : card.About.slice(0, previewLength) + (card.About.length > previewLength ? '...' : '')}
                                </p>
                                <button className={DetailsCSS.aboutCourseButton} onClick={handleClickShow}>
                                    <span style={{ fontSize: '24px', marginRight: '8px', fontWeight: '700' }}>
                                        {showMore ? '−' : '+'}
                                    </span>
                                    {showMore ? "show Less" : "show More"}
                                </button>
                            </div>

                            <div className={DetailsCSS.whatWillyouLearn}>
                                <h4>What will you Learn?</h4>
                                <div className={DetailsCSS.learnSkills}>
                                    <div className={DetailsCSS.learnRow}>
                                        {/* Render each topic */}
                                        {card.whatWillYouLearn && Object.values(card.whatWillYouLearn[0]).map((topic, index) => (
                                            <div className={DetailsCSS.learnSkillItem} key={index}>
                                                <span>
                                                    <span className={DetailsCSS.icon}>✓</span>
                                                    {topic}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={DetailsCSS.RightSide}>
                        <div className={DetailsCSS.courseDetails}>
                            <button className={DetailsCSS.startLearning} onClick={handleStartLearning}>Enroll Course</button>
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
                                <div className={DetailsCSS.value}>{card.Duration}</div>
                            </div>
                        </div>

                        <div className={DetailsCSS.Requirements}>
                            <div className={DetailsCSS.requireDetails}>
                                <p>Requirements</p>
                                <div>
                                    <span><img src={tickmark} alt="" /></span>Basic Programming
                                </div>
                                <div>
                                    <span><img src={tickmark} alt="" /></span> Daily Update
                                </div>
                                <div>
                                    <span><img src={tickmark} alt="" /></span>Routine Study
                                </div>
                                <div>
                                    <span><img src={tickmark} alt="" /></span>Regular Join Class
                                </div>
                            </div>
                            <hr />
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
            </div>
            <Footer />
            <FooterBtn />
        </div>
    );
};

export default DetailsPage;
