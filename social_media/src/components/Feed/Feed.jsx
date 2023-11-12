import React from 'react';
import Card from '../Card/Card';
import m1 from '../../assets/monsterIMG/m1.png';
import m2 from '../../assets/monsterIMG/m2.png';
import m3 from '../../assets/monsterIMG/m3.png';
import m4 from '../../assets/monsterIMG/m4.png';
import m5 from '../../assets/monsterIMG/m5.png';
import m6 from '../../assets/monsterIMG/m6.png';
import m7 from '../../assets/monsterIMG/m7.png';

const imagePaths = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
];

const Feed = () => {
  return (
    <div className="w-full h-full">
      <div className="flex container flex-col h-full">
        <div className="headfeed fixed">
          <h1 className="text-lg font-semibold bg-transparent p-2 rounded-md opacity-75 text-white">Feed</h1>
        </div>
        <div className="mainfeed w-full h-full">
          <div className="card container flex justify-center gap-8 flex-row flex-wrap">
            {imagePaths.map((imagePath, index) => (
              <Card key={index} imagePath={imagePath} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
