import React from "react";
import { CombatCardStyle } from "./CombatCardStyle";

export default function CombatCard({
  iconLeft,
  iconsMid,
  iconsRight,
  children,
}) {
  return (
    <CombatCardStyle className="combat-card">
      <main className="border">
        <header className="combat-card_header">
          <div className="combat-card_icon-left">{iconLeft}</div>
          <div className="combat-card_icon-mid">{iconsMid}</div>
          <div className="combat-card_icon-right">{iconsRight}</div>
        </header>
        <div className="combat-card_border">
          <p className="children">{children}</p>
        </div>
      </main>
    </CombatCardStyle>
  );
}
