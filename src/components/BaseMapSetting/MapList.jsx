import React from 'react';
import { Link } from 'react-router-dom';

function MapList ({isActive}) {
    return (
        <section className={`${isActive && 'text-blue after:block  after:contents-[""] after:h-1 after:w-24 after:bg-blue '} flex px-4`}>
            <Link to="/map-setting ">
                <h1 className="text-xl ml-2">Map List</h1>
            </Link>
            <Link to="/map-setting/add-map">
                <h1 className="text-xl ml-8">Add Map</h1>
            </Link>
        </section>
    )
}

export default MapList;