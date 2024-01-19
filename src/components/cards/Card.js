import React from "react";
import "../css/card.css";
import { FaHeartbeat } from "react-icons/fa";
import { RiFocus3Fill } from "react-icons/ri";
export default function Card({
  size,
  children,
  card_name,
  card_type,
  icon_left,
  icon_left_value,
  icon_right,
  icon_right_value,
  img,
  head,
  body,
  limbs,
}) {
  return (
    <div className={`card-${size !== "mini" && null} game-card ${card_type}`}>
      <header className="card-header">
        <p className="icon-left">
          {icon_left}
          {icon_left_value === undefined ? 0 : icon_left_value}
        </p>
        <h2>{card_name}</h2>
        <p className="icon-right">
          {icon_right}
          {icon_right_value === undefined ? 0 : icon_right_value}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
        <div className="unit-parts">
          <div className="head">
            {head} <br /> 3x
          </div>
          <div className="body">
            {body}
            <br /> 2x
          </div>
          <div className="limbs">
            {limbs} <br /> 1x
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
