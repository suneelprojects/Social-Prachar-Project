import React from 'react';

const ThirdPart = () => {
    return (
        <>

            <div className='text-center' style={{ background: "linear-gradient(to top, rgb(85, 60, 223) 5%, rgb(255, 255, 255) 100%)", }}>
                <h3 className="fw-bold">Your path forward starts here</h3>
                <p className="text-muted">
                    Find exactly what you need to get anywhere you want to go in school, at work, and in life.
                    It all starts with All Apps.
                </p>

                <div className="container text-start mt-5 mb-3 ">
                    <div className="card p-4 mx-auto shadow-lg rounded-4" style={{ maxWidth: "450px",border:'1px solid #553cdf' }}>
                        <div className="d-flex justify-content-end">
                            <p
                                className="ms-auto rounded-3"
                                style={{
                                    background: "#553cdf",
                                    color: "white",
                                    width: "fit-content",
                                    padding: "4px 10px",
                                }}
                            >
                                Students Discount
                            </p>
                        </div>

                        <h5 className="fw-bold">Creative Cloud All Apps for Students and Teachers</h5>
                        <p className="fs-5 text-danger">₹1,915.14/mo <span className="fw-bold">₹638.38/mo</span> incl. GST</p>
                        <p className="text-muted">
                            Save over 65% on 20+ creative apps, including Photoshop and Acrobat Pro.
                            First year only, then ₹956.98/mo. <a href="#">See terms.</a>
                        </p>

                        <div className="d-flex gap-3 justify-content-end my-3">
                            <button className="btn btn-outline-dark px-4 rounded-pill">Free Trial</button>
                            <button className="btn btn-primary px-4 rounded-pill">Buy Now</button>
                        </div>

                        <hr />
                        <ul className="list-unstyled text-start">
                            {[
                                { text: "Access to Photoshop, Illustrator, and more.", img: "https://via.placeholder.com/40/ff5733/ffffff?text=A" },
                                { text: "Create stunning videos with Premiere Pro.", img: "https://via.placeholder.com/40/33ff57/ffffff?text=B" },
                                { text: "Professional-grade tools for designers.", img: "https://via.placeholder.com/40/5733ff/ffffff?text=C" },
                                { text: "Seamless cloud storage and sharing.", img: "https://via.placeholder.com/40/ff33a1/ffffff?text=D" },
                                { text: "Exclusive student discounts available.", img: "https://via.placeholder.com/40/33a1ff/ffffff?text=E" },
                            ].map((item, index, array) => (
                                <React.Fragment key={index}>
                                    <li className="d-flex align-items-center mb-3">
                                        <img src={item.img} alt="Icon" className="me-3" />
                                        <p className="mb-0">{item.text}</p>
                                    </li>
                                    {index !== array.length - 1 && <hr className="my-2" />} {/* Adds line after every item except last */}
                                </React.Fragment>
                            ))}
                        </ul>
                       
                    </div>
                </div>
                <button className="btn btn-dark px-4 mt-3 rounded-pill mb-5">View all pricing</button>
            </div>
        </>
    );
};

export default ThirdPart;
