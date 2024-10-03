import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';
import calendar from '../../assets/calendar-lines-pen.png';
import user from '../../assets/usergroup.png';
import cardsCSS from './Cards.module.css';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const OneCard = ({ card, handleCardTitleClick }) => {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();
    const user = auth.currentUser;

    // Track if the card is already saved in the wishlist
    const [isSaved, setIsSaved] = useState(false);

    // Check if the card is in the wishlist on initial render and whenever the wishlist changes
    useEffect(() => {
        const isCardSaved = wishlist.some((wishlistCard) => wishlistCard.courseID === card.courseID);
        setIsSaved(isCardSaved);
    }, [wishlist, card.courseID]);

    // Toggle save/unsave functionality
    const handleSaveIconClick = () => {
        if (user) {
            if (isSaved) {
                removeFromWishlist(card.courseID);
            } else {
                addToWishlist(card);
                navigate('/profile/wishlist');
            }
            setIsSaved(!isSaved);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={`col-md-4 mt-4 ${cardsCSS.cardItem}`}>
            <div className={`card ${cardsCSS.card}`}>
                <div className={cardsCSS.cardImgContainer}>
                    <img src={card.imageSrc} className={cardsCSS.cardImgTop} alt={card.title} />
                    <FontAwesomeIcon
                        icon={faBookmark}
                        className={`${cardsCSS.saveIcon} ${isSaved ? cardsCSS.saved : ''}`}
                        onClick={handleSaveIconClick}
                        style={{ color: isSaved ? '#553cdf' : 'white' }}
                    />
                </div>
                <div className={cardsCSS.card_body}>
                    <p className={cardsCSS.CardTitle}>{card.title}</p>
                    <div className={cardsCSS.lessons}>
                        <div className={cardsCSS.calendar_pen}>
                            <img src={calendar} alt="Calendar Icon" />
                            <p className={cardsCSS.lesson}>{card.no_of_lessons}</ p>
                        </div>
                        <div className={cardsCSS.users}>
                            <img src={user} alt="User   Icon" />
                            <p className={cardsCSS.students}>{card.students}</p>
                        </div>
                    </div>
                    <h5 className={cardsCSS.course_title} onClick={() => handleCardTitleClick(card.courseID)}>
                        {card.text}
                    </h5>
                    <div className={cardsCSS.starPrice}>
                        <div className={cardsCSS.rating}>
                            {Array.from({ length: 5 }, (_, starIndex) => (
                                <FontAwesomeIcon
                                    key={starIndex}
                                    icon={faStar}
                                    className={starIndex < card.rating ? cardsCSS.filledStar : cardsCSS.emptyStar}
                                />
                            ))}
                        </div>
                        <p className={cardsCSS.price}>{card.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCard;