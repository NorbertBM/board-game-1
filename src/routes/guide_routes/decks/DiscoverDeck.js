import React from "react";
import DeckCard from "../../../components/cards/DeckCard";
import { GiArchiveResearch } from "react-icons/gi";
export default function DiscoverDeck() {
  return (
    <section className="abilities-section hide">
      <DeckCard>
        <GiArchiveResearch size={60} />
      </DeckCard>
    </section>
  );
}
