import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMap } from "./mapSlice";
import InputMap from "../../components/InputMap";
import InputName from "../../components/InputName";
import axios from "axios";
import InputTitle from "../../components/InputTitle";

const EditMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [fileInputType, setFileInputType] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [titleInput, setTitleInput] = useState ("");

  const handleOptionChange = (selectedOption) => {
    setFileInputType(selectedOption.value);
  };
  const handleNameInputChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };
  
  const handleEditMap = () => {
    const formData = new FormData();
    formData.append("file", fileInputType);
    formData.append("name", nameInput);

    axios.put(`https://example.com/api/maps/${params.id}`, formData, {
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
      <div className="bg-blue-400 flex justify-between w-full items-center py-2">
        <Link to={"/"}>
          <button className="bg-white hover:bg-blue-200 text-blue-500 py-0.5 px-4 rounded-md transition-colors duration-300 mx-2">
            Back
          </button>
        </Link>
        <button
          className="bg-blue-500 hover:bg-blue-600 border-2 text-white py-0.5 px-4 rounded-md transition-colors duration-300 mx-2"
          onClick={handleEditMap}
        >
          Done
        </button>
      </div>
      <div className="py-20 px-28 text-center w-full bg-slate-300">
        <h3 className="text-start mx-36">Edit Local File</h3>
        <InputTitle value={titleInput} onChange={handleTitleInputChange}/>
        <InputName value={nameInput} onChange={handleNameInputChange} />
        <InputMap handleOptionChange={handleOptionChange} />
      </div>
    </div>
  );
};

export default EditMap;
