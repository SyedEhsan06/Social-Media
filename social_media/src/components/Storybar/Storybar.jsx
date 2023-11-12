import React from "react";
import './Storybar.css';

import m1 from '../../assets/monsterIMG/m1.png';
import m2 from '../../assets/monsterIMG/m2.png';
import m3 from '../../assets/monsterIMG/m3.png';
import m4 from '../../assets/monsterIMG/m4.png';
import m5 from '../../assets/monsterIMG/m5.png';
import m6 from '../../assets/monsterIMG/m6.png';
import m7 from '../../assets/monsterIMG/m7.png';
import m8 from '../../assets/monsterIMG/m8.png';
import m9 from '../../assets/monsterIMG/m9.png';

const imagePaths = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m7,
  m8,
  m9,
  m1,
  m9,
  m7,
  m8,
  m9,
  m1,
];

const Storybar = () => {
  return (
    <div className="w-full h-full flex">
      <div className="container flex flex-col overflow-y-hidden">
        <div className="head">
          <h1 className="font-semibold text-lg">Storybar</h1>
        </div>
        <div className="down w-full flex">
            <div className="Addring flex justify-center items-center font-bold active:scale-90 selection:bg-transparent active:p-4 hover:bg-green-200 hover:text-green-950 transition-all ease-in duration-300 ml-1 border w-16 h-16 rounded-full">+</div>
          <div className="ringCom  border-none container gap-2  overflow-x-auto whitespace-nowrap" >
            {imagePaths.map((imagePath, index) => (
              <div className="rings ml-2  w-16 h-16 rounded-full inline-block hover:scale-110 transition-all ease-linear duration-150 active:scale-95 hover:animate-pulse" key={index}>
                <img src={imagePath} alt={`Story ${index}`} className="w-full h-full bg-black object-contain rounded-full" />
              </div>
            ))}a
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storybar;
