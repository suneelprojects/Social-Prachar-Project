import React, { useState, useEffect, Suspense } from 'react';
import styles from './PopUpForm.module.css';
import { data } from './../../Cards/CardData';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../extraComponents/loading';

const SignInForm = ({ onClose, courseID }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        mode: '',
    });

    const { cardId } = useParams();
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State for lazy loading
    const navigate = useNavigate();

    useEffect(() => {
        const cardDetails = data.find(card => card.courseID === parseInt(cardId));
        setCard(cardDetails);
    }, [cardId]);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwUXmxm_e_U4J3yR7y7sn8b26WM4dIr51UIjuTmCt43VUOnxSuUR0USb2N_Iqbm2bTV/exec '; // Replace with your Google Apps Script Web App URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, phone, course, mode } = formData;

        if (!fullName || !email || !phone || !course || !mode) {
            alert('Please fill in all required fields.');
            return;
        }

        setIsLoading(true); // Show loading spinner

        try {
            const formPayload = new FormData();
            formPayload.append('fullName', formData.fullName);
            formPayload.append('email', formData.email);
            formPayload.append('phone', formData.phone);
            formPayload.append('course', formData.course);
            formPayload.append('mode', formData.mode);

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formPayload,
            });

            setIsLoading(true);
            
            if (response.ok) {
                alert('Form submitted successfully!');
                navigate('/thank-you');
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            setIsLoading(false); // Hide loading spinner
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>
                <h2>Enroll Now</h2>
                    <form>
                        {/* Full Name */}
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Select Course */}
                        <div className={styles.formGroup}>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Course</option>
                                {card && card.popUpDropDownCourses && card.popUpDropDownCourses.length > 0 ? (
                                    card.popUpDropDownCourses.map((course) => (
                                        <option key={course.dropDownid} value={course.courseName}>
                                            {course.courseName}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>No available courses</option>
                                )}
                            </select>
                        </div>

                        {/* Select Training Mode */}
                        <div className={styles.formGroup}>
                            <select
                                name="mode"
                                value={formData.mode}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Training Mode</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>

                        {/* Submit and Close Buttons */}
                    <button
                        type="submit"
                        className={styles.submitButton}
                        onClick={handleSubmit}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>

                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </form>
                {isLoading && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Loading />
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default SignInForm;
