import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideBarMapSetting from '../components/BaseMapSetting/SidebarMapSetting';
import BaseMapContent from '../components/BaseMapSetting/BaseMapContent';
import MapListContent from '../components/BaseMapSetting/MapListContent';
import useInput from '../hooks/useInput';
import { searchMapListActionCreator } from '../states';
import AddMapContent from '../components/BaseMapSetting/AddMapContent';

function BaseMapSettingPage() {
  const dispatch = useDispatch();
  const [searchKeywordValue, , setSearchKeywordValue] = useInput();

  const onChangeSearchKeyword = ({ target }) => {
    setSearchKeywordValue(target.value);
    dispatch(searchMapListActionCreator(target.value));
  };

  return (
    <article className="flex bg-[#F5F5F5]">
      <SideBarMapSetting />
      <Routes>
        <Route path="/" element={<BaseMapContent><MapListContent searchKeywordValue={searchKeywordValue} onSearchKeywordValueChange={onChangeSearchKeyword} /></BaseMapContent>} />
        <Route
          path="/add-map"
          element={(
            <BaseMapContent>
              <AddMapContent />
            </BaseMapContent>
            )}
        />
      </Routes>
    </article>
  );
}

export default BaseMapSettingPage;
