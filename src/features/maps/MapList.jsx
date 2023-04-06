import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMap } from "./mapSlice";
import { FaEdit, FaTimes} from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import axios from "axios";

const MapList = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [limit] = useState(10);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://192.168.6.177:8080/api/basemaps/?limit=${limit}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          proxy: {
            host: "192.168.6.134",
            port: 3000,
          },
        }
      );
      setData(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, [limit, refresh]);

  const handleDeleteMap = async (id) => {
    try {
      await axios.delete(`http://192.168.6.177:8080/api/basemaps/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        proxy: {
          host: "192.168.6.134",
          port: 3000,
        },
      });
      dispatch(deleteMap({ id }));
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-50">
    <div className=" flex justify-between px-3 py-2 border bg-gray">Jawa Barat <FiPlus/></div>
      <div className="relative px-4 gap">
        {data.map((basemap) => (
          <div className=" py-2 px-2 rounded-md" key={basemap.id}>
            <div className="flex ">
              <h3 className="text-xs font-bold">{basemap.name}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-map/${basemap.id}`}
                  className=" px-2 py-1 text-xs rounded-md"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDeleteMap(basemap.id)}
                  className="px-2 py-1 text-xs rounded-md"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="">
              <p className="text-xs text-slate-400">{basemap.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapList;
