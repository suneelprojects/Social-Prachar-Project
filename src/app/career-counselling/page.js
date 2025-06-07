import React from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import WhatWillYouGet from './WhatWillYouGet/WhatWillYouGet';
import Bonuses from './Bonuses/Bonuses';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import Faq from './Faq/Faq';

const page = () => {
    return (
        <>
        <ProfileHeader/>
        <WhatWillYouGet/>
        <Bonuses/>
        <ProfileDetails/>
        <Faq/>
        </>
    );
};

export default page;