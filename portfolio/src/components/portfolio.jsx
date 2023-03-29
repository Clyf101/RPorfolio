import React from 'react';
import './styles/portfolio.css';

function Portfolio() {
  return (
    <div>
        <header>
            <h1>Clyford's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/">About me</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/portfolio">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
      <div class="about-me">
  <img src="https://via.placeholder.com/150" alt=" Profile" class="profile-picture"/> 
  <div class="about-me-text">
    <h2>About Me</h2>
    <p>Hi there! My name is <strong>Clyford Hypolite</strong>, and I am a passionate and dedicated web developer with experience in HTML, CSS, JavaScript, React, Node.js, Express, and SQL. I have always been interested in technology, and I have pursued my passion by attending the UCF Bootcamp and completing courses at Keiser University and Monroe College.

I am constantly seeking new challenges and opportunities to expand my knowledge and skills, which is why I am excited to pursue a career in web development. My goal is to utilize my technical abilities, creativity, and passion for coding to develop innovative and user-friendly websites and applications that meet the needs of clients and end-users.</p>
  </div>
</div>
<div class="h2"><h2>Projects</h2></div>
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
    </div>
    </div>
  );
}

export default Portfolio;
