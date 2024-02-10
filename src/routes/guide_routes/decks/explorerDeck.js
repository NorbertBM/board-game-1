import React from "react";
import DeckCard from "../../../components/cards/DeckCard";
import { FaWpexplorer } from "react-icons/fa";
export default function ExplorerDeck() {
  return (
    <section className="explorer-section hide">
      <h3>Explorer Deck</h3>
      <DeckCard>
        <FaWpexplorer size={60} />
      </DeckCard>
    </section>
  );
}
