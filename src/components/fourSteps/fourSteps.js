import React, { useState, useEffect } from 'react';
import fourImageOne from '../../assets/flowtingBtn.png';
import circleSvg from '../../assets/circleSvg.png';
import wavesPic from '../../assets/waves.png';
import ParallaxEffect from "../extraComponents/ParallaxEffect";

import fourStepsStyle from '../fourSteps/fourStep.module.css'


const FourSteps = () => {
  const fourStepsArray = [
    {
      fourImg: fourImageOne,
      fourFirstText: 65972,
      fourSecondText: 'Completed Course'
    },
    {
      fourImg: fourImageOne,
      fourFirstText: 53710,
      fourSecondText: 'Completed Course'
    },
    {
      fourImg: fourImageOne,
      fourFirstText: 48982,
      fourSecondText: 'Completed Course'
    },
    {
      fourImg: fourImageOne,
      fourFirstText: 500,
      fourSecondText: 'Completed Course'
    }
  ];

  const images = [
    { src: wavesPic, className: 'objectOne', dataValue: '5', alt: 'Image 1' },
    { src: circleSvg, className: 'objectTwo', dataValue: '5', alt: 'Image 2' }
  ];

  const [currentNumbers, setCurrentNumbers] = useState(fourStepsArray.map(() => 0));

  useEffect(() => {
    const intervals = fourStepsArray.map((step, index) => {
      return setInterval(() => {
        setCurrentNumbers(prevNumbers => {
          const newNumbers = [...prevNumbers];
          if (newNumbers[index] < step.fourFirstText) {
            newNumbers[index] += 100;
            if (newNumbers[index] > step.fourFirstText) {
              newNumbers[index] = step.fourFirstText;
            }
          } else {
            clearInterval(intervals[index]);
          }
          return newNumbers;
        });
      }, 10); 
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [fourStepsArray]);

  return (
    <>
      <div className='fourStepsHover container-fluid' id=''>
        <ParallaxEffect images={images} />
        <div className={` row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 ${fourStepsStyle.fourStepContainer} py-5 `}>
          {fourStepsArray.map((fourStepEle, i) => (
            <div className={`col py-3 ${fourStepsStyle.fourStep}`} key={i}>
              <div>
                <img src={fourStepEle.fourImg} alt='Step' />
                <p className={`${fourStepsStyle.fourStepTextOne}`}>{currentNumbers[i]}</p>
                <p>{fourStepEle.fourSecondText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FourSteps;
