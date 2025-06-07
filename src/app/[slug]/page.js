import React from 'react';
import { data } from '@/app/courses/mainCoursePage/cardsSection/CardData';
import Header from './courseDetailsPage/Header/Header';
import Testimonials from './courseDetailsPage/Testimonials/Testimonials';
import NextcohortStarts from './courseDetailsPage/NextcohortStarts/NextcohortStarts';
import WhatwillYouLearn from './courseDetailsPage/WhatwillYouLearn/WhatwillYouLearn';
import Unlockbonuses from './courseDetailsPage/Unlockbonuses/Unlockbonuses';
import Coursepath from './courseDetailsPage/Coursepath/Coursepath';
import CourseFaqs from './courseDetailsPage/courseFAQs/CourseFaqs';
import Masterclass from './courseDetailsPage/Masterclass/Masterclass';
import ConnectUs from '@/components/ConnectUs/ConnectUs';
import Banner from './courseDetailsPage/Banner/Banner';
import { notFound } from 'next/navigation';

const page = ({ params }) => {
    const { slug } = params;
    const course = data.find(c => c.slug === slug);
    if (!course) return notFound();

    return (
        <div className='px-2'>
            <Header/>
            <Testimonials/>
            <NextcohortStarts/>
            <WhatwillYouLearn/>
            <Unlockbonuses/>
            <Coursepath/>
            <CourseFaqs/>
            <Masterclass/>
            <ConnectUs/>
            <Banner/>
        </div>
    );
};

export default page;