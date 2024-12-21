import React from 'react'

import GateWay from './VideoGif/gateWay';
import FourSteps from './fourSteps/fourSteps';
import UpComming from './upComming/upComming';
import TopCatogery from './topCatogery/topCatogery';
import FooterBtn from './footerButton/footerBtn';
import Footer from './footer/footer';
import CircleAnimation from './circleAmination/circleAnimation';
import Partner from './clients/partners';
import Home from './home/home';
import EnrollDetails from './enrollDetails/enrollDetails';
import HomeCourse from './HomeCardComp/HomeCourses';
import Comments from './comments/comments';
import NewsOnUs from './newsArticles/newsOnUs';


const AllHomeComp = () => {

  return (
    <div>
      <Home/>
      <FourSteps/>
      <Partner/>
      <GateWay/>
      <EnrollDetails/>
      <TopCatogery/>
      <HomeCourse/>
      <CircleAnimation/>
      <UpComming/>
      <NewsOnUs/>
      <Comments/>
      <FooterBtn/>
      <Footer/>
    </div>
  )
}

export default AllHomeComp;

