import React, { useEffect, useRef, useState } from 'react';
import courseCSS from '../Courses_category/Course.module.css';
import img from '../../assets/01-5.jpg';
import Cards from '../Cards/Cards';
import ToggleBar from '../Togglebar/ToggleBar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const NavCourses = () => {
    const location = useLocation();
    const { category } = location.state || {};

    const items = ['Accounting', 'Finance', 'Development', 'Design & Art', 'Business', 'Marketing', 'HR'];
    const Tag = ['App', 'Book', 'Business', 'Course', 'Data', 'Design', 'Education', 'LMS', 'Web Development'];
    const Level = ['All Levels', 'Beginner', 'Intermediate', 'Expert'];
    const Price = ['Free', 'Paid'];

    const initialCategoryIndex = category ? items.indexOf(category) : -1;
    const [checked, setChecked] = useState(
        items.map((_, index) => index === initialCategoryIndex)
    );
    const [showUncheckedShadow, setShowUncheckedShadow] = useState(new Array(items.length).fill(false));

    const [checkedTags, setCheckedTags] = useState(new Array(Tag.length).fill(false));
    const [showUncheckedShadowTags, setShowUncheckedShadowTags] = useState(new Array(Tag.length).fill(false));

    const [checkedLevel, setCheckedLevel] = useState(new Array(Level.length).fill(false));
    const [showUncheckedShadowLevel, setShowUncheckedShadowLevel] = useState(new Array(Level.length).fill(false));

    const [checkedPrice, setCheckedPrice] = useState(new Array(Price.length).fill(false));
    const [showUncheckedShadowPrice, setShowUncheckedShadowPrice] = useState(new Array(Price.length).fill(false));

    const [showButton, setShowButton] = useState(false);

    const containerRef = useRef(null);

    const clearFilters = () => {
        setChecked(new Array(items.length).fill(false));
        setCheckedTags(new Array(Tag.length).fill(false));
        setCheckedLevel(new Array(Level.length).fill(false));
        setCheckedPrice(new Array(Price.length).fill(false));
    };

    const handleClick = () => {
        clearFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        setShowButton(scrollTop > viewportHeight / 2);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowUncheckedShadow(new Array(items.length).fill(false));
            setShowUncheckedShadowTags(new Array(Tag.length).fill(false));
            setShowUncheckedShadowLevel(new Array(Level.length).fill(false));
            setShowUncheckedShadowPrice(new Array(Price.length).fill(false));
        }
    };

    const handleCheckboxClick = (index, checkedState, setCheckedState, setShowUncheckedShadowState) => {
        const updatedChecked = checkedState.map((item, i) => i === index ? !item : item);
        setCheckedState(updatedChecked);
        const updatedShowUncheckedShadow = updatedChecked.map((item, i) => i === index && !item);
        setShowUncheckedShadowState(updatedShowUncheckedShadow);
    };

    useEffect(() => {
        handleScroll();
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className={courseCSS.categorypage}>
            <div className={courseCSS.cover_img}>
                <img src={img} className={courseCSS.thumbnail} alt="" />
                <h1>Courses</h1>
            </div>

            <ToggleBar
                items={items}
                Tag={Tag}
                Level={Level}
                Price={Price}
                checked={checked}
                setChecked={setChecked}
                showUncheckedShadow={showUncheckedShadow}
                setShowUncheckedShadow={setShowUncheckedShadow}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                showUncheckedShadowTags={showUncheckedShadowTags}
                setShowUncheckedShadowTags={setShowUncheckedShadowTags}
                checkedLevel={checkedLevel}
                setCheckedLevel={setCheckedLevel}
                showUncheckedShadowLevel={showUncheckedShadowLevel}
                setShowUncheckedShadowLevel={setShowUncheckedShadowLevel}
                checkedPrice={checkedPrice}
                setCheckedPrice={setCheckedPrice}
                showUncheckedShadowPrice={showUncheckedShadowPrice}
                setShowUncheckedShadowPrice={setShowUncheckedShadowPrice}
                clearFilters={clearFilters}
            />

            <div className={courseCSS.EntirePage}>
                <div className={courseCSS.category}>
                    <div className={courseCSS.checkbox}>
                        <div className={courseCSS.search}>
                            <p>Search</p>
                            <div className={courseCSS.searchBar}>
                                <input type="text" placeholder='search' />
                                <button><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </div>
                        <hr />
                        <div className={courseCSS.categories}>
                            <h5>Category</h5>
                            {items.map((item, index) => (
                                <div key={index} className={courseCSS.categorypart}>
                                    <input
                                        type="checkbox"
                                        id={`acc-${index}`}
                                        checked={checked[index]}
                                        onChange={() => handleCheckboxClick(index, checked, setChecked, setShowUncheckedShadow)}
                                        className={`${checked[index] ? courseCSS.shadow : showUncheckedShadow[index] ? courseCSS.unchecked_shadow : ''}`}
                                    />
                                    <label htmlFor={`acc-${index}`}><p>{item}</p></label>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className={courseCSS.categories}>
                            <h5>Tags</h5>
                            {Tag.map((tag, index) => (
                                <div key={index} className={courseCSS.categorypart}>
                                    <input
                                        type="checkbox"
                                        id={`tag-${index}`}
                                        checked={checkedTags[index]}
                                        onChange={() => handleCheckboxClick(index, checkedTags, setCheckedTags, setShowUncheckedShadowTags)}
                                        className={`${checkedTags[index] ? courseCSS.shadow : showUncheckedShadowTags[index] ? courseCSS.unchecked_shadow : ''}`}
                                    />
                                    <label htmlFor={`tag-${index}`}><p>{tag}</p></label>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className={courseCSS.categories}>
                            <h5>Level</h5>
                            {Level.map((level, index) => (
                                <div key={index} className={courseCSS.categorypart}>
                                    <input
                                        type="checkbox"
                                        id={`level-${index}`}
                                        checked={checkedLevel[index]}
                                        onChange={() => handleCheckboxClick(index, checkedLevel, setCheckedLevel, setShowUncheckedShadowLevel)}
                                        className={`${checkedLevel[index] ? courseCSS.shadow : showUncheckedShadowLevel[index] ? courseCSS.unchecked_shadow : ''}`}
                                    />
                                    <label htmlFor={`level-${index}`}><p>{level}</p></label>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className={courseCSS.categories}>
                            <h5>Price</h5>
                            {Price.map((price, index) => (
                                <div key={index} className={courseCSS.categorypart}>
                                    <input
                                        type="checkbox"
                                        id={`price-${index}`}
                                        checked={checkedPrice[index]}
                                        onChange={() => handleCheckboxClick(index, checkedPrice, setCheckedPrice, setShowUncheckedShadowPrice)}
                                        className={`${checkedPrice[index] ? courseCSS.shadow : showUncheckedShadowPrice[index] ? courseCSS.unchecked_shadow : ''}`}
                                    />
                                    <label htmlFor={`price-${index}`}><p>{price}</p></label>
                                </div>
                            ))}
                        </div>
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
                            checkedLevel,
                            checkedPrice
                        }} />
                </div>
                {showButton && (
                    <button className={courseCSS.scrollButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span>&#10095;&#10095;</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavCourses;