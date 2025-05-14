import React, { useState } from 'react';
import { Camera, Calendar, Tag, Clock, CheckCircle } from 'lucide-react';
import style from './CourseBlogDashboard.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addDoc, collection, db } from '../../firebase';
import { serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const categories = [
    { name: "Development" },
    { name: "Design" },
    { name: "Marketing" },
    { name: "Business" },
    { name: "Technology" }
];

const CourseBlogDashboard = () => {
    const [formData, setFormData] = useState({
        title: '',
        blogImage: '',
        excerpt: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
        readTime: '',
        content: ''
    });

    const [imagePreview, setImagePreview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (value) => {
        setFormData(prev => ({ ...prev, content: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    const clearImage = () => {
        setImagePreview('');
        setImageFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSubmitSuccess(false);

        try {
            if (!formData.title.trim() || !formData.content.trim()) {
                throw new Error('Title and content are required');
            }

            let imageUrl = "";
            if (imageFile) {
                const storageRef = ref(storage, `projects/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imageFile);

                try {
                    await uploadTask;
                    imageUrl = await getDownloadURL(storageRef);
                } catch (error) {
                    console.error("Error uploading image:", error);
                    alert("Error uploading image.");
                    setIsSubmitting(false);
                    return;
                }
            }

            const payload = {
                ...formData,
                imageUrl: imageUrl,
                createdAt: serverTimestamp()
            };

            await addDoc(collection(db, "blog"), payload);
            setSubmitSuccess(true);
            resetForm();
        } catch (err) {
            setError(err.message || 'Failed to submit the form');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            excerpt: '',
            date: new Date().toISOString().split('T')[0],
            category: '',
            readTime: '',
            content: ''
        });
        clearImage();
    };

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b pb-4">Create Blog Post</h2>

            {submitSuccess && (
                <div className="mb-6 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md flex items-center">
                    <CheckCircle size={20} className="mr-2" />
                    Blog post created successfully!
                </div>
            )}

            {error && (
                <div className="mb-6 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-medium">Title *</label>
                    <input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus: ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="excerpt" className="block text-gray-700 font-medium">Excerpt</label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium d-flex items-center gap-1">
                            <Calendar size={16} /> Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium d-flex items-center gap-1">
                            <Tag size={16} /> Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.name} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium d-flex items-center gap-1">
                            <Clock size={16} /> Read Time
                        </label>
                        <input
                            name="readTime"
                            value={formData.readTime}
                            onChange={handleChange}
                            placeholder="e.g. 5 min read"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Camera size={20} className="text-blue-600" />
                        Blog Image
                    </h3>

                    <div>
                        <label
                            htmlFor="imageUpload"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                        />
                        <p className="text-xs text-gray-400 mt-1">Supported formats: JPG, PNG, GIF (max 5MB)</p>
                    </div>

                    {imagePreview && (
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700 mb-1">Image Preview</p>
                            <div className="bg-gray-50 p-3 rounded border">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-64 object-contain rounded"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320'%3E%3Crect width='400' height='320' fill='%23f3f4f6'/%3E%3Ctext x='200' y='160' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle'%3EImage not available%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full">
                    <label className="block text-gray-700 font-semibold">Blog Content *</label>
                    <ReactQuill
                        value={formData.content}
                        onChange={handleContentChange}
                        theme="snow"
                        modules={quillModules}
                        placeholder="Write your blog content here..."
                        className={`${style.ql_editor} border rounded-lg focus:ring-2 focus:ring-blue-500`}
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        disabled={isSubmitting}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.title || !formData.content}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${isSubmitting || !formData.title || !formData.content
                            ? 'bg-gray-400 text-white cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Create Blog Post'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourseBlogDashboard;