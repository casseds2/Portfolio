import React from 'react';
import { useState, useEffect } from 'react';
import {
  Sidebar,
  Intro,
  About,
  TechList,
  Articles,
  Footer,
} from './components';

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
          <span className="close"></span>
        </div>
      </div>
      {loaded ? (
        <div className="loaded"></div>
      ) : (
        <div className="arlo_tm_preloader">
          <div className="spinner_wrap">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu = () => (
  <div className="arlo_tm_mobile_header_wrap">
    <div className="main_wrap">
      <div className="logo"></div>
      <div className="arlo_tm_trigger">
        <div className="hamburger hamburger--collapse-r">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="arlo_tm_mobile_menu_wrap">
      <div className="mob_menu">
        <ul className="anchor_nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const App = () => (
  <div className="arlo_tm_wrapper_all">
    <Loader />
    <MobileMenu />
    <div className="arlo_tm_content">
      <Sidebar />
      <div className="arlo_tm_rightpart">
        <div className="rightpart_inner">
          <Intro />
          <About />
          <TechList />
          <Articles />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
