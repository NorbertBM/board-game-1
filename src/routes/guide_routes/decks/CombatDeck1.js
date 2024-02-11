import React from "react";
import DeckCard from "../../../components/cards/DeckCard";

import { GiRank1, GiRank2, GiRank3, GiCrossedSwords } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";
export default function CombatDeck1() {
  const actions1 = [
    "Move forward 1",
    "Basic Attack",
    "Ability 1",
    "Ability 2",
    "Cast spell",
  ];
  const actions2 = [
    "Move forward 2",
    "Basic Attack",
    "Ability 1",
    "Ability 2",
    "Cast spell",
  ];
  function getCombinations(arr, size) {
    const combinations = [];
    const generate = (start, combination) => {
      if (combination.length === size) {
        combinations.push(combination);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        generate(i + 1, [...combination, arr[i]]);
      }
    };
    generate(0, []);
    return combinations;
  }

  const combinationsOfThree1 = getCombinations(actions1, 3);
  const combinationsOfTwo1 = getCombinations(actions1, 2);
  const combinationsOfThree2 = getCombinations(actions2, 3);
  const combinationsOfTwo2 = getCombinations(actions2, 2);

  // console.log("Combinations of 3 actions:", combinationsOfThree);
  // console.log("Combinations of 2 actions:", combinationsOfTwo);

  return (
    <section className="abilities-section hide">
      <DeckCard>
        <GiCrossedSwords size={60} />
        <GiRank1 size={60} />
        <GiRank2 size={60} />
      </DeckCard>
      {combinationsOfThree1.map((combination, index) => (
        <DeckCard key={index}>
          {combination.map((action, index) => (
            <p key={index}>{action}</p>
          ))}
        </DeckCard>
      ))}
    </section>
  );
}
