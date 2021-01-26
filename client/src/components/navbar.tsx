import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  toggleSidebar: () => void;
}

const Navbar = (props: Props) => {
  return (
    <div className='flex flex-row justify-between self-center px-4 py-1 bg-gray-400 border-b-2 border-gray-800'>
      {/* Toggle Sidebar */}
      <div className='flex self-center'>
        <div>
          <button onClick={props.toggleSidebar} className='focus:outline-none'>
            <svg
              viewBox='0 0 100 80'
              width='40'
              height='40'
              className='fill-current hover:text-purple-800'>
              <rect width='100' height='20'></rect>
              <rect y='30' width='100' height='20'></rect>
              <rect y='60' width='100' height='20'></rect>
            </svg>
          </button>
        </div>
        <div className='flex self-center font-bold text-xl px-4'>
          {/* can replace this with an icon later */}
          <Link to='/'>
            <h1>EbutUoy</h1>
          </Link>
        </div>
      </div>
      {/* Search bar */}
      <div className='py-2'>
        <input
          type='text'
          className='py-1 shadow-inner'
          style={{ paddingLeft: '12.5vw', paddingRight: '12.5vw' }}
        />
        {/* can add a search icon here later */}
        <button className='bg-gray-300 px-2 py-1'>Search</button>
      </div>
      {/* signup/login */}
      <div className='flex self-center'>
        {props.isAuthenticated ? (
          /**
           * upload video
           * notifications
           *
           * dropdown:
           * your channel
           * settings
           * help
           * send feedback
           *
           */
          <div>Account</div>
        ) : (
          <Link
            to='/authenticate'
            className='px-4 py-2 border-purple-600 border-2 text-purple-600 font-semibold'>
            {/*  can add a user icon here later */}
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;