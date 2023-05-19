import React from 'react';
import { Link } from 'react-router-dom';

function MapList ({isActive}) {
    return (
        <section className={`${isActive && 'text-[rgba(0,0,255,.7)] after:block  after:contents-[""] after:h-[3px] after:w-24 after:bg-[rgba(0,0,255,.5)]'} mt-10`}>
            <Link to="/map-setting ">
                <h1 className="text-xl ml-2">Map List</h1>
            </Link>
        </section>
    )
}

export default MapList;