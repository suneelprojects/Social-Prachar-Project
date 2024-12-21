import React, { useState } from 'react';
import style from './Faq.module.css';


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the same index or close it
    };


    const faqData = [
        {
            question: "What is the main objective of this workshop?",
            answer: "The workshop aims to help freshers and job seekers identify the right career path, build job-ready skills, and create a clear plan for securing their dream job."
        },
        {
            question: "Who is this workshop designed for?",
            answer: "It is ideal for fresh graduates, students nearing graduation, and anyone struggling to find direction in their job search or early career."
        },
        {
            question: "What will I learn during the workshop?",
            answer: "You will learn how to:\n- Identify in-demand tech career options.\n- Build a strong resume and LinkedIn profile.\n- Network effectively for job opportunities.\n- Upskill with relevant certifications and projects."
        },
        {
            question: "Is this workshop only for those pursuing tech careers?",
            answer: "While the focus is on tech careers like Full Stack Development, Data Science, AI, and Cloud Computing, the strategies and tips are applicable to a wide range of industries."
        },
        {
            question: "Will there be actionable takeaways from the session?",
            answer: "Yes, you will receive a step-by-step guide to plan your career, a checklist for job applications, and resources for further skill development."
        },
        {
            question: "How will this workshop help me if I’m already applying for jobs?",
            answer: "The workshop will refine your job search strategy, improve your application materials, and teach you how to align your skills with industry demands for better results."
        },
        {
            question: "Do I need prior knowledge or experience to attend?",
            answer: "No prior experience is needed. The workshop is designed for beginners and freshers who are just starting their career journey."
        },
        {
            question: "Will there be opportunities to ask questions during the session?",
            answer: "Yes, there will be a Q&A segment at the end of the workshop where you can ask career-specific questions."
        },
        {
            question: "Is there any fee to attend the workshop?",
            answer: "No, the workshop is completely free of charge."
        },
        {
            question: "How can I register for the workshop?",
            answer: "You can register through the provided link or contact the organizer directly for assistance with registration."
        }
    ];


    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Frequently Asked Questions</h1>
            <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                    <div className="accordion-item shadow" key={index} style={{ marginBottom: "1.2 rem" }}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`fw-bold accordion-button faq-button ${openIndex !== index ? "collapsed" : ""}`}
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <h6>{faq.answer}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Faq;
