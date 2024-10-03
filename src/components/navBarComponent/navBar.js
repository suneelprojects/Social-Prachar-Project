import React, { useEffect, useState } from "react";

import navBarStyle from "./navbar.module.css";

import course2 from "../../assets/02.svg";
import course3 from "../../assets/04.svg";
import course5 from "../../assets/06.svg";
import course6 from "../../assets/01.svg";
import course7 from "../../assets/course7.png";
import course8 from "../../assets/course8.jpg";
import spLogo from "../../assets/SP_Logo.png";
import spLogoIcon from "../../assets/SP_Logo-icon.png";

import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const NavBar = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const categoryArraryOne = [
    {
      courseImg: course6,
      courseName: `Web Development`,
      NoOFCourses: "5+ courses",
    },
    //  {courseImg:course3,
    //   courseName:'Academics',
    //   NoOFCourses:'0 courses'
    // },
    { courseImg: course2, courseName: "Analytics", NoOFCourses: "4+ courses" },
    {
      courseImg: course7,
      courseName: "HR Analytics",
      NoOFCourses: "1+ courses",
    },
  ];
  const categoryArraryTwo = [
    { courseImg: course3, courseName: "Marketing", NoOFCourses: "3+ courses" },
    { courseImg: course5, courseName: "Accounting", NoOFCourses: "3+ courses" },
    // {courseImg:course4,
    //   courseName:'Photography',
    //   NoOFCourses:'0 courses'
    // },
    { courseImg: course8, courseName: "Finance", NoOFCourses: "2+ courses" },
  ];

  const dropDownValues = [
    "Web Development",
    "Analytics",
    "Marketing",
    "Accounting",
    "Finance",
    "HR Analytics",
  ];

  const Navigate = useNavigate();

  const handleCategoryClick = (category) => {
    Navigate("/courses", { state: { category } });
  };

  const handleCategoryDropDown = (event) => {
    const category = event.target.value;
    if (category) {
      Navigate("/courses", { state: { category } });
    }
    setSelectedValue("");
  };

  const [expanded, setExpand] = useState(false);
  const Showtoggle = () => {
    setExpand(!expanded);
  };
  const closeToggle = () => {
    setExpand(false);
  };

  const handleLogin = () => {
    Navigate("/login");
  };
  const handleDashoard = () => {
    Navigate("/user");
  };
  const handleRegister = () => {
    Navigate("/signup");
  };

  const handleClickOnIcon = () => {
    Navigate("/user");
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      Navigate("/login");
      console.log("user Logging out Successfully");
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  useEffect(() => {}, [handleCategoryClick]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      Navigate("/login");
      console.log("user Logging out Successfully");
    } catch (error) {
      console.log("Error logging out: ", error.message);
    }
  }

  useEffect(() => {}, [handleCategoryClick]);

  return (
    <div className={`${navBarStyle.navBarSticky}`}>
      {/* second nav bar starts */}

      <nav className={`navbar navbar-expand-lg ${navBarStyle.secondNav}`}>
        <div
          className={`${navBarStyle.containerfluidForNav} container-fluid  `}
        >
          {/* brand name and category code start */}
          <div className="d-flex ">
            <a className="navbar-brand" href="#">
              <img src={spLogo} className={`${navBarStyle.spLogo}`} />
            </a>

            <select
              className={`${navBarStyle.selectDropDown}`}
              value={selectedValue}
              onChange={handleCategoryDropDown}
            >
              <option>Courses</option>
              {dropDownValues.map((course, i) => (
                <option value={`${course}`} key={i}>
                  {course}
                </option>
              ))}
            </select>

            <div
              className={`${navBarStyle.hiddenMobileSm} ms-4 ${navBarStyle.categorySection} `}
            >
              <button className={`${navBarStyle.category}`}>
                <i className="bi bi-grid-3x3-gap-fill"></i>Courses
                <i className="bi bi-chevron-compact-down"></i>
              </button>

              <div className={`${navBarStyle.categoryMenu}`}>
                <div className="d-flex">
                  <ul>
                    {categoryArraryOne.map((category, i) => (
                      <li key={i}>
                        <button
                          href="#"
                          className="d-flex"
                          onClick={() =>
                            handleCategoryClick(category.courseName)
                          }
                        >
                          <img src={category.courseImg} />
                          <div>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{category.courseName}</p>
                            <br />
                            <p className={`${navBarStyle.textTwo}`}>
                              {category.NoOFCourses}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <ul>
                    {categoryArraryTwo.map((category, i) => (
                      <li key={i}>
                        <button
                          href="#"
                          className="d-flex"
                          onClick={() =>
                            handleCategoryClick(category.courseName)
                          }
                        >
                          <img src={category.courseImg} />
                          <div>
                            <p>{category.courseName}</p>
                            <br />
                            <p className={`${navBarStyle.textTwo}`}>
                              {category.NoOFCourses}
                            </p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* brand name and category code start */}

          {/* togglet code starts  */}
          <button
            className={`navbar-toggler ${navBarStyle.navbarTogglerBar}`}
            type="button"
            onClick={Showtoggle}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {/* togglet code ends  */}

          {/* navigation code starts */}

          <div className={`${navBarStyle.navBarList}`}>
            <div
              className={`collapse navbar-collapse offcanvas offcanvas-end ${
                navBarStyle.offCanvasContaniner
              }  ${!!expanded && "show"}`}
            >
              <div
                className={`offcanvas-header  ${navBarStyle.offCanvasContaninerHeader}`}
              >
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  style={{ position: "absolute", left: 0 }}
                  onClick={Showtoggle}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <ul className="navbar-nav me-auto mb-lg-0 gap-4 ">
                <li className="nav-item d-flex">
                  <NavLink
                    to={"/"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/courses"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/aboutUs"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* navigation code ends */}

          {/* search icon and login button code starts */}

          <div className="d-flex">
            <div className={`${navBarStyle.hiddenMobileLgMin}`}>
              <span onClick={handleClickOnIcon}>
                <i className="bi bi-person-fill"></i>
              </span>
            </div>
            <div className={`${navBarStyle.hiddenMobileLg} `}>
              {user ? (
                <>
                  <div className="d-flex">
                    <button
                      className={`${navBarStyle.login} ms-4 me-2 `}
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    <button
                      className={`${navBarStyle.register}`}
                      onClick={handleDashoard}
                    >
                      Dashboard
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex">
                    <button
                      className={`${navBarStyle.login} ms-4 me-2 `}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <button
                      className={`${navBarStyle.register}`}
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* search icon and login button code ends */}
        </div>
      </nav>

      {/* second nav bar ends */}

      {/* search bar */}
    </div>
  );
};

export default NavBar;
