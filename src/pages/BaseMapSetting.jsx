import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBarMapSetting from '../components/BaseMapSetting/SidebarMapSetting';
import BaseMapContent from '../components/BaseMapSetting/BaseMapContent';

function BaseMapSettingPage() {
  return (
    <article className="flex">
      <SideBarMapSetting />
      <Routes>
        <Route path="/" element={<BaseMapContent />} />
        <Route path="/map-setting/add-map" element={<BaseMapContent />} />
      </Routes>
    </article>
  );
}

export default BaseMapSettingPage;
