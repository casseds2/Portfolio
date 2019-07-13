import React from 'react';
import placeholderImage from '../assets/img/placeholder.jpg';

const About = () => (
  <div className="arlo_tm_section relative" id="about">
    <div className="arlo_tm_about_wrapper_all">
      <div className="container">
        <div className="arlo_tm_title_holder">
          <h3>About Me</h3>
        </div>
        <div className="arlo_tm_about_wrap">
          <div className="author_wrap">
            <div className="leftbox">
              <div
                className="about_image_wrap parallax"
                data-relative-input="true"
              >
                <div className="image layer" data-depth="0.1">
                  <img src={placeholderImage} alt="Placeholder" />
                  <div
                    className="inner"
                    data-img-url="https://firebasestorage.googleapis.com/v0/b/portfolio-d7a5d.appspot.com/o/proshot.jpg?alt=media&token=c6cdba38-46cf-4a71-9e87-c743b1ae5201"
                  ></div>
                </div>
                <div className="border layer" data-depth="0.2">
                  <img src="img/about/550x640.jpg" alt="" />
                  <div className="inner"></div>
                </div>
              </div>
            </div>
            <div className="rightbox">
              <div className="definition">
                <p>
                  Hi! My name is <strong>Stephen Cassedy</strong>. I'm very
                  passionate and dedicated to my work. With less than two years
                  experience of fullstack development, I have acquired many
                  skills required to build richly featured products. I currently
                  work at{' '}
                  <a href="https://www.cellusys.com/">
                    <strong>Cellusys</strong>
                  </a>
                  . I enjoy every step of the development process, from
                  requirements gathering to deploying, but I find the most
                  satisfaction in seeing the finished product do everything for
                  you that it was created to do.
                </p>
              </div>
              <div className="about_short_contact_wrap">
                <ul>
                  <li>
                    <span>
                      <label>Birthday:</label> 01.07.1995
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Age:</label>24
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>City:</label> Dublin, Ireland
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Interests:</label>Hurling, Football, Rugby
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Study:</label> Dublin City University
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Degree:</label> BSc. In Computer Applications (2:1)
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Mail:</label>
                      <a href="mailto:casseds95@gmail.com">
                        casseds95@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <label>Phone:</label>
                      0851185656
                    </span>
                  </li>
                </ul>
              </div>
              <div className="buttons_wrap">
                <ul>
                  <li>
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-d7a5d.appspot.com/o/resume.pdf?alt=media&token=899890e6-b45d-4193-b557-4093552af578"
                      download="stephencassedycv"
                    >
                      <span>Download CV</span>
                    </a>
                  </li>
                  <li className="anchor">
                    <a href="#contact">
                      <span>Send Message</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
