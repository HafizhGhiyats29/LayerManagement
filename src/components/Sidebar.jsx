import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SlSettings, SlArrowLeft } from "react-icons/sl";
import Button from "./Button";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-10 w-72 bg-gray text-black px-6 py-6 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-full h-full rounded-sm ">
          <h1 className="font-bold text-black text-xl px-6 py-2">Layers</h1>
          <ul>
            <li>
              <div className="text-black grid justify-center text-center py-4 ">
                <Button> Tes maps</Button>
                <Button> Tes maps</Button>
                <Link to={"/add-data"}>
                  <Button>Data Map</Button>
                </Link>
              </div>
            </li>
          </ul>
          <button className="absolute flex text-black bottom-0 mb-6 py-4 px-6">
            <SlSettings className="mr-2 text-2xl font-bold" />
            Map Setting
          </button>
        </div>
        <button
        className={`absolute top-7 -right-6 transition duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleSidebarToggle}
      >
        <SlArrowLeft size={25} className="bg-white py-1 px-2" />
      </button>      
      </div>
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          isSidebarOpen ? "ml-72" : ""
        }`}
      >
        <div className="absolute bg-white rounded-md py-2 px-2 top-6 ml-9">
          <button onClick={handleSidebarToggle}>
            <FaBars />
          </button>
        </div>
        <img
          src="https://miro.medium.com/max/1200/1*1XFvsDgsLWnAL1GFnaDTOw.png"
          className="w-full h-full"
          alt="map contoh"
        />
      </div>
    </div>
  );
}

export default Sidebar;
