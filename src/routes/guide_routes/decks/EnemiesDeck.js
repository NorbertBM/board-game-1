import React, { useState } from "react";
import { GiRank1, GiRank2, GiRank3 } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";
import { getRandomCard } from "./getRandomCard";
import DeckCard from "../../../components/cards/DeckCard";
import { enemiesDb } from "./data/enemiesDb";
export default function EnemiesDeck() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const enemiesRank = [
    <DeckCard>
      <GiRank1 color="#111" size={60} />
    </DeckCard>,
    <DeckCard>
      <GiRank2 color="#111" size={60} />
    </DeckCard>,
    <DeckCard>
      <GiRank3 color="#111" size={60} />
    </DeckCard>,
    <DeckCard>
      <TbMilitaryRank color="#111" size={60} />
    </DeckCard>,
  ];

  return (
    <section className="enemies-section hide">
      <h3>Enemies</h3>
      <div
        className="lvls"
        style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
      >
        {enemiesRank.map((enemy, index) => (
          <DeckCard key={index}>{enemy}</DeckCard>
        ))}
      </div>
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(enemiesDb, setIsLoading, setSelectedCard)
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
    </section>
  );
}
