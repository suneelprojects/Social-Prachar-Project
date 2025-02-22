import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "Is Adobe Creative Cloud free for college students?", answer: "Adobe offers student discounts but is not entirely free." },
        { question: "How do I get a student discount on Adobe Creative Cloud?", answer: "You can apply for a student discount on Adobe's website by verifying your student status." },
        { question: "How does Adobe verify student status?", answer: "Adobe verifies student status using an official school email or document submission." },
        { question: "How long does an Adobe Creative Cloud student membership last?", answer: "The student membership lasts as long as you provide proof of student status, typically for one year at a time." }
    ];

    return (
        <>
        
          <div className="bg-light py-5">
                <div className="container my-4">
                    <h3 className="text-center">Question ...? We have Answers.</h3>
                    {faqs.map((item, index) => (
                        <div key={index} className="border-bottom">
                            <button
                                className="w-100 text-left d-flex justify-content-between align-items-center py-3 border-0 bg-transparent"
                                onClick={() => toggleAccordion(index)}
                                style={{ fontSize: "18px", fontWeight: "500" }}
                            >
                                {item.question}
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </button>
                            {openIndex === index && (
                                <div className="py-2 px-3 text-muted">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
          </div>
        </>
    );
};

export default Accordion;
