import React, { Suspense } from 'react';
// import Headerpart from '../Pageslices/Header/Headerpart';
// import Masterclass from '../Pageslices/Masterclass/Masterclass';
// import Testmonials from '../Pageslices/Testmonials/Testmonials';
// import Whatwillyoulearn from '../Pageslices/Whatwillyoulearn/Whatwillyoulearn';
// import Mentorpage from '../Pageslices/Mentorpage/Mentorpage';
// import Certificate from '../Pageslices/Certificatepart/Certificate';
// import Banner from '../Pageslices/Banner/Banner';
// import CourseAccordion from '../Pageslices/AccordianQuestions/Accordian';
import Loading from '../../components/extraComponents/loading';

const Headerpart = React.lazy(() => import('../Pageslices/Header/Headerpart'));
const Masterclass = React.lazy(() => import('../Pageslices/Masterclass/Masterclass'));
const Testmonials = React.lazy(() => import('../Pageslices/Testmonials/Testmonials'));
const Whatwillyoulearn = React.lazy(() => import('../Pageslices/Whatwillyoulearn/Whatwillyoulearn'));
const Mentorpage = React.lazy(() => import('../Pageslices/Mentorpage/Mentorpage'));
const Certificate = React.lazy(() => import('../Pageslices/Certificatepart/Certificate'));
const Banner = React.lazy(() => import('../Pageslices/Banner/Banner'));
const CourseAccordion = React.lazy(() => import('../Pageslices/AccordianQuestions/Accordian'));
// import Loading from './../extraComponents/loading';

const CourseDetails = () => {
    return (
        <div>
            <Suspense fallback={<div>{Loading}</div>}>
            <Headerpart />
            <Masterclass />
            <Testmonials />
            <Whatwillyoulearn />
            <Mentorpage />
            <Certificate />
            <CourseAccordion />
            <Banner />
            </Suspense>
        </div>
    );
};

export default CourseDetails;
