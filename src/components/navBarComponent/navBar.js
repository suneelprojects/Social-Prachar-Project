import React, { useEffect, useState } from 'react'

import navBarStyle from './navbar.module.css'

import picSvg from '../../assets/svg01.png'
import spLogo from '../../assets/SP_Logo.png'

import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';



const NavBar = () => {
  
  const [selectedValue, setSelectedValue] = useState('');

  const categoryArraryOne=[
    {courseImg:picSvg,
      courseName:'Development',
      NoOFCourses:'3+ courses'
    },
     {courseImg:picSvg,
      courseName:'Academics',
      NoOFCourses:'0 courses'
    },
    {courseImg:picSvg,
      courseName:'Business',
      NoOFCourses:'2+ courses'
    },
    {courseImg:picSvg,
      courseName:'Design & Art',
      NoOFCourses:'2+ courses'
    },

  ]
  const categoryArraryTwo=[
    {courseImg:picSvg,
      courseName:'Marketing',
      NoOFCourses:'1+ courses'
    },
     {courseImg:picSvg,
      courseName:'Music',
      NoOFCourses:'1+ courses'
    },
    {courseImg:picSvg,
      courseName:'Photography',
      NoOFCourses:'0 courses'
    },
    {courseImg:picSvg,
      courseName:'Accounting',
      NoOFCourses:'2+ courses'
    },

  ]

  const dropDownValues=['Development','Business','Design & Art','Marketing','Accounting']

const Navigate = useNavigate()

const handleCategoryClick = (category) => {
  // Navigate to the detail page and pass the category as state
  Navigate('/categoryCourses', { state: { category } });
};

const handleCategoryDropDown = (event) => {
  const category = event.target.value;
  if (category) {
    Navigate('/categoryCourses', { state: { category } });
  }
  setSelectedValue('');
};
  
const [expanded,setExpand]=useState(false)
const Showtoggle=()=>{
  setExpand(!expanded)
}

const [open,setOpen]=useState(false);
const openToggle=()=>{
  setOpen(!open)
}
const handleLogin = () => {
Navigate('/login')
}
const handleDashoard=()=>{
Navigate("/user")
}
const handleRegister=()=>{
  Navigate('/signup')
  }
const [user, setUser] = useState(null);
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout(){
    try{
        await auth.signOut();
        Navigate('/login')
        console.log("user Logging out Successfully")
    }
   catch(error){
    console.log("Error logging out: " ,error.message)
   }
}

useEffect(()=>{

},[handleCategoryClick])


  const [searchTerm, setSearchTerm] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    console.log('Search term:', searchTerm);
    openToggle();    
    setSearchTerm("");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();  
      openToggle();    
      setSearchTerm("");
    }
  };

  return (
    <div className={`${navBarStyle.navBarSticky}`} >
      {/* first nav bar starts */}
      <nav className={`${navBarStyle.hiddenMobileSm} ${navBarStyle.firstNav}`} >
        <div className={`${navBarStyle.containerfluidForNav } container-fluid d-flex justify-content-between  py-2`}>
          <div className="d-flex">
            <a href="" className="nav-link me-4 ">
              <i className="bi bi-envelope-fill"></i> info@studyhub.com
            </a>
            <a href="" className="nav-link">
              <i className="bi bi-telephone"></i> +61 012 012 445
            </a>
          </div>

          <div>
            <a href="" className={`${navBarStyle.hiddenMobilemd} nav-link `} >
              <i className="bi bi-geo-alt-fill"></i> 684 West College St. Sun City,
              USA
            </a>
          </div>
        </div>
      </nav>
      {/* first nav bar ends */}

      {/* second nav bar starts */}




      <nav className={`navbar navbar-expand-lg ${navBarStyle.secondNav}`} >
        <div className={`${navBarStyle.containerfluidForNav } container-fluid  py-3 `}>

          {/* brand name and category code start */}
          <div className="d-flex ">
            <a className="navbar-brand" href="#">
              <img src={spLogo} className={`${navBarStyle.spLogo}`}/>
            </a>

            <select className={`${navBarStyle.selectDropDown}`} value={selectedValue} onChange={handleCategoryDropDown}>
      <option value="">Courses</option>
      {
        dropDownValues.map((course,i)=>(
          <option value={`${course}`} key={i}>{course}</option>
        ))
      }
      </select>

            <div className={`${navBarStyle.hiddenMobileSm} ms-4 ${navBarStyle.categorySection} `} >
              <button className={`${navBarStyle.category}`}><i className="bi bi-grid-3x3-gap-fill"></i>Category
                <i className="bi bi-chevron-compact-down"></i>
              </button>
              
              <div className={`${navBarStyle.categoryMenu}`}>
                <div className='d-flex'>

              <ul >

                {
                  categoryArraryOne.map((category,i)=>(<li key={i} >
                    <button href="#" className="d-flex" onClick={() => handleCategoryClick(category.courseName)}>
                     <img src={category.courseImg}/>
                     <div >
                     <p >{category.courseName}</p><br/>
                     <p className={`${navBarStyle.textTwo}`}>{category.NoOFCourses}</p>
                     </div>
             
                     </button>
                    </li>))
                }
                 

                

                </ul>

                <ul >
                {
                  categoryArraryTwo.map((category,i)=>(<li key={i}>
                    <button href="#" className="d-flex" onClick={() => handleCategoryClick(category.courseName)}>
                     <img src={category.courseImg}/>
                     <div >
                     <p >{category.courseName}</p><br/>
                     <p className={`${navBarStyle.textTwo}`}>{category.NoOFCourses}</p>
                     </div>
             
                     </button>
                    </li>))
                }

                </ul>
                </div>
              </div>
                
          
            </div>
          </div>

          {/* brand name and category code start */}

          {/* togglet code starts  */}
            <button
              className={`navbar-toggler ${navBarStyle.navbarTogglerBar }`}
              type="button"
               onClick={Showtoggle}  
            >
              <span className="navbar-toggler-icon "></span>
            </button>
          {/* togglet code ends  */}
          

          {/* navigation code starts */}

          <div className={`${navBarStyle.navBarList}`} >
            <div className={`collapse navbar-collapse offcanvas offcanvas-end ${navBarStyle.offCanvasContaniner}  ${!!expanded && 'show'}`} >
            <div className={`offcanvas-header  ${navBarStyle.offCanvasContaninerHeader}`} >
   
    <button type="button" className="btn-close btn-close-white" style={{position:'absolute',left:0}}  onClick={Showtoggle} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <ul className= "navbar-nav me-auto mb-2 mb-lg-0 gap-4 " >
              <li className="nav-item d-flex">
                
                <NavLink to={"/"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Home</NavLink>
              </li>
              <li className="nav-item">
                
                <NavLink to={""} className={`nav-link ${navBarStyle.NavLinkForHover}`}>About Us</NavLink>
              </li>
              <li className="nav-item">
                
                <NavLink to={"/courses"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Courses</NavLink>

              </li>
              <li className="nav-item">
                
                <NavLink to={"/user"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Dashboard</NavLink>

              </li>
              <li className="nav-item">
              
                <NavLink to={""} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Blog</NavLink>

              </li>
            </ul>

          </div>
          </div>



          {/* navigation code ends */}


          {/* search icon and login button code starts */}
          

          <div className="d-flex">
            <div className="d-flex ">
              <ul className={`navbar-nav ${navBarStyle.hiddenMobileSmSearch}`} >
                <li className="nav-item" >
                  
                  <a className="nav-link" href="#" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#553cdf"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                      onClick={openToggle} 
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </a>
                </li>

                <li className="nav-item">
                  <span className="nav-link">
                    <div className={`${navBarStyle.line}`}></div>
                  </span>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="#553cdf"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <div className={`${navBarStyle.cartDotNumber}`} >
                      {0}

                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${navBarStyle.hiddenMobileLg} `}  >
              {user?(
                <>
                <div className='d-flex'>

              <button className={`${navBarStyle.login} ms-4 me-2 `} onClick={handleLogout} >Logout</button>
              <button className={`${navBarStyle.register}`} onClick={handleDashoard}>Dashboard</button>
                </div>
              </>):(     <>
                <div className='d-flex'>

              <button className={`${navBarStyle.login} ms-4 me-2 `} onClick={handleLogin} >Login</button>
              <button className={`${navBarStyle.register}`}  onClick={handleRegister} >Register</button>
                </div>
              </>)
}
            </div>

          </div>

          {/* search icon and login button code ends */}

        </div>
      </nav>

      {/* second nav bar ends */}

      {/* search bar */}
      <div className={` ${!!open  ?  `${navBarStyle.open}`:"d-none"} container-fluid `}  >
                  <button className={navBarStyle.openBtn} onClick={openToggle} ><i class="bi bi-x-lg"></i></button>
                    <div className="" style={{borderBottom:'1px solid grey'}}>
                      <input type='search' placeholder='Searching...'
                       value={searchTerm}
                       onChange={handleInputChange} onKeyDown={handleKeyDown} /><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="gray"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                      onClick={handleSearchClick}
                      
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                      </div>
           </div>
    </div>
  );
};

export default NavBar;
