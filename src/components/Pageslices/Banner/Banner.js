import React, { useState, useEffect } from 'react';
import style from './Banner.module.css';
import { data } from '../../Cards/CardData';
import { useParams } from 'react-router-dom';

const Banner = () => {
    const { cardId } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const cardDetails = data.find(card => card.courseID === parseInt(cardId));
        setCard(cardDetails);
    }, [cardId]);

    if (!card) {
        return <div>Loading...</div>; // Handle loading state in case card data is not available yet
    }

    return (
        <div className={style.banner}>
            <div className={style.bannerContent}>
                <div className={style.bannerInfo}>
                    <img
                        src={card.bannerImage || "https://via.placeholder.com/150"}
                        alt={card.bannerHeader || "Course Thumbnail"}
                        className={style.bannerImage}
                    />
                    <div className={style.bannerText}>
                        <h2>{card.bannerHeader}</h2>
                        <p>{card.bannerStudentsEnrolled}</p>
                    </div>
                </div>
                <div className={style.bannerPrice}>
                    <span className={style.originalPrice}>Unlock Exclusive</span>
                    <span className={style.discountedPrice}>OFFERS</span>
                </div>
                <button className={style.enrollButton}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Banner;
