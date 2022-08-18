import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Navbar from "./Pages/SharedComponents/Navbar/Navbar";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Router>
        <Navbar open={open} setOpen={setOpen}></Navbar>
        <Routes>
          <Route path="/" element={<Home open={open} />} />
          <Route path="/home" element={<Home open={open} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
