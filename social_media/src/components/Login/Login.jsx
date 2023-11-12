import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/login", user, {
        withCredentials: true
      })
      .then((response) => {
        console.log(response);
        const cookies = document.cookie;
        console.log(cookies);
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
<>
<Navbar/> 
<div className="min-h-screen flex items-center w-full justify-center bg-stone-950 ">

      <div className="bg-green-800 border border-blue-700 p-6 shadow-blue-600 hover:shadow-2xl hover:shadow-green-500   hover:scale-105 transition-all ease-linear duration-300 shadow-2xl  rounded-lg w-96 text-white">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-400 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="input w-full mt-2 px-3 py-2 rounded-md focus:ring focus:ring-green-500 focus:outline-none bg-green-900 text-white"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-400 text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="input w-full mt-2 px-3 py-2 rounded-md focus:ring focus:ring-green-500 focus:outline-none bg-green-900 text-white"
              placeholder="Your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full py-2 rounded-md bg-green-500 active:p-2  active:scale-95 focus:ring focus:ring-green-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
</>
  );
};

export default Login;
