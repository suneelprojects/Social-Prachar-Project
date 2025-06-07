/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./QuickHelpButton.module.css";
import { FaPhone } from "react-icons/fa";

const QuickHelpButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push("/suggestions");
  };

  useEffect(() => {
    const excludedPaths = ["/career-quiz"];
    setIsVisible(!excludedPaths.includes(pathname));
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`position-fixed ${styles.suggestionButton}`}
        style={{ top: "120px", left: "20px" }}
      >
        <div>
          <a
            href="tel:+918019479419"
            className={`btn shadow ${styles.roundButton} d-flex align-items-center justify-content-center`}
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
          >
            <FaPhone className="text-success" size={60} />
          </a>
        </div>
      </div>
    </>
  );
};

export default QuickHelpButton;
