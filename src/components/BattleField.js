import React from "react";
import "../css/battle-field.css";
export default function BattleField({
  img,
  name = "Battle Field",
  sq1,
  sq2,
  sq3,
  sq4,
  sq5,
  sq6,
  sq7,
  sq8,
  sq9,
  sq10,
  sq11,
  sq12,
  sq13,
  sq14,
  sq15,
  sq16,
  sq17,
  sq18,
  sq19,
  sq20,
  sq21,
  sq22,
  sq23,
  sq24,
  sq25,
  sq26,
  sq27,
  sq28,
  sq29,
  sq30,
  sq31,
  sq32,
  sq33,
  sq34,
  sq35,
  sq36,
  sq37,
  sq38,
  sq39,
  sq40,
  sq41,
  sq42,
  sq43,
  sq44,
  sq45,
  sq46,
  sq47,
  sq48,
  sq49,
  sq50,
  sq51,
  sq52,
  sq53,
  sq54,
  sq55,
  sq56,
}) {
  // create a function that will create 56 div.squares
  function renderSquares() {
    const squares = [];
    for (let i = 1; i <= 56; i++) {
      squares.push(
        <div key={i} className="square">
          {eval(`sq${i}`)}
        </div>
      );
    }
    return squares;
  }

  return (
    <div className="battle-field-container">
      <h4 className="battle-field-name">{name}</h4>
      <section className="battle-field">
        <img className="battle-field-img" src={img} alt={name} />
        <section className="battle-field-squares">{renderSquares()}</section>
      </section>
    </div>
  );
}
