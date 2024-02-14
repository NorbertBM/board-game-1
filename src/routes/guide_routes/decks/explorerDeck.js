import React, { useState } from "react";
import DeckCard from "../../../components/cards/DeckCard";
import { FaWpexplorer } from "react-icons/fa";
import { enemiesDb } from "./data/enemiesDb";
import { explorerDb } from "./data/explorerDb";
import { getRandomCard } from "./functions/getRandomCard";

export default function ExplorerDeck() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  // Combine all combinations of two cards
  function mixCardCombo() {
    const allCombinations = [...enemiesDb, ...explorerDb];
    return allCombinations;
  }
  return (
    <section
      className="explorer-section hide"
      style={{
        display: "flex",
        gap: 30,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(mixCardCombo(), setIsLoading, setSelectedCard)
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
      <DeckCard>
        <FaWpexplorer size={60} />
      </DeckCard>
      {explorerDb.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
      {enemiesDb.length}
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() =>
            getRandomCard(enemiesDb, setIsLoading, setSelectedCard)
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
      {/* Enemies Tier 1-2 */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {enemiesDb.map((enemy, index) => (
          <div key={index}>{enemy}</div>
        ))}
      </section>
    </section>
  );
}
