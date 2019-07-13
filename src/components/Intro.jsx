import React from 'react';
import Typist from 'react-typist';
import bitmoji from '../assets/img/svg/bitmoji.png';

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

export default Intro;
