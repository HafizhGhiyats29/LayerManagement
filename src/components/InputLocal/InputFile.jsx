import { useState } from "react";
import Select from "react-select";

const options = [
  { value: ".geojson", label: "GeoJSON(.geojson)" },
  { value: ".kml,", label: "KML (.kml)" },
  { value: ".kmz", label: "KMZ(.kmz)" },
  { value: ".geotiff, .tif , .tiff", label: "GeoTiff(.geotiff, .tif, .tiff)" },
  { value: ".dted", label: "DTED(.dted)" },
  { value: ".nitf", label: "Nitf(.nitf)" },
  { value: ".shp", label: "Shapefile (.shp)" },
  { value: ".adrg", label: "ADRG (.adrg)" },
  { value: ".jp2", label: "JP2 (.jp2)" },
];

const InputFile = ({ fileInputType }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputType, setFileInputType] = useState("");

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFileInputType(selectedOption.value);
  };

  return (
    <div className="">
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        placeholder="Select file type"
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            neutral0: "#D9D9D9",
            primary25: "#999999",
            primary50: "#5b5b5b",
            primary: "black",
          },
        })}
      />

      <div className="">
        <label
          htmlFor="fileInput"
          placeholder="Select File"
          className="cursor-pointer relative top-5 bg-gray py-1 px-5 flex items-center rounded-md justify-end"
        >
          <p className=" py-1 px-4 border rounded-md">Browse</p>
        </label>
        <input
          className="absolute bottom-64 left-9 text-gray-dark"
          id="fileInput"
          type="file"
          accept={inputType}
          onChange={fileInputType}
        />
      </div>
    </div>
  );
};

export default InputFile;
