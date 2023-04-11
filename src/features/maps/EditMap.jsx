import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMap } from "./mapSlice";
import axios from "axios";
import InputFile from "../../components/InputLocal/InputFile";
import NameInput from "../../components/NameInput";

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
    <div>
    <div className="flex justify-between my-3">
      <h3 className="font-bold">Edit Local Data</h3>
      <button
        type="submit"
        className="bg-blue py-1 px-9 border rounded-sm"
        onClick={handleEditMap}
      >
        Upload
      </button>
    </div>
    <div className="mb-4">
      <NameInput NameInput={handleChange} />
      <InputFile fileInputType={handleFileInput} />
    </div>
  </div>
  );
};

export default EditMap;
