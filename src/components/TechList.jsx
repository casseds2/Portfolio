import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firestore } from '../api';

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

export default TechList;
