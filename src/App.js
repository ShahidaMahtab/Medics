import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/AboutPage/About/About";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/LoginPages/Login/Login";
import Register from "./Pages/LoginPages/Register/Register";
import RequireAuth from "./Pages/LoginPages/RequireAuth/RequireAuth";
import MakeAppoinment from "./Pages/MakeAppoinment/MakeAppoinment";
import NotFound from "./Pages/NotFound/NotFound";
import DoctorServices from "./Pages/ServicePage/DoctorServices/DoctorServices";
import Navbar from "./Pages/SharedComponents/Header/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
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
    </div>
  );
}

export default App;
