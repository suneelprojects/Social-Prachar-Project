import React from 'react';
import { RoadMapData } from './RoadMapData';
import style from './CareerRoadMap.module.css';
import Footer from '../footer/footer';

const CareerRoadMap = () => {

    const handleDownload = (fileName) => {
        if (fileName !== "Download RoadMap") {
            const link = document.createElement("a");
            link.href = `/roadmaps/${fileName}`;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("Download not available for this course.");
        }
    };
    return (
        <>

            <div className="my-4">
                <h1 className="fw-bold text-center mb-4 text-secondary">Career RoadMap</h1>
                <div className="row text-center">
                    {RoadMapData.map((course, index) => (
                        <div className="col-md-6 mb-4 d-flex" key={index}>
                            <div className={`${style.courseCard} p-3`}>
                                <h4>
                                    <span className={style.checkIcon}></span>
                                    <span className='text-secondary fw-bold'> Course Name: <strong>{course.courseName}</strong></span>
                                </h4>
                                <p>
                                    <span className={style.checkIcon}></span>
                                    No. of Hours to Learn: {course.noOfHoursToLearn}
                                </p>
                                <p>
                                    <span className={style.checkIcon}></span>
                                    Projects Included: {course.projectsIncluded}
                                </p>
                                <p>
                                    <span className={style.checkIcon}></span>
                                    Students Trained Till Now: {course.studentsTrainedTillNow}
                                </p>
                                <button className={`fw-bold btn mt-3 ${style.downloadRoadMap}`}
                                    onClick={() => handleDownload(course.downloadRoadMap)}
                                >Download RoadMap</button>
                            </div>
                            {index % 2 === 0 && index < RoadMapData.length - 1 && (
                                <div className={`${style.verticalLine} mx-2`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CareerRoadMap;
