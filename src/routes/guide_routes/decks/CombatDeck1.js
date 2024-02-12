import React from "react";
import DeckCard from "../../../components/cards/DeckCard";

import { GiRank1, GiRank2, GiRank3, GiCrossedSwords } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";

import {
  combinationsOfThree1,
  combinationsOfThree2,
  combinationsOfTwo1,
  combinationsOfTwo2,
} from "./data/combatDeck1Db";
export default function CombatDeck1() {
  return (
    <section
      className="abilities-section hide"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      <DeckCard>
        <GiCrossedSwords size={60} />
        <GiRank1 size={60} />
        <GiRank2 size={60} />
      </DeckCard>
      {combinationsOfThree1.map((combination, index) => (
        <DeckCard key={index} classPlus="combat-deck">
          {combination.map((action, index) => (
            <p key={index}>{action}</p>
          ))}
        </DeckCard>
      ))}
    </section>
  );
}
