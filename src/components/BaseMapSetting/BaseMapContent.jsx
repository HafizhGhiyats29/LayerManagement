import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import useInput from '../../hooks/useInput';
import NavbarMapSetting from './NavbarMapSetting';
import MapListContent from './MapListContent';

function BaseMapContent() {
  const [searchKeywordValue, onSearchKeywordValueChange] = useInput();
  return (
    <section className="py-12 px-6 w-11/12">
      <article className="flex items-center justify-between px-6">
        <h1 className="font-semibold text-3xl">Base Map Setting</h1>
        <Link to="/" className="flex items-center text-lg">
          <span>Back to main map</span>
          <span className="text-2xl"><MdKeyboardArrowRight /></span>
        </Link>
      </article>
      <article>
        <header>
          <NavbarMapSetting isActive />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MapListContent searchKeywordValue={searchKeywordValue} onSearchKeywordValueChange={onSearchKeywordValueChange} />} />
          </Routes>
        </main>
      </article>

    </section>
  );
}

export default BaseMapContent;
