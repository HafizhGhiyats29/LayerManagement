import React from "react";

const NameInput = ({ name, onChange }) => {
return (
<div className="mb-4">
<input
     type="text"
     name="name"
     onChange={onChange}
     value={name}
     className="w-full p-2 bg-gray rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
     placeholder="Write a name"
     autoFocus
   />
</div>
);
};

export default NameInput;