import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MapList from './MapList';
import BaseMapCategories from './BaseMapCategories';
import BaseMapSearch from './BaseMapSearch';

function BaseMapContent() {
  return (
    <section className="py-12 px-6 w-full">
      <article className="flex items-center justify-between px-6">
        <h1 className="font-semibold text-3xl">Base Map Setting</h1>
        <Link to="/" className="flex items-center text-lg">
          <span>Back to main map</span>
          <span className="text-2xl"><MdKeyboardArrowRight /></span>
        </Link>
      </article>
      <article>
        <section>
          <MapList isActive />
        </section>
        <section className="flex gap-6 mt-6">
          <BaseMapCategories />
          <BaseMapSearch />
        </section>
      </article>

    </section>
  );
}

export default BaseMapContent;
