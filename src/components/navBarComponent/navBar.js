import React, { useState } from 'react'

import navBarStyle from './navbar.module.css'

// import "./navbar.css";
import picSvg from '../../assets/svg01.png'

import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
const Navigate = useNavigate()
  
const [expanded,setExpand]=useState(false)
const Showtoggle=()=>{
  setExpand(!expanded)
}
const handleLogin = () => {
Navigate('/login')
}


  return (
    <div className={`${navBarStyle.navBarSticky}`}>
      {/* first nav bar starts */}
      <nav className={`${navBarStyle.hiddenMobileSm} ${navBarStyle.firstNav}`} >
        <div className={`${navBarStyle.containerfluidForNav } container-fluid d-flex justify-content-between  py-2`}>
          <div className="d-flex">
            <a href="" className="nav-link me-4 ">
              <i class="bi bi-envelope-fill"></i> info@studyhub.com
            </a>
            <a href="" className="nav-link">
              <i class="bi bi-telephone"></i> +61 012 012 445
            </a>
          </div>

          <div>
            <a href="" className={`${navBarStyle.hiddenMobilemd} nav-link `} >
              <i class="bi bi-geo-alt-fill"></i> 684 West College St. Sun City,
              USA
            </a>
          </div>
        </div>
      </nav>
      {/* first nav bar ends */}

      {/* second nav bar starts */}




      <nav class={`navbar navbar-expand-lg ${navBarStyle.secondNav}`} >
        <div class={`${navBarStyle.containerfluidForNav } container-fluid py-3 `}>

          {/* brand name and category code start */}
          <div className="d-flex ">
            <a class="navbar-brand" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144"
                height="28"
                viewBox="0 0 144 28"
                fill="none"
              >
                <path
                  d="M61.5831 5.20432V7.82563C60.5037 7.20885 59.3473 6.82336 58.1137 6.82336C57.4199 6.82336 56.8802 6.97756 56.4947 7.28595C56.1092 
                  7.59434 55.955 7.97982 55.955 8.4424C55.955 8.90499 56.1863 9.29047 56.5718 9.59886C56.9573 9.90725 57.5741 10.2156 58.4221 
                  10.6011C58.9618 10.8324 59.5015 11.0637 59.8099 11.295C60.1954 11.5263 60.5808 11.7576 60.9663 12.1431C61.4289 12.4515 
                  61.7373 12.914 61.8915 13.3766C62.1228 13.8392 62.1999 14.3789 62.1999 14.9957C62.1999 16.3063 61.7373 17.3086 60.8121 18.0796C59.9641 
                  18.9276 58.7305 19.3131 57.1886 19.3131C55.5695 19.3131 54.1818 19.0047 53.1024 18.3879V15.6124C54.336 16.5376 55.7237 16.9231 57.1886
                   16.9231C57.8824 16.9231 58.345 16.7689 58.8076 16.4605C59.2702 16.1521 59.4244 15.6895 59.4244 15.1499C59.4244 14.9186 59.3473 14.6873 
                   59.2702 14.456C59.1931 14.2247 58.9618 14.0705 58.6534 13.8392C58.345 13.6079 58.1137 13.5308 57.9595 13.3766C57.8053 13.2995 57.4199 
                   13.1453 56.9573 12.914C56.8031 12.8369 56.726 12.7598 56.6489 12.7598C56.1092 12.5286 55.6466 12.2973 55.3382 12.066C55.0298 11.8347
                    54.6444 11.6034 54.2589 11.295C53.8734 10.9866 53.565 10.6011 53.4108 10.1385C53.1795 9.67596 53.1024 9.13628 53.1024 8.5966C53.1024 
                    7.36304 53.565 6.36078 54.4902 5.58981C55.4153 4.81884 56.6489 4.43335 58.1137 4.43335C59.4244 4.51045 60.5808 4.74174 61.5831 5.20432Z"
                  fill="#553CDF"
                />
                <path
                  d="M67.7509 10.1383V15.6893C67.7509 16.1519 67.9051 16.4603 68.1364 16.7687C68.3677 17 68.7532 17.1542 69.1386
                     17.1542C69.6783 17.1542 70.218 17 70.6806 16.6916V18.9274C70.1409 19.1587 69.5241 19.3129 68.7532 19.3129C66.3631 19.3129 65.2067 18.1564
                      65.2067 15.7664V10.1383H63.5876V8.2109H65.2067V5.5896H67.828V8.2109H70.5264V10.1383H67.7509Z"
                  fill="#553CDF"
                />
                <path
                  d="M79.5468 8.21094H82.1681V19.1587H79.5468V17.3855C79.0071 18.6191 77.8506 19.3129 76.1545 19.3129C75.0751 19.3129 74.15 19.0045
                       73.5332 18.3878C72.9164 17.771 72.608 16.8458 72.608 15.6894V8.21094H75.2293V14.9955C75.2293 15.6894 75.3835 16.229 75.769 16.5374C76.0774
                        16.9229 76.54 17.0771 77.1568 17.0771C77.9277 17.0771 78.4674 16.8458 78.93 16.3061C79.3155 15.7665 79.5468 15.0726 79.5468 13.9932V8.21094Z"
                  fill="#553CDF"
                />
                <path
                  d="M92.3449 3.89355H94.9662V19.1588H92.3449V17.4627C91.574 18.6962 90.4946 19.313 89.0298 19.313C87.5649 19.313 86.4856
                         18.7733 85.6375 17.694C84.7894 16.6146 84.4039 15.3039 84.4039 13.6849C84.4039 11.9888 84.8665 10.601 85.7146 9.59875C86.5627 8.59648 87.7191 8.0568 
                         89.1069 8.0568C90.4946 8.0568 91.6511 8.67358 92.422 9.90714V3.89355H92.3449ZM89.6465 17.0772C90.4175 17.0772 91.0343 16.7688 91.574 16.152C92.1136 15.
                         5352 92.3449 14.6872 92.3449 13.5307C92.3449 12.4513 92.0366 11.6033 91.4969 11.0636C90.9572 10.5239 90.3404 10.2155 89.6465 10.2155C88.8756 10.2155 
                         88.2588 10.5239 87.7191 11.1407C87.1794 11.7575 86.9481 12.6055 86.9481 13.6849C86.9481 14.6872 87.1794 15.4581 87.7191 16.0749C88.2588 16.7688 88.8756
                          17.0772 89.6465 17.0772Z"
                  fill="#553CDF"
                />
                <path
                  d="M100.826 18.9274L96.5082 8.21094H99.3608L100.671 11.6803C101.057 12.6826 101.365 13.6077 101.597
                           14.3016C101.828 14.9955 101.982 15.4581 102.059 15.6123L102.136 15.9207C102.29 15.381 102.753 13.9932 103.524 11.6803L104.68 8.21094H107.379L103.447
                            18.8504C102.368 21.78 100.671 23.2449 98.4356 23.2449C98.0501 23.2449 97.6646 23.2449 97.3563 23.1678V21.0091C97.5875 21.0862 97.8188 21.0862 98.1272
                             21.0862C99.3608 21.0862 100.286 20.3923 100.826 18.9274Z"
                  fill="#553CDF"
                />
                <path
                  d="M111.542 3.89355V10.0613C112.159 8.75068 113.238 8.0568
                              114.857 8.0568C115.937 8.0568 116.785 8.36519 117.401 9.05907C118.018 9.75294 118.404 10.6781 118.404 11.9888V19.1588H115.782V12.4513C115.782
                               11.7575 115.628 11.2178 115.243 10.8323C114.857 10.4468 114.472 10.2155 113.855 10.2155C113.238 10.2155 112.699 10.4468 112.159 10.9094C111.696
                                11.372 111.388 12.143 111.388 13.2223V19.0817H108.767V3.89355H111.542Z"
                  fill="#553CDF"
                />
                <path
                  d="M127.887 8.21094H130.508V19.1587H127.887V17
                                .3855C127.347 18.6191 126.191 19.3129 124.494 19.3129C123.415 19.3129 122.49 19.0045 121.873 18.3878C121.256 17.771 120.948 16.8458 120.948 15.6894V8
                                .21094H123.569V14.9955C123.569 15.6894 123.724 16.229 124.109 16.5374C124.417 16.9229 124.88 17.0771 125.497 17.0771C126.268 17.0771 126.807 16.8458 
                                127.27 16.3061C127.655 15.7665 127.887 15.0726 127.887 13.9932V8.21094Z"
                  fill="#553CDF"
                />
                <path
                  d="M135.982 3.89355V9.90714C136.753 8.67358 137.832 
                                8.0568 139.297 8.0568C140.685 8.0568 141.764 8.59648 142.689 9.59875C143.537 10.601 144 11.9888 144 13.6849C144 15.2268 143.615 16.5375 142.767 17.694C141.918
                                 18.7733 140.762 19.313 139.374 19.313C137.909 19.313 136.83 18.6962 136.059 17.4627V19.1588H133.438V3.89355H135.982ZM138.68 17.0772C139.451 17.0772 140.068 16.7688 
                                 140.531 16.152C141.07 15.5352 141.302 14.7643 141.302 13.762C141.302 12.6826 141.07 11.8346 140.531 11.2178C139.991 10.601 139.374 10.2926 138.68 10.2926C137.986 10.2926 
                                 137.37 10.601 136.83 11.1407C136.29 11.6804 135.982 12.5284 135.982 13.6078C135.982 14.7643 136.213 15.6123 136.753 16.2291C137.216 16.7688 137.909 17.0772 138.68 17.0772Z"
                  fill="#553CDF"
                />
                <path
                  d="M28.2126 19.5645H0.425293V18.9974H28.2126C29.1342 18.9974 29.1342 18.643 29.1342 18.4304V18.0759H29.7721V18.4304C29.7721 18.9266 29.4886 19.
                                  5645 28.2126 19.5645Z"
                  fill="#553CDF"
                />
                <path
                  d="M23.3215 15.0278H2.83545V15.6658H23.3215V15.0278Z"
                  fill="#553CDF"
                />
                <path
                  d="M31.8278 27.5037C31.7569 27.5037 31.6861 
                                  27.5037 31.6861 27.5037C31.5443 27.4329 31.4025 27.2911 31.4025 27.0784V23.9594C31.4025 22.7544 30.9063 21.5493 29.9848 20.6987C29.0633 19.848 27.9291 19.4227 26.6531 19.4936L2.76453
                                   19.5645V18.9265L26.6531 18.8556C28.0709 18.7848 29.4177 19.281 30.4101 20.2734C31.4025 21.2658 31.9696 22.5417 31.9696 23.9594V26.6531L41.1848 17.4379C42.1772 16.4455 42.7443 15.1696
                                    42.7443 13.7518C42.7443 11.6253 41.4683 9.78222 39.5544 8.93159L39.7671 8.3645C41.9645 9.28602 43.3114 11.4126 43.3114 13.7518C43.3114 15.3113 42.6734 16.7999 41.6101 17.8632L32.1114
                                     27.362C32.0405 27.5037 31.9696 27.5037 31.8278 27.5037Z"
                  fill="#553CDF"
                />
                <path
                  d="M30.4811 27.9999H0.779785V27.3619H30.4811C31.4026 27.3619 31.4026 27.0075 31.4026 26.7949V26.4404H32
                                     .0406V26.7949C32.0406 27.3619 31.757 27.9999 30.4811 27.9999Z"
                  fill="#553CDF"
                />
                <path
                  d="M25.8734 23.3923H3.47339V24.0303H25.8734V23.3923Z"
                  fill="#553CDF"
                />
                <path
                  d="M0.0708861 10.562L10.9165
                                      1.13418C11.6253 0.425317 12.6886 0 13.681 0H35.0177C38.0658 0 40.5468 2.48101 40.5468 5.52912C40.5468 7.01772 39.9798 8.43545 38.9165 9.42785L29.4177 18.9266C29.3468 18.9975 29.2051 18.9266 29.2051 
                                      18.8557V15.7367C29.2051 12.9722 26.9367 10.8456 24.1722 10.9165L0.283544 11.0582C0 11.0582 -0.0708861 10.7038 0.0708861 10.562Z"
                  fill="#553CDF"
                />
              </svg>
            </a>

            <div className={`${navBarStyle.hiddenMobileLg} ms-4 ${navBarStyle.categorySection}`} >
              <button className={`${navBarStyle.category}`}>
                <i class="bi bi-grid-3x3-gap-fill"></i> &nbsp; Category &nbsp;
                <i class="bi bi-chevron-compact-down"></i>
              </button>
              
              <div className={`${navBarStyle.categoryMenu}`}>
                <div className='d-flex'>

              <ul >
                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div >
                  <text >Development</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>3+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Academics</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>0+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Bussiness</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>2+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Design & Art</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>2+ courses</text>
                  </div>
          
                  </a>
                 </li>

                </ul>

                <ul >
                <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Marketing</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>2+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Music</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>0+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Photography</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>3+ courses</text>
                  </div>
          
                  </a>
                 </li>

                 <li>
                 <a href="#" className="d-flex" >
                  <img src={picSvg}/>
                  <div>
                  <text>Accounting</text><br/>
                  <text className={`${navBarStyle.textTwo}`}>3+ courses</text>
                  </div>
          
                  </a>
                 </li>

                </ul>
                </div>
              </div>
                
          
            </div>
          </div>

          {/* brand name and category code start */}

          {/* togglet code starts  */}
            <button
              class={`navbar-toggler ${navBarStyle.navbarTogglerBar }`}
              type="button"
               onClick={Showtoggle}  
            >
              <span class="navbar-toggler-icon "></span>
            </button>
          {/* togglet code ends  */}
          

          {/* navigation code starts */}

          <div class={`${navBarStyle.navBarList}`} >
            <div className={`collapse navbar-collapse offcanvas offcanvas-end ${navBarStyle.offCanvasContaniner}  ${!!expanded && 'show'}`} >
            <div className={`offcanvas-header  ${navBarStyle.offCanvasContaninerHeader}`} >
   
    <button type="button" class="btn-close btn-close-white" style={{position:'absolute',left:0}}  onClick={Showtoggle} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <ul class= "navbar-nav me-auto mb-2 mb-lg-0 gap-4 " >
              <li class="nav-item d-flex">
                
                <NavLink to={"/"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Home</NavLink>
              </li>
              <li class="nav-item">
                
                <NavLink to={""} className={`nav-link ${navBarStyle.NavLinkForHover}`}>About Us</NavLink>
              </li>
              <li class="nav-item">
                
                <NavLink to={"/courses"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Courses</NavLink>

              </li>
              <li class="nav-item">
                
                <NavLink to={"/user"} className={`nav-link ${navBarStyle.NavLinkForHover}`}>Dashboard</NavLink>

              </li>
              <li class="nav-item">
              
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
                <li class="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#553cdf"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </a>
                </li>

                <li class="nav-item">
                  <span className="nav-link">
                    <div className={`${navBarStyle.line}`}></div>
                  </span>
                </li>

                <li class="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="#553cdf"
                      class="bi bi-cart3"
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
            <div className={`${navBarStyle.hiddenMobileLg}`} >
              <button className={`${navBarStyle.login} ms-4 me-2 `} onClick={handleLogin} >
                Login
              </button>
              <button className={`${navBarStyle.register}`} >Register</button>
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
