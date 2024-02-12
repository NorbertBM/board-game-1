import React from "react";
import { Combat1DeckCardStyle } from "./Combat1DeckCardStyle";
export default function Combat1DeckCard({ icon1, icon2, icon3 }) {
  return (
    <Combat1DeckCardStyle className={`combat-deck-card`}>
      <div className="border">
        <p className="icons">{icon1}</p>
        <p className="icons">{icon2}</p>
        <p className="icons">{icon3}</p>
      </div>
    </Combat1DeckCardStyle>
  );
}
