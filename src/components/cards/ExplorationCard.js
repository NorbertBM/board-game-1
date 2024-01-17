import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { GiWingfoot } from "react-icons/gi";
import "../../css/card.css";
export default function ExplorationCard({
  children,
  card_name,
  card_type,
  hp,
  speed,
  img,
  sight,
}) {
  // onclick flip the selected card to show the description

  return (
    <div className={`card game-card ${card_type}`}>
      <header className="card-header">
        <p className="hp">
          <FaWpexplorer size={50} />
          {/* {hp} */}
        </p>
        <h2 className="exploration">{card_name}</h2>
        <p className="attack">
          <GiWingfoot size={35} />
          {speed}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
        <div className="unit-parts">
          <div className="head">
            <FaEye size={30} /> <br /> {sight}
          </div>
          {/* <div className="body">
            {body}
            <br /> 2x
          </div>
          <div className="limbs">
            {limbs} <br /> 1x
          </div> */}
        </div>
      </div>
      {children}
    </div>
  );
}
