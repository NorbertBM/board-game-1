import React, { useState } from "react";
import DeckCard from "../../../components/cards/DeckCard";
import { enemiesDb } from "./data/enemiesDb";
import { itemsDb } from "./data/itemsDb";
import { getRandomCard } from "./functions/getRandomCard";
import { GiArchiveResearch } from "react-icons/gi";
export default function DiscoverDeck() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Combine all combinations of two cards
  function mixCardCombo() {
    const allCombinations = [...enemiesDb, ...itemsDb];
    return allCombinations;
  }

  return (
    <section
      className="abilities-section hide"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      <DeckCard>
        <GiArchiveResearch size={60} />
      </DeckCard>
      {enemiesDb.length}
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(mixCardCombo(), setIsLoading, setSelectedCard)
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
      {/* Enemies Tier 1-2 */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {mixCardCombo().map((enemy, index) => (
          <div key={index}>{enemy}</div>
        ))}
      </section>
    </section>
  );
}
