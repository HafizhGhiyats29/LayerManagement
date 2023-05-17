import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import MainData from "./features/maps/MainData";
import EditMap from "./features/maps/EditMap";
import BaseMapSetting from "./pages/BaseMapSetting";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/add-data" element={<MainData />} />
        <Route path="/edit-map/:id" element={<EditMap />} />
        <Route path="/map-setting" element={<BaseMapSetting />}/>
      </Routes>
    </div>
  );
}

export default App;
