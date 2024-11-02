import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import integblue from './img/INTEGBLUEFOOTER.jpg';
import toprank from './img/TOPRANK.jpg';

const Footer = () => {
  return (
    <footer className=" shadow" style={{ background: '#0e1821' }}>
      <div className="mx-auto p-6">
        <div className="flex">
          <div className="w-1/4 p-4">
            {' '}
            <div className="flex flex-col items-center">
              <img src={integblue} alt="Image 1" className="mb-2 w-32 h-auto" />
              <img src={toprank} alt="Image 2" className="mb-2 w-32 h-auto" />
            </div>
            <div className="ml-32 mt-10">
              <div>
                <span className="flex items-center text-white text-2xl font-extrabold hover:text-blue-600 p-2">
                  Contact Us
                </span>
              </div>
              <div>
                <a
                  href="tel:+123456789"
                  className="flex items-center text-white text-xl hover:text-blue-600 p-2"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-1" />
                  1-866-312-7023
                </a>
                <a
                  href="mailto:example@example.com"
                  className="flex items-center text-white text-xl hover:text-blue-600 p-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                  info@Integreon.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/4 py-24">
            <div className="text-left text-base text-white">
              <span>
                Integreon is a trusted provider of legal and business outsourced
                services to corporations and law firms worldwide. Through our
                global delivery centers, we provide expert support for a range
                of legal, regulatory, creative design, and administrative needs,
                with a proven ability to transform our clients' business
                performance.
              </span>
            </div>
            <div className="text-left mt-20">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 p-2 text-white"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 p-2 text-white"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 p-2 text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div className="w-1/4 p-5 mt-16">
            {' '}
            <div>
              <span className="flex items-center text-white text-lg font-extrabold hover:text-blue-600 p-2">
                Quick Links
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Who We Are
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Legal & Regulatory Solutions
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Creative & Business Solutions
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Resource Center
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Careers
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Contact
              </span>
            </div>
          </div>
          <div className="w-1/4 p-5 mt-16">
            {' '}
            <div>
              <span className="flex items-center text-white text-lg font-extrabold hover:text-blue-600 p-2">
                Stay in the loop
              </span>
            </div>
            <div>
              <span className="flex items-center text-white text-base hover:text-blue-600 p-2">
                Join our mailing list
              </span>
            </div>
            <div className="mx-auto">
              <div className="flex">
                <div className="p-4">
                  <form className="flex flex-col">
                    <label className="mb-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="mt-1 p-4 rounded bg-[#17212b] text-white"
                      />
                    </label>
                    <label className="mb-2">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="mt-1 p-4 rounded bg-[#17212b] text-white"
                      />
                    </label>
                    <label className="mb-2">
                      <input
                        type="email"
                        placeholder="Work Email"
                        className="mt-1 p-4 rounded bg-[#17212b] text-white"
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-4 bg-blue-500 text-white p-2 rounded"
                      style={{ backgroundColor: '#01c6bf' }}
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full text-white h-24 p-6"
        style={{ backgroundColor: '#17212b' }}
      >
        <span>
          Locations | Cookie Policy | Privacy Policy | Anti-Slavery Statement |
          Terms of Use | Disclaimer | Legal Notice | Discrimination Policy
        </span>
        <br />
        <span>
          @Integreon, Inc. or all of its affiliates. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
