import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMap } from "./mapSlice";
import axios from "axios";
import NameInput from "../../components/NameInput";
import InputFile from "../../components/InputLocal/InputFile";

const AddMap = () => {
  const dispatch = useDispatch();

  const [fileInputType, setFileInputType] = useState(null);
  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInput = (e) => {
    setFileInputType(e.target.files[0]);
  };
  const handleAddMap = (e) => {
    e.preventDefault();
    if (!fileInputType) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileInputType);
    formData.append("name", input.name);

    axios
      .post("http://192.168.6.177:8080/api/basemaps/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(addMap(response.data));
          alert("File successfully uploaded!");
        } else {
          alert("Failed to add map. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add map. Please try again.");
      });
  };

  return (
    <form
      encType="multipart/form-data"
    >
      <div className="flex justify-between my-3">
        <h3 className="font-bold">Add Local Data</h3>
        <button
          type="submit"
          className="bg-blue py-1 px-9 font-bold border rounded-full"
          onClick={handleAddMap}
        >
          Upload
        </button>
      </div>
      <div className="mb-4">
        <NameInput NameInput={handleChange} />
        <InputFile fileInputType={handleFileInput} />
      </div>
    </form>
  );
};

export default AddMap;
