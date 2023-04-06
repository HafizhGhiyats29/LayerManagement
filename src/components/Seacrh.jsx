import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [provinces, setProvinces] = useState(["Sumatera Utara", "Yogyakarta"]);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function search() {
    const filteredProvinces = provinces.filter((province) =>
      province.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredProvinces);
  }

  return (
    <div className="w-full rounded-md relative justify-between text-black">
      <div className="flex items-center bg-gray px-3 py-2 rounded-md">
        <button onClick={search} className="outline-none focus:outline-none">
          <FiSearch size={25} className="cursor-pointer" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="w-full text-black bg-gray focus:outline-none py-0.5 px-3"
        ></input>
      </div>
    </div>
  );
}

export default Search;
