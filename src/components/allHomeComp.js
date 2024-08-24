import React from 'react'

import TrustedBy from './trustedBy/trustedBy';
import GateWay from './VideoGif/gateWay';
import FourSteps from './fourSteps/fourSteps';
import UpComming from './upComming/upComming';
import Teacher from './teachers/teacher';
import CarouselDot from './studentFeedBack/carouselDot';
import TopCatogery from './topCatogery/topCatogery';
import FooterBtn from './footerButton/footerBtn';
import Footer from './footer/footer';
import CircleAnimation from './circleAmination/circleAnimation';
import Partner from './clients/partners';
import NewsFullStory from './newComponent/NewsFullStory';
import Home from './home/home';

import Cards from './Cards/Cards'

import Course from './Courses_category/Course'
import HomeCards from './HomeCardComp/HomeCard';
import HomeCourse from './HomeCardComp/HomeCourses';
import SearchBar from './searchComp/searchBar';

const AllHomeComp = () => {

  return (
    <div>
      <Home/>
      <FourSteps/>
      <TrustedBy/>
      <GateWay/>
      <TopCatogery/>
      
      <HomeCourse/>
      <CircleAnimation/>
      <UpComming/>
      <Partner/>
      {/* <Teacher/> */}
      {/* <CarouselDot/> */}
      {/* <NewsFullStory/> */}
      <FooterBtn/>
      <Footer/>
    </div>
  )
}

export default AllHomeComp

