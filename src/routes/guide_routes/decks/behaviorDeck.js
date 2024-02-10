import React, { useState } from "react";
import DeckCard from "../../../components/cards/DeckCard";
import BehaviorCard from "../../../components/cards/BehaviorCard";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { getRandomCard } from "./getRandomCard";
// Move icons
import {
  ImArrowRight,
  ImArrowDown,
  ImArrowLeft,
  ImArrowUp,
} from "react-icons/im";
export default function BehaviorDeck() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const behavior = [
    <BehaviorCard multiplier={"1X"}>
      <ImArrowRight size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"2X"}>
      <ImArrowRight size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"3X"}>
      <ImArrowRight size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"1X"}>
      <ImArrowDown size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"2X"}>
      <ImArrowDown size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"3X"}>
      <ImArrowDown size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"1X"}>
      <ImArrowLeft size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"2X"}>
      <ImArrowLeft size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"3X"}>
      <ImArrowLeft size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"1X"}>
      <ImArrowUp size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"2X"}>
      <ImArrowUp size={50} />
    </BehaviorCard>,
    <BehaviorCard multiplier={"3X"}>
      <ImArrowUp size={50} />
    </BehaviorCard>,
  ];
  return (
    <section
      className="behavior-section hide"
      style={{
        display: "flex",
        gap: "5mm",
        flexWrap: "wrap",
        marginLeft: "10px",
      }}
    >
      {/* Display random Card */}
      <div className="random-card">
        <button
          onClick={() => getRandomCard(behavior, setIsLoading, setSelectedCard)}
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
      <DeckCard>
        <FaPersonWalkingArrowRight size={50} />
      </DeckCard>{" "}
      {behavior.map((behavior, index) => (
        <div key={index}>{behavior}</div>
      ))}
    </section>
  );
}
