import React, { useState, useEffect, useRef } from 'react';
import styles from './Testmonials.module.css';
import YTW from '../../../assets/AssetsOfDetailsPage/masterclass/Reviews.png';
import YTB from '../../../assets/AssetsOfDetailsPage/yt comments normal.png';
import blackLine from '../../../assets/AssetsOfDetailsPage/blackLine.svg';
import TYmobileView from '../../../assets/AssetsOfDetailsPage/youtube comments.webp';
import YTWmogileView from '../../../assets/AssetsOfDetailsPage/Group for mobile view..webp';

import student1 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/10.png';
import student2 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/1.png';
import student3 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/11.png';
import student4 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/12.png';
import student5 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/13.png';
import student6 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/14.png';
import student7 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/15.png';
import student8 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/16.png';
import student9 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/17.png';
import student10 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/18.png';
import student11 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/19.png';
import student12 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/2.png';
import student13 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/20.png';
import student14 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/23.png';
import student15 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/24.png';
import student16 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/26.png';
import student17 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/27.png';
import student18 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/28.png';
import student19 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/33.png';
import student20 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/34.png';
import student21 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/36.png';
import student22 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/41.png';
import student23 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/46.png';
import student24 from '../../../assets/AssetsOfDetailsPage/StudentsPlaced/49.png';





const Testmonials = () => {
    const [studentsEnrolled, setStudentsEnrolled] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [completionRating, setCompletionRating] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const statsRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const carouselRef = useRef(null);

    const animateCount = (setter, target, duration) => {
        let start = 0;
        const increment = target / (duration / 50);

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(interval);
            } else {
                setter(Math.round(start * 10) / 10);
            }
        }, 50);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageToDisplay = screenWidth < 800 ? TYmobileView : YTW;

    // New useEffect for automatic scrolling of the carousel
    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += 1;
                if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
                    carouselRef.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scrollCarousel, 20);
        return () => clearInterval(interval);
    }, []);

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCount(setStudentsEnrolled, 17, 1000);
                        animateCount(setAverageRating, 4.9, 1000);
                        animateCount(setCompletionRating, 86, 1000);
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className={styles.testimonials}>
            <p className={styles.heading}>TESTIMONIALS</p>

            {/* Section 1: Student Transformation */}
            <div className={styles.section}>
                <h3 className={styles.subHeading}>
                    <span className={styles.highlatedWord}>17,000+ students</span> have already transformed their lives
                </h3>
                <img
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    src={blackLine}
                    alt="Decorative Line"
                    className={styles.line}
                />
                <img
                    src={imageToDisplay}
                    alt="Student Testimonials"
                    className={styles.image}
                />
            </div>

            {/* Section 2: Statistics with Scrolling Carousel */}
            <div className={styles.section} ref={statsRef}>
                <h3 className={styles.subHeading}>
                    <span style={{ color:"#ff5003"}}>Numbers </span>that speak for themselves
                </h3>
                <div className={styles.statsContainer}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{studentsEnrolled.toLocaleString()}K</span>
                        <p className={styles.statLabel}>Students Enrolled</p>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>{averageRating}/5</span>
                        <p className={styles.statLabel}>Average Rating</p>
                    </div>
                    {screenWidth > 790 && (
                        <div className={styles.stat}>
                            <span className={styles.statValue}>{completionRating}%</span>
                            <p className={styles.statLabel}>Completion Rating</p>
                        </div>
                    )}
                </div>

                {/* Scrolling Carousel of Student Placements */}
                <div className={styles.carousel} ref={carouselRef}>
                    <img src={student1} alt="Student 1" className={styles.carouselImage} />
                    <img src={student2} alt="Student 2" className={styles.carouselImage} />
                    <img src={student3} alt="Student 3" className={styles.carouselImage} />
                    <img src={student4} alt="Student 4" className={styles.carouselImage} />
                    <img src={student5} alt="Student 1" className={styles.carouselImage} />
                    <img src={student6} alt="Student 2" className={styles.carouselImage} />
                    <img src={student7} alt="Student 3" className={styles.carouselImage} />
                    <img src={student8} alt="Student 4" className={styles.carouselImage} />
                    <img src={student9} alt="Student 1" className={styles.carouselImage} />
                    <img src={student10} alt="Student 2" className={styles.carouselImage} />
                    <img src={student11} alt="Student 3" className={styles.carouselImage} />
                    <img src={student12} alt="Student 4" className={styles.carouselImage} />
                    <img src={student13} alt="Student 1" className={styles.carouselImage} />
                    <img src={student14} alt="Student 2" className={styles.carouselImage} />
                    <img src={student15} alt="Student 3" className={styles.carouselImage} />
                    <img src={student16} alt="Student 4" className={styles.carouselImage} />
                    <img src={student17} alt="Student 1" className={styles.carouselImage} />
                    <img src={student18} alt="Student 2" className={styles.carouselImage} />
                    <img src={student19} alt="Student 3" className={styles.carouselImage} />
                    <img src={student20} alt="Student 4" className={styles.carouselImage} />
                    <img src={student21} alt="Student 1" className={styles.carouselImage} />
                    <img src={student22} alt="Student 2" className={styles.carouselImage} />
                    <img src={student23} alt="Student 3" className={styles.carouselImage} />
                    <img src={student24} alt="Student 4" className={styles.carouselImage} />
                </div>
            </div>
        </div>
    );
};
export default Testmonials;
