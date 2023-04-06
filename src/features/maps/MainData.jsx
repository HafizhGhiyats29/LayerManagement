import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MapList from "./MapList";
import AddMap from "./AddMap";
import Search from "../../components/Seacrh";
import AddWeb from "./AddWeb";

const MainMap = () => {
  return (
    <div className="bg-blue-dark flex flex-col justify-center h-screen items-center text-white">
      <div className="flex justify-between items-center mt-1 py-5 px-14 w-full">
        <h3 className="text-2xl font-bold">Map Data Management</h3>
        <Link
          to={"/"}
          className="border-2 text-white py-3 font-bold text-xl px-8 rounded-md transition-colors duration-300"
        >
          Done
        </Link>
      </div>
      <div className="flex gap-7 w-full h-[30rem] mb-4">
        <div className="w-1/2 overflow-y-auto  bg-white py-4 px-6 ml-14  relative justify-between text-black rounded-xl">
          <div className="sticky top-0 py-4 bg-white rounded-md">
            <Search />
          </div>
          <div className="py-4">
            <MapList />
          </div>
        </div>
        <div className="w-1/2 rounded-xl bg-white py-4 px-6 mr-14 relative justify-between text-black">
        <AddMap />
        <AddWeb/>
        
        </div>
      </div>
    </div>
  );
};

export default MainMap;
