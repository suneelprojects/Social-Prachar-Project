import React, { useEffect, useState } from 'react';
import SignUp from './Login&SignUpComponet/SignUp.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login&SignUpComponet/Login.js';
import { auth} from './firebase';
import Profile from './Dashboard/profileComponent/Profile.js';
import Dashboard  from './Dashboard/MenuBarComponents/DashboardComponent/Dashboard.js';
import MyProfile from './Dashboard/MenuBarComponents/MyProfile.js';
import EnrolledCourses from './Dashboard/MenuBarComponents/EnrolledCoursesComponent/EnrolledCourses.js';
import Wishlist from './Dashboard/MenuBarComponents/Wishlist.js';
import Reviews from './Dashboard/MenuBarComponents/Reviews.js';
import QuizAttempts from './Dashboard/MenuBarComponents/QuizAttempts.js';
import OrderHistory from './Dashboard/MenuBarComponents/orderHistoryComponent/OrderHistory.js';
import QuestionAnswer from './Dashboard/MenuBarComponents/QuestionAnswer.js';
import Settings from './Dashboard/MenuBarComponents/SettingsComponent/Settings.js';
import ProfileSettings from './Dashboard/MenuBarComponents/SettingsComponent/ProfileSettings.js';
import PasswordSettings from './Dashboard/MenuBarComponents/SettingsComponent/PasswordSettings.js';
import SocialProfileSettings from './Dashboard/MenuBarComponents/SettingsComponent/SocialProfileSettings.js';
import Enrolled from './Dashboard/MenuBarComponents/EnrolledCoursesComponent/Enrolled.js';
import ActiveCourses from './Dashboard/MenuBarComponents/EnrolledCoursesComponent/ActiveCourses.js';
import CompletedCourses from './Dashboard/MenuBarComponents/EnrolledCoursesComponent/CompletedCourses.js';
import Course from './components/Courses_category/Course.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './components/navBarComponent/navBar';
import AllHomeComp from './components/allHomeComp';
import GetTickets from './components/getTickets/getTickets';
import MenuBar from './Dashboard/SideNavComponent/MenuBar.js';
import NavCourses from './components/navBarComponent/navCourses.js';
import ScrollToTop from './components/extraComponents/ScrollToTop.js';

const App = () => {
  const [user,setUser]=useState();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop/>
      <NavBar/>
      <Routes>
      <Route path='/courses' element={ <Course/>}/>

      <Route path="/" element={<AllHomeComp/>}/>
      <Route path="/getTickets/:id" element={<GetTickets/>}/>
      <Route path='/categoryCourses' element={<NavCourses/>}/>
        <Route path='/user' 
        element={user?<Navigate to='/profile'></Navigate>:<Login/>}>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/profile' element={<Profile/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='myprofile' element={<MyProfile/>} />
            <Route path='enrolled-courses' element={<EnrolledCourses/>}>
            <Route index element={<Enrolled/>} />
            <Route path='enrolled' element={<Enrolled/>}/>
            <Route path='active-courses' element={<ActiveCourses/>} />
            <Route path='completed-courses' element={<CompletedCourses/>} />
            </Route>
            <Route path='wishlist' element={<Wishlist/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='quizAttempts' element={<QuizAttempts/>} />
            <Route path='orderHistory' element={<OrderHistory/>} />
            <Route path='question-answer' element={<QuestionAnswer/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='settings' element={<Settings />}>
            <Route index element={<ProfileSettings />} />
              <Route path='password-settings' element={<PasswordSettings />} />
              <Route path='socialProfile-settings' element={<SocialProfileSettings />} />
              <Route path='profile-settings' element={<ProfileSettings />} />
            </Route>
            </Route>
          </Routes>
      </BrowserRouter> 
     
 </div>
  );
};
export default App;

