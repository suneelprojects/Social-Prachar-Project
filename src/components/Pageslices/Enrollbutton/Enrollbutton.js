// EnrollButton.js
import React from 'react';
import Buttonstyle from './Enrollbutton.module.css';

const EnrollButton = ({ label }) => {
  return (
    <div className={Buttonstyle.Enrollbutton}>
      <button className={Buttonstyle.shinebtn}>{label}</button>
    </div>
  );
};

export default EnrollButton;
