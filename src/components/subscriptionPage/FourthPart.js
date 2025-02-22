import React, { useState } from "react";

const FourthPart = () => {
    const [activeButton, setActiveButton] = useState("Popular");
    const [clickedButton, setClickedButton] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const categories = ["Popular", "Photo", "Video", "Social Media", "Illustration", "3D & AR"];

    const categoryContent = {
        "Popular": [
            { title: "Photoshop", description: "Edit and create stunning graphics." },
            { title: "Illustrator", description: "Design vector illustrations and logos." },
        ],
        "Photo": [
            { title: "Lightroom", description: "Edit photos with powerful presets." },
            { title: "Photoshop", description: "Advanced photo manipulation." },
        ],
        "Video": [
            { title: "Premiere Pro", description: "Edit videos professionally." },
            { title: "After Effects", description: "Create cinematic visual effects." },
        ],
        "Social Media": [
            { title: "Adobe Express", description: "Quickly create social media posts." },
            { title: "Photoshop", description: "Design social media graphics." },
        ],
        "Illustration": [
            { title: "Illustrator", description: "Create vector art and illustrations." },
            { title: "Fresco", description: "Draw and paint digitally." },
        ],
        "3D & AR": [
            { title: "Substance 3D", description: "Create 3D textures and models." },
            { title: "Aero", description: "Build augmented reality experiences." },
        ]
    };

    const handleClick = (item) => {
        setClickedButton(item);
        setTimeout(() => setClickedButton(null), 200);
        setActiveButton(item);
    };

    return (
        <div>
            <div className="text-center my-5">
                <img
                    src=""
                    alt="Logo"
                    className="me-2"
                    style={{
                        width: "80px",
                        height: "80px",
                        background: "black",
                        borderRadius: "10px",
                    }}
                />
                <h3>What’s included in Creative Cloud All Apps for students?</h3>
                <p className="col-md-6 mx-auto pt-2">
                    Apps for everything. Loads of perks. Plus, Adobe Firefly generative AI features for creating images with simple text prompts.
                </p>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <ul className="navbar-nav mx-auto d-flex flex-row flex-wrap p-0">
                        {categories.map((item) => (
                            <li className="nav-item" key={item}>
                                <button
                                    className={`btn position-relative fw-semibold ${activeButton === item ? "active-btn" : ""}`}
                                    onClick={() => handleClick(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="container bg-light border">
                <div className="row p-5">
                    {categoryContent[activeButton].map((content, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex">
                            <img
                                src={content.img || ""}
                                alt={content.title}
                                className="me-3"
                                style={{ width: "50px", height: "50px", background: "black", borderRadius: "10px" }}
                            />
                            <div>
                                <p className="fw-bold mb-0">{content.title}</p>
                                <p className="col-md-12">{content.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary m-5" onClick={() => setShowModal(true)}>See What’s Included</button>
                </div>
            </div>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg"> {/* Increased modal width */}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">All Categories</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                                {categories.map((category) => (
                                    <div key={category} className="mb-4">
                                        <h6 className="fw-bold">{category}</h6>
                                        {categoryContent[category]?.map((content, index) => (
                                            <div key={index} className="mb-3 d-flex">
                                                <img
                                                    src={content.img || ""}
                                                    alt={content.title}
                                                    className="me-3"
                                                    style={{ width: "50px", height: "50px", background: "black", borderRadius: "10px" }}
                                                />
                                                <div>
                                                    <p className="fw-bold mb-0">{content.title}</p>
                                                    <p>{content.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default FourthPart;
