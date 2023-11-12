// Hero.js

import React from "react";
import "./Hero.css";
import Sidebar from "../Sidebar/Sidebar";
import Mainbar from "../Mainbar/Mainbar";
import Storybar from "../Storybar/Storybar";
import Feed from "../Feed/Feed";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex bg-black overflow-hidden selection:bg-transparent">
        <div className="sidebar rounded-xl w-1/5">
          <Sidebar />
        </div>
        <div className="feed-container w-4/5 h-[100vh] rounded-lg bg-black text-white">
          <div className="main container flex flex-col w-full h-full">
            <div className="mainbar h-1/6 border border-stone-950 m-1">
              <Mainbar />
            </div>
            <div className="storybar h-1/6 border border-stone-950 m-1 overflow-x-auto">
              <Storybar />
            </div>
            <div className="feed h-2/3 border border-stone-950 m-1 overflow-y-auto">
              <Feed />
            </div>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Hero;
