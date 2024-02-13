import React, { useState } from "react";
import CombatCard from "../../../components/cards/CombatCard";
import Combat1DeckCard from "../../../components/cards/Combat1DeckCard";
import { GiRank3, GiCrossedSwords } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";
import { combinationsOfThree1 } from "./data/combatDeck1Db";

import { getRandomCard } from "./functions/getRandomCard";

import { showActionIcon } from "./functions/showActionIcon";
import DiceRoller3 from "../../../components/Dice3";
import DiceRoller2 from "../../../components/Dice2";

export default function CombatDeck2() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <section
      className="abilities-section hide"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      <Combat1DeckCard
        icon1={<GiCrossedSwords size={50} />}
        icon2={<GiRank3 size={40} />}
        icon3={<TbMilitaryRank size={40} />}
      ></Combat1DeckCard>
      {combinationsOfThree1.length}
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(
              combinationsOfThree1.map((combination, index) => (
                <CombatCard
                  key={index}
                  iconLeft={<GiCrossedSwords size={30} />}
                  iconsMid={<GiRank3 size={30} />}
                  iconsRight={<TbMilitaryRank size={30} />}
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
      {combinationsOfThree1.map((combination, index) => (
        <CombatCard
          key={index}
          iconLeft={<GiCrossedSwords size={30} />}
          iconsMid={<GiRank3 size={30} />}
          iconsRight={<TbMilitaryRank size={30} />}
        >
          {combination.map((action, index) => (
            <p className="action" key={index}>
              {showActionIcon(action)}
            </p>
          ))}
        </CombatCard>
      ))}{" "}
    </section>
  );
}
