import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import logo from './img/integreon_logo.jpg';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 justify-items-end">
        <div className="flex space-x-4 justify-center">
          <a
            href="mailto:example@example.com"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            example@example.com
          </a>
          <a
            href="tel:+123456789"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            +1 234 567 89
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <hr />
      <div className="container mx-auto flex items-center">
        <div className="w-3/12">
          <img src={logo} alt="Company Logo" className="h-24 mx-auto" />
        </div>
        <div className="w-9/12 p-2">
          <nav className="flex space-x-6">
            <a href="/whoWeAre" className="text-gray-600 hover:text-blue-600">
              Who We Are
            </a>
            <a href="/whatWeDo" className="text-gray-600 hover:text-blue-600">
              What We Do
            </a>
            <a href="/solution" className="text-gray-600 hover:text-blue-600">
              Solutions
            </a>
            <a
              href="/resourceCenter"
              className="text-gray-600 hover:text-blue-600"
            >
              Resource Center
            </a>
            <a href="/partner" className="text-gray-600 hover:text-blue-600">
              Partners
            </a>
            <a href="/career" className="text-gray-600 hover:text-blue-600">
              Careers
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
