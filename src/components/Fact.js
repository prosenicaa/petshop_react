import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../styles/Fact.css";

const Fact = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  /*function showFunFact() {
    if (showInfo) {
      alert("Podaci se prikazuju vce.");
    }
    setShowInfo(!showInfo);
  }*/

  return (
    <article className="fact">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AddIcon /> : <RemoveIcon />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Fact;
