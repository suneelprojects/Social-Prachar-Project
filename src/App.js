import React, { Suspense, useEffect, useState, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTop from './components/extraComponents/ScrollToTop.js';
import Loading from './components/extraComponents/loading.js';
import { WishlistProvider } from './Dashboard/MenuBarComponents/WishListContext.js';
import NavBar from './components/navBarComponent/navBar';

// Lazy-loaded components
const SignUp = lazy(() => import('./Login&SignUpComponet/SignUp.js'));
const Login = lazy(() => import('./Login&SignUpComponet/Login.js'));
const Profile = lazy(() => import('./Dashboard/profileComponent/Profile.js'));
const Dashboard = lazy(() => import('./Dashboard/MenuBarComponents/DashboardComponent/Dashboard.js'));
const MyProfile = lazy(() => import('./Dashboard/MenuBarComponents/MyProfile.js'));
const EnrolledCourses = lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/EnrolledCourses.js'));
const Wishlist = lazy(() => import('./Dashboard/MenuBarComponents/Wishlist.js'));
const Reviews = lazy(() => import('./Dashboard/MenuBarComponents/Reviews.js'));
const QuizAttempts = lazy(() => import('./Dashboard/MenuBarComponents/QuizAttempts.js'));
const OrderHistory = lazy(() => import('./Dashboard/MenuBarComponents/orderHistoryComponent/OrderHistory.js'));
const QuestionAnswer = lazy(() => import('./Dashboard/MenuBarComponents/QuestionAnswer.js'));
const Settings = lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/Settings.js'));
const ProfileSettings = lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/ProfileSettings.js'));
const PasswordSettings = lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/PasswordSettings.js'));
const SocialProfileSettings = lazy(() => import('./Dashboard/MenuBarComponents/SettingsComponent/SocialProfileSettings.js'));
const Enrolled = lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/Enrolled.js'));
const ActiveCourses = lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/ActiveCourses.js'));
const CompletedCourses = lazy(() => import('./Dashboard/MenuBarComponents/EnrolledCoursesComponent/CompletedCourses.js'));
const Course = lazy(() => import('./components/Courses_category/Course.js'));
const AllHomeComp = lazy(() => import('./components/allHomeComp'));
const DetailsPage = lazy(() => import('./components/courseDetailsPage/DetailsPage.js'));
const MyWork = lazy(() => import('./Dashboard/MenuBarComponents/MyWorkComponent/MyWork.js'));
const Aboutus = lazy(() => import('./components/aboutus/aboutus.js'));

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <WishlistProvider>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <ScrollToTop />
            <NavBar />
            <Routes>
              <Route path="/" element={<AllHomeComp />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/details/:cardId" element={<DetailsPage />} />
              <Route path="/aboutUs" element={<Aboutus />} />
              <Route path="/user" element={user ? <Navigate to="/profile" /> : <Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />}>
                <Route index element={<Dashboard />} />
                <Route path="myprofile" element={<MyProfile />} />
                <Route path="mywork" element={<MyWork />} />
                <Route path="enrolled-courses" element={<EnrolledCourses />}>
                  <Route index element={<Enrolled />} />
                  <Route path="enrolled" element={<Enrolled />} />
                  <Route path=":cardId" element={<Enrolled />} />
                  <Route path="active-courses" element={<ActiveCourses />} />
                  <Route path="completed-courses" element={<CompletedCourses />} />
                </Route>
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="quizAttempts" element={<QuizAttempts />} />
                <Route path="orderHistory" element={<OrderHistory />} />
                <Route path="question-answer" element={<QuestionAnswer />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="settings" element={<Settings />}>
                  <Route index element={<ProfileSettings />} />
                  <Route path="password-settings" element={<PasswordSettings />} />
                  <Route path="socialProfile-settings" element={<SocialProfileSettings />} />
                  <Route path="profile-settings" element={<ProfileSettings />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </WishlistProvider>
    </div>
  );
};

export default App;
