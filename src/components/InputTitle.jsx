import { useState } from "react";

const InputTitle = () => {
  const [titleInput, setTitleInput] = useState("");

  const handleTitleOnChange = (e) => {
    setTitleInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-start mx-36 py-3">Title</label>
      <input
        className="w-7/12 text-gray-600 py-2 mx-auto"
        onChange={handleTitleOnChange}
        value={titleInput}
        placeholder="Input a name"
      />
    </div>
  );
};

export default InputTitle;
