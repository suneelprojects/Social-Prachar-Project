import React, { useState, useEffect } from 'react';

import footerBtnStyle from './footerBtn.module.css'

const FooterBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('forFooterBtn');
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const currentScroll = window.scrollY + window.innerHeight;
        setShowButton(currentScroll > homeBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth' 
    });
  };

  return (
    <div
     className={`${footerBtnStyle.footerBtnContainer} ` }  onClick={handleClick}
    >
      {showButton && (
        <div 
         style={{ position: 'fixed', bottom: '40px', right: '60px' ,zIndex:'1000'}}>
        <div className={` ${footerBtnStyle.sticky}`} ><i className="bi bi-chevron-double-up"></i></div>

        </div>
      )}
    </div>
  );
};

export default FooterBtn;
