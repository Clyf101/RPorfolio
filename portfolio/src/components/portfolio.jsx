import React from 'react';
import './styles/portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-item">
        <img src="https://via.placeholder.com/150" alt="Portfolio item" />
        <div className="portfolio-item-text">
          <h3>Portfolio Item Title</h3>
          <p>Portfolio Item Description</p>
        </div>
      </div>
      <div className="portfolio-item">
        <img src="https://via.placeholder.com/150" alt="Portfolio item" />
        <div className="portfolio-item-text">
          <h3>Portfolio Item Title</h3>
          <p>Portfolio Item Description</p>
        </div>
      </div>
      <div className="portfolio-item">
        <img src="https://via.placeholder.com/150" alt="Portfolio item" />
        <div className="portfolio-item-text">
          <h3>Portfolio Item Title</h3>
          <p>Portfolio Item Description</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
