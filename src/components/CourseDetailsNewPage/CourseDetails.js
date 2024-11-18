import React from 'react';
import Headerpart from '../Pageslices/Header/Headerpart';
import Masterclass from '../Pageslices/Masterclass/Masterclass';
import Testmonials from '../Pageslices/Testmonials/Testmonials';
import Whatwillyoulearn from '../Pageslices/Whatwillyoulearn/Whatwillyoulearn';
import Mentorpage from '../Pageslices/Mentorpage/Mentorpage';
import Certificate from '../Pageslices/Certificatepart/Certificate';
import Banner from '../Pageslices/Banner/Banner';
import CourseAccordion from '../Pageslices/AccordianQuestions/Accordian';

const CourseDetails = () => {
    return (
        <div>
            <Headerpart />
            <Masterclass />
            <Testmonials />
            <Whatwillyoulearn />
            <Mentorpage />
            <Certificate />
            <CourseAccordion />
            <Banner />
        </div>
    );
};

export default CourseDetails;
