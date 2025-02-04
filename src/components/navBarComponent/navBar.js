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

import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const NavBar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const location = useLocation();

  const categoryArraryOne = [
    { courseImg: course6, courseName: `Web Development`, NoOFCourses: "5+ courses" },
    { courseImg: course2, courseName: "Analytics", NoOFCourses: "4+ courses" },
    { courseImg: course3, courseName: "Marketing", NoOFCourses: "3+ courses" },
  ];
  const categoryArraryTwo = [
    // {
    //   courseImg: course7,
    //   courseName: "HR Analytics",
    //   NoOFCourses: "1+ courses",
    // },
    // { courseImg: course5, courseName: "Accounting", NoOFCourses: "3+ courses" },
    // {courseImg:course4,
    //   courseName:'Photography',
    //   NoOFCourses:'0 courses'
    // },
    // { courseImg: course8, courseName: "Finance", NoOFCourses: "2+ courses" },
  ];

  const dropDownValues = [
    "Web Development",
    "Analytics",
    "Marketing",
    // "Accounting",
    // "Finance",
    // "HR Analytics",
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

  useEffect(() => { }, [handleCategoryClick]);

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
  useEffect(() => { }, [handleCategoryClick]);
  const isCareerWorkshopPage =
    location.pathname === "/Career-Success-workshop";

  // for drop Down
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={`${navBarStyle.navBarSticky}`}>
      {/* second nav bar starts */}
      <nav className={`navbar navbar-expand-lg ${navBarStyle.secondNav}`}>
        <div
          className={`${navBarStyle.containerfluidForNav} container-fluid`}
        >
          {/* brand name and category code start */}
          <div className="d-flex ">
            <a className="navbar-brand" href="http://socialprachar.com">
              <img src={spLogo} className={`${navBarStyle.spLogo}`} />
            </a>

            {!isCareerWorkshopPage && (
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
            )}

            <div
              className={`${navBarStyle.hiddenMobileSm} ${navBarStyle.categorySection} `}
            >
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
              className={`collapse navbar-collapse offcanvas offcanvas-end ${navBarStyle.offCanvasContaniner}  ${!!expanded && "show"}`}
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

              <ul className="navbar-nav me-auto mb-lg-0 gap-3 ">
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
                    to={"/success-stories"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    Success Stories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/career-counselling"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    Career Workshop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/upcoming-batches"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    Upcoming Batches
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/socialhire"}
                    className={`nav-link ${navBarStyle.NavLinkForHover}`}
                    onClick={closeToggle}
                  >
                    SocialHire
                  </NavLink>
                </li>
                
                <li className="nav-item" onMouseLeave={closeDropdown}>
                  <NavLink
                    className={`nav-link navbar-toggle dropdown-toggle ${navBarStyle.NavLinkForHover}`}
                    onClick={toggleDropdown}
                  >
                    More
                  </NavLink>
                  <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                    <NavLink to="/aboutUs" className="dropdown-item" onClick={closeDropdown}>
                      About us
                    </NavLink>
                    <a href="https://finversity.in" className="dropdown-item" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>
                      Finversity
                    </a>
                    <NavLink to="/scholarship-test" className="dropdown-item" onClick={closeDropdown}>
                      Scholarship Test
                    </NavLink>
                    <NavLink to="blog" className="dropdown-item" onClick={closeDropdown}>
                      Blog
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="tel:+918019479419"
                      className={`${navBarStyle.buttonStyle} d-flex align-items-center justify-content-center`}
                      role="button"
                    >
                      <FontAwesomeIcon icon={faPhone} className="me-2" />
                      Call
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="https://wa.me/918019479419?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navBarStyle.buttonStyle} d-flex align-items-center justify-content-center`}
                    role="button"
                    style={{color:'green'}}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" style={{color:'green'}}/>
                    WhatsApp
                  </a>
                </li>

              </ul>
            </div>
          </div>

          
          {/* navigation code ends */}

          {/* search icon and login button code starts */}

          {/* <div className="d-flex">

            {!isCareerWorkshopPage && (
              <div className={`${navBarStyle.hiddenMobileLgMin}`}>
                <span>
                  <i className="bi bi-person-fill"></i>
                </span>
              </div>
            )}

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
          </div> */}
          {/* search icon and login button code ends */}
        </div>
      </nav>

      {/* second nav bar ends */}

      {/* search bar */}
    </div>
  );
};

export default NavBar;
