"use client"
import React, { useEffect, useState } from 'react';
import { Clock, CalendarDays, User } from "lucide-react";
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
import { useParams } from 'next/navigation';

const OpenCourseBlog = () => {
        const { id } = useParams();
        const [blog, setBlog] = useState(null);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchBlogData = async () => {
                try {
                    const docRef = doc(db, "blog", id);
                    const docSnap = await getDoc(docRef);
    
                    if (docSnap.exists()) {
                        setBlog(docSnap.data());
                    } else {
                        console.error("No document found with ID:", id);
                    }
                } catch (error) {
                    console.error("Error fetching blog:", error.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchBlogData();
        }, [id]);
    
        if (loading) return <div className="text-center py-20"></div>;
    
        if (!blog) return <div className="text-center py-20 text-red-500">Blog not found.</div>;
    
        return (
            <>
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                        <span className="flex items-center"><CalendarDays className="w-4 h-4 mr-1" /> {blog.date}</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {blog.readTime}</span>
                    </div>
                    <div className="w-full h-[300px] md:h-[300px] lg:h-[300px] overflow-hidden rounded-lg mb-6">
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <h2 className="fw-bold ms-3 mt-4 mb-2">Project Description</h2>
                <div className="border p-4 rounded-3 mx-3">
                    <h3 className="fw-bold">{blog.title || "Default Title"}</h3>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} className="mt-3 text-secondary"></div>
                </div>
            </>
    
        );  
};

export default OpenCourseBlog;