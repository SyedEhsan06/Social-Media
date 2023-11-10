import React from "react";
import m7 from "../../assets/monsterIMG/m7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
const Card = ({ imagePath }) => {
  return (
    <div className="max-w-lg  overflow-hidden bg-[#000801] rounded-2xl  shadow-lg">
      {/* Card Image */}
      <div className="w-full h-40 relative overflow-hidden">
        <img
          src={imagePath}
          alt="Card Image"
          className="object-contain object-center w-full h-full"
        />

        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 text-2xl" />
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">super monster</div>
        <p className="text-gray-700 text-base">Gonna Eat U buddy.....</p>
      </div>

      {/* Card Footer (Comments and Bookmark Icons) */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex justify-between">
          {/* Comment Icon */}
          <div>
            <FontAwesomeIcon
              icon={faComment}
              className="text-gray-500 text-lg"
            />
            <span className="text-gray-500 ml-2"></span>
          </div>

          {/* Bookmark Icon */}
          <div>
            <FontAwesomeIcon
              icon={faBookmark}
              className="text-gray-500 text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
