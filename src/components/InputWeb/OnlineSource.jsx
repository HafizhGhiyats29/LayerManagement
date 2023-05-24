import React, {useState} from 'react';
import Select from 'react-select';
import FormInput from '../FormInput';
import useInput from '../../hooks/useInput';

const options = [
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

function OnlineSource({ url, urlChangeHandler }) {
    const [selectedType, setSelectedType] = useState('');
    const [urlValue, onChangeUrlValue] = useInput();
    const [fileName, onChageFileName] = useInput();

  const [urlLocked, setUrlLocked] = useState(false);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
  };
  
  return (
    <div className='flex gap-5 flex-col mt-7'>
        <FormInput inputPlaceholder={"File Name"} value={fileName} inputType={'text'} onChange={onChageFileName} />
      <Select value={selectedType} onChange={handleTypeChange} options={options} placeholder='Select File Type' className='block w-full p-2 border rounded' />
      <FormInput inputPlaceholder={"Drop Link Here"} inputType={"text"} value={urlValue} onChange={onChangeUrlValue}/>
    </div>
  );
};

export default OnlineSource