import React from 'react';

import circleAnimationStyle from '../circleAmination/circleAnimation.module.css'



const Circle = ({ text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', diameter = 140 }) => {
    const radius = diameter / 2;
    const rotationAngle = 360 / text.length;

    return (
        <div className={`${circleAnimationStyle.circle}`} style={{ width: diameter, height: diameter }}>
            <div className={`${circleAnimationStyle.text}`} >
                {text.split('').map((char, i) => (
                    <span 
                        key={i} 
                        style={{
                            transform: `rotate(${i * rotationAngle}deg)`,
                            position: 'absolute',
                            left: '50%',
                            transformOrigin: `0 ${radius}px`,
                            display: 'block',
                            fontSize: '1rem' // Adjust if needed
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Circle
;
