import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordian.module.css';
import { data } from '../../Cards/CardData'; // Import the data
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }, [isOpen]);

    return (
        <div>
            <div className={styles.accordionItem}>
                <h2 className={styles.accordionHeader}>
                    <button
                        className={`${styles.accordionButton} ${isOpen ? '' : styles.collapsed}`}
                        onClick={onClick}
                        aria-expanded={isOpen}
                    >
                        {title}
                        <span className={styles.symbol}>{isOpen ? '-' : '+'}</span>
                    </button>
                </h2>
                <div
                    ref={contentRef}
                    style={{ maxHeight }}
                    className={styles.accordionContent}
                >
                    <div className={styles.accordionBody}>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))
            ) : (
                <p>No items to display</p>
            )}
        </div>
    );
};

const CourseAccordion = () => {
    
    const { slug } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    // Extract the accordion content for the specific course
    const accordionItems = card ? card.accordionContent : [];

    return (
        <div>
            <Accordion items={accordionItems} />

            {/* Contact Boxes below Accordion */}
            <div className={styles.contact}>
                <p
                    className="text-center mb-4 fw-bold"
                    style={{ fontSize: "32px", position: 'relative', top: '18px' }}
                >
                    Let's <span style={{ color: "#ff5003" }}>Connect</span>
                </p>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        {/* Call Box */}
                        <div className="col-md-6 col-lg-5 mb-3 d-flex justify-content-center">
                            <div
                                className="box p-4 text-center border border-primary rounded shadow-sm w-100"
                                style={{ maxWidth: "300px" }}
                            >
                                <FontAwesomeIcon icon={faPhone} className="mb-3" style={{ fontSize: "50px", color: "#000" }} />
                                <h4 className="mb-1 text-primary fw-semibold">Call Us</h4>
                                <p className="fw-bold mb-3" style={{ fontSize: "20px" }}>+91-8019-479-419</p>
                                <a href="tel:+918019479419" className="btn btn-primary w-100">
                                    <b>Call Now</b>
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp Chat Box */}
                        <div className="col-md-6 col-lg-5 mb-3 d-flex justify-content-center">
                            <div
                                className="box p-4 text-center border border-success rounded shadow-sm w-100"
                                style={{ maxWidth: "300px" }}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="mb-3" style={{ fontSize: "50px", color: "#25D366" }} />
                                <h4 className="mb-1 text-primary fw-semibold">WhatsApp Us at</h4>
                                <p className="fw-bold mb-3" style={{ fontSize: "20px" }}>+91-8019-479-419</p>
                                <a
                                    href="https://wa.me/918019479419?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success w-100"
                                >
                                    Chat with us on WhatsApp
                                </a>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseAccordion;
