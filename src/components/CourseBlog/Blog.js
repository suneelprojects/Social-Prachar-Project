// Blog.js
import { useState, useEffect } from 'react';
import { ChevronRight, Clock } from 'lucide-react';
import { db } from '../../firebase';
import { collection, getDocs, orderBy} from 'firebase/firestore';
import Sidebar from './Asidebar';
import Footer from './../footer/footer';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [blogPosts, setBlogPosts] = useState(null);
    const [featuredPost, setFeaturedPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8; // Adjust based on your total pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch blog posts
                const postsSnapshot = await getDocs(collection(db, 'blog'), orderBy("createdAt", "desc"));
                const postsData = postsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setBlogPosts(postsData);

                // Fetch the latest featured post (most recent blog post)
                if (postsData.length > 0) {
                    setFeaturedPost(postsData[0]); // Set the latest post as featured
                }

                // Fetch categories
                const categoriesSnapshot = await getDocs(collection(db, 'blog'));
                const categoriesData = categoriesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCategories(categoriesData);

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Main content */}
            <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Featured post */}
                {featuredPost && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="md:flex" onClick={() => navigate(`/courseBlog/${featuredPost.id}`)}>
                                <div>
                                    <img
                                        className="w-full object-fit md:w-100 md:h-50"
                                        src={featuredPost.imageUrl}
                                        alt="Featured post"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center">
                                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">{featuredPost.category}</span>
                                        <span className="mx-2 text-gray-300">•</span>
                                        <span className="text-sm text-gray-500 flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>
                                    <a href="#" className="block mt-2" style={{textDecoration:'none'}}>
                                        <h3 className="text-xl font-semibold text-gray-900">{featuredPost.title}</h3>
                                        <p className="mt-3 text-gray-500">{featuredPost.excerpt}</p>
                                    </a>
                                    <div className="mt-6 flex items-center">
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row">
                    {/* Blog posts */}
                    <div className="lg:w-2/3 lg:pr-12">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold">Latest Articles</h1>
                            {/* <a href="#" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                View all <ChevronRight className="h-4 w-4 ml-1" />
                            </a> */}
                        </div>

                        <div className="space-y-8">
                            {blogPosts.map(post => (
                                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden" onClick={() => navigate(`/courseBlog/${post.id}`)}>
                                    <div className="md:flex">
                                        <div className="">
                                            <img
                                                className="h-48 w-full object-cover md:w-48"
                                                src={post.imageUrl}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                                    {post.category}
                                                </span>
                                                <span className="mx-2 text-gray-300">•</span>
                                                <span className="text-sm text-gray-500 flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <a href="#" className="block mt-2" style={{textDecoration:'none'}}>
                                                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                                                <p className="mt- 3 text-gray-500">{post.excerpt}</p>
                                            </a>
                                            <div className="mt-4 flex text-end">
                                                <div className="ml-2">
                                                    <div className="flex space-x-1 text-xs text-gray-500">
                                                        <time dateTime={post.date}>{post.date}</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center space-x-1 mt-12">
                            <a
                                href="#"
                                onClick={handlePrevious}
                                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            {[...Array(totalPages)].map((_, index) => (
                                <a
                                    key={index + 1}
                                    href="#"
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 border text-sm font-medium rounded-md ${currentPage === index + 1 ? 'text-white bg-indigo-600 border-indigo-500' : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'}`}
                                >
                                    {index + 1}
                                </a>
                            ))}
                            {currentPage < totalPages && (
                                <span className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">...</span>
                            )}
                            <a
                                href="#"
                                onClick={handleNext}
                                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                    </div>

                    {/* Sidebar */}
                    {/* <Sidebar categories={categories} /> */}
                    <Sidebar featuredPost={featuredPost} categories={categories} />

                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Blog;