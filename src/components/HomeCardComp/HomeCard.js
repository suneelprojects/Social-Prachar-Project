import React, { useState } from 'react';
import { data } from '../Cards/CardData';
import cardsCSS from '../Cards/Cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import SignInForm from '../SignInForm/SignInform';

const categories = [
    'All', 'Accounting', 'Business', 'Dance', 'Development', 'Marketing'
];

const HomeCard = ({ selectedCategory }) => {

    
    const filterCardsByCategory =  data.filter((card) =>
        selectedCategory === 'All' || card.title === selectedCategory
    );

    const filteredCards = filterCardsByCategory.slice(0, 8);


    const [showSignInForm, setShowSignInForm] = useState(false);

    const handleSaveIconClick = () => {
        setShowSignInForm(true);
    };

    const handleCloseForm = () => {
        setShowSignInForm(false);
    };

    return (
        <div className={cardsCSS.cardsSection}>
            {showSignInForm && <div className={`${cardsCSS.overlay} ${showSignInForm ? cardsCSS.show : ''}`} />}
            {showSignInForm && <SignInForm onClose={handleCloseForm} />}

            <div className={cardsCSS.cards} >
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 " style={{width:'100%'}}>
                    {filteredCards.map((card, index) => (
                        <div key={index} className="col  mt-4">
                            <div className={`card ${cardsCSS.card}`}>
                                <div className={cardsCSS.cardImgContainer}>
                                    <img src={card.imageSrc} className={cardsCSS.cardImgTop} alt={card.title} />
                                    <FontAwesomeIcon icon={faBookmark}
                                        className={cardsCSS.saveIcon}
                                        onClick={handleSaveIconClick}
                                    />
                                </div>
                                <div className={cardsCSS.card_body}>
                                    <p className={cardsCSS.CardTitle}>{card.title}</p>
                                    <div className={cardsCSS.lessons}>
                                        <p className={cardsCSS.lesson}>{card.lessons}</p>
                                        <p className={cardsCSS.students}>{card.students}</p>
                                    </div>
                                    <h5 className={cardsCSS.course_title}>{card.text}</h5>
                                    <p className={cardsCSS.faculty_name}>{card.name}</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
