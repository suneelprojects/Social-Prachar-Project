import React, { useEffect, useState } from 'react';
import style from './Button.module.css';

const Button = () => {
    const [weekDate, setWeekDate] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        slot: '',
        name: '',
        email: '',
        phone: ''
    });
    const [formErrors, setFormErrors] = useState({
        slot: '',
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false); // Loading state for spinner

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submitting
        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.values(errors).some(error => error !== '')) {
            return;
        }

        const url = new URL("https://script.google.com/macros/s/AKfycbyUfOokV7CvVSE_8o4LKv7HdykuFLaVltbRJFXr6dCURFncOXRWh5vzV-7DpGR9wUFVCg/exec");
        url.searchParams.append('slot', formData.slot);
        url.searchParams.append('name', formData.name);
        url.searchParams.append('email', formData.email);
        url.searchParams.append('phone', formData.phone);

        try {
            setLoading(true); // Show spinner
            const response = await fetch(url.toString(), {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to submit the form.");
            }

            const data = await response.json();
            console.log("Form submitted successfully:", data);

            // Show success alert after the form is successfully submitted
            alert('Thank you for registering! Your form has been submitted successfully.');

            setShowForm(false); // Hide the form after submission
        } catch (error) {
            console.error("Error submitting form:", error);
            alert('There was an error submitting your form. Please try again later.');
        } finally {
            setLoading(false); // Hide spinner after submission
        }
    };


    const validateForm = (data) => {
        const errors = {};

        // Validate slot
        if (!data.slot) {
            errors.slot = 'Please select a slot.';
        }

        // Validate name
        if (!data.name) {
            errors.name = 'Please enter your name.';
        }

        // Validate email
        if (!data.email) {
            errors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Please enter a valid email address.';
        }

        // Validate phone number
        if (!data.phone) {
            errors.phone = 'Please enter your phone number.';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Please enter a valid 10-digit phone number.';
        }

        return errors;
    };

    // Calculate next Wednesday's date
    useEffect(() => {
        const today = new Date();
        const daysUntilWednesday = (3 - today.getDay() + 7) % 7; // 3 is Wednesday
        const nextWednesday = new Date(today);
        nextWednesday.setDate(today.getDate() + daysUntilWednesday);

        const options = { day: "numeric", month: "long", year: "numeric" };
        const formattedDate = nextWednesday.toLocaleDateString("en-IN", options);

        setWeekDate(formattedDate);
    }, []);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div>
                <div className="text-center my-3">
                    <button
                        onClick={() => setShowForm(true)}
                        className={`${style.button} btn fw-bold text-uppercase px-4 py-2`}
                    >
                        Book Your Demo Now!<br />
                        <span className="text-decoration-line-through">₹999</span> FREE
                    </button>
                </div>
                <div className="text-center">
                    <p className="fw-bold" style={{ fontSize: '18px' }}>
                        Register by <span style={{ color: '#625BCC', fontSize: '22px' }}>{weekDate}</span> to unlock exclusive bonuses worth ₹5,393 – offer ends today!
                    </p>
                </div>
            </div>

            <div className="text-center shadow">
                {showForm && (
                    <>
                        <div
                            className="blur-background"
                            style={{
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.21)',
                                zIndex: '999',
                            }}
                        ></div>

                        <div
                            className="modal d-flex align-items-center justify-content-center"
                            style={style.modalStyle}
                        >
                            <div
                                className="modal-dialog modal-dialog-centered"
                                style={{
                                    position: 'fixed',
                                    top: '0',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: '1000',
                                }}
                            >
                                <div
                                    className="modal-content bg-dark text-white p-4 position-relative"
                                    style={{ border: '2px solid white' }}
                                >
                                    <button
                                        className="btn-close btn-close-white position-absolute"
                                        onClick={() => setShowForm(false)}
                                        style={{
                                            top: '10px',
                                            right: '15px',
                                            zIndex: '1001',
                                            border: '2px solid white',
                                        }}
                                    ></button>
                                    <h2 className="text-warning text-center mb-4">REGISTER NOW</h2>
                                    <form>
                                        <div className="mb-3">
                                            <select
                                                className="form-select"
                                                name="slot"
                                                value={formData.slot}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Select a slot</option>
                                                <option value="slot1">Slot 1</option>
                                                <option value="slot2">Slot 2</option>
                                                <option value="slot3">Slot 3</option>
                                            </select>
                                            {formErrors.slot && <div className="text-danger">{formErrors.slot}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                required
                                            />
                                            {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                required
                                            />
                                            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter Phone Number"
                                                required
                                            />
                                            {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn w-100 fw-bold text-uppercase"
                                            onClick={handleSubmit}
                                            disabled={loading}
                                            style={{ background: '#553cdf', color: 'white' }}
                                        >
                                            {loading ? (
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : (
                                                "Book Now"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Button;
