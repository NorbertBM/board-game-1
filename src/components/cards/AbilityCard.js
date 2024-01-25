import React from "react";

import { AbilityCardStyle } from "./AbilityCardStyle";
import { GrVulnerability } from "react-icons/gr";

import { GiWingfoot } from "react-icons/gi";
import "../../css/ability-card.css";
export default function AbilityCard({
  card_type,
  card_name,
  stamina,
  img,
  children,
}) {
  return (
    <AbilityCardStyle className="ability-card">
      <header className="ability-card-header">
        <p className="ability">
          <GrVulnerability size={35} />
          {/* {hp} */}
        </p>
        <h2 className="exploration">{card_name}</h2>
        <p className="stamina">
          <GiWingfoot size={35} />
          <span className="value">{stamina}</span>
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
        {/* <div className="unit-parts"></div> */}
      </div>
      {children}
    </AbilityCardStyle>
  );
}
