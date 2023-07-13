import React from 'react';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import '../static/css/cards.css';
import '../static/css/buttons.css';

const Resume = () => {
  const handleDownloadResume = () => {
    window.open('http://localhost:8000/resume-download/', '_blank');
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-md-6">
        <div className="card-body">
          <h2 className="card-title">Resume</h2>
          <p className="card-text">
            Here you can find my resume and LinkedIn profile.
          </p>
          <div className="d-flex justify-content-between">
            <a
              href="https://www.linkedin.com/in/sauban-khan"
              className="btn1 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="me-2" />
              LinkedIn
            </a>
            <button className="btn1" onClick={handleDownloadResume}>
              <FaFileDownload className="me-2" />
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;





