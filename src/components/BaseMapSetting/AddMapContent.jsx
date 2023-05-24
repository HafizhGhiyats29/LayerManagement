import React from 'react';
import OnlineSource from '../InputWeb/OnlineSource';
import NavigationLink from '../NavigationLink';

const options = [
  {
    name: 'Local Source',
    isActive: true,
  },
  {
    name: 'Remote Sources',
    isActive: false,
  },
];

function AddMapContent({ title }) {
  return (
    <div className="w-1/3 mx-auto bg-white py-10 px-4">
      <h1>{title}</h1>
      <NavigationLink options={options} />
      <OnlineSource />
    </div>
  );
}

export default AddMapContent;
