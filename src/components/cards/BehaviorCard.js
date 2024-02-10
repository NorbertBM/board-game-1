import React from "react";
import { DeckCardStyle } from "./DeckCardStyle";
export default function BehaviorCard({ multiplier, children }) {
  return (
    <DeckCardStyle className="deck-card Behavior">
      <div className="border">
        <h2 className="multiplier">{multiplier}</h2>
        <p className="icon">{children}</p>
      </div>
    </DeckCardStyle>
  );
}
