import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faBarChart,
  faMessage,
  faFeed,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import m7 from "../../assets/monsterIMG/m7.png";

const Sidebar = () => {
  return (
    <motion.div
      className="flex flex-col  bg-black text-green-500"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section */}
      <motion.div
        className="top rounded-xl h-1/2 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="avatar flex flex-col items-center">
          <motion.div
          initial={{ opacity: 0, z: -50,scale:0.5 }}
          animate={{ opacity: 1, z: 0 ,scale:1}}
          transition={{ duration: 1.5,delay:0.5 }}
          className="avatar-img flex items-center justify-center border-4  border-green-500 rounded-full p-1"

          >
          <img
            src={m7}
            className="object-contain h-28 w-28 rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
            alt="Avatar"
          />
          </motion.div>
          <h3 className="text-lg font-semibold">BlueMon</h3>
        </div>
        <div className="stats flex space-x-4 p-4">
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Posts</span>
            <span className="text-lg font-bold text-white">0</span>
          </div>
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Followers</span>
            <span className="text-lg font-bold text-white">0</span>
          </div>
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Following</span>
            <span className="text-lg font-bold text-white">0</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="bottom h-2/4 flex flex-col items-center mt-4"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="navigation  flex flex-col items-center gap-4 w-full">
          {["Feed", "Explore", "Messages", "Stats", "Settings"].map(
            (text, index) => (
              <motion.div
                key={index}
                className={`nav w-full transition-all active:p-4 ease-linear hover:bg-gray-800 p-3 flex items-center cursor-pointer duration-75  ${
                  index === 0
                    ? "hover:text-red-500"
                    : index === 1
                    ? "hover:text-sky-500"
                    : index === 2
                    ? "hover:text-green-800"
                    : index === 3
                    ? "hover:text-violet-500"
                    : "hover:text-amber-400"
                }`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.1 * index }}

              >
                <FontAwesomeIcon
                  icon={
                    index === 0
                      ? faFeed
                      : index === 1
                      ? faSearch
                      : index === 2
                      ? faMessage
                      : index === 3
                      ? faBarChart
                      : faCog
                  }
                  className="text-2xl mr-4 transition duration-300 ease-in-out"
                />
                <h3 className="text-lg transition duration-300 ease-in-out">
                  {text}
                </h3>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
