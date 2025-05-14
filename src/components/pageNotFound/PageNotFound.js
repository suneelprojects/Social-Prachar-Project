import React from "react";
import { Link } from "react-router-dom";

const destinations = [
    {
        to: "/",
        title: "Home",
        description: "Return to the homepage",
        label: "Visit",
        colSpan: "col-span-1",
    },
    {
        to: "/data-science",
        title: "Data Science",
        description: "Comprehensive data science course",
        label: "Explore course",
        colSpan: "col-span-1",
    },
    {
        to: "/full-stack-developer-course",
        title: "Full Stack",
        description: "Complete web development course",
        label: "Explore course",
        colSpan: "col-span-1",
    },
    {
        to: "/digital-marketing-course-training-institute-hyderabad",
        title: "Digital Marketing",
        description: "Professional digital marketing training",
        label: "Explore course",
        colSpan: "md:col-span-3",
    },
];

const PageNotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="max-w-4xl w-full text-center mb-12">
                    <h1 className="font-bold text-gray-800">
                        <span className="text-9xl block">404</span>
                        <span className="text-xl mt-2 block">Page Not Found</span>
                    </h1>
                    <div className="h-1 w-24 bg-gray-800 mx-auto my-6"></div>
                    <p className="text-gray-600 max-w-md mx-auto">
                        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
                    </p>
                </div>

                <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gray-50 p-6">
                        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Popular destinations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {destinations.map(({ to, title, description, label, colSpan }, idx) => (
                                <Link
                                    key={idx}
                                    to={to}
                                    className={`bg-white p-4 rounded border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 flex flex-col ${colSpan}`}
                                >
                                    <div className="text-xl font-medium text-gray-900 mb-1">{title}</div>
                                    <div className="text-sm text-gray-500">{description}</div>
                                    <div className="mt-auto pt-2 text-blue-600 text-sm flex items-center">
                                        {label}
                                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-white border-t border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-gray-500">© 2025 YourCompany. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PageNotFound;
