import React, { useState } from 'react';
import { BsMap } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SideBarMapSetting () {
    const [isActive, setIsActive] = useState(false);
    
    const onClickSidebarHandler = () => {
        setIsActive(prevState => !prevState);
    }
    return (
        <article className="map-setting sidebar flex">
            <section
            className="w-[5%] bg-blue-thin text-white flex flex-col justify-center items-center h-screen gap-5" >
                <div className={`${isActive && 'bg-white bg-opacity-40'} w-full flex justify-center items-center`} onClick={onClickSidebarHandler}>
                    <Link to="/map-setting">
                        <BsMap className="text-3xl"/>
                    </Link>
                </div>
                <div className='w-full flex justify-center items-center' onClick={onClickSidebarHandler}>
                    <Link to="/map-setting">
                        <BsMap className="text-3xl"/>
                    </Link>
                </div>
                <div className='w-full flex justify-center items-center' onCLick={onClickSidebarHandler}>
                    <Link to="/map-setting">
                        <BsMap className="text-3xl"/>
                    </Link>
                </div>
            </section>
            <section className="w-full"></section>
        </article>
    )
}

export default SideBarMapSetting