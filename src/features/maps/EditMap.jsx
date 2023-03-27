import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMap } from "./mapSlice";
import InputMap from "../../components/InputMap";
import axios from "axios";
import InputField from "../../components/InputField";

const EditMap = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [file, setFile] = useState(null);
  const [setFileInputType] = useState("");
  const [values, setValues] = useState({
    name: "",
  });

  const handleOptionChange = (selectedOption) => {
    setFileInputType(selectedOption.value);
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
    setValues({ ...values, fileInputName: e.target.files[0].name });
  };
  

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditMap = () => {
    axios
      .put(`/api/maps/${params.id}`, values) 
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
    <div className=" relative flex flex-col items-center justify-center py-20 px-40 mx-auto my-auto rounded-2xl ">
      <div className="bg-blue-400  flex justify-between w-full items-center py-2">
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

export default EditMap;
