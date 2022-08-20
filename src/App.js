import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import MakeAppoinment from "./Pages/MakeAppoinment/MakeAppoinment";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./Pages/SharedComponents/Navbar/Navbar";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Navbar open={open} setOpen={setOpen}></Navbar>
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path="/home" element={<Home open={open} />} />
        <Route path="/makeappoinment" element={<MakeAppoinment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
