import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMap } from "./mapSlice";
import InputMap from "../../components/InputLocal/InputFile";
import axios from "axios";

const EditMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [fileInputType, setFileInputType] = useState("");
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

  const handleEditMap = () => {
    const formData = new FormData();
    formData.append("file", fileInputType);
    formData.append("name", input.name);
    axios
      .put(`http://192.168.6.177:8080/api/basemaps/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(editMap(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-40 mx-auto my-auto rounded-2xl">
      <div className="flex justify-between w-full items-center py-2">
        <Link
          to={"/"}
          className="text-blue-500 py-0.5 px-4 rounded-md transition-colors duration-300 mx-2"
        >
          Back
        </Link>
        <button
          className="border-2 text-white py-0.5 px-4 rounded-md transition-colors duration-300 mx-2"
          onClick={handleEditMap}
        >
          Done
        </button>
      </div>
      <div className="py-10 px-28 text-center w-full ">
        <h3 className="text-start mx-36">Add Local File</h3>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
            className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            placeholder="Write a name"
            autoFocus
          />
        </div>
        <InputMap fileInputType={handleFileInput} />
      </div>
    </div>
  );
};

export default EditMap;
