import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMap } from "./mapSlice";
import InputMap from "../../components/InputMap";
import InputName from "../../components/InputName";
import axios from "axios";
import InputTitle from "../../components/InputTitle";

const AddMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fileInputType, setFileInputType] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  const handleOptionChange = (selectedOption) => {
    setFileInputType(selectedOption?.value ?? null);
  };
  const handleNameInputChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleTitleInputChange = (e) => {
    setTitleInput(e.target.value);
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
    formData.append("name", nameInput);
    formData.append("title", titleInput);
  
    axios
      .post("http://192.168.6.177:8080/api/basemaps/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch(addMap(response.data));
          navigate("/");
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
    <div className="relative flex flex-col items-center justify-center py-20 px-40 mx-auto my-auto rounded-2xl">
      <form
        encType="multipart/form-data"
        className="bg-blue-400 flex justify-between w-full items-center py-2"
      >
        <Link to={"/"}>
          <button className="bg-white hover:bg-blue-200 text-blue-500 py-0.5 px-4 rounded-md transition-colors duration-300 mx-2">
            Back
          </button>
        </Link>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 border-2 text-white py-0.5 px-4 rounded-md transition-colors duration-300 mx-2"
          onClick={handleAddMap}
        >
          Done
        </button>
      </form>
      <div className="py-10 px-28 text-center w-full bg-slate-300">
        <h3 className="text-start mx-36">Add Local File</h3>
        <InputName value={nameInput} onChange={handleNameInputChange} />
        <InputTitle  value={titleInput} onChange={handleTitleInputChange} />
        <InputMap fileInputType={handleFileInput} />
      </div>
    </div>
  );
};

export default AddMap;
