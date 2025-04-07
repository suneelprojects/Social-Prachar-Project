import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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

  return (
    <div className="popup-overlay">
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />
      <div className="popup-content">
        <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>
        <img src={appreciateImage} alt="Appreciation" className="popup-image" data-aos="flip-left" />
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
          {/* {showPopup && <Popup setShowPopup={setShowPopup} />} */}
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
