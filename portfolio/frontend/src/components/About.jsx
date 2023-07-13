import React from 'react';
import '../static/css/cards.css'

const About = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-md-3 bg-corozal">
        <div className="card-body">
          <h2 className="card-title text-dark">About Me</h2>
          <p className="card-text text-dark">
            Hi, I'm Sauban Khan, a software developer with 1.5 years of experience in Python, Django, and React.
          </p>
          <p className="card-text text-dark">
            I have a strong passion for building web applications and creating efficient and scalable solutions. Throughout my career, I have gained expertise in developing backend systems using Python and Django, and I enjoy working with React to create interactive user interfaces.
          </p>
          <p className="card-text text-dark">
            I believe in continuously learning and staying up-to-date with the latest technologies and best practices in software development. I am dedicated to delivering high-quality code and collaborating with cross-functional teams to achieve project goals.
          </p>
          <p className="card-text text-dark">
            If you have any questions or would like to discuss a project, feel free to reach out to me. I am always excited to take on new challenges and contribute to innovative software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
