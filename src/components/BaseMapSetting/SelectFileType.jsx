import React from 'react';
import {
  InputLabel, FormControl, MenuItem, Select,
} from '@mui/material';
import FormInput from '../FormInput';
// import FormInput from '../FormInput';

function SelectFileType({
  fileTypes = [], selectStyle, value, onChangeValue,
}) {
  console.log(fileTypes);
  return (
    <FormControl fullWidth>
      <InputLabel id="simple-select-label">File Type</InputLabel>
      <Select value={value} onChange={onChangeValue} labelId="simple-select-label" label="File Type" className={`rounded-xl ${selectStyle}`}>
        {fileTypes.map((fileType) => (
          <MenuItem value={fileType.value}>{fileType.label}</MenuItem>
        ))}
      </Select>
      {/* <FormInput inputType="file" inputPlaceholder="Choose File" /> */}
      <div className="w-full mt-6 rounded-lg flex justify-start">
        <label className="bg-black w-[55%] text-white px-2 py-2 rounded-tl-lg rounded-bl-lg text-md cursor-pointer">
          Choose File
          <input type="file" hidden />
        </label>
        <FormInput isDisabled inputStyle="rounded-tl-none rounded-bl-none" />
      </div>
    </FormControl>
  );
}

export default SelectFileType;
