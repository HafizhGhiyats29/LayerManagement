import React, { useState } from 'react';
import Select from 'react-select';

const fileTypeOptions = [
  { value: '.geojson', label: 'GeoJSON(.geojson)' },
  { value: '.kml,', label: 'KML (.kml)' },
  { value: '.kmz', label: 'KMZ(.kmz)' },
  { value: '.geotiff', label: 'GeoTiff(.geotiff)' },
  { value: '.dted', label: 'DTED(.dted)' },
  { value: '.nitf', label: 'Nitf(.nitf)' },
  { value: '.tiff', label: 'Tiff(.tiff)' },
  { value: '.tif', label: 'Tif.(tif)' },
  { value: '.shp', label: 'Shapefile (.shp)' },
  { value: '.adrg', label: 'ADRG (.adrg)' },
  { value: '.jp2', label: 'JP2 (.jp2)' },
];

function UrlInput({ url, urlChangeHandler }) {
  const [selectedType, setSelectedType] = useState('');

  const [urlLocked, setUrlLocked] = useState(false);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };

  const handleLockUrl = () => {
    setUrlLocked(!urlLocked);
  };

  return (
    <div>
      <Select
        value={fileTypeOptions.find((option) => option.value === selectedType)}
        onChange={handleTypeChange}
        options={fileTypeOptions}
        placeholder="Select file or web service type"
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            neutral0: '#D9D9D9',
            primary25: '#999999',
            primary: 'black',
          },
        })}
        menuPlacement="top"
      />
      <div className="relative">
        <input
          className={`w-full p-2 bg-gray rounded-md mt-5 ${
            urlLocked ? 'text-gray-dark' : 'text-black'
          }`}
          type="url"
          placeholder="Drop link here"
          value={url}
          onChange={urlChangeHandler}
          required
          disabled={urlLocked}
        />
        <button
          type="button"
          className="bg-gray absolute right-4 top-6 px-7 p-1 text-black rounded-md border "
          onClick={handleLockUrl}
        >
          {urlLocked ? 'Cancel' : 'Add'}
        </button>
      </div>
    </div>
  );
}

export default UrlInput;
