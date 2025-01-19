import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import style from './CareerSlection.module.css';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import Aos from 'aos';

const quizData = [
    {
        question: "1. What excites you the most?",
        options: [
            "A) Building and designing functional websites or apps.",
            "B) Analyzing data and creating predictive models.",
            "C) Learning and exploring both areas before deciding."
        ],
    },
    {
        question: "2. Which problem would you prefer to solve?",
        options: [
            "A) Optimizing a website to load faster.",
            "B) Using data to forecast trends in customer behavior.",
            "C) Exploring both to see which feels more engaging."
        ],
    },
    {
        question: "3. What kind of projects sound more interesting?",
        options: [
            "A) Developing a responsive and visually appealing mobile app.",
            "B) Designing an AI model to recognize images or detect fraud.",
            "C) Combining both, like using AI to enhance a web application."
        ],
    },
    {
        question: "4. Which of these activities sounds more appealing?",
        options: [
            "A) Writing frontend and backend code to create seamless web experiences.",
            "B) Cleaning and analyzing datasets to draw actionable insights.",
            "C) Exploring new technologies from both fields, such as AI-powered websites."
        ],
    },
    {
        question: "5. What motivates you more in learning?",
        options: [
            "A) Tutorials and projects on web development tools like React, Node.js, or Angular.",
            "B) Exploring AI frameworks like TensorFlow, Scikit-learn, or PyTorch.",
            "C) Experimenting with both fields before narrowing down."
        ],
    },
    {
        question: "6. How comfortable are you with mathematics?",
        options: [
            "A) I prefer logical thinking and coding rather than heavy math.",
            "B) I love math, statistics, and applying them to solve problems.",
            "C) I’m okay with math but prefer it in moderate doses."
        ],
    },
    {
        question: "7. Which kind of programming languages interest you more?",
        options: [
            "A) HTML, CSS, JavaScript, and backend languages like PHP or Java.",
            "B) Python, R, or SQL for data analysis and AI.",
            "C) A mix of both, like using Python for backend development."
        ],
    },
    {
        question: "8. What kind of problem-solving do you prefer?",
        options: [
            "A) Improving user interfaces and creating scalable web architectures.",
            "B) Solving real-world problems through data analysis and AI predictions.",
            "C) Tackling interdisciplinary problems using a mix of web development and AI."
        ],
    },
    {
        question: "9. Which skill do you feel more naturally drawn to?",
        options: [
            "A) Visualizing and building intuitive user interfaces.",
            "B) Understanding patterns and trends in large datasets.",
            "C) Learning a bit of both to figure out where you excel."
        ],
    },
    {
        question: "10. Which type of challenge do you enjoy most?",
        options: [
            "A) Debugging and optimizing website performance.",
            "B) Cleaning messy datasets and building predictive algorithms.",
            "C) Exploring challenges that mix data-driven insights with functional web solutions."
        ],
    },
    {
        question: "11. What kind of projects do you see yourself working on in the future?",
        options: [
            "A) Creating beautiful and functional web applications.",
            "B) Solving big data problems and building AI models.",
            "C) Combining web development with AI-powered features."
        ],
    },
    {
        question: "12. Which work environment appeals to you more?",
        options: [
            "A) A fast-paced startup focused on delivering innovative apps.",
            "B) A research-driven team working with complex data models.",
            "C) A hybrid role that lets you explore aspects of both fields."
        ],
    },
    {
        question: "13. What motivates you in your career?",
        options: [
            "A) Seeing users interact with something you’ve built online.",
            "B) Creating intelligent systems that make accurate predictions.",
            "C) Learning and applying versatile skills from multiple domains."
        ],
    },
    {
        question: "14. How do you envision your ideal role?",
        options: [
            "A) As a lead developer managing web projects from start to finish.",
            "B) As a data scientist designing AI models for industry challenges.",
            "C) As a hybrid expert blending data-driven insights into development."
        ],
    },
    {
        question: "15. Where do you see yourself in 5 years?",
        options: [
            "A) Building a portfolio of innovative websites and apps.",
            "B) Leading AI/ML initiatives at a cutting-edge company.",
            "C) Integrating AI with web development to create smarter applications."
        ],
    },
    {
        question: "16. How do you approach learning new technologies?",
        options: [
            "A) I focus on practical tools like frameworks for web development.",
            "B) I dive into data-centric tools and AI techniques.",
            "C) I try out tools from both fields to decide my preference."
        ],
    },
    {
        question: "17. What kind of pace do you enjoy in your career?",
        options: [
            "A) Fast-paced projects with visible results.",
            "B) In-depth research and data exploration.",
            "C) A balance of short-term projects and long-term innovation."
        ],
    },
    {
        question: "18. Do you prefer creativity or analysis in your work?",
        options: [
            "A) Creativity—designing visually appealing and functional solutions.",
            "B) Analysis—deriving insights and making data-driven decisions.",
            "C) A mix of both—creative analysis or analytical design."
        ],
    },
    {
        question: "19. Which type of community resonates with you more?",
        options: [
            "A) Developers discussing frameworks like React, Angular, and Node.js.",
            "B) Data scientists exploring algorithms, AI models, and datasets.",
            "C) Both communities appeal to me equally."
        ],
    },
    {
        question: "20. Which toolset excites you the most?",
        options: [
            "A) Git, REST APIs, Bootstrap, and web development tools.",
            "B) Pandas, TensorFlow, Scikit-learn, and data analysis libraries.",
            "C) Tools that integrate both fields, like Python for backend or AI-powered websites."
        ],
    }
];



const CareerSelection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(600);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();
    const [userAnswers, setUserAnswers] = useState({});

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
        setIsFormSubmitted(true);
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
            { name: 'Combination of Both', value: counts.C }
        ];

        return { resultText1, resultText2, resultText3, redirectPath, chartData };
    };
    const result = calculateResult();
    const COLORS =
        ['#0088FE', '#00C49F',
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
        <div className="container text-center mt-5">
            {!isFormSubmitted ? (
                <div className={style.quizStartButton}>
                    <button className={`${style.QuizStartBtn} fw-bold`} onClick={handleFormSubmit}>
                        Start Quiz
                    </button>
                </div>
            ) : !showResult ? (
                <div className={style.quiz_container}>
                    {/* <img src={start_QuizBG} alt="" className={style.background_image} /> */}
                    <h1>Career Quiz</h1>
                    <div className="mb-3">
                        <span className="badge" style={{ background: '#553cdf' }}>{formatTime(timeLeft)}</span>
                    </div>
                    <div className={`${style.questionContainer }d-flex justify-content-center`}>
                        <div className="sliderContainer">
                            <div
                                className={`${style.questionsWrapper} col-12 m-3  `}
                                style={{
                                    transform: `translateX(-${currentQuestion * 100}%)`,
                                    transition: "transform 0.5s ease-in-out",
                                }}
                            >
                                {quizData.map((questionData, questionIndex) => (
                                    <div className={style.questionSlide} key={questionIndex}>
                                        <div className="questionContainer text-center">
                                            <h2 className="fs-2 fs-6">
                                                Q: {questionData.question}
                                            </h2>
                                            <div className="mt-3 d-flex flex-column align-items-center">
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
                                                            onClick={() => handleOptionClick(option)}
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
                                        <div className="col-12 col-md-8 mb-4 mb-md-0">
                                            <p className='fs-1 fs-6 fw-bold'>Career Path Recommendation</p>
                                            <p className='fs-4 fs-6'>Your suggested career path:</p>
                                            <h4 className="fs-4 fs-6 text-center">
                                                {calculateResult().resultText1}&nbsp;
                                                <span className="fs-2 fs-5 fw-bold" style={{ color: '#553cdf' }}>
                                                    {calculateResult().resultText2}&nbsp;
                                                </span>
                                                <span className="fs-4 fs-6">{calculateResult().resultText3}</span>
                                            </h4>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            {/* Conditionally render pie chart or a placeholder */}
                                            {result.chartData && result.chartData.length > 0 ? (
                                                <ResponsiveContainer height={300}>
                                                    <PieChart>
                                                        <Pie
                                                            dataKey="value"
                                                            data={result.chartData}
                                                            cx="50%"
                                                            cy="50%"
                                                            outerRadius={150}
                                                            innerRadius={80}
                                                            fill="#8884d8"

                                                            label
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
                                        onClick={() => navigate(calculateResult().redirectPath)}
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
    );
};

export default CareerSelection;