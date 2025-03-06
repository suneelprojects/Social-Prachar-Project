import React, { useState } from "react";
import aws from '../../assets/subscriptionpage/aws.png';
import DM from '../../assets/subscriptionpage/social-media-marketing.png';
import DA from '../../assets/subscriptionpage/monitor.png';
import devops from '../../assets/subscriptionpage/devops.png';
import LT from '../../assets/subscriptionpage/live-classes.png';
import java from '../../assets/subscriptionpage/java.png';
import mern from '../../assets/subscriptionpage/mern-stack-01.webp';
import RB from '../../assets/subscriptionpage/resume-prep.png';
import interview from '../../assets/subscriptionpage/interview.png';
import DS from '../../assets/subscriptionpage/science.png';
import mentor from '../../assets/subscriptionpage/mentorship.png';
import upskilling from '../../assets/subscriptionpage/upskilling.png';
import FL from '../../assets/subscriptionpage/event.png';
import OC from '../../assets/subscriptionpage/online-course.png';
import RegisterForm from './FormButton';
import style from './SecondPart.module.css';

const FourthPart = () => {
    const [activeButton, setActiveButton] = useState("Starter_Pack");
    const [clickedButton, setClickedButton] = useState(null);


    const categories = ["Starter_Pack", "Pro_Learning_Pack", "Career_Growth_Pack", "Ultimate_Job_Ready_Pack", "Custom_Learning_Pack"];


    const categoryContent = {
        "Starter_Pack": [
            { img: DM, title: "Digital Marketing", description: "Learn the fundamentals of SEO, PPC, and social media marketing." },
            { img: DA, title: "Data Analytics", description: "Master data visualization, SQL, and analytical techniques." },
            { img: aws, title: "AWS", description: "Get started with cloud computing and AWS core services." },
            { img: devops, title: "DevOps", description: "Understand CI/CD pipelines, automation, and infrastructure management." },
        ],
        "Pro_Learning_Pack": [
            { img: LT, title: "Live Training (Online or Classroom) + Recorded Sessions", description: "Gain hands-on experience with live instructor-led sessions and recorded materials." },
            { img: DM, title: "Digital Marketing", description: "Deep dive into advanced marketing strategies and automation tools." },
            { img: DA, title: "Data Analytics", description: "Develop strong data-driven decision-making skills with real-world datasets." },
            { img: aws, title: "AWS", description: "Learn to deploy and manage applications on AWS effectively." },
            { img: devops, title: "DevOps", description: "Implement DevOps best practices for continuous integration and deployment." },
        ],
        "Career_Growth_Pack": [
            { img: LT, title: "Live Training (Online or Classroom) + Internship + Hybrid Learning", description: "Combine learning with real-world internship experience for job readiness." },
            { img: DA, title: "Data Analytics + Data Science", description: "Master data science concepts, machine learning, and AI applications." },
            { img: java, title: "Full Stack Java + React", description: "Build dynamic web applications using Java, Spring Boot, and React." },
            { img: mern, title: "MERN Stack", description: "Develop end-to-end web applications using MongoDB, Express, React, and Node.js." },
            { img: RB, title: "Resume Building", description: "Get professional assistance to craft an impactful resume." },
            { img: interview, title: "Mock Interviews & Career Support", description: "Prepare for job interviews with expert feedback and career guidance." },
        ],
        "Ultimate_Job_Ready_Pack": [
            { img: LT, title: "Advanced Live Training (Online or Classroom) + Internship", description: "Gain in-depth knowledge and hands-on experience through internships." },
            { img: RB, title: "Resume Building, Mock Interviews & Career Support", description: "Enhance your job search with tailored resume, interview prep, and career mentoring." },
            { img: DA, title: "Data Analytics", description: "Develop expertise in data processing, visualization, and business intelligence." },
            { img: DS, title: "Data Science + AI", description: "Explore AI-driven technologies, machine learning models, and deep learning." },
            { img: java, title: "Full Stack Java + React", description: "Build scalable web applications with Java, Spring Boot, and React." },
            { img: mern, title: "MERN Stack", description: "Master full-stack development using the MERN technology stack." },
        ],
        "Custom_Learning_Pack": [
            { img: LT, title: "Customized Learning Paths Based on Your Career Goals", description: "Tailor your learning experience to match your professional aspirations." },
            { img: OC, title: "Select Courses & Modules as Per Your Requirements", description: "Choose specific courses and topics to focus on your desired skill set." },
            { img: FL, title: "Flexible Learning Schedule – Online, Live Training, or Hybrid", description: "Study at your own pace with flexible online and live training options." },
            { img: mentor, title: "Mentorship, Career Guidance & Skill-Building Support", description: "Receive expert mentorship and career advice for continuous growth." },
            { img: upskilling, title: "Specific Upskilling in Their Domain", description: "Enhance your expertise with targeted skill-building in your field." },
        ]
    };


    const handleClick = (item) => {
        setClickedButton(item);
        setTimeout(() => setClickedButton(null), 200);
        setActiveButton(item);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg m-3">
                <div className="container">
                    <ul className="navbar-nav mx-auto d-flex flex-row flex-wrap p-0">
                        {categories.map((item) => (
                            <li className="nav-item" key={item}>
                                <button
                                    className={`btn position-relative fw-semibold ${activeButton === item ? style.active_btn : ""}`}
                                    onClick={() => handleClick(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="container bg-light border">
                <div className="row p-5">
                    {(categoryContent[activeButton] || []).map((content, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex">
                            <img
                                src={content.img || ""}
                                alt={content.title}
                                className="me-3"
                                style={{ width: "50px", height: "50px", borderRadius: "10px" }}
                            />
                            <div>
                                <p className="fw-bold mb-0" style={{color:'#ff5003'}}>{content.title}</p>
                                <p className="col-md-12">{content.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <RegisterForm label={"See What's Included"} className="btn btn-primary rounded-5 m-3" />
                </div>
            </div>
        </div>
    );
};

export default FourthPart;
