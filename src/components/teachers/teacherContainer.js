import React from "react";
import teacherStyle from './teacher.module.css'

const TeacherContainer = (props) => {
  return (
    <div>
      <div className="d-flex">
        <img src={props.teachersImg} />

        {/* icons code start */}

        <div className={`${teacherStyle.teachersIcons}`}>
          <span className={`${teacherStyle.teachersIconsHover}`}>
            <i class="bi bi-share"></i>
          </span>
          <span className={`${teacherStyle.teachersIconsHoverDown}`}>
            <i class="bi bi-facebook"></i>
          </span>

          <span className={`${teacherStyle.teachersIconsHoverDown}`}>
            <i class="bi bi-instagram"></i>
          </span>

          <span className={`${teacherStyle.teachersIconsHoverDown}`}>
            <i class="bi bi-twitter-x"></i>
          </span>
          <span className={`${teacherStyle.teachersIconsHoverDown}`}>
            <i class="bi bi-youtube"></i>
          </span>
        </div>
      </div>

      {/* icons code start */}

      <p className={`${teacherStyle.teachersFirstText}`}>
        {props.teachersFirstText}
      </p>
      <p className={`${teacherStyle.teachersSecondText}`}>
        {props.teachersSecondText}
      </p>
    </div>
  );
};

export default TeacherContainer;
