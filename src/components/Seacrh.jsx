
import { FiSearch } from "react-icons/fi";

function Search({ state, setState }) {

  return (
    <div className="">
      <div className="flex items-center bg-gray px-3 py-2 rounded-md">
        <FiSearch size={25} className="cursor-pointer" />
        <input
          type="search"
          placeholder="Search..."
          value={state}
          onChange={setState}
          className="w-full text-black bg-gray focus:outline-none py-0.5 px-3 "
        />
      </div>
    </div>
  );
}

export default Search;
