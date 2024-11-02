import React from 'react';
import ThreePeople from './img/threepeople.jpg';
import Language from './img/language.jpg';
import Continents from './img/continents.jpg';
import SharedMission from './img/SharedMission.jpg';

const GlobalTeam = () => {
  return (
    <div
      className="container mx-auto p-4 flex"
      style={{ backgroundColor: '#0e1821' }}
    >
      <div className="w-35 p-2">
        <div className="flex items-center">
          <img src={ThreePeople} alt="ThreePeople" className="w-32 h-28 mr-2" />
          <span
            className="p-2 font-black text-6xl"
            style={{ color: '#01c6bf' }}
          >
            3,500 <br />
            <span className="p-2 text-2xl text-white">Professional</span>
          </span>
        </div>
        <div className="flex items-center">
          <img src={Language} alt="Language" className="w-32 h-28 mr-2" />
          <span
            className="p-2 font-black text-6xl"
            style={{ color: '#01c6bf' }}
          >
            50+ <br />
            <span className="p-2 text-2xl text-white">Languages</span>
          </span>
        </div>
      </div>

      <div className="w-35 p-2">
        <div className="flex items-center">
          <img src={Continents} alt="Continents" className="w-32 h-28 mr-2" />
          <span
            className="p-2 font-black text-6xl text-left"
            style={{ color: '#01c6bf' }}
          >
            3 <br />
            <span className="text-2xl text-white">Continents</span>
          </span>
        </div>
        <div className="flex items-center">
          <img
            src={SharedMission}
            alt="SharedMission"
            className="w-32 h-28 mr-2"
          />
          <span
            className="p-2 font-black text-6xl text-left"
            style={{ color: '#01c6bf' }}
          >
            1 <br />
            <span className="text-2xl text-white">Shared Mission</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 text-white text-4xl">
        <span>
          A global team{' '}
          <span className="font-bold">
            <br />
            like no other
          </span>
        </span>
      </div>
    </div>
  );
};

export default GlobalTeam;
