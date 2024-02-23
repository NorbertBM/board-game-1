import React from "react";
import { Print } from "../../components/Print";

// Icons

import { Outlet } from "react-router-dom";
import DecksNav from "./decks/decksNav";

import { ExplorationCardPrint } from "../../components/cards/ExplorationCardStyle";
import { EnemyCardPrint } from "../../components/cards/EnemyCardStyle";
export default function decks() {
  return (
    <div className="page">
      <h2>Card Decks</h2>
      <button onClick={() => Print("main-container", elementStyle)}>
        Print
      </button>
      {/* Navigation using NavLink and outlat for decks */}
      <DecksNav />
      <div className="main-container">
        <Outlet />
        {/* <section className="end_of_turn-section hide">
          <h3>End of turn</h3>
          <DeckCard>
            <ImLoop2 size={50} />
          </DeckCard>
        </section> */}
      </div>
    </div>
  );
}

const elementStyle = [ExplorationCardPrint, EnemyCardPrint];
