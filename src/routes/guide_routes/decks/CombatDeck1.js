import React, { useState } from "react";
import CombatCard from "../../../components/cards/CombatCard";
import Combat1DeckCard from "../../../components/cards/Combat1DeckCard";
import { GiRank1, GiRank2, GiCrossedSwords } from "react-icons/gi";

import {
  combinationsOfTwo1,
  combinationsOfTwo1Rev,
} from "./data/combatDeck1Db";

import { getRandomCard } from "./functions/getRandomCard";
import { showActionIcon } from "./functions/showActionIcon";
import DiceRoller2 from "../../../components/Dice2";
import DiceRoller3 from "../../../components/Dice3";

export default function CombatDeck1() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Combine all combinations of two cards
  function mixCardCombo() {
    const allCombinations = [...combinationsOfTwo1, ...combinationsOfTwo1Rev];
    return allCombinations;
  }

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
      {mixCardCombo().length}
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(
              mixCardCombo().map((combination, index) => (
                <CombatCard
                  key={index}
                  iconLeft={<GiCrossedSwords size={30} />}
                  iconsMid={<GiRank1 size={30} />}
                  iconsRight={<GiRank2 size={30} />}
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
      <section style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {mixCardCombo().map((combination, index) => (
          <CombatCard
            key={index}
            iconLeft={<GiCrossedSwords size={30} />}
            iconsMid={<GiRank1 size={30} />}
            iconsRight={<GiRank2 size={30} />}
          >
            {combination.map((action, index) => (
              <p className="action" key={index}>
                {showActionIcon(action)}
              </p>
            ))}
          </CombatCard>
        ))}
      </section>
    </section>
  );
}
