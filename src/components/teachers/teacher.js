import React from "react";
import BulbText from "../extraComponents/bulbText";
import ArrowButton from "../extraComponents/arrowButton";
import teachersImgOne from "../../assets/teacherImg.jpg";

import teacherStyle from './teacher.module.css'
import TeacherContainer from "./teacherContainer";

const Teacher = () => {
  var teachersArray = [
    {
      teachersImg: teachersImgOne,
      teachersFirstText: "Dana White",
      teachersSecondText: "UI/UX Exparet",
    },
    {
      teachersImg: teachersImgOne,
      teachersFirstText: "Elizabeth Olsen",
      teachersSecondText: "Assistant Teacher",
    },
    {
      teachersImg: teachersImgOne,
      teachersFirstText: "Jons Emon",
      teachersSecondText: "Assistant Teacher",
    },
    {
      teachersImg: teachersImgOne,
      teachersFirstText: "Mahmud Sujons",
      teachersSecondText: "Instructor",
    },
  ];

  return (
    <div className={`containerFluidForPadding ${teacherStyle.teachersContainer} `} >
      <div className={`${teacherStyle.teachersBulbAndBtn}`} >
        <BulbText
          BulbText="Instructor"
          bulbTitle="Our Professional Instructor"
          GreyText="You ll find something to spark your curiosity and enhance"
        />
        <ArrowButton ArrowText="View All Teacher" />
      </div>

      <div className={`${teacherStyle.teachersImageAndIcon} row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-xl-4 row-cols-sm-1 row-gap-5`} >
        {teachersArray.map((teacher, i) => (
          <div className="col" key={i}>

           <TeacherContainer teachersFirstText={teacher.teachersFirstText}
            teachersSecondText={teacher.teachersSecondText} teachersImg={teacher.teachersImg}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
