import { useState } from "react";

const InputName = () => {
  const [nameInput, setNameInput] = useState("");

  const handleInputOnChange = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-start mx-36 py-3">Name</label>
      <input
        className="w-7/12 text-gray-600 py-2 mx-auto"
        onChange={handleInputOnChange}
        value={nameInput}
        placeholder="Input a name"
      />
    </div>
  );
};

export default InputName;
