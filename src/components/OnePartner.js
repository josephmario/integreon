import React from 'react';
import Brain from './img/brain.jpg';
import Hammer from './img/hammer.jpg';

const OnePartner = () => {
  return (
    <>
      <div className="mx-auto flex h-4/5" style={{ height: '520px' }}>
        <div
          className="w-1/2 flex flex-col justify-start pr-4 ml-32"
          style={{ background: '#01c6bf' }}
        >
          <div className="w-10/12 py-20" style={{ background: '#FFFFFF' }}>
            {' '}
            <div className="text-left mb-4 text-4xl">
              <span>One partner,</span>
            </div>
            <div className="text-left mb-4 text-5xl font-bold">
              <span>many solutions</span>
            </div>
            <div className="text-left mb-4 text-gray-700">
              <span>
                We provide expertise and support for a range <br />
                of legal and business needs.
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start p-20">
          {' '}
          <div className="flex my-10 items-center">
            <img src={Hammer} alt="Hammer" className="w-28 h-20 mr-10" />
            <span
              className="text-left text-2xl font-bold"
              style={{ color: '#356ad5' }}
            >
              Legal & Regulatory Solutions <br />
              <p className="text-left mb-2 text-sm text-gray-700 font-normal">
                We help law firms and corporate legal teams transform <br />{' '}
                operational performance while reducing the burden <br />
                on in-house staff.
              </p>
              <span className="text-left text-xl font-bold underline text-black">
                Explore solutions
              </span>
            </span>
          </div>
          <div className="flex items-center">
            <img src={Brain} alt="Brain" className="w-28 h-20 mr-10" />
            <span
              className="text-left text-2xl font-bold"
              style={{ color: '#41bc3e' }}
            >
              Creative & Business Solutions <br />
              <p className="text-left mb-2 text-sm text-gray-700 font-normal">
                We help organization supercharge sales enabblement, <br />{' '}
                sharpen their competitive edge, and streamline compliance.
              </p>
              <span className="text-left text-xl font-bold underline text-black">
                Explore solutions
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePartner;
