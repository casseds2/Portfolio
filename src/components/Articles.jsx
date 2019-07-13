import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firestore } from '../api';

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
              <span>Read Me</span>
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
          <div className="arlo_tm_title_holder">
            <h3>Articles</h3>
            <span>Check out some articles I liked!</span>
          </div>
          <div className="arlo_tm_list_wrap blog_list">
            <ul className="total">
              {articles.map((article, index) => {
                return <Article key={index} {...article} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
