import React from 'react';
import './styles/portfolio.css';

function Portfolio() {
  return (
    <div>
        <header>
            <h1>Clyford's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
      <div class="about-me">
  <img src="https://via.placeholder.com/150" alt=" Profile" class="profile-picture"/> 
  <div class="about-me-text">
    <h2>About Me</h2>
    <p>Hi there! My name is Clyford Hypolite, and I am a passionate and dedicated web developer with experience in HTML, CSS, JavaScript, React, Node.js, Express, and SQL. I have always been interested in technology, and I have pursued my passion by attending the UCF Bootcamp and completing courses at Keiser University and Monroe College.

I am constantly seeking new challenges and opportunities to expand my knowledge and skills, which is why I am excited to pursue a career in web development. My goal is to utilize my technical abilities, creativity, and passion for coding to develop innovative and user-friendly websites and applications that meet the needs of clients and end-users.

In addition to my technical skills, I am a reliable and hardworking individual with experience as a brand ambassador and Amazon delivery driver. These roles have given me valuable experience in customer service, communication, and problem-solving.

Thank you for taking the time to learn more about me, and I look forward to the opportunity to contribute to your team as a skilled and motivated web developer. You can find more about me and my work on my LinkedIn profile and GitHub page.</p>
  </div>
</div>
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
