import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Checkbox from "../Checkbox";

const WilayahDarat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();
  const [iconPosition, setIconPosition] = useState("down");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIconPosition(iconPosition === "down" ? "up" : "down");
  };

  return (
    <div className="">
      <div className="flex bg-white py-3 px-2 rounded-sm cursor-pointer" onClick={toggleMenu}>
        <p className="text-xs sm:text-sm">Wilayah Adminitrasi Darat</p>
        <div className="ml-auto">{iconPosition === "down" ? <FaChevronDown className="w-4 h-4" /> : <FaChevronUp className="w-4 h-4" />}</div>
      </div>
      {isOpen && (
        <div className="py-2 px-6 text-xs bg-[#FFFFFF] rounded-md">
          <ul>
            <li>
              <Checkbox label="Provinsi" type="checkbox" showCircle={true} circleColor="bg-green" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Kota / Kabupaten" type="checkbox" showCircle={true} circleColor="bg-blue-sky" reference={checkboxRef} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default WilayahDarat;
