import React, { useState, useEffect } from 'react';
import styles from './PopUpForm.module.css';
import { data } from './../../Cards/CardData';

const SignInForm = ({ onClose, courseID }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        mode: '',
    });

    const [availableCourses, setAvailableCourses] = useState([]);
    const scriptURL = 'https://docs.google.com/spreadsheets/d/19evw9OgcoxbUPDoAyiyeFK0ESyw0iZzScZ29WGt4QUI/edit?usp=sharing'; // Replace with your Google Apps Script Web App URL

    useEffect(() => {
        const selectedCourse = data.find(course => course.courseID === courseID);
        if (selectedCourse) {
            setAvailableCourses(selectedCourse.popUpDropDownCourses || []);
        }
    }, [courseID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, phone, course, mode } = formData;

        if (!fullName || !email || !phone || !course || !mode) {
            alert('Please fill in all required fields.');
            return; // Stop the form submission if any field is empty
        }
        try {
            // Create FormData object
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

            if (response.ok) {
                alert('Form submitted successfully!');
                onClose();
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
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
                <form onSubmit={handleSubmit}>
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
                            {availableCourses.length > 0 ? (
                                availableCourses.map(course => (
                                    <option key={course.dropDownid} value={course.courseName}>
                                        {course.courseName}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No available courses</option>
                            )}
                        </select>
                    </div>

                    {/* {/* Select Training Mode */}
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
                    <button type="submit" className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                    <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;