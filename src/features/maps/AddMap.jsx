import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMap } from "./mapSlice";
import InputMap from "../../components/InputLocal/InputFile";
import axios from "axios";
import MapList from "./MapList";
import NameInput from "../../components/InputLocal/NameInput";

const AddMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fileInputType, setFileInputType] = useState(null);
  const [input, setInput] = useState();

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
    <form
      encType="multipart/form-data"
      className="bg-blue-dark flex flex-col justify-center h-screen items-center text-white"
    >
      <div className="flex justify-between items-center mt-1 py-5 px-14 w-full">
        <h3 className="text-2xl font-bold">Map Data Management</h3>
        <Link
          to={"/"}
          className="border-2 text-white py-3 font-bold text-xl px-8 rounded-md transition-colors duration-300"
        >
          Done
        </Link>
      </div>
      <div className="flex gap-7 w-full h-[30rem] mb-4">
        <div className="w-1/2 rounded-md bg-white p-8 ml-14 relative justify-between text-black">
          <MapList />
        </div>
        <div className="w-1/2 rounded-md bg-white p-8 mr-14 relative justify-between text-black">
          <div className="">
            <h3 className="">Add Local Data</h3>
            <button type="submit" className="bg-blue" onClick={handleAddMap}>
              Upload
            </button>
            <div className="mb-4">
              <NameInput NameInput={handleChange} />
              <InputMap fileInputType={handleFileInput} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMap;
