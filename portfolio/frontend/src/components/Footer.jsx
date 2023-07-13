import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import '../static/css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container className='footer-content'>
        <Row>
          <Col md={6}>
            <p>&copy; 2023 Portfolio Sauban Khan . All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={35}/>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={35}/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35}/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
