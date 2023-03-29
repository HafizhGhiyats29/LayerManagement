import { useState } from "react";
import Select from "react-select";

const options = [
  { value: ".geojson", label: "GeoJSON(.geojson)" },
  { value: ".kml,.kmz", label: "KML or KMZ (.kml,.kmz)" },
  { value: ".csv", label: "CSV(.csv)" },
  { value: ".czml", label: "CZML(.czml)" },
  { value: ".gpx", label: "GPX(.gpx)" },
  { value: ".json,json5", label: "Terria Catalog(.json,.json5)" },
  { value: ".xml", label: "GeoRSs(.xml)" },
  { value: ".glb", label: "gLTf.(glb)" },
  { value: ".shp", label: "Shapefile (.shp)" },
  { value: ".zip", label: "Zip (.zip)" },
];

const InputMap = ({fileInputType}) => {

  const [selectedOption, setSelectedOption] = useState("");
  const [inputType,setFileInputType] = useState("");

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFileInputType(selectedOption.value);
  };


  return (
    <div className="my-5">
      <p className="text-start mx-36 py-3">Step 1: Select file type</p>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        placeholder="File type"
        className="w-7/12 mx-auto text-start"
      />
      <p className="text-start mx-36 py-3">Step 2: Select file</p>

      <label htmlFor="fileInput" className="cursor-pointer">
        <div className=" w-7/12 bg-blue-400 hover:bg-blue-500 text-white py-2 mx-auto rounded-md transition-colors duration-300">
          Browse...
        </div>
      </label>
      <input
        className="hidden"
        id="fileInput"
        type="file"
        accept={inputType} 
        onChange = {fileInputType}
      />
    </div>
  );
};

export default InputMap;