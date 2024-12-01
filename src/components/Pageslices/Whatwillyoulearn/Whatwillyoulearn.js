import React, { useEffect, useState } from 'react';
import styles from './Whatwillyoulearn.module.css';
import { data } from '../../Cards/CardData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import backgroundImage from '../../../assets/AssetsOfDetailsPage/background.png';
import professional from '../../../assets/AssetsOfDetailsPage/professional.svg';
import student from '../../../assets/AssetsOfDetailsPage/educationsymbol.svg';
import business from '../../../assets/AssetsOfDetailsPage/businesssymbol.svg';
import { useParams } from 'react-router-dom';

const colors = ["#f0f8ff", "#f5f5dc", "#ffe4e1", "#e6e6fa", "#ffefd5", "#d3ffce", "#e6e6fa", "#ffefd5", "#d3ffce"];

const Whatwillyoulearn = () => {
    const { slug } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const cardDetails = data.find(item => item.slug === slug);
        setCard(cardDetails);
    }, [slug]);

    if (!card) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.totalPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.heading}>
                        What will you <span>Learn</span>?
                    </p>
                    <p className={styles.description}>
                        {card.Description}
                    </p>
                </div>

                <div className={styles.modules}>
                    {card.moduleContent && card.moduleContent.map((module, index) => (
                        <div
                            key={module.id}
                            className={styles.moduleContainer}
                            style={{ backgroundColor: colors[index % colors.length] }}
                        >
                            <div className={styles.moduleHeader}>
                                <p className={styles.moduleTitle}>{module.module}</p>
                                <p className={styles.moduleSubTitle}>{module.title}</p>
                            </div>

                            <div className={styles.detailsContainer}>
                                <div className={styles.details}>
                                    <div className={styles.detailItem}>
                                        <FontAwesomeIcon icon={faClock} />
                                        <p>Time: {module.details.time}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.descriptionsContainer}>
                                {module.details.descriptions.map((description, i) => (
                                    <p key={i} className={styles.descriptionItem}>{description}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.masterclassInfo}>
                <img src={backgroundImage} alt="Background" className={styles.backgroundImage} />
                <p className={styles.masterclassQuestion}>Who is this <span>Course</span> for?</p>
                <section className={styles.roleContainer}>
                    <article className={styles.role}>
                        <img src={student} alt="Student" className={styles.roleImage} />
                        <div className={styles.roleContent}>
                            <h3 className={styles.roleTitle}>Fresh Graduates</h3>
                            <p className={styles.roleDescription}>Discover the best career opportunities in Data Science and AI to kickstart your journey into the tech industry.</p>
                        </div>
                    </article>
                    <article className={styles.role}>
                        <img src={professional} alt="Working Professional" className={styles.roleImage} />
                        <div className={styles.roleContent}>
                            <h3 className={styles.roleTitle}>Experienced IT Professionals</h3>
                            <p className={styles.roleDescription}>Upskill with the latest Data Science and AI trends to stay ahead in your career.</p>
                        </div>
                    </article>
                    <article className={styles.role}>
                        <img src={business} alt="Business Owner" className={styles.roleImage} />
                        <div className={styles.roleContent}>
                            <h3 className={styles.roleTitle}>Entrepreneurs</h3>
                            <p className={styles.roleDescription}>Learn how to leverage AI to launch and scale your startup successfully.</p>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default Whatwillyoulearn;
