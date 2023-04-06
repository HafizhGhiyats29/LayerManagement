import React, { useState } from "react";
import Select from "react-select";

const fileTypeOptions = [
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "audio", label: "Audio" },
];
const UrlInput = ({ onURLInputChange }) => {
  const [selectedType, setSelectedType] = useState("");
  const [url, setURL] = useState("");

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  const handleURLChange = (e) => {
    setURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onURLInputChange(url, selectedType);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Select
        value={fileTypeOptions.find((option) => option.value === selectedType)}
        onChange={handleTypeChange}
        options={fileTypeOptions}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            neutral0: "#D9D9D9",
            primary25: "#999999",
            primary: "black",
          },
        })}
      />
      <input
        className="w-full p-2 bg-gray rounded-md mt-5"
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={handleURLChange}
        required
      />
    </form>
  );
};

export default UrlInput;
