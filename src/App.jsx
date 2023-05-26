import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";

import MainData from "./features/maps/MainData";
import EditMap from "./features/maps/EditMap";
import LayerSettingPage from "./pages/LayerSetting";

import store from "./states/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/add-data" element={<MainData />} />
          <Route path="/edit-map/:id" element={<EditMap />} />
          <Route path="/map-setting/*" element={<LayerSettingPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
