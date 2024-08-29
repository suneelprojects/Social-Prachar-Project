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

  const dropDownValues=['Full Stack','Data Science','Generative AI','AWS DevOps','Digital Marketing ','HR Specialisation']

const Navigate = useNavigate()

const handleCategoryClick = (category) => {
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

const handleLogin = () => {
Navigate('/login')
}
const handleDashoard=()=>{
Navigate("/user")
}
const handleRegister=()=>{
  Navigate('/signup')
  }

 const handleClickOnIcon=()=>{
  Navigate('/user')
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





  return (
    <div className={`${navBarStyle.navBarSticky}`} >
      
      {/* second nav bar starts */}




      <nav className={`navbar navbar-expand-lg ${navBarStyle.secondNav}`} >
        <div className={`${navBarStyle.containerfluidForNav } container-fluid  py-3 `}>

          {/* brand name and category code start */}
          <div className="d-flex ">
            <a className="navbar-brand" href="#">
              <img src={spLogo} className={`${navBarStyle.spLogo}`}/>
            </a>

            <select className={`${navBarStyle.selectDropDown}`} value={selectedValue} onChange={handleCategoryDropDown}>
      <option>Courses</option>
      {
        dropDownValues.map((course,i)=>(
          <option value={`${course}`} key={i}>{course}</option>
        ))
      }
      </select>

            <div className={`${navBarStyle.hiddenMobileSm} ms-4 ${navBarStyle.categorySection} `} >
              <button className={`${navBarStyle.category}`}><i className="bi bi-grid-3x3-gap-fill"></i>Courses
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
            
            <div className={`${navBarStyle.hiddenMobileLgMin}`}>
              <span onClick={handleClickOnIcon}><i className="bi bi-person-fill"></i></span>
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

    </div>
  );
};

export default NavBar;
