import React from 'react';
import banner from './img/01.jpg';

const DoMore = () => {
  return (
    <>
      <div
        className="container mx-auto p-7 flex"
        style={{ backgroundColor: '#fbf9fa' }}
      >
        <div className="w-1/3 flex flex-col justify-start pr-4">
          {' '}
          <div className="text-left mb-4 text-6xl">
            <span>Do More.</span>
          </div>
          <div className="text-left mb-4 text-6xl font-bold">
            <span>Do it better.</span>
          </div>
          <div className="text-left mb-4 text-gray-700">
            <span>
              Integreon, the global outsourcing partner that empowers
              corporations and law firms to meet today's complex legal and
              business challenges and achieve more.
            </span>
          </div>
          <div className="text-left font-bold">
            <span>More speed and agility. More efficiency.</span>
          </div>
          <div className="text-left font-bold mb-4">
            <span>More operational excellence. More business growth.</span>
          </div>
          <div className="text-left font-bold mb-4">
            <button
              style={{ backgroundColor: '#01c6bf' }}
              className="text-white font-semibold py-2 px-6 rounded hover:bg-teal-600 transition duration-200"
            >
              Get to know us
            </button>
          </div>
        </div>
        <div className="w-3/5">
          {' '}
          <img src={banner} alt="banner" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default DoMore;
