import React, { useState } from 'react';
import styles from '../Pageslices/Enrollbutton/PopUpForm.module.css';
import Loading from '../extraComponents/loading';


const SubscriptionForm = ({ onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        yearOfPassing: '',
        course: '',
        trainingMode: '',
    });

    const scriptURL = "https://script.google.com/macros/s/AKfycbyxgrTsN2fn8C3XAXvmBIjGniaxzF4jHnA9LMuC2CAIwGTNEyp4uPmLOmtjT3SunGqI9g/exec";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formData).some(value => !value)) {
            alert('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);

        const formDataEncoded = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataEncoded.append(key, value);
        });
        formDataEncoded.append('sheetName', 'subscription');

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataEncoded,
            });

            const result = await response.text();
            console.log('Response:', result);

            if (!response.ok) throw new Error('Failed to submit form');

            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                education: '',
                yearOfPassing: '',
                course: '',
                trainingMode: '',
            });
            onClose();
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            {isLoading && <div className={styles.loadingOverlay}><Loading /></div>}
            <div className={styles.formContainer}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ color: 'black' }}>Register Now</h2>
                    {['name', 'email', 'phone', 'yearOfPassing'].map(field => (
                        <div className={styles.formGroup} key={field}>
                            <input
                                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                name={field}
                                placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    {[['education', ['B.Tech', 'Degree', 'MBA', 'MCA', 'Other']],
                    ['course', ['Data Analytics', 'Data Science & AI', 'Full Stack Mern Java', 'Full Stack Mern Python', 'Multi Cloud DevOps']],
                    ['trainingMode', ['Online', 'Offline']]].map(([name, options]) => (
                        <div className={styles.formGroup} key={name}>
                            <select name={name} value={formData[name]} onChange={handleChange} required>
                                <option value="">Select {name}</option>
                                {options.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                        </div>
                    ))}
                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionForm;