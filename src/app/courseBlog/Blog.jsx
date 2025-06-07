/** @format */

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock } from "lucide-react";
import { db } from "../../../firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";
import Sidebar from "./Asidebar";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsSnapshot = await getDocs(
          collection(db, "blog"),
          orderBy("createdAt", "desc")
        );
        const postsData = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(postsData);
        if (postsData.length > 0) setFeaturedPost(postsData[0]);

        const categoriesSnapshot = await getDocs(collection(db, "blog"));
        const categoriesData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
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

  const handlePageChange = (page) => setCurrentPage(page);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevious = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

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
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div
                className="md:flex cursor-pointer"
                onClick={() => router.push(`/courseBlog/${featuredPost.id}`)}
              >
                <img
                  className="w-full object-fit md:w-100 md:h-50"
                  src={featuredPost.imageUrl}
                  alt="Featured post"
                  loading="lazy"
                />
                <div className="p-8">
                  <div className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {featuredPost.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-3 text-gray-500">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {featuredPost.author}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={featuredPost.date}>
                          {featuredPost.date}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Latest Articles</h1>
            </div>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                  onClick={() => router.push(`/courseBlog/${post.id}`)}
                >
                  <div className="md:flex">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={post.imageUrl}
                      alt={post.title}
                      loading="lazy"
                    />
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
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-gray-500">{post.excerpt}</p>
                      <div className="mt-4 text-xs text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-1 mt-12">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border text-sm font-medium rounded-md ${
                    currentPage === index + 1
                      ? "text-white bg-indigo-600 border-indigo-500"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <span className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white">
                  ...
                </span>
              )}
              <button
                onClick={handleNext}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>

          <Sidebar featuredPost={featuredPost} categories={categories} />
        </div>
      </main>
    </div>
  );
};

export default Blog;
