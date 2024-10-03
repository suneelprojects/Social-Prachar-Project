import React, { useState } from 'react';
import { data } from '../Cards/CardData';
import cardsCSS from '../Cards/Cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import SignInForm from '../SignInForm/SignInform';
import calendar from '../../assets/calendar-lines-pen.png';
import userPic from '../../assets/usergroup.png';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import { auth } from '../../firebase';



const categories = [
    'All', 'Accounting', 'Finance', 'Analytics', 'Web Development', 'Marketing'
];

const HomeCard = ({ selectedCategory }) => {

    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const user = auth.currentUser;
    const [showSignInForm, setShowSignInForm] = useState(false);
    const navigate = useNavigate();

    const filterCardsByCategory = data.filter((card) =>
        selectedCategory === 'All' || card.title === selectedCategory
    );

    const filteredCards = filterCardsByCategory.slice(0, 8);

    const handleCardTitleClick = (courseID) => {
        const selectedCard = data.find(card => card.courseID === courseID);
        navigate(`/details/${courseID}`, { state: { cardDetails: selectedCard } });
    };

    return (
        <div className={cardsCSS.cardsSection}>
            {showSignInForm && <div className={`${cardsCSS.overlay} ${showSignInForm ? cardsCSS.show : ''}`} />}
            {showSignInForm && <SignInForm onClose={() => setShowSignInForm(false)} />}

            <div className={cardsCSS.cards}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 " style={{ width: '100%' }}>
                    {filteredCards.map((card, index) => {
                        // Track if the card is saved to wishlist
                        const isCardSaved = wishlist.some(wishlistCard => wishlistCard.courseID === card.courseID);

                        const handleSaveIconClick = () => {
                            if (user) {
                                if (isCardSaved) {
                                    removeFromWishlist(card.courseID);
                                } else {
                                    addToWishlist(card);
                                    navigate('/profile/wishlist');
                                }
                            } else {
                                navigate('/login');
                            }
                        };

                        return (
                            <div key={index} className="col mt-4">
                                <div className={`card ${cardsCSS.card}`}>
                                    <div className={cardsCSS.cardImgContainer}>
                                        <img src={card.imageSrc} className={cardsCSS.cardImgTop} alt={card.title} />
                                        <FontAwesomeIcon
                                            icon={faBookmark}
                                            className={`${cardsCSS.saveIcon} ${isCardSaved ? cardsCSS.saved : ''}`}
                                            onClick={handleSaveIconClick}
                                            style={{ color: isCardSaved ? '#553cdf' : 'white' }}
                                        />
                                    </div>
                                    <div className={cardsCSS.card_body}>
                                        <p className={cardsCSS.CardTitle}>{card.title}</p>
                                        <div className={cardsCSS.lessons}>
                                            <div className={cardsCSS.calendar_pen}>
                                                <img src={calendar} alt="" />
                                                <p className={cardsCSS.lesson}>{card.no_of_lessons}</p>
                                            </div>
                                            <div className={cardsCSS.users}>
                                                <img src={userPic} alt="" />
                                                <p className={cardsCSS.students}>{card.students}</p>
                                            </div>
                                        </div>
                                        <h5 className={cardsCSS.course_title} onClick={() => handleCardTitleClick(card.courseID)}>{card.text}</h5>
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
                    })}
                </div>
            </div>
        </div>
    );
};


export default HomeCard;
