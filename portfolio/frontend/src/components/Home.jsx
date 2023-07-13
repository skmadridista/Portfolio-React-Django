import React from 'react';
import '../static/css/home.css'
import '../static/css/buttons.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Welcome to My Portfolio</h1>
          <p className="subtitle">Discover my work and projects</p>
          <a href="/projects" className="btn1 p-1">View Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

