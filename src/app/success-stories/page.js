import React from 'react';
import SuccessStoriesReader from './SuccessStories/SuccessStoriesReader';
import OurAchievements from './ourAchievements/OurAchievements';
import Linkedin from './linkedinReviews/linkedin';
import Google from './googleReviews/GoogleReviews';
import JustDialReviews from './justdialReviews/JustDialReviews';
import OurAluminiReviews from './ourAluminiReviews/OurAluminiReviews';

const page = () => {
    return (
        <div>
            <SuccessStoriesReader/>
            <OurAchievements/>
            <Linkedin/>
            <Google/>
            <JustDialReviews/>
            <OurAluminiReviews/>
        </div>
    );
};

export default page;