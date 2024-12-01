import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import NavBar from './components/navBarComponent/navBar';
import ScrollToTop from './components/extraComponents/ScrollToTop.js';
import Loading from './components/extraComponents/loading.js';
import { WishListProvider } from './Dashboard/MenuBarComponents/WishListContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aos from 'aos';
import CourseAccordion from './components/Pageslices/AccordianQuestions/Accordian.js';
import ThankyouPage from './components/Pageslices/Enrollbutton/ThankyouPage.js';

// Lazy load components
const AllHomeComp = React.lazy(() => import('./components/allHomeComp'));
const SignUp = React.lazy(() => import('./Login&SignUpComponet/SignUp.js'));
const Login = React.lazy(() => import('./Login&SignUpComponet/Login.js'));
const Profile = React.lazy(() => import('./Dashboard/profileComponent/Profile.js'));
const Dashboard = React.lazy(() => import('./Dashboard/MenuBarComponents/DashboardComponent/Dashboard.js'));
const MyProfile = React.lazy(() => import('./Dashboard/MenuBarComponents/MyProfile.js'));
const EnrolledCourses = React.lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/EnrolledCourses.js'));
const Wishlist = React.lazy(() => import('./Dashboard/MenuBarComponents/Wishlist.js'));
const Reviews = React.lazy(() => import('./Dashboard/MenuBarComponents/Reviews.js'));
const QuizAttempts = React.lazy(() => import('./Dashboard/MenuBarComponents/QuizAttempts.js'));
const OrderHistory = React.lazy(() => import('./Dashboard/MenuBarComponents/orderHistoryComponent/OrderHistory.js'));
const QuestionAnswer = React.lazy(() => import('./Dashboard/MenuBarComponents/QuestionAnswer.js'));
const Settings = React.lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/Settings.js'));
const ProfileSettings = React.lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/ProfileSettings.js'));
const PasswordSettings = React.lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/PasswordSettings.js'));
const SocialProfileSettings = React.lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/SocialProfileSettings.js'));
const Enrolled = React.lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/Enrolled.js'));
const ActiveCourses = React.lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/ActiveCourses.js'));
const CompletedCourses = React.lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/CompletedCourses.js'));
const Course = React.lazy(() => import('./components/Courses_category/Course.js'));
const NewDetailsPage = React.lazy(() => import('./components/CourseDetailsNewPage/CourseDetails.js'));
const MyWork = React.lazy(() => import('./Dashboard/MenuBarComponents/MyWorkComponent/MyWork.js'));
const Aboutus = React.lazy(() => import('./components/aboutus/aboutus.js'));

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <WishListProvider>
        <BrowserRouter>
          <ScrollToTop />
          <NavBar />
          {/* Suspense with fallback while loading */}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<AllHomeComp />} />
              <Route path='/courses' element={<Course />} />
              <Route path='/details/:slug' element={<NewDetailsPage />} />
              <Route path="/course/:courseID" component={<CourseAccordion />} />
              <Route path="/thank-you" element={<ThankyouPage />} />
              <Route path='/aboutUs' element={<Aboutus />} />
              <Route path='/user'
                element={user ? <Navigate to='/profile' /> : <Login />}>
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile />}>
                <Route index element={<Dashboard />} />
                <Route path='myprofile' element={<MyProfile />} />
                <Route path='mywork' element={<MyWork />} />
                <Route path='enrolled-courses' element={<EnrolledCourses />}>
                  <Route index element={<Enrolled />} />
                  <Route path='/profile/enrolled-courses/enrolled' element={<Enrolled />} />
                  <Route path=':cardId' element={<Enrolled />} />
                  <Route path='active-courses' element={<ActiveCourses />} />
                  <Route path='completed-courses' element={<CompletedCourses />} />
                </Route>
                <Route path='/profile/wishlist' element={<Wishlist />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='quizAttempts' element={<QuizAttempts />} />
                <Route path='orderHistory' element={<OrderHistory />} />
                <Route path='question-answer' element={<QuestionAnswer />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='settings' element={<Settings />}>
                  <Route index element={<ProfileSettings />} />
                  <Route path='password-settings' element={<PasswordSettings />} />
                  <Route path='socialProfile-settings' element={<SocialProfileSettings />} />
                  <Route path='profile-settings' element={<ProfileSettings />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </WishListProvider>
    </div>
  );
};

export default App;
