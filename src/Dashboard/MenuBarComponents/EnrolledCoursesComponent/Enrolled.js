import React from 'react';
import emptystate from '../../../assets/emptystate.svg'
import style from './Enroll.module.css';
import OneCard from '../../../components/Cards/OneCard';

const EnrolledCourses = () => {
  const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

  if (enrolledCourses.length === 0) {
    return (
      <div>
        <img src={emptystate} alt='emptystate Image' className={style.emptyStateImg}></img>
        <p style={{ textAlign: 'center' }}>No Data Available in this Section</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <div className="row">
        {enrolledCourses.map((course, index) => (
          <OneCard key={index} card={course} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;