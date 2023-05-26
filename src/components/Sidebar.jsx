import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { BsMap } from "react-icons/bs";
import { Link } from "react-router-dom";
import Teritorial from "./Layer/Teritorial";
import Batas from "./Layer/Batas";
import WilayahDarat from "./Layer/WilayahDarat";
import WilayahLaut from "./Layer/WilayahLaut";
import Navigasi from "./Layer/Navigasi";
import Cuaca from "./Layer/Cuaca";
import Udara from "./Layer/Udara";
import Laporan from "./Layer/Laporan";
import Vital from "./Layer/Vital";
import Radar from "./Layer/Radar";
import Button from "./Button";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div className={`fixed inset-y-0 left-0 z-10 w-72 bg-[#F5F5F5]/95 text-black px-5 pt-2 pb-4 transform transition duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <p className=" text-black text-2xl ">Layers</p>
        <div className="mt-3  max-h-[calc(84vh-72px)] scrollbar-thin scrollbar-track-[#F5F5F5] scrollbar-thumb-blue overflow-y-scroll">
          <ul className="space-y-3">
            <li>
              <Teritorial />
            </li>
            <li>
              <Batas />
            </li>
            <li>
              <WilayahDarat />
            </li>
            <li>
              <WilayahLaut />
            </li>
            <li>
              <Navigasi />
            </li>
            <li>
              <Cuaca />
            </li>
            <li>
              <Radar />
            </li>
            <li>
              <Udara />
            </li>
            <li>
              <Laporan />
            </li>
            <li>
              <Vital />
            </li>
          </ul>
          {/* <div className="scrollbar-thin scrollbar-track-[#F5F5F5] scrollbar-thumb-blue"></div> */}
        </div>
        <button className={`absolute top-12 -right-7 rounded-r-md transition duration-300 bg-white py-1 px-2 h-[35px] ${isSidebarOpen ? "opacity-80" : "opacity-0"}`} onClick={handleSidebarToggle} type="button">
          <FaTimes size={23} />
        </button>
      </div>
      <div className={`flex-1 h-screen overflow-y-auto duration-300 ${isSidebarOpen ? "ml-72" : ""}`}>
        <div className={`absolute bg-white rounded-md py-1 px-2 top-4 ml-3  opacity-80 `}>
          <button onClick={handleSidebarToggle} type="button">
            <FaBars size={20} />
          </button>
        </div>

        <div className="absolute  bg-white rounded-md py-1 top-[60px]  ml-3 w-36 opacity-80">
          <Link to="map-setting">
            <button className="flex py-1" type="button">
              <BsMap size={15} className="ml-2 mr-1 " />
              <p className=" text-[12px]">Map Settings</p>
            </button>
          </Link>
          <Link to="">
            <button className="flex border-y-[1px] border-[#A0A7AB] py-2 w-full" type="button">
              <SlSettings size={15} className="ml-2 mr-1 " />
              <p className=" text-[12px]">User Management</p>
            </button>
          </Link>
          <Link to="">
            <button className="flex py-1" type="button">
              <SlSettings size={15} className="ml-2 mr-1 " />
              <p className=" text-[12px]">Options</p>
            </button>
          </Link>
        </div>

        <img src="https://miro.medium.com/max/1200/1*1XFvsDgsLWnAL1GFnaDTOw.png" className="w-full h-full" alt="map contoh" />
      </div>
    </div>
  );
}

export default Sidebar;
