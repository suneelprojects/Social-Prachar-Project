/** @format */
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function DynamicHeaderManager() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  // These paths should not show popup
  const popupExcludedPaths = ["/thank-you", "/privacy-policy", "/contact"];

  // These paths will not render anything from this component
  const renderExcludedPaths = ["/career-quiz"];

  useEffect(() => {
    const routeMeta = {
      "/": {
        title:
          "Best Data Science Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Join the top-rated Data Science course in Hyderabad with real-time projects and expert mentors at SocialPrachar.",
      },
      "/data-science": {
        title:
          "Best Data Science Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Learn Data Science, AI, and ML in Hyderabad with hands-on training and placement support.",
      },
      "/full-stack-developer-course": {
        title:
          "MERN Full Stack Developer Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Become a MERN Stack Developer with our expert-led Full Stack Development course in Hyderabad.",
      },
      "/artificial-intelligence-course-training-institute-in-hyderabad": {
        title:
          "Artificial Intelligence Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Kickstart your AI career with our industry-aligned Artificial Intelligence course in Hyderabad.",
      },
      "/digital-marketing-course-training-institute-hyderabad": {
        title:
          "Digital Marketing Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Master SEO, SEM, SMM and more with our Digital Marketing training in Hyderabad.",
      },
      "/python-full-stack-development-course": {
        title:
          "Python Full Stack Development Course in Hyderabad | SocialPrachar",
        description:
          "Learn backend and frontend development with Python Full Stack course at SocialPrachar.",
      },
      "/awsdevopscourse": {
        title:
          "AWS DevOps Course Training Institute in Hyderabad | SocialPrachar",
        description:
          "Get certified with our AWS DevOps course designed for real-world cloud deployment practices.",
      },
      "/java-full-stack-development-course": {
        title:
          "Java Full Stack Development Course in Hyderabad | SocialPrachar",
        description:
          "Build a career in software development with our Java Full Stack Developer course.",
      },
    };

    const meta = routeMeta[pathname];

    // Title fallback
    const title =
      meta?.title ||
      pathname
        .replace(/-/g, " ")
        .replace(/\//g, "")
        .replace(/\b\w/g, (c) => c.toUpperCase()) + " | SocialPrachar";

    // Description fallback
    const description =
      meta?.description ||
      `Learn more about ${title.replace(
        " | SocialPrachar",
        ""
      )} at SocialPrachar.`;

    document.title = title;
    updateMetaDescription(description);

    if (!popupExcludedPaths.includes(pathname)) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 15000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [pathname]);

  const updateMetaDescription = (content) => {
    let metaTag = document.querySelector("meta[name='description']");
    if (metaTag) {
      metaTag.setAttribute("content", content);
    } else {
      metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };

  // Don't render anything for excluded paths
  if (renderExcludedPaths.includes(pathname)) {
    return null;
  }

  // You can return null or actual JSX here
  return null;
}
