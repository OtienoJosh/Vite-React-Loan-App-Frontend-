import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="container mt-4">
      <p>© 2023 Loan Web App. All rights reserved.</p>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Terms of Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-2">
        <p>Contact us:</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@loanwebapp.com</p>
        <p>Follow us:</p>
        <div className="social-media-icons">
          {/* Add social media icons */}
          <a href="#" className="social-media-icon">
            <FaFacebook className="h3" />
          </a>
          <a href="#" className="social-media-icon">
            <FaTwitter className="h3" />
          </a>
          <a href="#" className="social-media-icon">
            <FaLinkedin className="h3" />
          </a>
          <a href="#" className="social-media-icon">
            <FaInstagram className="h3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
