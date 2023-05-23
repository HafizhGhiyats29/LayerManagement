import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideBarMapSetting from '../components/BaseMapSetting/SidebarMapSetting';
import BaseMapContent from '../components/BaseMapSetting/BaseMapContent';
import MapListContent from '../components/BaseMapSetting/MapListContent';
import useInput from '../hooks/useInput';
import { searchMapListActionCreator } from '../states';

function BaseMapSettingPage() {
  const dispatch = useDispatch();
  const [searchKeywordValue, , setSearchKeywordValue] = useInput();

  const onChangeSearchKeyword = ({ target }) => {
    setSearchKeywordValue(target.value);
    dispatch(searchMapListActionCreator(target.value));
  };

  return (
    <article className="flex">
      <SideBarMapSetting />
      <Routes>
        <Route path="/" element={<BaseMapContent><MapListContent searchKeywordValue={searchKeywordValue} onSearchKeywordValueChange={onChangeSearchKeyword} /></BaseMapContent>} />
        <Route path="/add-map" element={<BaseMapContent><h1>test</h1></BaseMapContent>} />
      </Routes>
    </article>
  );
}

export default BaseMapSettingPage;
