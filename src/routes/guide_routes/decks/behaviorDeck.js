import React from "react";
import DeckCard from "../../../components/Cards/DeckCard";
import BehaviorCard from "../../../components/Cards/BehaviorCard";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";

// Move icons
import {
  ImArrowRight,
  ImArrowDown,
  ImArrowLeft,
  ImArrowUp,
} from "react-icons/im";
export default function behaviorDeck() {
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
      <DeckCard>
        <FaPersonWalkingArrowRight size={50} />
      </DeckCard>{" "}
      <BehaviorCard multiplier={"1X"}>
        <ImArrowRight size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"2X"}>
        <ImArrowRight size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"3X"}>
        <ImArrowRight size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"1X"}>
        <ImArrowDown size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"2X"}>
        <ImArrowDown size={50} />
      </BehaviorCard>
      <BehaviorCard multiplier={"3X"}>
        <ImArrowDown size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"1X"}>
        <ImArrowLeft size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"2X"}>
        <ImArrowLeft size={50} />
      </BehaviorCard>
      <BehaviorCard multiplier={"3X"}>
        <ImArrowLeft size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"1X"}>
        <ImArrowUp size={50} />
      </BehaviorCard>{" "}
      <BehaviorCard multiplier={"2X"}>
        <ImArrowUp size={50} />
      </BehaviorCard>
      <BehaviorCard multiplier={"3X"}>
        <ImArrowUp size={50} />
      </BehaviorCard>
    </section>
  );
}