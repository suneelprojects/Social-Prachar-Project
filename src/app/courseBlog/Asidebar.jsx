/** @format */
"use client";

import { ChevronRight, Tag } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link";

const Asidebar = ({ featuredPost, categories }) => {
  const router = useRouter();

  return (
    <div className="lg:w-1/3 mt-12 lg:mt-0">
      {/* About section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold mb-4">About MyBlog</h3>
        <p className="text-gray-600">
          {featuredPost
            ? featuredPost.excerpt
            : "Welcome to MyBlog, where we share insights, tips, and trends about design, development, technology, and digital marketing."}
        </p>
        {featuredPost && (
          <button
            onClick={() => router.push(`/courseBlog/${featuredPost.id}`)}
            className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
          >
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id || category.name}>
              <Link
                href={`/category/${category.name}`}
                className="flex items-center justify-between text-gray-600 hover:text-indigo-600 no-underline"
              >
                <span className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {category.category}
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Asidebar;
