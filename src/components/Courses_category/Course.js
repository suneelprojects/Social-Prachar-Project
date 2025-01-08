import React, { useEffect, useRef, useState } from 'react';
import courseCSS from './Course.module.css';
import img from '../../assets/01-5.jpg';
import { data } from '../Cards/CardData';
import Cards from '../Cards/Cards';
import ToggleBar from '../Togglebar/ToggleBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Footer from '../footer/footer';

export const items = [
    'MERN Stack Development',
    'Python Development',
    'Java Development',
    'Analytics',
    'Data Science',
    'AWS DevOps',
    'Digital Marketing',
    'Artificial Intelligence',
    'SnowFlake Course',
    'SalesForce',
];

export const Tag = ['Web Development', 'Marketing', 'Cloud', 'Job Guarentee Prgrams'];
let categoryIndex = 0;
let tagIndex = 0;
const filterItems = (items, categoryIndex, tagIndex) => {
    // Define categories mapping for each tag
    const categories = [
        ['Python Development', 'Java Development', 'MERN Stack Development'],
        ['Digital Marketing'],
        ['AWS DevOps', 'SalesForce','SnowFlake Course'],
        ['Analytics', 'Data Science', 'Artificial Intelligence'],
    ];
    const selectedTag = Tag[tagIndex] || '';
    if (selectedTag === 'Web Development' || selectedTag === 'Regular Programs') {
        categoryIndex = 0;
    }
    const selectedCategoryItems = categories[categoryIndex] || [];
    console.log(`Filtering for category: ${selectedTag} (${selectedCategoryItems.join(', ')})`);
    const filteredItems = items.filter(item =>
        selectedCategoryItems.includes(item)
    );

    return filteredItems;
};
const filteredResults = filterItems(items, categoryIndex, tagIndex);
console.log(filteredResults);


const Course = () => {
    const location = useLocation();
    const { category } = location.state || {};

    const [checked, setChecked] = useState(new Array(items.length).fill(false));
    const [showUncheckedShadow, setShowUncheckedShadow] = useState(new Array(items.length).fill(false));

    const [checkedTags, setCheckedTags] = useState(new Array(Tag.length).fill(false));
    const [showUncheckedShadowTags, setShowUncheckedShadowTags] = useState(new Array(Tag.length).fill(false));

    const [showButton, setShowButton] = useState(false);
    const [refreshCards, setRefreshCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const containerRef = useRef(null);

    const clearFilters = () => {
        setChecked(new Array(items.length).fill(false));
        setCheckedTags(new Array(Tag.length).fill(false));
        setRefreshCards(true);
    };

    const handleClick = () => {
        clearFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        if (scrollTop > viewportHeight / 2) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowUncheckedShadow(new Array(items.length).fill(false));
            setShowUncheckedShadowTags(new Array(Tag.length).fill(false));
        }
    };

    const handleCheckboxClick = (index) => {
        const updatedChecked = checked.map((item, i) => i === index ? !item : item);
        setChecked(updatedChecked);
        const selectedCategories = items.filter((item, i) => updatedChecked[i]);
        const filteredCardsTemp = data.filter((card) => selectedCategories.includes(card.category));
        setFilteredCards(filteredCardsTemp.length > 0 ? filteredCardsTemp : data);

        if (!updatedChecked[index]) {
            setRefreshCards(false);
        } else {
            setRefreshCards(true);
        }

        // Update the Cards component with the filtered cards
        <Cards filters={{ checkedCategories: updatedChecked, checkedTags }} cards={filteredCards} />;
    };
    useEffect(() => {
        if (category) {
            const categoryIndex = items.indexOf(category);
            if (categoryIndex !== -1) {
                const updatedChecked = items.map((_, index) => index === categoryIndex);
                setChecked(prevChecked => {
                    // Only update if the state is actually different to avoid re-renders
                    if (JSON.stringify(prevChecked) !== JSON.stringify(updatedChecked)) {
                        return updatedChecked;
                    }
                    return prevChecked;
                });
            }
        }
    }, [category]);


    const handleTagCheckboxClick = (index) => {
        const updatedCheckedTags = checkedTags.map((item, i) => i === index ? !item : item);
        setCheckedTags(updatedCheckedTags);
        const updatedShowUncheckedShadowTags = updatedCheckedTags.map((item, i) => i === index && !item);
        setShowUncheckedShadowTags(updatedShowUncheckedShadowTags);
    };

    //     const updatedCheckedLevel = checkedLevel.map((item, i) => i === index ? !item : item);
    //     setCheckedLevel(updatedCheckedLevel);
    //     const updatedShowUncheckedShadowLevel = updatedCheckedLevel.map((item, i) => i === index && !item);
    //     setShowUncheckedShadowLevel(updatedShowUncheckedShadowLevel);
    // };

    // const handlePriceCheckboxClick = (index) => {
    //     const updatedCheckedPrice = checkedPrice.map((item, i) => i === index ? !item : item);
    //     setCheckedPrice(updatedCheckedPrice);
    //     const updatedShowUncheckedShadowPrice = updatedCheckedPrice.map((item, i) => i === index && !item);
    //     setShowUncheckedShadowPrice(updatedShowUncheckedShadowPrice);
    // };

    useEffect(() => {
        handleScroll();
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <div className={courseCSS.categorypage}>
                <div className={courseCSS.cover_img}>
                    <img src={img} className={courseCSS.thumbnail} alt="" />
                    <h1>Courses</h1>
                </div>

                <ToggleBar
                    items={items}
                    Tag={Tag}
                    checked={checked}
                    setChecked={setChecked}
                    showUncheckedShadow={showUncheckedShadow}
                    setShowUncheckedShadow={setShowUncheckedShadow}
                    checkedTags={checkedTags}
                    setCheckedTags={setCheckedTags}
                    showUncheckedShadowTags={showUncheckedShadowTags}
                    setShowUncheckedShadowTags={setShowUncheckedShadowTags}

                    clearFilters={clearFilters}
                />

                <div className={courseCSS.EntirePage}>
                    <div className={courseCSS.category}>
                        {/* Duplicate filter section for non-toggle bar view */}
                        <div className={courseCSS.checkbox}>
                            <div className={courseCSS.search}>
                                <p>Search</p>
                                <div className={courseCSS.searchBar}>
                                    <input type="text" placeholder='search' />
                                    <button className={courseCSS.searchIcon}><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div>
                            <hr />
                            {/* Category part */}
                            <div className={courseCSS.categories}>
                                <h5>Course</h5>
                                {items.map((item, index) => (
                                    <div key={index} className={courseCSS.categorypart}>
                                        <input
                                            type="checkbox"
                                            id={`acc-${index}`}
                                            checked={checked[index]}
                                            onChange={() => handleCheckboxClick(index)}
                                            className={`${checked[index] ? courseCSS.shadow : showUncheckedShadow[index] ? courseCSS.unchecked_shadow : ''}`}
                                        />
                                        <label htmlFor={`acc-${index}`}><p>{item}</p></label>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            {/* Tag part */}
                            <div className={courseCSS.categories}>
                                <h5>Catogery</h5>
                                {Tag.map((tag, index) => (
                                    <div key={index} className={courseCSS.categorypart}>
                                        <input
                                            type="checkbox"
                                            id={`tag-${index}`}
                                            checked={checkedTags[index]}
                                            onChange={() => handleTagCheckboxClick(index)}
                                            className={`${checkedTags[index] ? courseCSS.shadow : showUncheckedShadowTags[index] ? courseCSS.unchecked_shadow : ''}`}
                                        />
                                        <label htmlFor={`tag-${index}`}><p>{tag}</p></label>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            {/* Level part */}

                            <div className={courseCSS.button}>
                                <button className={courseCSS.btn} onClick={handleClick}>&#x2715;&nbsp;&nbsp;&nbsp;&nbsp;Clear All Filters</button>
                            </div>
                        </div>
                    </div>
                    <div className={courseCSS.CardsSection}>
                        <Cards
                            filters={{
                                checkedCategories: checked,
                                checkedTags,

                            }} />
                    </div>
                    {showButton && (
                        <button className={courseCSS.scrollButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span>&#10095;&#10095;</span>
                        </button>
                    )}
                </div>

            </div>
            <Footer />

        </>

    );
};

export default Course;
