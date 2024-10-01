import React, {  useState } from 'react';
import courseCSS from '../Courses_category/Course.module.css';
import BulbText from '../extraComponents/bulbText';
import HomeCard from './HomeCard';
import homeCoursesStyle from './homeCourses.module.css'

const HomeCourses = () => {
    const items = ['All', 'Accounting', 'Finance', 'Analytics', 'Development', 'Marketing'];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className={`${courseCSS.categorypage} containerFluidForPadding my-5`}>
            <div className='row '>
                <div className='col col-12 col-sm-12 col-xl-6'>
                    
                <BulbText 
                    BulbText="Courses"
                    bulbTitle="Explore Featured Courses"
                    GreyText="You'll find something to spark your curiosity and enhance"
                />
                </div>
                <div className="d-flex col justify-content-end mt-5 col-12 col-sm-12 col-xl-6 flex-wrap ">
                    {items.map((item, index) => (
                        <div key={index}>
                            <button
                                onClick={() => handleCategoryClick(item)}
                                className={` ${homeCoursesStyle.homeCoursesBtn}  ${selectedCategory === item ? `${homeCoursesStyle.homeCoursesBtnactive}` : ''} mt-2`}
                            >
                                {item}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div >
                <HomeCard selectedCategory={selectedCategory} />
            </div>
        </div>
    );
};

export default HomeCourses;
