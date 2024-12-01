import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../Cards/CardData';
import cardsCSS from './Cards.module.css';
import GridSymbol from '../../assets/menu (1).png';
import calendar from '../../assets/calendar-lines-pen.png';
import user from '../../assets/usergroup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import SignInForm from '../SignInForm/SignInform';
import OneCard from './OneCard';
import { useWishlist } from '../../Dashboard/MenuBarComponents/WishListContext';
import { auth } from '../../firebase';


const Cards = ({ filters }) => {

    const { checkedCategories, checkedTags, checkedLevel, checkedPrice } = filters;

    const matchesFilters = (card) => {
        const categoryMatch = checkedCategories[card.categoryIndex] || !checkedCategories.some(Boolean);
        const tagMatch = checkedTags[card.tagIndex] || !checkedTags.some(Boolean);
        const levelMatch = checkedLevel[card.levelIndex] || !checkedLevel.some(Boolean);
        const priceMatch = checkedPrice[card.priceIndex] || !checkedPrice.some(Boolean);

        return categoryMatch && tagMatch && levelMatch && priceMatch;
    };
    const filteredCards = data.filter(matchesFilters);

    // DropDown menu
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('Release Date(newest first)');
    const [options] = useState([
        'Release Date(newest first)',
        'Release Date(oldest first)',
        'Course Title(a-z)',
        'Course Title(z-a)'
    ]);

    const dropdownRef = useRef(null);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Buttons for Grid and List View
    const [selectedButton, setSelectedButton] = useState('grid');

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    // Pagination
    const cardsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const currentCards = filteredCards.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const showPagination = totalPages > 1;

    // Add to wish list
    const [wishlist, setWishlist] = useState([]);
    const {addToWishlist} = useWishlist();
    const [user, setUser] = useState();
    

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }, []);

    // Constant Sign In form
    const [showSignInForm, setShowSignInForm] = useState(false);
    const handleSaveIconClick = (card) => {
        if (user) {
            addToWishlist(card);
            navigate('/profile/wishlist')
        } else {
            setShowSignInForm(true);
        }
    };

    const handleCloseForm = () => {
        setShowSignInForm(false);
    };


    const navigate = useNavigate();
    // const { slug } = useParams();
    const handleCardTitleClick = (courseID) => {
        const selectedCard = data.find(card => card.courseID === courseID);
        navigate(`/details/${selectedCard.slug}`, { state: { cardDetails: selectedCard } });
    };


    return (
        <div className={cardsCSS.cardsSection}>

            {showSignInForm && <div className={`${cardsCSS.overlay} ${showSignInForm ? cardsCSS.show : ''}`} />}
            {showSignInForm && <SignInForm onClose={handleCloseForm} />}

            <div className={cardsCSS.cardfilter}>
                <div className={cardsCSS.dropdownSection}>
                    <h4>Short By</h4>
                    <div className={cardsCSS.dropdown} ref={dropdownRef}>
                        <div className={cardsCSS.selectedOption} onClick={() => setIsOpen(!isOpen)}>
                            {selectedOption}<FontAwesomeIcon icon={faChevronDown} />
                        </div>
                        <div className={`${cardsCSS.dropdownMenu} ${isOpen ? cardsCSS.show : ''}`}>
                            <FontAwesomeIcon icon={faSearch}
                                className={cardsCSS.searchIcon}
                            />

                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={cardsCSS.searchInput}
                            />
                            {filteredOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className={cardsCSS.dropdownItem}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={cardsCSS.Form_buttons}>
                    <button
                        className={`${selectedButton === 'grid' ? cardsCSS.selected : ''}`}
                        onClick={() => handleButtonClick('grid')}
                    >
                        <img
                            src={GridSymbol}
                            alt="Grid"
                            className={`${cardsCSS.icon} ${selectedButton === 'grid' ? cardsCSS.selectedIcon : ''}`}
                        />
                        Grid
                    </button>
                    <button
                        className={`${selectedButton === 'list' ? cardsCSS.selected : ''}`}
                        onClick={() => handleButtonClick('list')}
                    >
                        <FontAwesomeIcon icon={faList} />
                        List
                    </button>
                </div>
            </div>


            <div className={cardsCSS.cards}>
                <div className={`row ${selectedButton === 'list' ? cardsCSS.listview : cardsCSS.gridView}`}>
                    {currentCards.map((card, index) => (
                        <OneCard
                            key={index}
                            card={card}
                            selectedButton={selectedButton}
                            handleCardTitleClick={handleCardTitleClick}
                            handleSaveIconClick={handleSaveIconClick}
                        />
                    ))}
                </div>
            </div>

            {showPagination && (
                <div className={cardsCSS.pagination}>
                    {!isFirstPage && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`${cardsCSS.pageButton} ${cardsCSS.arrowButton}`}
                        >
                            &#10094;
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => handlePageChange(pageIndex + 1)}
                            className={`${cardsCSS.pageButton} ${currentPage === pageIndex + 1 ? cardsCSS.activePageButton : ''}`}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                    {!isLastPage && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`${cardsCSS.pageButton} ${cardsCSS.arrowButton}`}
                        >
                            &#10095;
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};
export default Cards; 