import React from 'react';

import {
  InputLabel, FormControl, MenuItem, Select,
} from '@mui/material';

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
    </FormControl>
  );
}

export default SelectFileType;
