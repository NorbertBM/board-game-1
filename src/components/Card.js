import React from "react";
import "../css/card.css";
import { FaHeartbeat } from "react-icons/fa";
import { RiFocus3Fill } from "react-icons/ri";
export default function Card({
  children,
  card_name,
  card_type,
  hp,
  attack,
  img,
  head,
  body,
  limbs,
}) {
  return (
    <div className={`card game-card ${card_type}`}>
      <header className="card-header">
        <p className="hp">
          <FaHeartbeat />
          {hp}
        </p>
        <h2>{card_name}</h2>
        <p className="attack">
          <RiFocus3Fill />
          {attack}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" />
        <div className="unit-parts">
          <div className="head">{head}</div>
          <div className="body">{body}</div>
          <div className="limbs">{limbs}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
