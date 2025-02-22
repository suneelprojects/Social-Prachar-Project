import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <img
                    src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
                    alt="Page Not Found"
                    className={styles.notFoundGif}
                />
                <h1 className={styles.notFoundTitle}>404</h1>
                <p className={styles.notFoundText}>Oops! The page you are looking for doesn't exist.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <Link to="/" className={`${styles.backHomeBtn}`}>
                        Go Back Home
                    </Link>
                    <Link to="/data-science" className={`${styles.backHomeBtn}`}>
                        Data Science Course
                    </Link>
                    <Link to="/full-stack-developer-course" className={`${styles.backHomeBtn}`}>
                        Full Stack Course
                    </Link>
                    <Link to="/digital-marketing-course-training-institute-hyderabad" className={`${styles.backHomeBtn}`}>
                        Digital Marketing Course
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;