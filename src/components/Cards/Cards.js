import React, { useEffect, useRef, useState } from 'react';
import { data } from '../Cards/CardData';
import cardsCSS from './Cards.module.css';
import GridSymbol from '../Assets/menu (1).png';
import calendar from '../Assets/calendar-lines-pen.png';
import user from '../Assets/usergroup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faList, faStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import SignInForm from '../SignInForm/SignInform';

const Cards = ({ filters }) => {

    const { checkedCategories, checkedTags, checkedLevel, checkedPrice } = filters;
    // Replace this with your actual filtering logic
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

    // Constant Sign In form
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
                        <div key={index} className={`col-md-4 mt-4 ${selectedButton === 'list' ? cardsCSS.listItem : ''}`}>
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
                                        <div className={cardsCSS.calendar_pen}>
                                            <img src={calendar} alt="" />
                                            <p className={cardsCSS.lesson}>{card.lessons}</p>
                                        </div>
                                        <div className={cardsCSS.users}>
                                            <img src={user} alt="" />
                                            <p className={cardsCSS.students}>{card.students}</p>
                                        </div>
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

