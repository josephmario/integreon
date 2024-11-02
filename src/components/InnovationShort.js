import React from 'react';
import banner2 from './img/02.jpg';
import Pfizer from './img/Pfizer.jpg';

const OnePartner = () => {
  return (
    <div className="container mx-auto flex" style={{ height: '520px' }}>
      <div className="relative w-3/5 h-full" style={{ background: '#f2f4f3' }}>
        <img src={banner2} alt="banner" className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
          <div className="text-left">
            <div className="mb-4 text-4xl">
              <span>Innovation</span>
            </div>
            <div className="mb-4 text-4xl font-extrabold">
              <span>Shorts</span>
            </div>
            <div className="mb-4 text-gray-700">
              <span>
                Insights on contract lifecycle management <br />
                delivered with a big helping of humor.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12" style={{ background: '#01c6bf' }}>
        <div className="flex justify-end">
          <div
            className="w-3/4 flex flex-col p-10 h-96"
            style={{ background: '#FFFFFF' }}
          >
            <div className="text-left mb-4 text-xl font-semibold">
              <span>
                "The cost and time savings Integreon's innovations have afforded
                us are incredibly valuable to our company."
              </span>
            </div>
            <div
              className="text-left mb-4 text-xl font-bold"
              style={{ color: '#01c6bf' }}
            >
              <span>Ed Gramling</span>
            </div>
            <div className="text-left mb-4 text-base font-semibold text-gray-600">
              <span>
                Discovery Counsel and Assistant General Counsel, Pfizer
              </span>
            </div>
            <div className="flex flex-col items-left mb-4">
              <img src={Pfizer} alt="Image 1" className="w-52 h-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePartner;
