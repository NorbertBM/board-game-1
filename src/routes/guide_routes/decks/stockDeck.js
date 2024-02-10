import React from "react";
import DeckCard from "../../../components/cards/DeckCard";
export default function StockDeck() {
  return (
    <section className="abilities-section hide">
      <h3>Stock</h3>
      <DeckCard>{/* <GrVulnerability size={60} /> */}</DeckCard>
    </section>
  );
}
