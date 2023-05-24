/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FormInput from '../FormInput';
import SelectFileType from '../BaseMapSetting/SelectFileType';

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

function OnlineSource({
  fileName,
  onChangeFileName,
  fileSource,
  onChangeFileSource,
  onChangeSelectFileTypeValue,
}) {
  return (
    <div className="flex gap-5 flex-col mt-7">
      <FormInput inputPlaceholder="File Name" value={fileName} inputType="text" onChange={onChangeFileName} />
      <SelectFileType onChangeValue={onChangeSelectFileTypeValue} fileTypes={options} />
      <FormInput inputPlaceholder="Drop Link Here" inputType="text" value={fileSource} onChange={onChangeFileSource} />
    </div>
  );
}

export default OnlineSource;
