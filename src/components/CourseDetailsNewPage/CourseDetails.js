import React, { Suspense } from 'react';
import Loading from '../../components/extraComponents/loading';

const Headerpart = React.lazy(() => import('../Pageslices/Header/Headerpart'));
const Masterclass = React.lazy(() => import('../Pageslices/Masterclass/Masterclass'));
const Testmonials = React.lazy(() => import('../Pageslices/Testmonials/Testmonials'));
const Whatwillyoulearn = React.lazy(() => import('../Pageslices/Whatwillyoulearn/Whatwillyoulearn'));
const Mentorpage = React.lazy(() => import('../Pageslices/Mentorpage/Mentorpage'));
const Certificate = React.lazy(() => import('../Pageslices/Certificatepart/Certificate'));
const Banner = React.lazy(() => import('../Pageslices/Banner/Banner'));
const CourseAccordion = React.lazy(() => import('../Pageslices/AccordianQuestions/Accordian'));

const CourseDetails = () => {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Headerpart />
                <Masterclass />
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
