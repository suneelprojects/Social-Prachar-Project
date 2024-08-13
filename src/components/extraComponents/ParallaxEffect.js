import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ParallaxEffect = ({ images }) => {
  const parallaxRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      parallaxRef.current.forEach((move) => {
        const movingValue = move.getAttribute('data-value');
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={image.className}
          data-value={image.dataValue}
          alt={image.alt}
          ref={(el) => (parallaxRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

ParallaxEffect.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      dataValue: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
ParallaxEffect.defaultProps = {
  images: [],
};


export default ParallaxEffect;
