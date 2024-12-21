import React, { useState, useEffect } from 'react';
import style from './Banner.module.css';
import { data } from '../../Cards/CardData';
import { useParams } from 'react-router-dom';
import SignInForm from '../Enrollbutton/PopupSignInForm';
import EnrollButton from '../Enrollbutton/Enrollbutton';

const Banner = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);


    if (!card) {
        return <div>Loading...</div>;
    }

    // Function to open the SignInForm
    const handleEnrollClick = () => {
        setShowForm(true);
    };

    // Function to close the SignInForm
    const handleCloseForm = () => {
        setShowForm(false);
    };

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
                    <span className={style.originalPrice}>Unlock Exclusive OFFERS<p>Almost Full <span className={style.offerText}>Only 5 Slots Left!</span></p></span>
                </div>
                <EnrollButton label="Enroll" courseID={card.id} className={style.EnrollButton} />
            </div>
            {showForm && <SignInForm onClose={handleCloseForm} />}
        </div>
    );
};

export default Banner;
