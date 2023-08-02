import AddStock from "./components/AddStock";
import Details from "./components/Details";
import Home from "./components/Home";
import UpdateStock from "./components/UpdateStock";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/AddStock" element={<AddStock />}></Route>
          <Route exact path="/GetStock" element={<Details />}></Route>
          <Route exact path="/getitem/:id" element={<UpdateStock/>}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
