import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Mainbar = () => {
  return (
    <div className='w-full h-full'>
      <div className='main flex justify-around items-center container h-full'>
        <div className='search flex items-center'>
          <input
            type="text"
            className="rounded-l-lg py-2 px-4 w-full text-black font-semibold focus:outline-none border border-gray-300"
            placeholder="Search..."
          />
          <div className='bg-gradient-to-r from-green-300 active:scale-95 to-green-500 rounded-r-lg py-2 px-4 cursor-pointer hover:from-green-400 hover:to-green-600 active:from-green-500 active:to-green-700'>
            <FontAwesomeIcon icon={faSearch} className='text-white' />
          </div>
        </div>
        <div className="postbar">
          <div className='btn py-3 px-5 rounded-lg cursor-pointer bg-green-600 hover:bg-green-700 active:scale-95 active:bg-green-800'>
            + Add Post
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
