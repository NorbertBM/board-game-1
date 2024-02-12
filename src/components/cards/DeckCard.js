import React from "react";
import { DeckCardStyle } from "./DeckCardStyle";
export default function DeckCard({ children, classPlus }) {
  return (
    <DeckCardStyle className={`deck-card `}>
      <div className="border">
        <p className={classPlus ? `icons ${classPlus}` : "icon"}>{children}</p>
      </div>
    </DeckCardStyle>
  );
}
