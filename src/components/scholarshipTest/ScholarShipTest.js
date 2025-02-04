import React, { useRef, useState } from 'react';
import style from './ScholarShipTest.module.css';
import testImage from '../../assets/careerworkshop/SocialPrachars.png';
import Footer from '../footer/footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMedal, faPen, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { color } from 'framer-motion';
import SuccessStoriesForm from '../successStories/SuccessStoriesForm.js';


const faqData = [
    {
        question: "What is Social Prachar?",
        answer: "It is one of the largest online scholarship competitions in India. All Participants in Social Prachar receive a substantial scholarship for Social Prachar’s Beginner Full Stack Web Development & Data Analytics Course."
    },
    {
        question: "Who is eligible for the Test?",
        answer: "Anyone and everyone is eligible!! (Students already enrolled in Social Prachar’s Main Batch cannot avail the scholarship)."
    },
    {
        question: "What total prize money will be awarded after the Test?",
        answer: "We are contributing more than Rs 1Cr. worth of scholarships for participants of our test. The prizes will be given in the form of scholarships depending on the rank you score on the aptitude test."
    },
    {
        question: "Can I use my phone to take part in this Test?",
        answer: "No. You can't use your Mobile Phones/tablets to give the Test. Use only Laptop/Desktop."
    },
    {
        question: "How exactly do I take part in this challenge?",
        answer: "Steps to take part in the challenge: Register for the challenge, Visit the challenge page on the start date/time, Click on ‘Attempt Now’ to proceed."
    },
    {
        question: "What will be the syllabus of the aptitude test?",
        answer: "The syllabus typically includes topics like logical reasoning, quantitative aptitude, verbal ability, and analytical reasoning. Check the official website for detailed syllabus information."
    },
    {
        question: "Will the questions be MCQ based?",
        answer: "Yes, all the questions will be MCQ based."
    },
    {
        question: "When will the test results be announced?",
        answer: "The results will be announced within 48 hours on this page."
    },
    {
        question: "Shall I write multiple times?",
        answer: "No, Only ONE time per user is eligible. We will consider your First test marks in order to provide you the discount."
    }
];


const ScholarShipTest = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const formRef = useRef(null);
    const handleScrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className={`${style.container} d-flex flex-column align-items-center text-center`} style={{ margin: '0 auto', maxWidth: '1200px', padding: '20px' }}>
                <img src={testImage} alt="Scholarship Test" className="img-fluid mb-4" />
                <h1 className="mb-2 fw-bold text-secondary">Upcoming Online Test within 10 Days</h1>
                <h3 className="mb-4">Student Discounts Totaling 4,65,000 INR Awarded in the Past Month</h3>
                <button className="btn btn-primary mb-4 fw-bold" onClick={handleScrollToForm}>Register Now</button>

                <p className="mb-5 text-danger fw-bold">We are excited to announce the Scholarship Test 2024, an exclusive opportunity for recent graduates to secure incredible benefits while enrolling in our courses. This is your chance to prove your aptitude and gain access to high-quality education at a fraction of the cost—or even for free!</p>

                <h6 className="mb-4 text-center">Every week one Top Winner, whoever cracks 30/30 in less time will get a complete FREE Course (No Hidden Charges)</h6>

                <div className="mb-4">
                    <h4 className='mb-4 text-primary '>Invest in Your Education, Empower Your Future</h4>
                    <h5 className='mb-4 text-center text-secondary'> At Social Prachar, we believe that education is the key to a brighter future. We are proud to announce our exclusive Scholarship Test, designed to recognize and support talented students like you. This is your chance to shine, gain financial assistance, and embark on a rewarding educational journey.</h5>

                    <div className='mb-5'>
                        <p className={style.boxBars}>
                            <FontAwesomeIcon icon={faCheckSquare} />
                            MCQ Based Aptitude Questions
                        </p>
                        <p className={style.boxBars}>
                            <FontAwesomeIcon icon={faPen} />
                            No Negative Marking
                        </p>
                        <p className={style.boxBars}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            Everyone is Eligible
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className='fw-bold text-secondary'>Benefits</h4>
                    <h3 className='fw-bold text-primary'>Unlock Amazing Benefits</h3>


                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="card-title mb-3">Benefit 1</h3>
                                        <h5 class="card-subtitle text-primary mb-4">Win a Generous Scholarship</h5>
                                        <h6 class="card-subtitle text-muted mb-4">Get up to <strong>33% Discount</strong> on course fees. It’s a live online test, get the test results & assured Discount coupon code to your email within 12 hours after completion of the test.</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="card-title mb-3">Benefit 2</h3>
                                        <h5 class="card-subtitle text-primary mb-4">Recognition and Prestige</h5>
                                        <h6 class="card-subtitle text-muted mg-4">Our scholarship winners receive recognition for their achievements, boosting their confidence and setting them apart from their peers.</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="card-title mb-3">Benefit 3</h3>
                                        <h5 class="card-subtitle text-primary mb-4">Access to Exceptional Resources</h5>
                                        <h6 class="card-subtitle text-muted mb-4">Scholarship recipients gain access to our exclusive learning materials, experienced faculty, and a supportive educational community.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mt-5">
                        <h3 className="text-primary fw-bold">
                            Secure Your Future Today! <br /> Limited Seats Available.
                        </h3>
                        <button className="fw-bold btn btn-primary">Claim Your Discount</button>
                    </div>
                </div>


                <div className="mb-4">
                    <h4 className='text-muted fw-bold'>Social Prachar's Scholarship Test 2024</h4>
                    <h3 className='text-primary'>Everyone is a Winner: 30 Questions - 40 Minutes - 30 Marks</h3>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class={style.downBoxBars}>
                                <div class={style.discount_icon}><FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD43B", fontSize: '50px' }} /></div>
                                <div className={style.marks}>
                                    <h3 className='fw-bold text-start'>30 Marks</h3>
                                    <h3>Eligible for Fee Discount of 15,000 INR</h3>
                                </div>
                            </div>
                            <div class={style.downBoxBars}>
                                <div class={style.discount_icon}><FontAwesomeIcon icon={faTrophy} style={{ color: "#969696", fontSize: '50px' }} /></div>
                                <div className={style.marks}>
                                    <h3 className='fw-bold text-start'>27-29 Marks</h3>
                                    <h3>Eligible for Fee Discount of 10,000 INR</h3>
                                </div>
                            </div>
                            <div class={style.downBoxBars}>
                                <div class={style.discount_icon}><FontAwesomeIcon icon={faTrophy} style={{ color: "#f56200", fontSize: '50px' }} /></div>
                                <div className={style.marks}>
                                    <h3 className='fw-bold text-start'>21-26 Marks</h3>
                                    <h3>Eligible for Fee Discount of 8,000 INR</h3>
                                </div>
                            </div>
                            <div class={style.downBoxBars}>
                                <div class={style.discount_icon}><FontAwesomeIcon icon={faMedal} style={{ fontSize: '50px' }} /></div>
                                <div className={style.marks}>
                                    <h3 className='fw-bold text-start'>15-20 Marks</h3>
                                    <h3>Eligible for Fee Discount of 5,000 INR</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className="mb-4">
                    {/* <p className='text-center'>Have Any Doubts?</p> */}
                    <h1 className="text-center mb-4">Frequently Asked Questions</h1>
                </div>

                <div className="accordion" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div className="accordion-item shadow" key={index} style={{ marginBottom: "0.5rem" }}>
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

            <div className='p-3 text-center'>
                <SuccessStoriesForm />
            </div>
            <Footer />
        </>
    );
};

export default ScholarShipTest;
