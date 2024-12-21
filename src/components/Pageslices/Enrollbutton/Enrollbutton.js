// EnrollButton.js
import React, { useState } from 'react';
import Buttonstyle from './Enrollbutton.module.css';
import SignInForm from './PopupSignInForm';

const EnrollButton = ({ label, courseID }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={Buttonstyle.Enrollbutton}>
      <button className={Buttonstyle.shinebtn} onClick={togglePopup}>
        {label}
      </button>

      {isPopupVisible && <SignInForm onClose={togglePopup} courseID={courseID} />}
    </div>
  );
};
export default EnrollButton;
