import React, { useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar({ currentPage }) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          {currentPage == true ? (
            <Link to="/shop"> Shop </Link>
          ) : (
            <Link to="/shop"> Shopping </Link>
          )}
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        {currentPage == true ? (
          <Link to="/shop"> Shop </Link>
        ) : (
          <Link to="/shop"> Shopping </Link>
        )}
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
