import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import AddMap from "./features/maps/AddMap";
import EditMap from "./features/maps/EditMap";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/add-map" element={<AddMap />} />
        <Route path="/edit-map/:id" element={<EditMap />} />
      </Routes>
    </div>
  );
}

export default App;
