/** @format */
"use client"
import React, { useState, useEffect } from "react";
import AOS from "aos";
import style from "./CareerSlection.module.css";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { quizData } from "@/app/career-quiz/quizData";
import { useRouter } from "next/navigation";

const CareerQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const router=useRouter();
    const [userAnswers, setUserAnswers] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', mobile: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    useEffect(() => {
        if (isFormSubmitted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        handleFinishQuiz();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isFormSubmitted, timeLeft]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [quizData[currentQuestion].id]: option,
        }));
    };


    const handleFormSubmit = () => {
        setShowForm(true);
        setIsFormSubmitted();
    };

    const handleNextQuestion = () => {
        if (selectedOption) {
            setResponses((prevResponses) => [...prevResponses, selectedOption]);
            setSelectedOption(null);
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion((prev) => prev + 1);
            }
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                handleFinishQuiz();
            }
        }
    };

    useEffect(() => {
        if (selectedOption !== null) {
            setTimeout(() => {
                handleNextQuestion();
                setSelectedOption(null);
            }, 500);
        }
    }, [selectedOption]);

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setResponses((prevResponses) => prevResponses.slice(0, -1));
            setSelectedOption(null);
        }
    };

    const sheetURL = "https://script.google.com/macros/s/AKfycbwq2ZtrNBCozKx_A23Ab4k02yCsxt5v1Wx7OQsY2RRzECvEnieV98bYm5rmWch0ZjcIag/exec";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
            alert("Please enter a valid name (alphabets only).");
            return;
        }

        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);

        // Create FormData object
        const formDataEncoded = new FormData();
        formDataEncoded.append('name', formData.name);
        formDataEncoded.append('phone', formData.mobile);
        formDataEncoded.append('sheetName', 'careerQuiz');  // Specifying the sheet name

        fetch(sheetURL, {
            method: 'POST',
            body: formDataEncoded
        })
            .then((response) => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    setIsFormSubmitted(true);
                } else {
                    alert('Error submitting form. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            })
            .finally(() => setLoading(false));
    };



    // quiz logic

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const calculateResult = () => {
        if (responses.length === 0) {
            return {
                resultText1: "You haven't answered any questions. Please answer at least one question to receive a recommendation.",
                redirectPath: "/Career-Success-workshop",
                chartData: []
            };
        }
        const counts = { A: 0, B: 0, C: 0 };
        responses.forEach((response) => {
            if (response.startsWith("A")) counts.A++;
            else if (response.startsWith("B")) counts.B++;
            else if (response.startsWith("C")) counts.C++;
        });

        const maxCount = Math.max(counts.A, counts.B, counts.C);
        let resultText1 = "";
        let resultText2 = "";
        let resultText3 = "";
        let redirectPath = "";

        if (maxCount === counts.A) {
            resultText1 = "You Are Naturally Inclined Towards";
            resultText2 = "FULL STACK WEB DEVELOPMENT.";
            resultText3 = "Your Strengths Lie in Creativity, Coding for Functionality, and Building Great User Experiences.";
            redirectPath = "/java-full-stack-development";
        } else if (maxCount === counts.B) {
            resultText1 = "You Are Better Suited For";
            resultText2 = "Data Science/AI.";
            resultText3 = "Your Focus on Analysis, Math, and Deriving Insights Makes This Field Your Best Fit.";
            redirectPath = "/data-science-course";
        } else {
            resultText1 = "You May Enjoy A Combination of Both Fields! Roles Like ";
            resultText2 = "Data Engineers, AI-Powered Web Developers, or Tech Generalists";
            resultText3 = "Might Suit You Perfectly.";
            redirectPath = "/courses";
        }

        const chartData = [
            { name: 'Full Stack Web Development', value: counts.A },
            { name: 'Data Science/AI', value: counts.B },
            { name: 'Both FS Web Dev & Data Science/AI', value: counts.C }
        ];

        return { resultText1, resultText2, resultText3, redirectPath, chartData };
    };
    const result = calculateResult();
    const COLORS =
        ['#00C99F',
            '#FFBB28', '#FF8042'];

    const handleFinishQuiz = () => {
        setShowResult(true);
    };

    const handleDownload = () => {
        const quizSummary = quizData.map((quizItem, index) => {
            return `Q${index + 1}: ${quizItem.question}\nYour Answer: ${userAnswers[quizItem.id] || 'No answer selected'}\n`;
        }).join("\n");

        const blob = new Blob([quizSummary], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "quiz_results.txt";
        link.click();
    };

  return (
    <div className="container text-center mt-5 mb-5">

    {!isFormSubmitted ? (
        <>
            <div className={style.quizStartButton}>
                <h2 className="mb-3 fs-1 fs-1 fs-4 fw-bold">Find Your Dream Career in Just 10 Minutes!</h2>
                <p className={`lead ${style.startButtonpara1}`}>
                    Feeling stuck or unsure about your career path? Take our quick, expert-designed quiz to discover the perfect career for you.
                </p>
                <p className={`${style.startButtonpara2}`}>Whether you're a student, a professional, or looking to switch fields, we’ve got you covered!</p>

                <h5 className="mt-4 fs-6">Why Take This Quiz?</h5>
                <ul className={`list-styled fs-6`}>
                    <li className={`${style.startButtonList}`}><strong className='text-black'>Quick & Easy:</strong> Just 10 minutes to clarity.</li>
                    <li className={`${style.startButtonList}`}><strong className='text-black'>Personalized Insights:</strong> Tailored recommendations based on your skills and interests.</li>
                    <li className={`${style.startButtonList}`}><strong className='text-black'>Expert Guidance:</strong> Designed by career coaches to match you with in-demand careers.</li>
                    <li className={`${style.startButtonList}`}><strong className='text-black'>Actionable Results:</strong> Receive a roadmap to start your journey.</li>
                </ul>

                <p className="mt-4">
                    Take the guesswork out of your future. Start the Quiz today and find your perfect fit!
                </p>
                <div className="d-flex justify-content-center">
                    <button className={`${style.QuizStartBtn} fw-bold`} onClick={handleFormSubmit}>
                        Start Quiz
                    </button>
                </div>
            </div>

            <div>
                {showForm && (
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Career Quiz Registration</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowForm(false)}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                name="mobile"
                                                className="form-control"
                                                placeholder="Enter your mobile number"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={loading}

                                        >
                                            {loading ? (
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : (
                                                "Start Quiz"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    ) : !showResult ? (
        <div className={style.quiz_container}>
            <h1>Career Quiz</h1>
            <div className="mb-2">
                <span className="badge" style={{ background: '#553cdf' }}>{formatTime(timeLeft)}</span>
            </div>
            <div className={`${style.questionContainer}d-flex justify-content-center`}>
                <div className="sliderContainer">
                    <div
                        className={`${style.questionsWrapper} col-12`}
                        style={{
                            transform: `translateX(-${currentQuestion * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}>

                        {quizData.map((questionData, questionIndex) => (
                            <div className={style.questionSlide} key={questionIndex}>
                                <div className={`${style.questionContainer} questionContainer text-center m-3`}>
                                    <h2 className="fs-2 fs-6">
                                        Q: {questionData.question}
                                    </h2>
                                    <div className="mt-2 d-flex flex-column align-items-center">
                                        {questionData.options.map((option, index) => (
                                            <div
                                                className="col-12 col-md-12 my-2 d-flex justify-content-center"
                                                key={index}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOption === option}
                                                    onChange={() => handleOptionClick(option)}
                                                    className={`me-2 ${style.checkBox}`}
                                                    id={`checkbox-${option}`}
                                                    style={{
                                                        width: "35px",
                                                        accentColor: selectedOption === option ? "#553cdf" : "#e0e0e0",
                                                    }}
                                                />
                                                <button
                                                    className={`${style.options} btn w-100 fw-bold`}
                                                    onClick={() => {
                                                        handleOptionClick(option);
                                                    }}
                                                    style={{
                                                        backgroundColor: selectedOption === option ? "#553cdf" : "#e0e0e0",
                                                        color: selectedOption === option ? "white" : "#333",
                                                        borderColor: selectedOption === option ? "#553cdf" : "#ccc",
                                                    }}
                                                >
                                                    {option}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <button
                    className="btn"
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                    style={{ background: '#553cdf', color: 'white' }}
                >
                    Previous
                </button>
                <button
                    className="btn"
                    onClick={handleNextQuestion}
                    disabled={!selectedOption}
                    style={{ background: '#553cdf', color: 'white' }}
                >
                    {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
                </button>
            </div>

            <p className="mt-3">
                Questions Completed: <span className="badge bg-success">{currentQuestion + 1}/{quizData.length}</span>
            </p>
        </div>

    ) : (
        <>
            <div>
                {showResult && (
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 mb-4 mb-md-0">
                                    <p className='fs-1 fs-6 fw-bold'>Career Path Recommendation</p>
                                    <p className='fs-4 fs-6 '>Your suggested career path:</p>
                                    <h4 className="fs-4 fs-6 text-center">
                                        {calculateResult().resultText1}&nbsp;
                                        <span className="fs-4 fs-6 fw-bold" style={{ color: '#553cdf' }}>
                                            {calculateResult().resultText2}&nbsp;
                                        </span>
                                        <span className="fs-4 fs-6">{calculateResult().resultText3}</span>
                                    </h4>
                                </div>
                                <div className="col-6 col-md-6">
                                    {result.chartData && result.chartData.length > 0 ? (
                                        <ResponsiveContainer height={300}>
                                            <PieChart>
                                                <Pie
                                                    dataKey="value"
                                                    data={result.chartData}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={100}
                                                    innerRadius={50}
                                                    fill="#8884d8"
                                                    label={({ name, value }) => (value > 0 ? `${name}: ${value}` : '')}
                                                >
                                                    {result.chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    ) : (
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#f0f0f0' }}>
                                            <h5>No data available to display chart</h5>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>




                        <div className='d-flex justify-content-center'>
                            <button
                                className={`${style.exploreButton} btn mt-3 mx-2`}
                                onClick={() => router.push(calculateResult().redirectPath)}
                            >
                                Explore More
                            </button>
                            {responses.length > 0 && (
                                <button className={`${style.downloadButton} btn mt-3 mx-2`} onClick={handleDownload}>
                                    Download Quiz Results
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className={`${style.quiz_summary} mt-5`}>
                <h2 className={style.quiz_title}>Quiz Summary</h2>
                {quizData.map((quizItem, index) => (
                    <div key={index} className={`${style.quiz_item} mt-4`}>
                        <p className={style.quiz_question}>
                            <span className={style.question_number}>Q{index + 1}:</span> {quizItem.question}
                        </p>
                        <p className={style.quiz_answer}>
                            Your Answer: <strong>{userAnswers[quizItem.id]}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </>
    )}
</div>
  )
};

export default CareerQuiz;
