import MapList from "../features/maps/MapList"; 
import { useState } from "react"; 
import Button from "./Button"; 
import { Link } from "react-router-dom"; 
import { FaBars } from "react-icons/fa"; 
import { FaUpload } from "react-icons/fa"; 

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-10 w-72 bg-gray-700 text-white px-8 py-4 transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="font-bold text-xl text-white">Map Management</h1>
        <ul>
          <li className="">
            <Link to={"/add-map"}>
              <Button>
                <FaUpload /> Upload
              </Button>
            </Link>
          </li>
          <li className="py-2">
            <MapList />
          </li>
        </ul>
      </div>
     
      <div
        className={`flex-1 h-screen overflow-y-auto duration-300 ${
          isSidebarOpen ? "ml-72" : ""
        }`}
      >
        <div className="absolute bg-gray-200 py-4 px-4">
          <button
            className="text-gray-700 hover:text-gray-800 focus:outline-none focus:text-gray-800"
            onClick={handleSidebarToggle}
          >
            <FaBars />
          </button>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.1QoHuHNXF02uuprZfpIcgwHaEd?pid=ImgDet&rs=1"
          className="w-full h-full"
          alt="map"
        />{" "}
      </div>
    </div>
  );
}

export default Sidebar;
