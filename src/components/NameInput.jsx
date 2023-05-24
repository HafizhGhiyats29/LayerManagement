import React from 'react';

function NameInput({ name, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        className="w-full p-2 bg-gray rounded-md "
        placeholder="File Name"
      />
    </div>
  );
}

export default NameInput;
