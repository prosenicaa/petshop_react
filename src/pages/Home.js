import React from "react";
import { Link } from "react-router-dom";
import Background from "../img/background3.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Background})` }}>
      <div className="headerContainer">
        <h1> The Pet Zone </h1>
        <p> WHERE YOUR PETS WANT TO GO!</p>
        <Link to="/shop">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
