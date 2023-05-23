import React from 'react';
import NavBaseMap from './NavBaseMap';

function NavbarMapSetting({ isActive }) {
  return (
    <section className={`${isActive && 'text-[rgba(0,0,255,.7)] '} mt-10`}>
      <nav className="flex items-center gap-8">
        <NavBaseMap navName="Map List" isActive />
        <NavBaseMap navName="Add Map" />
      </nav>
      <hr className="text-black" />
    </section>
  );
}

export default NavbarMapSetting;
