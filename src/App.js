import { createContext } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import MakeAppoinment from "./Pages/MakeAppoinment/MakeAppoinment";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/SharedComponents/Login/Login";
import Navbar from "./Pages/SharedComponents/Navbar/Navbar";
import Register from "./Pages/SharedComponents/Register/Register";
export const ToggleContext = createContext(false);
function App() {
  const [open, setOpen] = useState(false);

  return (
    <ToggleContext.Provider value={[open, setOpen]}>
      <Navbar open={open} setOpen={setOpen}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/makeappoinment" element={<MakeAppoinment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ToggleContext.Provider>
  );
}

export default App;
