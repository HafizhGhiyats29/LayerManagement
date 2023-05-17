import React, { useState } from 'react';
import { BsMap } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SideBarMapSetting () {
    const [isActive, setIsActive] = useState([
        {
            name: 'first',
            value: true
        },
        {
            name: 'second',
            value: false
        },
        {
            name: 'third',
            value: false
        }
    ]);
    
    const onClickSidebarHandler = ({target}) => {
        const nameValue = target.getAttribute('name');
        setIsActive(prevState => (
            prevState.map(el => {
                if(nameValue === el.name) {
                    console.log(nameValue === el.name);
                    el.value = true
                }
                el.value = false;
                return el;
            })
        ))
    }
    return (
            <section
            className="w-[5%] bg-blue-thin text-white flex flex-col justify-center items-center h-screen gap-5" >
                <div className={`${isActive[0].value && 'bg-white bg-opacity-40'} w-full flex justify-center items-center`} onClick={onClickSidebarHandler}>
                    <Link to="/map-setting">
                        <BsMap className="text-3xl" name="first"/>
                    </Link>
                </div>
                <div className={`${isActive[1].value && 'bg-white bg-opacity-40'} w-full flex justify-center items-center`} onClick={onClickSidebarHandler}>
                    <Link to="/map-setting">
                        <BsMap className="text-3xl" name="second"/>
                    </Link>
                </div>
                <div className={`${isActive[2].value && 'bg-white bg-opacity-40'} w-full flex justify-center items-center`} onClick={onClickSidebarHandler} >
                    <Link to="/map-setting">
                        <BsMap className="text-3xl" name="third"/>
                    </Link>
                </div>
                
            </section>
    )
}

export default SideBarMapSetting