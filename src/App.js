import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import NavBar from './components/navBarComponent/navBar';
import ScrollToTop from './components/extraComponents/ScrollToTop.js';
import Loading from './components/extraComponents/loading.js';
import { WishListProvider } from './Dashboard/MenuBarComponents/WishListContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import routes from './routes.js';
import PageNotFound from './components/pageNotFound/PageNotFound.js';
import QuickHelpButton from './components/quickHelp_Button/QuickHelpButton.js';
import appreciateImage from './assets/subscriptionpage/higherpackage.png';
import Confetti from 'react-confetti';
import { DateProvider } from './components/Forms/DateContext.js';
import { ArrowRight, Award, Gift, Search, X } from 'lucide-react';


const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Popup = ({ setShowPopup }) => {
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const handleEnrolNowClick = () => {
    setIsOpen(false);
    navigate("/scholarship-test");
  };

  const closePopup = () => setIsOpen(false);
  const currentYear = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
  }).format(new Date());

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />
      <div className="popup-content">
        <button
          type="button"
          className="btn-close text-black"
          aria-label="Close"
          onClick={() => setShowPopup(false)}
        ></button>
        {/* <img src={appreciateImage} alt="Appreciation" className="popup-image" data-aos="flip-left" /> */}
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 px-3" style={{ zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div className="bg-white rounded-4 shadow-lg w-100" style={{ maxWidth: '500px', animation: 'fadeIn 0.3s ease-in-out', border: '1px solid #eee' }}>

            {/* Header */}
            <div className="bg-gradient p-3 d-flex justify-content-between align-items-center text-black" style={{ background: 'linear-gradient(to right, #4f46e5, #8b5cf6)' }}>
              <div className="d-flex align-items-center">
                <Search className="me-2" size={28} />
                <h5 className="mb-0 fw-semibold fs-6">Looking for Discounts?</h5>
              </div>
              <button
                onClick={closePopup}
                className="btn btn-sm btn-link text-black text-decoration-none"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* First Offer */}
              <div className="d-flex align-items-center mb-4">
                <div className="bg-warning bg-opacity-25 p-3 rounded-circle me-3 shadow">
                  <Gift className="text-warning" size={28} />
                </div>
                <div>
                  <h6 className="text-primary fw-semibold mb-1">Social Prachar Talent Test {currentYear}</h6>
                  <p className="fs-5 fw-bold text-primary mb-0">Get up to ₹15,000 OFF!</p>
                </div>
              </div>

              {/* Second Offer */}
              <div className="d-flex align-items-center mb-4">
                <div className="bg-success bg-opacity-25 p-3 rounded-circle me-3 shadow">
                  <Award className="text-success" size={28} />
                </div>
                <div>
                  <h6 className="text-primary fw-semibold mb-1">Topper Wins</h6>
                  <p className="fs-5 fw-bold text-success mb-0">100% FREE Course + Job!</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleEnrolNowClick}
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center fw-bold py-3 rounded-pill shadow-sm"
                style={{ background: 'linear-gradient(to right, #4f46e5, #8b5cf6)', border: 'none' }}
              >
                <span className="me-2">Enrol Now</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Footer */}
            <div className="bg-light text-center px-4 py-2">
              <p className="text-muted small mb-0">🎁 Limited time offer. Terms and conditions apply.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AppContent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const excludedPaths = ["/career-quiz"];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (!excludedPaths.includes(location.pathname)) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 15000);
      return () => clearTimeout(timer);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);


  return (
    <>
      <WishListProvider>
        <DateProvider>
          <ScrollToTop />
          <NavBar />
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route) => route)}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
          {/* <QuickHelpButton /> */}
          {!excludedPaths.includes(location.pathname) && <QuickHelpButton />}

          {/* Popup Modal */}
          {showPopup && <Popup setShowPopup={setShowPopup} />}
        </DateProvider>
      </WishListProvider>

      {/* Popup Styling */}
      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .popup-content {
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
            text-align: center;
          }
          .popup-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            color: black;
            border: none;
            padding: 5px 10px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            z-index:1000;
          }
        `}
      </style>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
