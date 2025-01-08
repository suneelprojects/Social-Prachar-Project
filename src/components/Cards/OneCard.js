import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import calendar from '../../assets/calendar-lines-pen.png';
import user from '../../assets/usergroup.png';
import cardsCSS from './Cards.module.css';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { faStarHalfAlt } from '@fortawesome/free-regular-svg-icons';

const OneCard = ({ card, handleCardTitleClick, isEnrolledCoursesPage, handleCancelEnrollment }) => {
    const { wishlist, toggleWishlist } = useWishlist();
    const navigate = useNavigate();
    const currentUser = auth.currentUser;

    const handleButtonClick = () => {
        navigate(`/${card.slug}`);
    };
    // Track if the card is already saved in the wishlist
    const [isSaved, setIsSaved] = useState(false);

    // Check if the card is in the wishlist on initial render and whenever the wishlist changes
    useEffect(() => {
        const isCardSaved = wishlist.some((wishlistCard) => wishlistCard.courseID === card.courseID);
        setIsSaved(isCardSaved);
    }, [wishlist, card.courseID]);

    // Toggle save/unsave functionality
    const handleSaveIconClick = () => {
        if (currentUser) {
            toggleWishlist(card);
            setIsSaved(!isSaved);
            navigate('/profile/wishlist');
        } else {
            navigate('/login');
        }
    };

    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const isEnrolled = enrolledCourses.some((course) => course.courseID === card.courseID);

    return (
        <div className={`col-md-4 mt-4 ${cardsCSS.cardItem}`}>
            <div className={`card ${cardsCSS.card}`}>
                <div className={cardsCSS.cardImgContainer}>
                    <img src={card.imageSrc} className={cardsCSS.cardImgTop} alt={card.courseTitle} />
                    <FontAwesomeIcon
                        icon={faBookmark}
                        className={`${cardsCSS.saveIcon} ${isSaved ? cardsCSS.saved : ''}`}
                        onClick={handleSaveIconClick}
                        style={{ color: isSaved ? '#553cdf' : 'white' }}
                    />
                    
                </div>
                <div className={cardsCSS.card_body}>
                    <p className={cardsCSS.CardTitle}>{card.courseTitle}</p>
                    <div className={cardsCSS.lessons}>
                        <div className={cardsCSS.calendar_pen}>
                            <img src={calendar} alt="Calendar Icon" />
                            <p className={cardsCSS.lesson}>{card.Duration}</ p>
                        </div>
                        <div className={cardsCSS.users}>
                            <img src={user} alt="User  Icon" />
                            <p className={cardsCSS.students}>{card.students}</p>
                        </div>
                    </div>
                    <h5
                        className={cardsCSS.course_title}
                        onClick={() => handleCardTitleClick(card.courseID)}
                    >
                        {card.text}
                    </h5>
                    <div className={cardsCSS.starPrice}>
                        <div className={cardsCSS.rating}>
                            {Array.from({ length: 5 }, (_, starIndex) => {
                                // Check if it's a full star, partial star, or empty star
                                if (starIndex < Math.floor(card.rating)) {
                                    return (
                                        <FontAwesomeIcon
                                            key={starIndex}
                                            icon={faStar}
                                            className={cardsCSS.filledStar} // Full star
                                        />
                                    );
                                } else if (starIndex < card.rating) {
                                    return (
                                        <FontAwesomeIcon
                                            key={starIndex}
                                            icon={faStarHalfAlt} // Partial star
                                            className={cardsCSS.filledStar} // Can apply a different class for partial stars if needed
                                        />
                                    );
                                } else {
                                    return (
                                        <FontAwesomeIcon
                                            key={starIndex}
                                            icon={faStar}
                                            className={cardsCSS.emptyStar} // Empty star
                                        />
                                    );
                                }
                            })}
                            <span className={`fw-bold text-muted ${cardsCSS.ratingValue}`}>({card.rating.toFixed(1)})</span>
                        </div>

                        <button
                            className="btn fw-bold shadow"
                            style={{ background: '#553cdf', color: 'white', position: 'relative', bottom: '10px', left: '-8px', border: '1px solid #212529' }}
                            onClick={handleButtonClick}
                        >
                            Know More
                        </button>
                    </div>
                    {isEnrolledCoursesPage && isEnrolled && (
                        <button className={cardsCSS.cancelEnrollment} onClick={() => handleCancelEnrollment(card.courseID)}>
                            Cancel Enrollment
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OneCard;