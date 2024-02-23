import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { GiWingfoot } from "react-icons/gi";
// import "../../css/exploration-card.css";
import { ExplorationCardStyle } from "./ExplorationCardStyle";
export default function ExplorationCard({ children, card_name, speed, img }) {
  // onclick flip the selected card to show the description

  return (
    <ExplorationCardStyle>
      <header className="card-header">
        <p className="hp">
          <FaWpexplorer size={30} />
        </p>
        <h2 className="exploration">{card_name}</h2>
        <p className="attack">
          <GiWingfoot size={25} />
          {speed}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
      </div>
      {children}
    </ExplorationCardStyle>
  );
}
