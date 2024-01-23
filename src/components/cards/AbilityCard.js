import React from "react";
import { FaWpexplorer } from "react-icons/fa";
// import { FaEye } from "react-icons/fa6";
import { GiWingfoot } from "react-icons/gi";
import "../../css/ability-card.css";
export default function AbilityCard({
  card_type,
  card_name,
  stamina,
  img,
  sight,
  children,
}) {
  return (
    <div className={`ability-card  ${card_type}`}>
      <header className="ability-card-header">
        <p className="ability">
          <FaWpexplorer size={50} />
          {/* {hp} */}
        </p>
        <h2 className="exploration">{card_name}</h2>
        <p className="attack">
          <GiWingfoot size={35} />
          {stamina}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
        <div className="unit-parts"></div>
      </div>
      {children}
    </div>
  );
}
