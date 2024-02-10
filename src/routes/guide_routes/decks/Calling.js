import React from "react";
import DeckCard from "../../../components/cards/DeckCard";
import { GiShouting } from "react-icons/gi";
export default function Calling() {
  return (
    <section className="abilities-section hide">
      <h3>Calling</h3>
      <DeckCard>
        <GiShouting size={60} />
      </DeckCard>
    </section>
  );
}
