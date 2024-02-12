import React, { useState } from "react";
import CombatCard from "../../../components/cards/CombatCard";
import Combat1DeckCard from "../../../components/cards/Combat1DeckCard";
import { GiRank3, GiCrossedSwords } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";
import {
  combinationsOfThree1,
  combinationsOfThree1Rev,
} from "./data/combatDeck1Db";

import { getRandomCard } from "./getRandomCard";
export default function CombatDeck2() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <section
      className="abilities-section hide"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(
              combinationsOfThree1.map((combination, index) => (
                <CombatCard
                  key={index}
                  iconLeft={<GiCrossedSwords size={40} />}
                  iconsMid={<GiRank3 size={40} />}
                  iconsRight={<TbMilitaryRank size={40} />}
                >
                  {combination.map((action, index) => (
                    <p className="action" key={index}>
                      {action}
                    </p>
                  ))}
                </CombatCard>
              )),
              setIsLoading,
              setSelectedCard
            )
          }
        >
          Select Random Card
        </button>
        <div id="displayCard">
          {isLoading ? (
            <div className="spinner">Getting random card...</div>
          ) : (
            selectedCard
          )}
        </div>
      </div>
      <Combat1DeckCard
        icon1={<GiCrossedSwords size={50} />}
        icon2={<GiRank3 size={40} />}
        icon3={<TbMilitaryRank size={40} />}
      ></Combat1DeckCard>
      {combinationsOfThree1.length}
      {combinationsOfThree1.map((combination, index) => (
        <CombatCard
          key={index}
          iconLeft={<GiCrossedSwords size={40} />}
          iconsMid={<GiRank3 size={40} />}
          iconsRight={<TbMilitaryRank size={40} />}
        >
          {combination.map((action, index) => (
            <p className="action" key={index}>
              {action}
            </p>
          ))}
        </CombatCard>
      ))}{" "}
      {combinationsOfThree1Rev.map((combination, index) => (
        <CombatCard
          key={index}
          iconLeft={<GiCrossedSwords size={40} />}
          iconsMid={<GiRank3 size={40} />}
          iconsRight={<TbMilitaryRank size={40} />}
        >
          {combination.map((action, index) => (
            <p className="action" key={index}>
              {action}
            </p>
          ))}
        </CombatCard>
      ))}{" "}
    </section>
  );
}
