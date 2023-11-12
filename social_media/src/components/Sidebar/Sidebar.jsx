import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faBarChart,
  faMessage,
  faFeed,
  faSearch,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import m7 from "../../assets/monsterIMG/m7.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import axios from "axios";

const Sidebar = () => {
  const [cookies, setCookies] = useState("");
  const navigate = useNavigate();
  const [userdata, setUserData] = useState(null);



  const config = {
    headers: {
      Authorization: `Bearer ${cookies.split("=")[1]}`,
    },
  };

  useEffect(() => {
  
      axios
        .get("http://localhost:8000/api/user/me", {
          headers: {
            Authorization: `Bearer ${document.cookie.split("=")[1]}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUserData(response.data);
          if (!response) {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
          if (error.response.status === 401) {
            navigate("/login");
            logout();
          }
        });
        if(!document.cookie.split("=")[1]){
          navigate('/login')
        }
  }, []);
  

  const logout = (e) => {
    navigate('/login')
    e.preventDefault();
    const access_token = document.cookie.split("=")[1]; // Retrieve the access token from cookies
    console.log("Access token:", access_token);
    if (!access_token) {
      console.log("Access token not found");
      return;
    }

    axios
      .post("http://localhost:8000/api/user/logout", null, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          Cookies.remove("access_token");
          setCookies("");
          navigate("/login");
        } else {
          console.log("Logout error:", response.data);
        }
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  return (
    <motion.div
      className="flex flex-col bg-black text-green-500 selection:bg-transparent"
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
            initial={{ opacity: 0, z: -50, scale: 0.5 }}
            animate={{ opacity: 1, z: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="avatar-img flex items-center justify-center border-4 border-green-500 rounded-full p-1"
          >
            <img
              src={m7}
              className="object-contain h-28 w-28 rounded-full hover:scale-110 transition-all duration-300 ease-in-out"
              alt="Avatar"
            />
          </motion.div>
          <h3 className="text-lg font-semibold">
            {userdata ? userdata.name : "Loading..."}
          </h3>
        </div>
        <div className="stats flex space-x-4 p-4">
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Posts</span>
            <span className="text-lg font-bold text-white">
              {userdata ? userdata.posts.length : 0}
            </span>
          </div>
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Followers</span>
            <span className="text-lg font-bold text-white">
              {userdata ? userdata.followers.length : 0}
            </span>
          </div>
          <div className="stat flex flex-col items-center justify-center text-gray-400">
            <span className="text-base">Following</span>
            <span className="text-lg font-bold text-white">
              {userdata ? userdata.followings.length : 0}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="bottom h-2/4 flex flex-col items-center mt-4 selection:bg-transparent"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="navigation flex flex-col items-center gap-2 w-full">
          <motion.div
            className="nav w-full transition-all active:p-4 ease-linear hover:shadow-lg hover:shadow-current hover:bg-gray-800 p-3 flex items-center cursor-pointer duration-75 hover:text-red-500"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faFeed}
              className="text-2xl mr-4 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg transition duration-300 ease-in-out">Feed</h3>
          </motion.div>

          <motion.div
            className="nav w-full transition-all active:p-4 ease-linear hover:shadow-lg hover:shadow-current hover:bg-gray-800 p-3 flex items-center cursor-pointer duration-75 hover:text-sky-500"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-2xl mr-4 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg transition duration-300 ease-in-out">Explore</h3>
          </motion.div>

          <motion.div
            className="nav w-full transition-all active:p-4 ease-linear hover:shadow-lg hover:shadow-current hover:bg-gray-800 p-3 flex items-center cursor-pointer duration-75 hover:text-emerald-600"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faMessage}
              className="text-2xl mr-4 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg transition duration-300 ease-in-out">Messages</h3>
          </motion.div>

          <motion.div
            className="nav w-full transition.all active:p-4 ease-linear hover:shadow-lg hover:shadow-current hover:bg-gray-800 p-3 flex items-center cursor-pointer duration-75 hover:text-violet-500"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faBarChart}
              className="text-2xl mr-4 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg transition duration-300 ease-in-out">Stats</h3>
          </motion.div>

          <motion.div
            className="nav w-full transition-all active:p-4 hover:shadow-lg hover:shadow-current ease-linear hover:bg-gray-800 p-3 flex items.center cursor-pointer duration-75 hover:text-amber-400"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={faCog}
              className="text-2xl mr-4 transition duration-300 ease-in-out"
            />
            <h3 className="text-lg transition duration-300 ease-in-out">Settings</h3>
          </motion.div>

          <motion.div
            className="nav w.full transition-all active:p-4 ease-linear hover:animate-pulse hover:shadow-lg hover:shadow-red-700 hover:bg-red-800  p-3 flex items-center cursor-pointer duration-75 hover:text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }} 
            onClick={(e) => logout(e)}
          >
            <FontAwesomeIcon
              icon={faLock}
              className="text-2xl mr-4 transition duration-300 ease-in-out "
            />
            <h3 className="text-lg transition duration-300 ease-in-out">LogOut</h3>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
