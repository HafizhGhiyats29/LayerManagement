import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaEdit, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { deleteMap } from './mapSlice';
import Search from '../../components/Seacrh';

function MapList() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [limit] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://192.168.6.177:8081/api/basemaps/?limit=${limit}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          proxy: {
            host: '192.168.6.134',
            port: 3000,
          },
        },
      );
      setData(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, [limit, refresh]);

  const handleDeleteMap = async (id) => {
    try {
      await axios.delete(`http://192.168.6.177:8081/api/basemaps/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
          host: '192.168.6.134',
          port: 3000,
        },
      });
      dispatch(deleteMap({ id }));
      dispatch(deleteMap({ id }));
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData = data.filter((basemap) => basemap.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="w-full">
      <div className="sticky top-4 z-10 bg-white h-14">
        <Search state={searchValue} setState={handleSearch} />
      </div>
      {filteredData.map((basemap) => (
        <div
          key={basemap.id}
          className="justify-between px-3 py-2 border bg-gray relative "
        >
          <div className="flex">
            <h3 className="w-full">{basemap.name}</h3>
            <div className="flex gap-x-2">
              <Link to={`/edit-map/${basemap.id}`} className=" px-2 py-1">
                <FaEdit />
              </Link>
              <button
                onClick={() => handleDeleteMap(basemap.id)}
                className="px-2 py-1"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MapList;
