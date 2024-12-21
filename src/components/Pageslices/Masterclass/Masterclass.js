import React, { useEffect, useState } from 'react';
import styles from './Masterclass.module.css';
import classImage from '../../../assets/AssetsOfDetailsPage/masterclass/Group-5015-min-1.png';
// import Enrollbutton from '../Enrollbutton/Enrollbutton';
import { useParams } from 'react-router-dom';
import { data } from './../../Cards/CardData';

const Masterclass = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const cardDetails = data.find(card => card.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // Event date calculation and setting
    useEffect(() => {
        const savedEventDate = localStorage.getItem('eventDate');
        let eventDate;

        if (savedEventDate) {
            eventDate = new Date(savedEventDate);
        } else {
            eventDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // One week from now
            localStorage.setItem('eventDate', eventDate);
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            // Countdown finished
            if (distance < 0) {
                clearInterval(interval);
                localStorage.removeItem('eventDate');
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            // Calculate time left
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // onClick functionality for Enrollbutton
    const handleEnrollClick = () => {
        if (card && card.masterClassBookSessionLink) {
            window.open(card.masterClassBookSessionLink, '_blank', 'noopener,noreferrer');
        } else {
            window.alert('Booking link is not available for this course.');
        }
    };

    return (
        <div className={styles.masterClassContent}>
            <div className={styles.MasterClass}>
                <div className={styles.headings}>
                    <p className={styles.Text1}>That's why we created</p>
                    <p className={styles.Text2}>A masterclass</p>
                    <p className={styles.Text3}>to help you speak with confidence and clarity</p>
                </div>
            </div>

            <div className={styles.classVideo}>
                <img
                    src={card ? card.MasterclassImage : classImage}
                    alt="Masterclass"
                    className={styles.ClassImage}
                />
            </div>

            <div className={styles.nextLive}>
                <button className={styles.shinebtn} onClick={handleEnrollClick}>Book Free Session</button>
                <h2>Next <span style={{ color:'#ff5003'}}>cohort</span> Starts in</h2>
                <div className={styles.timerBoxes}>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.days}</div>
                        <div>Days</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.hours}</div>
                        <div>Hours</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.minutes}</div>
                        <div>Minutes</div>
                    </div>
                    <div className={styles.timerBox}>
                        <div className={styles.timeCount}>{timeLeft.seconds}</div>
                        <div>Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Masterclass;
