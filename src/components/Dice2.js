import React, { useState } from "react";
import "../css/dice.css";
// import { FaDice } from "react-icons/fa";
import { IoDice } from "react-icons/io5";
import {
  FaDiceFive,
  FaDiceFour,
  FaDiceOne,
  FaDiceThree,
  FaDiceTwo,
} from "react-icons/fa";
import { GiBarefoot, GiCrossedSwords } from "react-icons/gi";

export default function DiceRoller2() {
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [rolling1, setRolling1] = useState(false);
  const [rolling2, setRolling2] = useState(false);
  const [sum, setSum] = useState(null);

  const rollDice = () => {
    if (rolling1 || rolling2) return;

    setRolling1(true);

    // Simulating dice rolling with a delay
    setTimeout(() => {
      const result1 = Math.floor(Math.random() * 6) + 1;
      const value1 = result1 === 6 ? 0 : result1; // Set value to 0 if "miss" is rolled

      setDice1(value1);
      setRolling1(false);

      // Roll the second dice after the first one completes
      setRolling2(true);
      setTimeout(() => {
        const result2 = Math.floor(Math.random() * 6) + 1;
        const value2 = result2 === 6 ? 0 : result2; // Set value to 0 if "miss" is rolled
        const total = value1 + value2;

        setDice2(value2);
        setSum(total);
        setRolling2(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="dice-roller">
      {/* <h4>Click on the dice to roll them</h4> */}
      <div className="dice-container">
        <div className={`dice ${rolling1 ? "rolling" : ""}`} onClick={rollDice}>
          {dice1 !== null ? (
            <div className={`die side-${dice1} ${rolling1 ? "rolling" : ""}`}>
              <div className="rotate-container">
                {dice1 === 0 && <GiBarefoot className="dice" />}
                {dice1 === 1 && <GiBarefoot className="dice" />}
                {dice1 === 2 && <GiBarefoot className="dice" />}
                {dice1 === 3 && <GiCrossedSwords className="dice" />}
                {dice1 === 4 && <GiCrossedSwords className="dice" />}
                {dice1 === 5 && <GiCrossedSwords className="dice" />}
              </div>
            </div>
          ) : (
            <IoDice className="die" />
          )}
        </div>
        <div className={`dice ${rolling2 ? "rolling" : ""}`} onClick={rollDice}>
          {dice2 !== null ? (
            <div className={`die side-${dice2} ${rolling2 ? "rolling" : ""}`}>
              <div className="rotate-container">
                {dice2 === 0 && <GiBarefoot className="dice" />}
                {dice2 === 1 && <GiBarefoot className="dice" />}
                {dice2 === 2 && <GiBarefoot className="dice" />}
                {dice2 === 3 && <GiCrossedSwords className="dice" />}
                {dice2 === 4 && <GiCrossedSwords className="dice" />}
                {dice2 === 5 && <GiCrossedSwords className="dice" />}
              </div>
            </div>
          ) : (
            <IoDice className="die" />
          )}
        </div>
      </div>

      {/* <button onClick={rollDice} disabled={rolling1 || rolling2}>
        <FaDice size={40} />
      </button> */}
    </div>
  );
}
