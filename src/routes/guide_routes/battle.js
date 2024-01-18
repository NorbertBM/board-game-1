import React from "react";
import BattleField from "../../components/BattleField";
export default function Battle() {
  return (
    <div className="sub-page">
      <h2>Battle</h2>
      <p>The battle mecanits</p>
      <BattleField img={"/img/battlefields/battle-field-forest-mountain.jpg"} />
    </div>
  );
}
