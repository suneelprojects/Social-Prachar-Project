// App.js
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { auth } from './firebase';
import NavBar from './components/navBarComponent/navBar';
import ScrollToTop from './components/extraComponents/ScrollToTop.js';
import Loading from './components/extraComponents/loading.js';
import { WishListProvider } from './Dashboard/MenuBarComponents/WishListContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Aos from 'aos';
import routes from './routes.js';

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
            <Routes>{routes}</Routes>
          </Suspense>
        </BrowserRouter>
      </WishListProvider>
    </div>
  );
};

export default App;
