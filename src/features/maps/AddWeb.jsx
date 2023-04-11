import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMap } from "./mapSlice";
import axios from "axios";
import NameInput from "../../components/NameInput";
import UrlInput from "../../components/InputWeb/UrlInput";

const AddWeb = () => {
  const dispatch = useDispatch();

  const [urlInputType, setUrlInput] = useState("");
  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleURLInputChange = (e) => {
    setUrlInput(e.target.value);
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (!urlInputType) {
      alert("Please enter a URL");
      return;
    }

    const formData = new FormData();
    formData.append("url", urlInputType);
    formData.append("name", input.name);

    axios
      .post("http://192.168.6.177:8080/api/basemaps/", formData)
      .then((response) => {
        if (response.status === 201) {
          dispatch(addMap(response.data));
          alert("Map successfully added!");
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
      <div className="flex justify-between my-3 mt-9">
        <h3 className="font-bold">Add Web Data</h3>
        <button
          type="submit"
          className="bg-blue py-1 px-9 font-bold border rounded-full"
          onClick={handleAddData}
        >
          Upload
        </button>
      </div>
      <div className="mb-4">
        <NameInput NameInput={handleChange} />
        <UrlInput url={urlInputType} urlChangeHandler={handleURLInputChange} />
      </div>
    </form>
  );
};

export default AddWeb;
