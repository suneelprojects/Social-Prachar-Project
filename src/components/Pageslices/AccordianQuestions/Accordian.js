import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordian.module.css';
import { data } from '../../Cards/CardData'; // Import the data
import { useParams } from 'react-router-dom';

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
    const { cardId } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const cardDetails = data.find(card => card.courseID === parseInt(cardId));
        setCard(cardDetails);
    }, [cardId]);

    // Extract the accordion content for the specific course
    const accordionItems = card ? card.accordionContent : [];

    return <Accordion items={accordionItems} />;
};

export default CourseAccordion;
