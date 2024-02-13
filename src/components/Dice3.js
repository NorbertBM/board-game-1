import React, { useState } from "react";
import "../css/dice.css";
// import { FaDice } from "react-icons/fa";
import { IoDice } from "react-icons/io5";

import { GiDiceFire } from "react-icons/gi";
export default function DiceRoller3() {
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [dice3, setDice3] = useState(null);
  const [rolling1, setRolling1] = useState(false);
  const [rolling2, setRolling2] = useState(false);
  const [rolling3, setRolling3] = useState(false);
  const [sum, setSum] = useState(null);

  const rollDice = () => {
    if (rolling1 || rolling2 || rolling3) return;

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

        // Roll the third dice after the second one completes
        setRolling3(true);
        setTimeout(() => {
          const result3 = Math.floor(Math.random() * 6) + 1;
          const value3 = result3 === 6 ? 0 : result3; // Set value to 0 if "miss" is rolled
          const total = value1 + value2 + value3;

          setDice3(value3);
          setSum(total);
          setRolling3(false);
        }, 500);
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
                {dice1 === 0 && <GiDiceFire className="dice" color="#95440e" />}
                {dice1 === 1 && <GiDiceFire className="dice" color="#95440e" />}
                {dice1 === 2 && <GiDiceFire className="dice" color="#95440e" />}
                {dice1 === 3 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice1 === 4 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice1 === 5 && <GiDiceFire className="dice" color="blue" />}
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
                {dice2 === 0 && <GiDiceFire className="dice" color="#95440e" />}
                {dice2 === 1 && <GiDiceFire className="dice" color="#95440e" />}
                {dice2 === 2 && <GiDiceFire className="dice" color="#95440e" />}
                {dice2 === 3 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice2 === 4 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice2 === 5 && <GiDiceFire className="dice" color="blue" />}
              </div>
            </div>
          ) : (
            <IoDice className="die" />
          )}
        </div>{" "}
        <div className={`dice ${rolling2 ? "rolling" : ""}`} onClick={rollDice}>
          {dice3 !== null ? (
            <div className={`die side-${dice3} ${rolling2 ? "rolling" : ""}`}>
              <div className="rotate-container">
                {dice3 === 0 && <GiDiceFire className="dice" color="#95440e" />}
                {dice3 === 1 && <GiDiceFire className="dice" color="#95440e" />}
                {dice3 === 2 && <GiDiceFire className="dice" color="#95440e" />}
                {dice3 === 3 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice3 === 4 && <GiDiceFire className="dice" color="#f6a972" />}
                {dice3 === 5 && <GiDiceFire className="dice" color="blue" />}
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

      <h3>Dice rules</h3>
      <ul>
        <p>
          On Single Ammo Attack:If one of the dice roles "Miss" then the value
          is "0".
        </p>
        <p>
          On double Ammo Attack:If both dice roles "Miss" then depending on the
          order of the shot ammo eider Ammo 1 or 2 will miss.
        </p>
        <p>
          On All Ammo Attack:If both dice roles "Miss" then the value is "0".
        </p>
      </ul>
    </div>
  );
}
