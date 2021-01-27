import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
  routes: {
    [key: string]: any;
  }[];
  url: string;
}

const SettingsNav = (props: Props) => {
  return (
    <div className='flex flex-col justify-left bg-gray-200 w-1/6 absolute h-full'>
      <div>
        {props.routes.map(({ path, name }) => (
          <div
            className='pl-12 py-2 flex flex-col justify-left hover:bg-gray-400'
            key={path}>
            <Link to={`${props.url}${path}`}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsNav;
