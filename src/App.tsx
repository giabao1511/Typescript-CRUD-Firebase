import { Route, Routes } from "react-router-dom";
import "./firebase/config";
import AddUser from "./view/AddUser";
import Homepage from "./view/Homepage";
import UpdateUser from "./view/UpdateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="update" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
