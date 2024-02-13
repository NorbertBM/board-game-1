import React, { useState } from "react";
import CombatCard from "../../../components/cards/CombatCard";
import Combat1DeckCard from "../../../components/cards/Combat1DeckCard";
import { GiRank1, GiRank2, GiCrossedSwords } from "react-icons/gi";

import {
  combinationsOfTwo1,
  // combinationsOfTwo1Rev,
} from "./data/combatDeck1Db";

import { getRandomCard } from "./getRandomCard";
export default function CombatDeck1() {
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
              combinationsOfTwo1.map((combination, index) => (
                <CombatCard
                  key={index}
                  iconLeft={<GiCrossedSwords size={40} />}
                  iconsMid={<GiRank1 size={40} />}
                  iconsRight={<GiRank2 size={40} />}
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
      <Combat1DeckCard
        icon1={<GiCrossedSwords size={50} />}
        icon2={<GiRank1 size={40} />}
        icon3={<GiRank2 size={40} />}
      ></Combat1DeckCard>
      {combinationsOfTwo1.length}
      {combinationsOfTwo1.map((combination, index) => (
        <CombatCard
          key={index}
          iconLeft={<GiCrossedSwords size={40} />}
          iconsMid={<GiRank1 size={40} />}
          iconsRight={<GiRank2 size={40} />}
        >
          {combination.reverse().map((action, index) => (
            <p className="action" key={index}>
              {action}
            </p>
          ))}
        </CombatCard>
      ))}{" "}
    </section>
  );
}
