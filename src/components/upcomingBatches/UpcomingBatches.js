import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './UpcomingBatches.module.css';
import Asidecard from './aside/Asidecard';
import navbarImage from '../../assets/careerworkshop/all banner.png';
import masterAd_DA from '../../assets/careerworkshop/Master adv da.png';
import masterAd_DS from '../../assets/careerworkshop/Master adv ds.png';
import masterAd_DM from '../../assets/careerworkshop/Master adv dm.png';
import masterAd_Devops from '../../assets/careerworkshop/Master adv devops.png';
import masterAI from '../../assets/careerworkshop/Master AI.png';
import masterDA from '../../assets/careerworkshop/Master DA.png';
import masterDS from '../../assets/careerworkshop/Master DS.png';
import masterFS from '../../assets/careerworkshop/Master FS.png';
import masterFSJ from '../../assets/careerworkshop/Master FSJ.png';
import masterFSP from '../../assets/careerworkshop/Master FSP.png';
import Footer from './../footer/footer';

const UpcomingBatches = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [holidays, setHolidays] = useState([]);
    const [startDates, setStartDates] = useState({});

    const categories = [
        'All',
        'Full Stack Development',
        'Data Science/AI',
        'DevOps',
        'Digital Marketing',
    ];

    const cardData = [
        { id: 1, students: '5120+', image: masterDS, category: 'Data Science/AI', title: 'Artificial Intelligence', route: '/artificial-intelligence-course-training-institute-in-hyderabad' },
        { id: 2, students: '3200+', image: masterAd_DS, category: 'Data Science/AI', title:'Advanced Data Science/AI', route: '/data-science-course' },
        { id: 3, students: '4600+', image: masterDA, category: 'Data Science/AI', title: 'Data Analytics (Mastery)', route: '/data-analytics-course-training-hyderabad' },
        { id: 4, students: '3800+', image: masterFSJ, category: 'Full Stack Development', title: 'Full Stack Java', route: '/java-full-stack-development' },
        { id: 5, students: '4300+', image: masterFSP, category: 'Full Stack Development', title: 'Full Stack Python', route: '/python-full-stack-development' },
        { id: 6, students: '4400+', image: masterFS, category: 'Full Stack Development', title: 'Mern Stack (Full Stack)', route: '/mern-stack'},
        { id: 7, students: '3120+', image: masterAd_Devops, category: 'DevOps', title: 'Multi Cloud With Devops', route: '/awsdevopscourse' },
        { id: 8, students: '4500+', image: masterAd_DM, category: 'Digital Marketing', title: 'Advanced Digital Marketing', route: 'digital-marketing-course-training-institute-hyderabad' },

    ];


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const fetchHolidays = async () => {
        const apiKey = 'VQcZbnVRoTZgJnRtNXQ1z8VDZFsF5IWo';
        const baseUrl = 'https://calendarific.com/api/v2';
        const url = `${baseUrl}/holidays?api_key=${apiKey}&country=IN&year=${new Date().getFullYear()}&state=AP`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.response && data.response.holidays) {
                const holidayDates = data.response.holidays.map(holiday => holiday.date.iso);
                setHolidays(holidayDates);
            }
        } catch (error) {
            console.error('Error fetching holidays:', error);
        }
    };

    const calculateStartDates = () => {
        const today = new Date(new Date().getFullYear(), 0, 6);
        const startDatesMap = {};

        cardData.forEach(card => {
            let nextDate = new Date(today);
            let daysAdded = 0;

            while (daysAdded < 10) {
                nextDate.setDate(nextDate.getDate() + 1);
                const dateString = nextDate.toISOString().split('T')[0];
                const dayOfWeek = nextDate.getDay(); // Get day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

                // Check if the date is a holiday or Sunday
                if (!holidays.includes(dateString) && dayOfWeek !== 0) {
                    daysAdded++;
                }
            }

            const formattedDate = nextDate.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
            startDatesMap[card.id] = formattedDate;
        });

        setStartDates(startDatesMap);
    };

    useEffect(() => {
        fetchHolidays();
    }, []);

    useEffect(() => {
        if (holidays.length > 0) {
            calculateStartDates();
        }
    }, [holidays]);

    const filteredCards =
        selectedCategory === 'All'
            ? cardData
            : cardData.filter((card) => card.category === selectedCategory);

    return (
        <>
            <div className={`${style.container}`}>
                <div className={`${style.bg} container pt-5`}>
                    {/* Header Section */}
                    <div className="text-start d-flex flex-wrap align-items-center justify-content-between text-white">
                        <div>
                            <h1>Social Prachar</h1>
                            <h2>MASTERCLASS</h2>
                            <p className="fw-bold">Learn Tech Concepts From Industry Leaders Who Have Been there and done that!</p>
                        </div>
                        <div>
                            <img src={navbarImage} alt="Masterclass" className={style.custom_image} />
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="d-flex flex-wrap justify-content-start mb-4 bg-light p-1 rounded">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`btn mx-2 mb-2 ${selectedCategory === category ? style.active_category : ''} w-auto w-sm-25 w-md-auto`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Main Content Section */}
                    <div className="row">
                        {/* Main Cards Section */}
                        <div className="col-md-8">
                            <div className="row">
                                {filteredCards.map((card) => (
                                    <div className="col-md-6 mb-4 shadow" key={card.id}>
                                        <div className="card" style={{ width: '100%' }}>
                                            <img
                                                src={card.image}
                                                className="card-img-top img-fluid"
                                                alt="Placeholder"
                                                style={{ height: '160px', backgroundPosition: 'center' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text mb-1">Batch Starting Date: <span className='fw-bold'>{startDates[card.id]}</span></p>
                                                <h6 className='text-danger'>Limited Slots Available</h6>
                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <h6 className={style.studentsEnrolledText}>Students Registered: {card.students}</h6>
                                                    <a href={card.route} className={`fw-bold btn ${style.enrollBtn}`}>
                                                        Enroll Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Aside Card Section */}
                        <div className="col-md-4">
                            <div className={style.sticky_asidecard}>
                                <Asidecard />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default UpcomingBatches;
