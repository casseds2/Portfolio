import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import bitmoji from './assets/img/svg/bitmoji.png';
import placeholderImage from './assets/img/placeholder.jpg';
import { functions, firestore } from './api';

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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

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

const cursorOptions = {
  show: false,
};

const TypedText = () => (
  <Typist cursor={cursorOptions}>
    <p>
      <span className="arlo_tm_animation_text_word">I'm a Web Designer</span>
    </p>
    <Typist.Backspace count={18} delay={400} />
    <p>
      <span className="arlo_tm_animation_text_word">Mobile Tinkerer</span>
    </p>
    <Typist.Backspace count={21} delay={400} />
    <p>
      <span className="arlo_tm_animation_text_word">
        And All Around Good Guy...
      </span>
    </p>
    <Typist.Backspace count={32} delay={400} />
    <p>
      <span className="arlo_tm_animation_text_word">Welcome to my Site!</span>
    </p>
  </Typist>
);

const Intro = () => (
  <div className="arlo_tm_section" id="home">
    <div className="arlo_tm_hero_header_wrap">
      <div className="arlo_tm_universal_box_wrap">
        <div className="bg_wrap">
          <div className="overlay_image hero jarallax" data-speed="0.1"></div>
          <div className="overlay_color hero"></div>
        </div>
        <div className="content hero">
          <div className="inner_content">
            <div className="image_wrap">
              <img src={bitmoji} alt="Bitmoji of me!" />
            </div>
            <div className="name_holder">
              <h3>Stephen Cassedy</h3>
            </div>
            <div className="text_typing">
              <TypedText />
            </div>
          </div>
        </div>
        <div className="arlo_tm_arrow_wrap bounce anchor">
          <a href="#about">
            <i className="xcon-angle-double-down"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="arlo_tm_section relative" id="about">
    <div className="arlo_tm_about_wrapper_all">
      <div className="container">
        <div className="arlo_tm_title_holder">
          <h3>About Me</h3>
          <span>Main information about me</span>
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
                  work at
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

const TechItem = ({ img, title, body }) => (
  <li>
    <div className="inner" style={{ height: '250px' }}>
      <div className="icon">
        <img className="svg" src={img} alt={title} />
      </div>
      <div className="title_service">
        <h3>{title}</h3>
      </div>
      <div className="text">
        <p>{body}</p>
      </div>
    </div>
  </li>
);

TechItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

const TechList = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    firestore
      .fetchTechnologies()
      .then(data => {
        setTechnologies(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="arlo_tm_section" id="technology">
      <div className="arlo_tm_services_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Technology Stack</h3>
            <span>Some tech I work with!</span>
          </div>
          <div className="list_wrap">
            <ul>
              {technologies.map((technology, index) => {
                return <TechItem key={index} {...technology} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Article = ({ title, url, description, timestamp }) => {
  return (
    <li className="wow fadeInUp">
      <div className="inner_list">
        <div className="definitions_wrap">
          <div className="date_wrap">
            <p>{new Date(timestamp.seconds * 1000).toDateString()}</p>
          </div>
          <div className="title_holder">
            <strong>{title}</strong>
          </div>
          <div className="definition">
            <p>{description}</p>
          </div>
          <div className="read_more">
            <a href={url}>
              <span>Read Mo</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  timestamp: PropTypes.object,
};

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    firestore
      .fetchArticles()
      .then(data => {
        setArticles(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="arlo_tm_section" id="articles">
      <div className="arlo_tm_news_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder news">
            <h3>Interesting Articles</h3>
            <span>Check out some articles I liked!</span>
          </div>
          <div className="arlo_tm_list_wrap blog_list">
            <ul className="total">
              {articles.map((article, index) => {
                return <Article {...article} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      senderEmail: '',
      message: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, senderEmail, message } = this.state;
    if (name === '' || senderEmail === '' || message === '') {
      alert('Invalid form. Please fill out all fields.');
      return;
    }
    functions
      .sendEmail(
        'https://us-central1-portfolio-d7a5d.cloudfunctions.net/httpEmail',
        this.state
      )
      .then(() => {
        alert('Successfully sent email.');
      })
      .catch(err => {
        console.log('Error: ' + JSON.stringify(err));
        alert('Error sending email.');
      });
  };

  updateField = event => {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Get in Touch</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li>
                      <p>
                        <label>Address:</label>
                        <span>Dublin, Ireland</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Email:</label>
                        <span>
                          <a href="mailto:casseds95@gmail.com">
                            casseds95@gmail.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Phone:</label>
                        <span>+353 85 118 5656</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_contact_wrap">
                  <div className="main_input_wrap">
                    <form
                      action="/email"
                      method="POST"
                      className="contact_form"
                      id="form"
                    >
                      <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                      />
                      <div className="empty_notice">
                        <span>Please Fill Required Fields</span>
                      </div>
                      <div className="wrap">
                        <input
                          onChange={this.updateField}
                          value={this.state.name}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="wrap">
                        <input
                          onChange={this.updateField}
                          value={this.state.senderEmail}
                          id="senderEmail"
                          name="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="wrap">
                        <textarea
                          onChange={this.updateField}
                          value={this.state.message}
                          id="message"
                          name="message"
                          placeholder="Your Message"
                        />
                      </div>
                      <div className="arlo_tm_button">
                        <input
                          onClick={this.onSubmit}
                          type="submit"
                          defaultValue="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>© Copyright 2019. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
