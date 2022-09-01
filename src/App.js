import { createContext } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/LoginPages/Login/Login";
import Register from "./Pages/LoginPages/Register/Register";
import RequireAuth from "./Pages/LoginPages/RequireAuth/RequireAuth";
import MakeAppoinment from "./Pages/MakeAppoinment/MakeAppoinment";
import NotFound from "./Pages/NotFound/NotFound";
import DoctorServices from "./Pages/ServicePage/DoctorServices/DoctorServices";

import Navbar from "./Pages/SharedComponents/Navbar/Navbar";

export const ToggleContext = createContext(false);
function App() {
  const [open, setOpen] = useState(false);

  return (
    <ToggleContext.Provider value={[open, setOpen]}>
      <Navbar open={open} setOpen={setOpen}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <DoctorServices />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/makeappoinment" element={<MakeAppoinment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ToggleContext.Provider>
  );
}

export default App;
