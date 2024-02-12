import React from "react";
import { CombatCardStyle } from "./CombatCardStyle";
export default function CombatCard({ iconLeft, iconsRight, children }) {
  return (
    <CombatCardStyle className="combat-card">
      <header className="combat-card_header">
        <div className="combat-card_icon-left">{iconLeft}</div>
        <div className="combat-card_icon-right">{iconsRight}</div>
      </header>
      <div className="combat-card_border">
        <p className="children">{children}</p>
      </div>
    </CombatCardStyle>
  );
}
