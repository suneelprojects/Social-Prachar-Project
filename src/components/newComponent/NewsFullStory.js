import React from "react";
import upcommingImg from "../../assets/storyImg.jpg";
import ArrowButton from "../extraComponents/arrowButton";
import BulbText from "../extraComponents/bulbText";

import newsCompStyle from '../newComponent/newsComp.module.css'

const NewsFullStory = () => {
  var upcommingEventsArray = [
    {
      upcommingImgOne: upcommingImg,
      smallTextOne: "July 24, 2023",
      smallTextTwo: "Jhon Sina",
      BigText: "Maximizing Your Learning Potential: A Guide to StudyHub",
    },
    {
      upcommingImgOne: upcommingImg,
      smallTextOne: "July 24, 2023",
      smallTextTwo: "Jhon Sina",
      BigText: "Announcing the winners the 2023 Education com Story",
    },
    {
      upcommingImgOne: upcommingImg,
      smallTextOne: "July 24, 2023",
      smallTextTwo: "Jhon Sina",
      BigText: "Azure AI Fundamentals: How to Pass the AI-900 Exam",
    },
  ];

  return (
    <>
      <div className={` containerFluidForPadding ${ newsCompStyle.newsContainer}`} >
        <div className="d-flex justify-content-center">
          <div className={`${newsCompStyle.newsCenterText}`} >
            <BulbText
              BulbText="News & Article"
              bulbTitle="Read Our Latest News"
              GreyText="Our mission is to provide you with valuable insights"
            />
          </div>
        </div>

       

        <div className={`${newsCompStyle.newsContainerImg } row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-xl-3 row-cols-sm-1 row-gap-5 `} >
          {upcommingEventsArray.map((teacher, i) => (
            <div className="col" key={i}>
              <div className={`${newsCompStyle.newsContainerImgBorder}`} >
                <div className={`${newsCompStyle.newsContainerImgStory}`} >
                  <div className={`${newsCompStyle.StoryIcons}`} >
                    <a href='#' className="">Story</a>
                    
                  </div>

                  <img src={teacher.upcommingImgOne} />

                  
                </div>

                

                <div className={`${newsCompStyle.newsFirstText}`} >
                  <p>
                    <i className="bi bi-calendar2-date"></i>
                    {teacher.smallTextOne}
                    </p>
                  <p>
                    <i className="bi bi-person"></i>
                    {teacher.smallTextTwo}
                    </p>
                </div>
                <div className={`${newsCompStyle.newsSecondText}`} >
                  <p>{teacher.BigText}</p>

                  <div className=" ArrowBtn">
                    <ArrowButton ArrowText="Read More" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsFullStory;
