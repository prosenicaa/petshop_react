import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(true);

  function changePageName(vrednost) {
    setCurrentPage(vrednost);
  }

  return (
    <div className="App">
      <Router>
        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path="/" element={<Home changePageName={changePageName} />} />
          <Route
            path="/shop"
            element={<Shop changePageName={changePageName} />}
          />
          <Route
            path="/about"
            element={<About changePageName={changePageName} />}
          />
          <Route
            path="/contact"
            element={<Contact changePageName={changePageName} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
