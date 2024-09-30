// import React from 'react';
// import emptystate from '../../../assets/emptystate.svg'
// import style from './Enroll.module.css';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { data } from '../../../components/Cards/CardData';
// const Enrolled = () => {
// //     const navigate = useNavigate();
// //   const { cardId } = useParams();
// //   const [course, setCourse] = React.useState(null);
  
  

// //   React.useEffect(() => {
// //     const courseData = data.find((course) => course.cardId === parseInt(cardId));
// //     setCourse(courseData);
// //   }, [cardId]);

// //   if (!course) {
// //     return <div>Loading...</div>;
// //   }
// const location = useLocation();
// const cardId = location.state.cardId;

// // Use the courseId variable to fetch the course data

// const course = data.find((course) => course.cardId === parseInt(cardId));
//   return (
//     <div >
//       <h2>Enrolled Course: {course.text}</h2>
//       <div>
//         <img src={course.bannerImage} alt={course.title} />
//         <div>
//           <h3>Course Title: {course.title}</h3>
//           <p>Course Description: {course.About}</p>
//           <p>Course Duration: {course.Duration}</p>
//           <p>Course Level: {course.level}</p>
//         </div>
//       </div>
//     </div>
// //     return (
// //         <div>
// //               <div>
// // <img src={emptystate} alt='emptystate Image' className={style.emptyStateImg}></img>
// // <p style={{textAlign:'center'}}>No Data Available in this Section</p>
// // </div>
// //         </div>
//     );
// };

// export default Enrolled;

import React from 'react';
import emptystate from '../../../assets/emptystate.svg'
import style from './Enroll.module.css';
// In your EnrolledCourses.js
import { useParams } from 'react-router-dom';
import { data } from '../../../components/Cards/CardData';

const EnrolledCourses = () => {
  const { cardId } = useParams();

  // Use the courseId variable to fetch the course data
  const course = data.find((course) => course.cardID === parseInt(cardId));

  if (!course) {
    return (
      <div>
        <img src={emptystate} alt='emptystate Image' className={style.emptyStateImg}></img>
        <p style={{textAlign:'center'}}>No Data Available in this Section</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Enrolled Course: {course.text}</h2>
      <div>
        <img src={course.bannerImage} alt={course.title} />
        <div>
          <h3>Course Title: {course.title}</h3>
          <p>Course Description: {course.About}</p>
          <p>Course Duration: {course.Duration}</p>
          <p>Course Level: {course.level}</p>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;