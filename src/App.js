import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home/Home";
import Navbar from "./Pages/SharedComponents/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
