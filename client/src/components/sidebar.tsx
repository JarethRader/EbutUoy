import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  routes: {
    [key: string]: any;
  }[];
  isAuthenticated: boolean;
}

const Sidebar = (props: Props) => {
  return (
    <div className='flex flex-col justify-left bg-gray-200 xl:w-1/6 lg:w-1/5 w-full absolute'>
      <div className='flex flex-col-reverse'>
        {props.routes.slice(7, 12).map(({ path, name }) => (
          //   I can add an icon for each route later
          <div
            key={name}
            className='xl:pl-12 pl-8 py-2 flex justify-left hover:bg-gray-400 '>
            <Link to={path}>{name}</Link>
          </div>
        ))}
      </div>

      <div className='my-2 py-2 border-t-2 border-b-2 border-gray-800 w-full'>
        {props.isAuthenticated ? (
          <div>
            {props.routes.slice(0, 3).map(({ path, name }) => (
              //   I can add an icon for each route later
              <div
                key={name}
                className='xl:pl-12 pl-8 py-2 flex justify-left hover:bg-gray-400 '>
                <Link to={path}>{name}</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className='w-full flex self-center justify-left xl:pl-12 pl-8'>
            <Link
              to='/authenticate'
              className='px-4 py-2 border-purple-600 border-2 text-purple-600 font-semibold '>
              {/* I can add a user icon here later */}
              Sign In
            </Link>
          </div>
        )}
      </div>

      {props.routes.slice(4, 7).map(({ path, name }) => (
        //   I can add an icon for each route later
        <div
          key={name}
          className='xl:pl-12 pl-8 py-2 flex justify-left hover:bg-gray-400 '>
          <Link to={path}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
