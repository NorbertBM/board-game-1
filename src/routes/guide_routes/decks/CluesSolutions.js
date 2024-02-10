import React from "react";
import DeckCard from "../../../components/Cards/DeckCard";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
export default function CluesSolutions() {
  return (
    <section className="abilities-section hide">
      <DeckCard>
        <HiMagnifyingGlassCircle size={60} />
      </DeckCard>
    </section>
  );
}
