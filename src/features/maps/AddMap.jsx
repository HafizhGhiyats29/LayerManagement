import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMap } from "./mapSlice";
import InputMap from "../../components/InputMap";
import InputField from "../../components/InputField";
import axios from "axios";

const AddMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fileInputType, setFileInputType] = useState("");
  const [values, setValues] = useState({
    name: "",
  });
  const [selectedFile] = useState(null);

  const handleOptionChange = (selectedOption) => {
    setFileInputType(selectedOption.value);
  };

  const handleAddMap = () => {
    const formData = new FormData();
    formData.append("fileInputType", fileInputType);
    formData.append("name", values.name);
    formData.append("file", selectedFile);

    axios
      .post("http://192.168.6.191:8081/api/maps", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        dispatch(addMap(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-40 mx-auto my-auto rounded-2xl">
      <form encType="multipart/form-data" className="bg-blue-400 flex justify-between w-full items-center py-2">
        <Link to={"/"}>
          <button className="bg-white hover:bg-blue-200 text-blue-500 py-0.5 px-4 rounded-md transition-colors duration-300 mx-2">
            Back
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 border-2 text-white py-0.5 px-4 rounded-md transition-colors duration-300 mx-2"
          onClick={handleAddMap}
        >
          Done
        </button>
      </form>

      <div className="py-10 px-28 text-center w-full bg-slate-300">
        <h3 className="text-start mx-36">Add Local File</h3>
        <InputField
          label="Name"
          inputProps={{ type: "text", placeholder: "Enter a name" }}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
        />
        <InputMap handleOptionChange={handleOptionChange} />
      </div>
    </div>
  );
};

export default AddMap;
