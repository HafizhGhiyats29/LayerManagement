import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBarMapSetting from '../components/BaseMapSetting/SidebarMapSetting';
import BaseMapContent from '../components/BaseMapSetting/BaseMapContent';
import MapListContent from '../components/BaseMapSetting/MapListContent';
import useInput from '../hooks/useInput';

function BaseMapSettingPage() {
  const [searchKeywordValue, onSearchKeywordValueChange] = useInput();

  return (
    <article className="flex">
      <SideBarMapSetting />
      <Routes>
        <Route path="/" element={<BaseMapContent><MapListContent searchKeywordValue={searchKeywordValue} onSearchKeywordValueChange={onSearchKeywordValueChange} /></BaseMapContent>} />
        <Route path="/add-map" element={<BaseMapContent><h1>test</h1></BaseMapContent>} />
      </Routes>
    </article>
  );
}

export default BaseMapSettingPage;
