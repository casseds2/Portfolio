import React from 'react';

const Sidebar = () => (
  <div className="arlo_tm_leftpart_wrap">
    <div className="leftpart_inner">
      <div className="logo_wrap"></div>
      <div className="menu_list_wrap">
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
      <div className="leftpart_bottom">
        <div className="social_wrap">
          <ul>
            <li>
              <a href="https://www.facebook.com/stephen.cassedy">
                <i className="xcon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Phtephens">
                <i className="xcon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/stephen-cassedy-178454ba/">
                <i className="xcon-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/staevecassedy/?hl=en">
                <i className="xcon-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
