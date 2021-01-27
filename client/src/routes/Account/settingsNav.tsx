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
    <div className='flex flex-col justify-left bg-gray-200 xl:w-1/6 lg:w-1/5 w-full absolute'>
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
