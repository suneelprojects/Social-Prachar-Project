import React, { useEffect, useState } from 'react';
import styles from './Masterclass.module.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { data } from './../../Cards/CardData';
import masterClassImage from '../../../assets/careerworkshop/Free.png';

const Masterclass = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const navigate = useNavigate();
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
                    src={masterClassImage}
                    alt="Masterclass"
                    className={styles.ClassImage}
                />
            </div>

            <div className={styles.nextLive}>
                <button className={styles.shinebtn} onClick={() => navigate('/Career-Success-workshop')}>Book Free Session</button>
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
