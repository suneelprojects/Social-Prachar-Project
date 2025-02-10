import React, { useState } from "react";
import style from "./Blog.module.css";
import { BlogData } from "./BlogData";
import { FaStar, FaPlay, FaEye, FaHeart } from "react-icons/fa";

const Blog = () => {

    return (
        <div>
            <h1 className={style.heading}>Blog Page</h1>
            <div className="row">
                {BlogData.map((blog, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="border shadow-md p-4">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0 bg-white px-3 py-1 rounded-pill text-sm fw-semibold">
                                    Natural Language
                                </div>
                                <div className="position-absolute top-0 end-0 text-gray-500">
                                    <FaHeart className="cursor-pointer" />
                                </div>
                                <img src={blog.image} alt={blog.title} className="w-100 rounded-lg" />
                                <div className="position-absolute bottom-0 start-0 bg-white px-3 py-1 rounded-pill text-sm fw-semibold">
                                    Model
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5 className="text-lg fw-semibold">{blog.title}</h5>
                                <p className="text-gray-600 text-sm">Updated {blog.updated} hours ago</p>
                                <p className="text-gray-800 text-sm mt-2">{blog.description}</p>
                                <div className="d-flex justify-content-between mt-4 text-gray-600 text-sm">
                                    <span className="d-flex align-items-center"><FaStar className="text-warning me-1" /> {blog.rating} ({blog.reviews})</span>
                                    <span className="d-flex align-items-center"><FaPlay className="me-1" /> {blog.uses}</span>
                                    <span className="d-flex align-items-center"><FaEye className="me-1" /> {blog.views}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <span className="text-black fw-semibold">${blog.price}</span>
                                    <button className="btn btn-dark px-4 py-2">Open</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Blog;
