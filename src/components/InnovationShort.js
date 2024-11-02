import React from 'react';
import banner2 from './img/02.jpg';
import Pfizer from './img/pfizerv2.jpg';

const OnePartner = () => {
  return (
    <div className="mx-auto flex" style={{ height: '520px' }}>
      <div className="w-3/5" style={{ background: '#f2f4f3' }}>
        <div className="relative flex justify-end">
          <img src={banner2} alt="banner" className="w-full h-80" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
            <div className="text-left ml-48" style={{ marginTop: '480px' }}>
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
          <button
            style={{ background: '#01c6bf' }}
            className="text-white mt-52 absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow"
          >
            &#10094;
          </button>
          <button
            style={{ background: '#01c6bf' }}
            className="text-white mt-52 absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow"
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="w-2/5 mr-32" style={{ background: '#01c6bf' }}>
        <div className="flex justify-end ">
          <div
            className="w-5/6 flex flex-col p-10 h-96"
            style={{ background: '#FFFFFF' }}
          >
            <div className="text-left mb-4 text-xl font-semibold">
              <span>
                "The cost and time savings <br /> Integreon's innovations have{' '}
                <br />
                afforded us are incredibly <br /> valuable to our company."
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
              <img src={Pfizer} alt="Image 1" className="w-48 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePartner;
