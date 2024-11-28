import React, { useEffect, useState } from 'react';
import styles from './Mentorpage.module.css';
import image1 from '../../../assets/AssetsOfDetailsPage/masterclass/5.png';
import image2 from '../../../assets/AssetsOfDetailsPage/masterclass/6.png';
import image3 from '../../../assets/AssetsOfDetailsPage/masterclass/7.png';
import crownImage from '../../../assets/AssetsOfDetailsPage/crownImage.svg';
import instagramImage from '../../../assets/AssetsOfDetailsPage/masterclass/Instagram_logo_2016.svg.png';
import linkedIn from '../../../assets/AssetsOfDetailsPage/masterclass/official-linkedin-logo.png';
import featuredIn from '../../../assets/AssetsOfDetailsPage/masterclass/Featured.webp';
import whatsApp from '../../../assets/AssetsOfDetailsPage/masterclass/whatsapp-logo.png';
import EnrollButton from './../Enrollbutton/Enrollbutton';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Mentorpage = () => {

    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const autoSlideInterval = 4000;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, autoSlideInterval);

        // Cleanup function to clear the timer
        return () => clearInterval(timer);
    }, [currentImageIndex]);


    return (
        <div className={styles.Mentorpage}>
            {/* Full width background */}
            <div className={`${styles.background} p-4 rounded shadow`}>
                <h2 className="text-center mb-4">
                    Unlock Bonuses worth <span className="text-primary">₹ 17000 /-</span>
                </h2>

                <div className={styles.cards}>
                    <div className="row justify-content-center">
                        {/* Bonus 1 */}

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#553cdf', border: '2px dashed #553cdf', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 1</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #553cdf', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image1} className="card-img-top" alt="Bonus 1" />
                                <div className="card-body text-center" style={{ backgroundColor: '#e5e0ff' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹4999</span>
                                        <span style={{ color: '#553cdf ', paddingLeft: '25px', fontSize: '24px', fontWeight: '600' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#553cdf', border: '2px dashed #553cdf', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 2</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #553cdf', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image2} className="card-img-top" alt="Bonus 2" />
                                <div className="card-body text-center" style={{ backgroundColor: '#e5e0ff' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹5999</span>
                                        <span style={{ color: '#553cdf ', paddingLeft: '25px', fontSize: '24px', fontWeight: '600' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4">
                            <div className="text-center p-2 mb-0" style={{ backgroundColor: '#553cdf', border: '2px dashed #553cdf', borderBottom: 'none', width: '90%', margin: '0 auto', borderRadius: '10px 10px 0 0' }}>
                                <strong style={{ fontSize: '16px', color: 'white' }}>Bonus 3</strong>
                            </div>
                            <div className="card" style={{ border: '2px dashed #553cdf', borderTop: 'none', width: '90%', margin: '0 auto', borderRadius: '0 0 10px 10px' }}>
                                <img src={image3} className="card-img-top" alt="Bonus 3" />
                                <div className="card-body text-center" style={{ backgroundColor: '#e5e0ff' }}>
                                    <p className="card-text">
                                        <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'black' }}>₹6999</span>
                                        <span style={{ color: '#553cdf ', paddingLeft: '25px', fontSize: '24px', fontWeight: '600' }}>Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Unlock Bonuses Button */}
                <div className="text-center mt-2">
                    <EnrollButton label="Unlock Bonuses" />
                </div>
            </div>


            <div className={styles.mentorInfo}>
                <div className={styles.mentorProfile}>
                    <p className={styles.smallHeading}>Meet your <span className={styles.color}>Instructor</span></p>

                    {/* Carousel image */}
                    <img
                        src={images[currentImageIndex]}
                        alt={`Mentor ${currentImageIndex + 1}`}
                        className={styles.profileImage}
                    />

                    {/* Navigation buttons */}
                    <button onClick={() => { prevImage(); }} className={styles.prevButton}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={() => { nextImage(); }} className={styles.nextButton}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                <div className={styles.mentorBio}>
                    <div className={styles.bioContent}>
                        <h3 className={styles.bioTitle}>Meet your Mentor</h3>
                        <p className={styles.bioText}>
                            Our certified trainers with 7+ years of industry experience ensure hands-on learning with top faculty and excellent lab infrastructure. Our HR team supports job placements, and you’ll have 24/7 access to an online portal for learning at your convenience.
                        </p>
                        <p className={styles.bioText}>
                            We help prepare your CV/Resume for interviews and enhance your chances of securing a job. Having trained over 15,000 professionals in fields like Digital Marketing, Data Science, Full Stack Development, AWS + DevOps, and AI, we focus on results.
                        </p>
                        <p className={styles.bioText}>
                            Our curriculum balances 30% theory and 70% practical sessions, with mentors available throughout the day for doubt-solving support.
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className={styles.mentorStats}>
                        <div className={styles.statItem}>
                            <img src={instagramImage} alt="" className={styles.statIcon} />
                            <p>13.7K+</p>
                            <p>Followers</p>
                        </div>
                        <div className={styles.statItem}>
                            <img src={linkedIn} alt="" className={styles.statIcon} />
                            <p>6k+</p>
                            <p>Followers</p>
                        </div>
                        <div className={styles.statItem}>
                            <img src={whatsApp} alt="" className={styles.statIcon} />
                            <p>5K+ </p>
                            <p>Subscribers</p>
                        </div>
                    </div>

                    {/* Featured In */}
                    <p className={styles.featuredHeading}>Social Prachar Got Featured in</p>
                    <div className={styles.featured}>
                        <div className={styles.logos}>
                            <img src={featuredIn} alt="" className={styles.featuredImage} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentorpage;
