import React from "react";
import { Print } from "../../components/Print";
import DeckCard from "../../components/Cards/DeckCard";

// Icons

import { GiRank1, GiRank2, GiRank3 } from "react-icons/gi";

import { ImLoop2 } from "react-icons/im";

import { Outlet } from "react-router-dom";
import DecksNav from "./decks/decksNav";
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
        <section className="end_of_turn-section hide">
          <h3>End of turn</h3>
          <DeckCard>
            <ImLoop2 size={50} />
          </DeckCard>
        </section>

        <section className="enemies-section hide">
          <h3>Enemies</h3>
          <div
            className="lvls"
            style={{ display: "flex", gap: 20, flexWrap: "wrap" }}
          >
            <DeckCard>
              <GiRank1 color="#111" size={60} />
            </DeckCard>
            <DeckCard>
              <GiRank2 color="#111" size={60} />
            </DeckCard>
            <DeckCard>
              <GiRank3 color="#111" size={60} />
            </DeckCard>
          </div>
        </section>
      </div>
    </div>
  );
}

const elementStyle = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");
  font-family: "Philosopher", sans-serif important!;
}
:root {
  --border-radius: 15px;
}
main-container{
  width: 210mm;
  
  height: 297mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
 align-items: center;

}
.deck-card {

 
  font-size: 1.6rem;
  color: #fae9dd;
  width: 63.5mm;
  height: 88mm;
  

  background: rgb(16, 16, 17);
  background: -moz-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  .border {
    position: relative;
    margin: auto auto;
    width: 55mm;
    height: 80mm;
    border-radius: 15px;
    border: 1px solid beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }
  .Behavior .multiplier {
    font-size: 2em;
    margin: 0;
    padding: 0;
    color: #fff;
    text-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }
  .icon {
    color: #111;
    height: 18mm;
    width: 18mm;
    background-color: #fae9dd;
    /* Create a gradiant inwords  */
    background: rgb(250, 233, 221);
    background: radial-gradient(
      circle,
      rgb(247, 237, 230) 0%,
      rgba(181, 163, 151, 1) 100%
    );
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
    box-shadow: 0 0 40px rgba(128, 26, 22, 1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Add glowing sunlight lines before and after the icon center */
    &::before {
      content: "";
      position: absolute;

      display: inline-block;
      width: 50px;
      left: 20px;
      height: 2px;
      /* create a red orange sunlight ray */

      background: rgb(128, 26, 22);
      background: linear-gradient(
        90deg,
        rgba(231, 209, 85, 1) 0%,
        rgba(128, 26, 22, 1) 51%
      );
      /* background-color: #ccc; */
      vertical-align: middle;
      box-shadow: 0 0 20px rgba(128, 26, 22, 1);
    }
    &::after {
      content: "";
      position: absolute;

      display: inline-block;
      width: 50px;
      height: 2px;
      left: 140px;

      background: rgb(128, 26, 22);
      background: linear-gradient(
        90deg,
        rgba(128, 26, 22, 1) 0%,
        rgba(231, 209, 85, 1) 85%
      );
      /* background-color: #ccc; */
      vertical-align: middle;
      box-shadow: 0 0 20px rgba(128, 26, 22, 1);
    }
  }
.character-panel {
  position: relative;
  width: 183.5mm;
  height: 150mm;
  padding: 5mm;
  border-radius: 15px;
  color: #666;
  font-size: 1.2rem;
  background: rgb(16, 16, 17);
  background: -moz-linear-gradient(
    90deg,
    rgba(0, 0, 5, 1) 10%,
    rgba(20, 6, 25, 1) 71%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(0, 0, 5, 1) 10%,
    rgba(20, 6, 25, 1) 71%
  );
  background: linear-gradient(
    90deg,
    rgba(0, 0, 5, 1) 10%,
    rgba(20, 6, 25, 1) 71%
  );
  .character-panel-header {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .character-profile-pic {
    width: 95mm;
    height: 70mm;
    border: 0.05mm solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 20px 0px #666;
  }

  .perks {
    width: 120mm;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 5mm;
  }
  .character-spells,
  .character-items,
  .character-abilities {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 5mm;
  }
  .spell,
  .item,
  .ability {
    box-shadow: inset 0 0 15px 0px #666;
    width: 30mm;
    height: 30mm;
    border: 0.05mm solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
  }

  .character-status-info {
    position: absolute;
    top: 75mm;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80mm;
  }
  .character-status-info-title {
    color: #ccc;
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: left;
  }
  .character-status-hp,
  .character-status-mana,
  .character-status-sanity {
    display: flex;
    /* gap: 5mm; */
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    align-items: center;
    justify-content: start;
  }
  .hp,
  .mana,
  .sanity {
    border-radius: 5px;
    height: 15mm;
    width: 15mm;
  }
  .character-status-hp {
    background-color: #000;

    border-radius: 15px;
    .hp:last-child {
      background-color: #000;
      color: red;
    }
  }
  .character-status-mana {
    .mana:last-child {
      background-color: #000;
      color: blue;
    }
  }
  .character-status-sanity {
    .sanity:last-child {
      background-color: #000;
      color: purple;
    }
  }
}
`;
