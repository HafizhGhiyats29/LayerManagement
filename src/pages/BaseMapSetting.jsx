import React from 'react';
import SideBarMapSetting from '../components/BaseMapSetting/SidebarMapSetting';
import BaseMapContent from '../components/BaseMapSetting/BaseMapContent';
import { Route, Routes } from 'react-router-dom';

function BaseMapSettingPage () {
    return (
        <article className="flex">
            <SideBarMapSetting />
            <Routes>
                <Route path="/" element={<BaseMapContent />}/>
                <Route path="/map-setting/add-map" element={<BaseMapContent />}/>
            </Routes>
        </article>
    )
}

export default BaseMapSettingPage;