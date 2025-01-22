// routes.js
import React from 'react';
import { Route } from 'react-router-dom';

const ThankyouPage = React.lazy(() => import('./components/Pageslices/Enrollbutton/ThankyouPage.js'));
const AllHomeComp = React.lazy(() => import('./components/allHomeComp.js'));
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
const SuccessStories = React.lazy(() => import('./components/successStories/SuccessStories.js'));
const CourseAccordion = React.lazy(() => import('./components/Pageslices/AccordianQuestions/Accordian.js'));
const CareerWorkShop = React.lazy(() => import("./components/Career_workshop/profileHeader/ProfileHeader.js"));
const UpcomingBatches = React.lazy(() => import("./components/upcomingBatches/UpcomingBatches.js"));
const CareerSelection = React.lazy(() => import("./components/QuizCareerSelection/CareerSelection.js"));
const CareerRoadMap = React.lazy(() => import("./components/CareerRoadMap/CareerRoadMap.js"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy/PrivacyPolicy.js"));
const ScholarShipTest = React.lazy(() => import("./components/scholarshipTest/ScholarShipTest.js"));
const SocialHire = React.lazy(() => import("./components/SocialHire/SocialHire.js"));
const Blog = React.lazy(() => import("./components/Blog/Blog.js"));

const routes = (
    <Route path="/">
        <Route index element={<AllHomeComp />} />
        <Route path='blog' element={<Blog />} />
        <Route path='socialhire' element={<SocialHire />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="scholarship-test" element={<ScholarShipTest />} />
        <Route path="career-roadmaps" element={<CareerRoadMap />} />
        <Route path="/courses" element={<Course />} />
        <Route path="aboutUs" element={<Aboutus />} />
        <Route path=":slug" element={<NewDetailsPage />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="career-counselling" element={<CareerWorkShop />} />
        <Route path="upcoming-batches" element={<UpcomingBatches />} />
        <Route path="Quiz" element={<CareerSelection />} />
        <Route path="course/:courseID" element={<CourseAccordion />} />
        <Route path="thank-you" element={<ThankyouPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />}>
            <Route index element={<Dashboard />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="mywork" element={<MyWork />} />
            <Route path="enrolled-courses" element={<EnrolledCourses />}>
                <Route index element={<Enrolled />} />
                <Route path="enrolled" element={<Enrolled />} />
                <Route path="active-courses" element={<ActiveCourses />} />
                <Route path="completed-courses" element={<CompletedCourses />} />
            </Route>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="quizAttempts" element={<QuizAttempts />} />
            <Route path="orderHistory" element={<OrderHistory />} />
            <Route path="question-answer" element={<QuestionAnswer />} />
            <Route path="settings" element={<Settings />}>
                <Route index element={<ProfileSettings />} />
                <Route path="password-settings" element={<PasswordSettings />} />
                <Route path="socialProfile-settings" element={<SocialProfileSettings />} />
            </Route>
        </Route>
    </Route>
);

export default routes;
