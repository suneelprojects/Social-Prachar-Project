import React, { useEffect, useRef, useState } from 'react';
import style from './SuccessStories.module.css';
import GoogleStyle from './googleStyles.module.css';
import trustPilotStyle from './trustPilot.module.css';
import Footer from './../footer/footer';
import linkedinLogo from '../../../src/assets/successStories/linkedin.png';
import googleLogo from '../../../src/assets/successStories/google.png';
import { linkedinData } from './linkedinData';
import { googleData } from './googleData';
import { trustPilotData } from './trustpilot';
import { ourAchievements } from './ourAchievements';
import { ourAluminiReviews } from './ourAluminiReviews';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EnrollButton from './../Pageslices/Enrollbutton/Enrollbutton';
import redline from '../../assets/RedLine.webp';
import SignInForm from '../SignInForm/SignInform';


const SuccessStories = () => {
    const [studentsEnrolled, setStudentsEnrolled] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [completionRating, setCompletionRating] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCount(setStudentsEnrolled, 17, 1000);
                        animateCount(setAverageRating, 4.9, 1000);
                        animateCount(setCompletionRating, 86, 1000);
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, [hasAnimated]);

    const animateCount = (setter, target, duration) => {
        let start = 0;
        const increment = target / (duration / 50);

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(interval);
            } else {
                setter(Math.round(start * 10) / 10);
            }
        }, 50);
    };


    const scrollRef = useRef(null);
    const handleMouseMove = (e) => {
        const container = scrollRef.current;
        if (container) {
            container.scrollLeft += e.movementX;
        }
    };

    const [filter, setFilter] = useState('All'); // State to store the selected filter

    // Function to handle filter change
    const handleFilterChange = (category) => {
        setFilter(category);
    };
    const filteredAchievements = ourAchievements.filter((achievement) => {
        if (filter === 'All') return true; // Show all cards if 'All' is selected
        return achievement.category === filter; // Match category with filter
    });

    const [showSignInForm, setShowSignInForm] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('Enter your email');

    const handleKnowMoreClick = () => {
        setShowSignInForm(true);
    };

    return (

        <>

            <div className={style.topContent}>
                <div className={style.insights}>
                    <p className={`${style.insightsHeader} text-center mb-4`}>Uncovering top insights about us</p>
                    <div className="container">
                        <div className={`${style.wholeInsights} row justify-content-center g-3`}>
                            <div className="col-md-4 col-sm-4 col-12 d-flex flex-column">
                                <div className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}>
                                    <p>
                                        <strong>127 %</strong> <br />
                                        Average Placement Hike
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-12 d-flex align-items-stretch">
                                <div className={`${style.insideBox} p-4  text-center rounded shadow-sm w-100`}>
                                    <p>
                                        <strong>8 Lakh</strong> <br />
                                        Average CTC
                                    </p>
                                </div>
                            </div>
                            <div className=' col-md-4 col-sm-4 col-12 d-flex align-items-stretch'>
                                <div className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}>
                                    <p>
                                        <strong>21 LPA</strong> <br />
                                        Highest CTC
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${style.statsContainer} container mt-4`}>
                    <div className={`${style.statsContainer} row justify-content-center`} ref={statsRef}>
                        <div className="col-12 col-md-4 text-center mb-3">
                            <div className={`${style.stat}`}>
                                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                                    {studentsEnrolled.toLocaleString()}K
                                </span>
                                <p className={`${style.statLabel} mt-2`}>Students Enrolled</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 text-center mb-3">
                            <div className={`${style.stat}`}>
                                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                                    {averageRating}/5
                                </span>
                                <p className={`${style.statLabel} mt-2`}>Average Rating</p>
                            </div>
                        </div>

                        {screenWidth > 790 && (
                            <div className="col-12 col-md-4 text-center mb-3">
                                <div className={`${style.stat}`}>
                                    <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                                        {completionRating}%
                                    </span>
                                    <p className={`${style.statLabel} mt-2`}>Completion Rating</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="container d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                    <div className="text-center">
                        <p className={`${style.leadHeading} lead text-muted mb-4 text-center`}>
                            From Aspiration to Achievement <br />
                            <span style={{ color: '#553cdf', position: 'relative', display: 'inline-block' }}>
                                Our Success Stories
                                <div data-aos="fade-right">
                                    <img
                                        src={redline}
                                        alt=""
                                        style={{
                                            display: 'block',
                                            margin: '0 auto',
                                            position: 'absolute',
                                            top: -15,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '100%',
                                            height: '50px'
                                        }}
                                    />
                                </div>
                            </span>
                        </p>

                        <p className={`${style.Headercontent} text-dark`}>
                            Explore the inspiring success stories of our students at Social Prachar, where exceptional results and achievements take center stage.
                            Witness their transformative journeys, groundbreaking accomplishments, and firsthand experiences that showcase the power of learning
                            and growth with us.
                        </p>
                    </div>
                </div>


                <div>
                    {/* Filter Buttons */}
                    <div className={`${style.filterButtons} d-flex justify-content-center my-3`}>
                        <div className={style.btn_group}>
                            <button
                                type="button"
                                className={style.btn}
                                onClick={() => handleFilterChange('Full Stack Java')}
                            >
                                Full Stack Java
                            </button>
                            <button
                                type="button"
                                className={style.btn}
                                onClick={() => handleFilterChange('Full Stack Python')}
                            >
                                Full Stack Python
                            </button>
                            <button
                                type="button"
                                className={style.btn}
                                onClick={() => handleFilterChange('Data Science')}
                            >
                                Data Science
                            </button>
                            <button
                                type="button"
                                className={style.btn}
                                onClick={() => handleFilterChange('Digital Marketing')}
                            >
                                Digital Marketing
                            </button>
                            <button
                                type="button"
                                className={style.btn}
                                onClick={() => handleFilterChange('All')}
                            >
                                Show All
                            </button>
                        </div>
                    </div>

                    {/* OurAchievements */}
                    <div className="container py-4">
                        <div
                            className={`d-flex flex-column ${style.hide_scrollbar}`}
                            style={{
                                maxHeight: '90vh',
                                overflowY: 'auto',
                            }}
                        >
                            <div
                                className="d-flex flex-column"
                                style={{
                                    gap: '25px',
                                }}
                            >
                                {/* First Row */}
                                <div
                                    className="d-flex flex-nowrap"
                                    style={{
                                        scrollbarWidth: 'thin',
                                        gap: '25px',
                                    }}
                                >
                                    {filteredAchievements
                                        .filter((_, index) => index % 2 === 0)
                                        .map((achievement, index) => (
                                            <div
                                                key={index}
                                                className="card text-center p-3 shadow-sm"
                                                style={{
                                                    minWidth: '320px',
                                                    height: '250px',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                <div className="d-flex text-start">
                                                    <div>
                                                        <img
                                                            src={achievement.profileImage}
                                                            alt={achievement.name}
                                                            className="rounded-circle mb-2"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                border: '4px solid #553cdf',
                                                                marginRight: '16px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5 className="card-title">{achievement.name}</h5>
                                                        <p
                                                            className="text-muted mb-2"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            {achievement.role}
                                                        </p>
                                                        <span
                                                            className="badge py-1 px-3"
                                                            style={{
                                                                color: '#553cdf',
                                                                borderRadius: '12px',
                                                                fontSize: '12px',
                                                                background: '#543cdf31',
                                                            }}
                                                        >
                                                            {achievement.hike}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around align-items-center mt-4" style={{ position: 'relative', top: '-8px' }}>
                                                    <div>
                                                        <p
                                                            className="text-muted mb-0"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            Pre Social Prachar
                                                        </p>
                                                        <img
                                                            src={achievement.preCompany}
                                                            alt="Previous Company Logo"
                                                            style={{ width: 'auto', height: '30px' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-right"></i>
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-muted mb-0"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            Post Social Prachar
                                                        </p>
                                                        <img
                                                            src={achievement.postCompany}
                                                            alt="Previous Company Logo"
                                                            style={{ width: 'auto', height: '30px' }}
                                                        />
                                                    </div>
                                                </div>
                                                <hr className="my-0" />
                                                <p
                                                    className="text-muted mb-0"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    started from <br />
                                                    <strong className="text-dark">
                                                        {achievement.startCompanyType}
                                                    </strong>
                                                </p>
                                            </div>
                                        ))}
                                </div>

                                {/* Second Row */}
                                <div
                                    className="d-flex flex-nowrap"
                                    style={{
                                        scrollbarWidth: 'thin',
                                        gap: '25px',
                                    }}
                                >
                                    {filteredAchievements
                                        .filter((_, index) => index % 2 !== 0)
                                        .map((achievement, index) => (
                                            <div
                                                key={index}
                                                className="card text-center p-3 shadow-sm"
                                                style={{
                                                    minWidth: '320px',
                                                    height: '250px',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                <div className="d-flex text-start">
                                                    <div>
                                                        <img
                                                            src={achievement.profileImage}
                                                            alt={achievement.name}
                                                            className="rounded-circle mb-2"
                                                            style={{
                                                                width: '80px',
                                                                height: '80px',
                                                                border: '4px solid #553cdf',
                                                                marginRight: '16px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h5 className="card-title">{achievement.name}</h5>
                                                        <p
                                                            className="text-muted mb-2"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            {achievement.role}
                                                        </p>
                                                        <span
                                                            className="badge py-1 px-3"
                                                            style={{
                                                                color: '#553cdf',
                                                                borderRadius: '12px',
                                                                fontSize: '12px',
                                                                background: '#543cdf31',
                                                            }}
                                                        >
                                                            {achievement.hike}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around align-items-center mt-3">
                                                    <div>
                                                        <p
                                                            className="text-muted mb-0"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            Pre Turot
                                                        </p>
                                                        <img
                                                            src={achievement.preCompany}
                                                            alt="Previous Company Logo"
                                                            style={{ width: 'auto', height: '30px' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <i className="bi bi-arrow-right"></i>
                                                    </div>
                                                    <div>
                                                        <p
                                                            className="text-muted mb-0"
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            Post Turot
                                                        </p>
                                                        <img
                                                            src={achievement.postCompany}
                                                            alt="Previous Company Logo"
                                                            style={{ width: 'auto', height: '30px' }}
                                                        />
                                                    </div>
                                                </div>
                                                <hr className="my-0" />
                                                <p
                                                    className="text-muted mb-0"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    started from <br />
                                                    <strong className="text-dark">
                                                        {achievement.startCompanyType}
                                                    </strong>
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mx-auto w-75" />
                <div className="text-center" style={{ fontSize: '18px' }}>
                    <p>
                        There are 1250+ success stories which we have; these are just a few of them.
                    </p>
                    <div>
                        {showSignInForm && (
                            <SignInForm
                                placeholder={placeholderText} // Pass data as props
                                onClose={() => setShowSignInForm(false)} // Optional: Close handler
                            />
                        )}
                        <button
                            className="btn"
                            onClick={handleKnowMoreClick}
                            style={{
                                fontSize: '16px',
                                color: '#553cdf',
                                fontWeight: '600',
                                border: '1px solid black',
                                padding: '10px 20px',
                            }}
                        >
                            Know More
                        </button>
                    </div>
                    {/* {<EnrollButton label="Know more" className={style.EnrollButton} />} */}
                </div>
            </div>





            {/*Linkedin cards  */}
            <div className={style.linkedin}>
                <div className="text-center pt-5">
                    <h1 className={`${style.linkedinHeader} mb-4`}>Linkedin</h1>
                </div>
                <div
                    className={`${style.wholeLinkedinCard} container`}
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        // cursor: "grab",
                    }}
                    onMouseMove={handleMouseMove}
                >
                    <div className="row flex-row flex-nowrap pt-3">
                        {linkedinData.map((profile) => (
                            <div className="col-2 col-md-2 col-lg-2" key={profile.id}>
                                <div className={`${style.customCard} card`}>
                                    <div className={style.linkedinInnerCardtitle}>
                                        Linked<span><img src={linkedinLogo} alt="" className={style.linkedinLogo} /></span>
                                    </div>
                                    <div className={`${style.linkedinInnerBox} card-body shadow`}>
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={profile.image}
                                                alt=""
                                                className={`${style.profileImage} rounded-circle me-3`}
                                            />
                                            <div className={style.profileName}>
                                                <h5 className="mb-1">{profile.name}</h5>
                                                <p className="mb-0 text-muted">{profile.role}</p>
                                            </div>
                                        </div>
                                        <div className={`${style.linkedinContent} mt-3`}>
                                            <p>
                                                {profile.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* google comments */}
            <div className={GoogleStyle.google}>
                <p className={`${GoogleStyle.header} text-center`}>Google</p>
                <div
                    className={`${GoogleStyle.wholeGoogleCard} container`}
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                    }}
                    onMouseMove={handleMouseMove}
                >
                    <div className="row flex-row flex-nowrap pt-3">
                        {googleData.map((data) => (
                            <div
                                key={data.id}
                                className={`col-3 col-sm-8 col-lg-6 col-xl-4`}
                            >
                                <div className={`${GoogleStyle.googleCard} card`}>
                                    <div className={GoogleStyle.insideGoogleCard}>
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                            style={{ color: "#553cdf", fontSize: "1.7rem" }}
                                            className={GoogleStyle.iconStart}
                                        />
                                        <div className={GoogleStyle.card}>
                                            <p>{data.content}</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faQuoteRight}
                                            style={{ color: "#553cdf", fontSize: "1.7rem" }}
                                            className={GoogleStyle.iconEnd}
                                        />
                                    </div>
                                    {/* Centered Comment Section */}
                                    <div
                                        className={`${GoogleStyle.googleCommentPerson} d-flex flex-column align-items-center justify-content-center mt-4`}
                                    >
                                        <img
                                            src={data.commentPerson.profileImage || "path-to-default-image"}
                                            alt="Profile"
                                            className={`${GoogleStyle.profileImage} rounded-circle mb-2`}
                                        />
                                        <p className={`mb-1 fw-bold ${GoogleStyle.name}`}>{data.commentPerson.name}</p>
                                        <p className={`text-muted mb-12`}>{data.commentPerson.stars}</p>
                                        <img
                                            src={googleLogo}
                                            alt="Google Logo"
                                            className={GoogleStyle.googleLogo}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* success Pilot */}
            <div className={trustPilotStyle.trustPilotContainer}>
                <div className="text-center pt-5">
                    <h1 className={`${trustPilotStyle.trustPilotHeader} mb-4`}>Just Dial</h1>
                </div>
                <div
                    className={`${trustPilotStyle.trustPilotScrollContainer} container`}
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        gap: "1rem",
                        paddingBottom: "1rem",
                    }}
                    onMouseMove={handleMouseMove}
                >
                    {trustPilotData.map((testimonial, index) => (
                        <div
                            className="col-12 col-sm-10 col-md-8 col-lg-4"
                            key={index}
                        >

                            <div className="card shadow-sm" style={{ maxWidth: "420px", height: '63vh', padding: '30px 0px', border: '2px solid #553cdf', borderRadius: '15px' }}>
                                <div className="card-body">
                                    <div className={trustPilotStyle.cardBody}>
                                        <div className={trustPilotStyle.cornerStar}>
                                            {"★ Just Dial"}
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div
                                                className={`${trustPilotStyle.profile} rounded-circle text-white d-flex justify-content-center align-items-center`}

                                            >
                                                {testimonial.initial}
                                            </div>
                                            <div className="ms-3">
                                                <h5 className="mb-0">{testimonial.name}</h5>
                                            </div>
                                        </div>
                                        <hr />
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                            style={{ color: "#553cdf", fontSize: "1.7rem" }}
                                            className={trustPilotStyle.iconStart}
                                        />
                                        <p className={`${trustPilotStyle.title}`}>{testimonial.title}</p>
                                        <div className="text-success mb-3">
                                            {"★".repeat(testimonial.rating)}
                                        </div>
                                        <p className={`${trustPilotStyle.description} text-muted`}>{testimonial.description}</p>
                                        <FontAwesomeIcon
                                            icon={faQuoteRight}
                                            style={{ color: "#553cdf", fontSize: "1.7rem" }}
                                            className={trustPilotStyle.iconEnd}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/*our Alumini Review */}
            <div className={style.ourAlumini_Reviews}>
                <h2 className="text-center">Our Alumni Reviews</h2>
                <div className="container my-5">
                    <div
                        className={`${style.alumniScrollContainer} d-flex`}
                        ref={scrollRef}
                        style={{
                            overflowX: "auto",
                            gap: "1rem",
                            paddingBottom: "1rem",
                        }}
                        onMouseMove={handleMouseMove}
                    >
                        {ourAluminiReviews.map((student) => (
                            <div
                                key={student.id}
                                className={"col-12 col-md-6 col-lg-4 mb-4"}
                                style={{ minWidth: "300px" }}
                                onClick={() => window.open(student.linkedin)}
                            >
                                <div
                                    className={`${style.wholeAlumniCard} card shadow`}
                                    style={{ borderRadius: "15px" }}
                                >
                                    <div className="card-body">
                                        {/* Success Story Heading */}
                                        <div className="d-flex justify-content-between">
                                            <p className="fw-bold">Success Story</p>
                                            <p className="fw-bold">Social Prachar</p>
                                        </div>

                                        {/* Placement Journey Section */}
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-around align-items-center">
                                                <div>
                                                    <div>
                                                        <p className="h6">
                                                            <span style={{ color: "#553cdf" }}>
                                                                Placement
                                                            </span>{" "}
                                                            Journey
                                                        </p>
                                                        <hr className="my-2" />
                                                        <p className="mb-0">
                                                            From{" "}
                                                            <span className="fw-bold">
                                                                {student.homeTown}
                                                            </span>
                                                        </p>
                                                        <p className="h6 fw-bold">
                                                            to{" "}
                                                            <span style={{ color: "#553cdf" }}>
                                                                {student.role}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="table" style={{ width: "160px" }}>
                                                        <table
                                                            className={`${style.offersTable} table table-bordered text-center`}
                                                            style={{ fontSize: "8px" }}
                                                        >
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan="3" style={{}}>
                                                                        <p
                                                                            className="m-0"
                                                                            style={{
                                                                                fontWeight: "800",
                                                                                fontSize: "9px",

                                                                            }}
                                                                        >
                                                                            Offers From:
                                                                        </p>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    {student.offers.map((offer, index) => (
                                                                        <td key={index}>
                                                                            <img
                                                                                src={offer.logo}
                                                                                style={{
                                                                                    width: "35px",
                                                                                    height: "25px",
                                                                                    objectFit: "contain",

                                                                                }}
                                                                                alt={`${offer.company}`}
                                                                            />
                                                                            <span style={{ fontSize: "8px" }}>
                                                                                {offer.company}
                                                                            </span>
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                {/* Profile Image Behind the Personal Info Section */}
                                                <div
                                                    style={{
                                                        position: "relative",
                                                        display: "inline-block",
                                                    }}
                                                >
                                                    <img
                                                        src={student.image}
                                                        alt={`${student.name}'s profile`}
                                                        className={`${style.alumniProfileImage} rounded-circle`}

                                                    />

                                                    {/* Person Information Section Above Image */}
                                                    <div className={`${style.personalInfo} border`}>
                                                        <span className={style.aluminiStudentName}>
                                                            {student.name}
                                                        </span>
                                                        <span
                                                            style={{
                                                                marginBottom: "2px",
                                                                fontWeight: "800",
                                                            }}
                                                        >
                                                            {student.role}
                                                        </span>
                                                        <span

                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                height: "26px",
                                                                width: "100%",
                                                                justifyContent: "center",

                                                            }}
                                                        >
                                                            <img
                                                                src={student.presentCompany}
                                                                alt="Company Logo"
                                                                style={{
                                                                    width: "18px",
                                                                    height: "18px",
                                                                    marginRight: "3px",

                                                                }}
                                                            />
                                                            {student.companyname}
                                                            {/* {student.offers[0]} */}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    );
};

export default SuccessStories; 