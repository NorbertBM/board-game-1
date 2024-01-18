import React from "react";
import BattleField from "../../components/BattleField";
import { GiLightningBow, GiPocketBow } from "react-icons/gi";
import { GiBroadsword } from "react-icons/gi";
import { GiStoneWall } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
export default function Battle() {
  return (
    <div className="sub-page">
      <h2>Battle</h2>
      <p>The battle mecanits</p>
      <BattleField
        img={"/img/battlefields/battle-field-forest-mountain.jpg"}
        sq1={<GiLightningBow />}
        sq11={<GiPocketBow />}
        sq28={<GiBroadsword />}
        sq40={<GiStoneWall />}
        sq49={<BsPersonCircle />}
      />
    </div>
  );
}
