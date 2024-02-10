import React from "react";
import DeckCard from "../../../components/Cards/DeckCard";
import { GrVulnerability } from "react-icons/gr";
export default function AbilitiesDeck() {
  return (
    <section className="abilities-section hide">
      <h3>Abilities</h3>
      <DeckCard>
        <GrVulnerability size={60} />
      </DeckCard>
    </section>
  );
}
