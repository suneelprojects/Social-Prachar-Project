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
import NewsFullStory from './newComponent/NewsFullStory';
import Home from './home/home';

const AllHomeComp = () => {
  return (
    <div>
      <Home/>
      <TrustedBy/>
      <GateWay/>
      <TopCatogery/>
      <CircleAnimation/>
      <UpComming/>
      <FourSteps/>
      <Teacher/>
      <CarouselDot/>
      <NewsFullStory/>
      <FooterBtn/>
      <Footer/>
    </div>
  )
}

export default AllHomeComp

