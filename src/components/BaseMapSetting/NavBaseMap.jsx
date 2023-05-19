import React from 'react';
import { Link } from 'react-router-dom';

function NavBaseMap({ isActive, navName }) {
  return (
    <Link to="/map-setting" className={`${isActive ? 'after:block  after:contents-[""] after:h-[3px] after:w-[4.5rem] after:bg-[rgba(0,0,255,.5)]' : 'text-black'}`}>
      <h1 className="">{navName}</h1>
    </Link>
  );
}

export default NavBaseMap;
