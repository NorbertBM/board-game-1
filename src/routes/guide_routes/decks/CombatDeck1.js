import React, { useState } from "react";
import CombatCard from "../../../components/cards/CombatCard";
import Combat1DeckCard from "../../../components/cards/Combat1DeckCard";
import { GiRank1, GiRank2, GiCrossedSwords } from "react-icons/gi";

import { combinationsOfTwo1 } from "./data/combatDeck1Db";

import { getRandomCard } from "./functions/getRandomCard";
import { showActionIcon } from "./functions/showActionIcon";
import DiceRoller2 from "../../../components/Dice2";
import DiceRoller3 from "../../../components/Dice3";

export default function CombatDeck1() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  // function showActionIcon(action) {
  //   if (action === "Move forward 1" || action === "Move forward 2") {
  //     return (
  //       <>
  //         {action} <GiBarefoot className="dice" />
  //       </>
  //     );
  //   } else if (action === "Basic Attack") {
  //     return (
  //       <>
  //         {action} <GiCrossedSwords className="dice" />
  //       </>
  //     );
  //   } else if (action === "Ability 1") {
  //     return (
  //       <>
  //         {action} <GiDiceFire className="dice" color="#95440e" />
  //       </>
  //     );
  //   } else if (action === "Ability 2") {
  //     return (
  //       <>
  //         {action} <GiDiceFire className="dice" color="#f6a972" />
  //       </>
  //     );
  //   }
  //   return action;
  // }

  return (
    <section
      className="abilities-section hide"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      <Combat1DeckCard
        icon1={<GiCrossedSwords size={50} />}
        icon2={<GiRank1 size={40} />}
        icon3={<GiRank2 size={40} />}
      ></Combat1DeckCard>
      {combinationsOfTwo1.length}
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(
              combinationsOfTwo1.map((combination, index) => (
                <CombatCard
                  key={index}
                  iconLeft={<GiCrossedSwords size={40} />}
                  iconsMid={<GiRank1 size={40} />}
                  iconsRight={<GiRank2 size={40} />}
                >
                  {combination.map((action, index) => (
                    <p className="action" key={index}>
                      {showActionIcon(action)}
                    </p>
                  ))}
                </CombatCard>
              )),
              setIsLoading,
              setSelectedCard
            )
          }
        >
          Get Random Card
        </button>
        <div id="displayCard">
          {isLoading ? (
            <div className="spinner">Getting random card...</div>
          ) : (
            selectedCard
          )}
        </div>
      </div>
      <DiceRoller2 />
      <DiceRoller3 />
      {combinationsOfTwo1.map((combination, index) => (
        <CombatCard
          key={index}
          iconLeft={<GiCrossedSwords size={40} />}
          iconsMid={<GiRank1 size={40} />}
          iconsRight={<GiRank2 size={40} />}
        >
          {combination.reverse().map((action, index) => (
            <p className="action" key={index}>
              {/* inf action is Move forward 1 then includ icons */}
              {showActionIcon(action)}
            </p>
          ))}
        </CombatCard>
      ))}{" "}
    </section>
  );
}
