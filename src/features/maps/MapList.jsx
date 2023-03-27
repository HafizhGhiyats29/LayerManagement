import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMap } from "./mapSlice";
import { FaEdit, FaTimes } from "react-icons/fa";

const MapList = () => {
  const dispatch = useDispatch();
  const maps = useSelector((store) => store.maps);

  const mapCard = () => {
    const handleDeleteMap = (id) => {
      dispatch(deleteMap({ id }));
    };
    return (
      <>
        {maps.map((map) => (
          <div
            key={map.id}
            className="bg-gray-300 p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold text-sm text-gray-700">{map.name}</h3>
              <span className="text-xs text-gray-600">{map.file}</span>
            </div>
            <div className="space-x-4">
              <Link to={`/edit-map/${map.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  <FaEdit />
                </button>
              </Link>

              <button
                onClick={() => handleDeleteMap(map.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="grid gap-2">
        {/* Jika tidak ada peta di Redux store, tampilkan pesan */}
        {maps.length ? (
          mapCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No Map
          </p>
        )}
      </div>
    </div>
  );
};

export default MapList;
