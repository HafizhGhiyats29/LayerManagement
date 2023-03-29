import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMap } from "./mapSlice";
import { FaEdit, FaTimes } from "react-icons/fa";
import axios from "axios";

const MapList = () => {
  const dispatch = useDispatch();
  const maps = useSelector((store) => store.maps);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://192.168.6.177:8080/api/basemaps/?limit=${limit}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        proxy: {
          host: '192.168.6.134',
          port: 3000,
        }
      });
      setData(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, [limit]);

  const handleDeleteMap = async (id) => {
    try {
      await axios.delete(`http://192.168.6.177:8080/api/basemaps/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        proxy: {
          host: '192.168.6.134',
          port: 3000
        }
      });
      dispatch(deleteMap({ id }));
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <div className="grid gap-2">
        {data.length ? (
          <div>
          {data.map((basemap) => {
            return (
              <div
              className="bg-gray-300 p-4 flex justify-between items-center"
              key={basemap.id}
            >
              <div>
                <h3 className="font-bold text-sm text-gray-700">{basemap.name}</h3>
                <span className="text-xs text-gray-600">{basemap.url}</span>
              </div>
              <div className="space-x-4">
                <Link to={`/edit-map/${basemap.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    <FaEdit />
                  </button>
                </Link>
    
                <button
                  onClick={() => handleDeleteMap(basemap.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            )
          })}
          </div>
        ) : (
          <p className="text-center col-span-2 text-white font-semibold">
            No Map
          </p>
        )}
      </div>
    </div>
  );
};


export default MapList;
