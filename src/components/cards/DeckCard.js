import React from "react";
import { DeckCardStyle } from "./DeckCardStyle";
export default function DeckCard({ children }) {
  return (
    <DeckCardStyle className="deck-card">
      <div className="border">
        <p className="icon">{children}</p>
      </div>
    </DeckCardStyle>
  );
}
