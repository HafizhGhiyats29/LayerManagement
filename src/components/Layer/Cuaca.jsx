import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Checkbox from "../Checkbox";

const Cuaca = () => {
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
        <p className="text-xs sm:text-sm">Peta Cuaca</p>
        <div className="ml-auto">{iconPosition === "down" ? <FaChevronDown className="w-4 h-4" /> : <FaChevronUp className="w-4 h-4" />}</div>
      </div>
      {isOpen && (
        <div className="py-2 px-6 text-xs bg-[#FFFFFF] rounded-md">
          <ul>
            <li>
              <Checkbox label="Awan" type="checkbox" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Presitipasi" type="checkbox" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Hujan" type="checkbox" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Tekanan" type="checkbox" reference={checkboxRef} />
            </li>
            <li>
              <Checkbox label="Kontur Tekanan" type="checkbox" reference={checkboxRef} />
            </li>

            <li>
              <Checkbox label="Suhu" type="checkbox" reference={checkboxRef} />
            </li>

            <li>
              <Checkbox label="Angin" type="checkbox" reference={checkboxRef} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Cuaca;
