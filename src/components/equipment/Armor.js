import React from "react";
import EquipmentCard from "../cards/EquipmentCard";
export default function Armor() {
  return (
    <div>
      Armor
      <EquipmentCard
        card_name={"Dragon Knight Chest"}
        img={"/img/equipment/armor/dragon-chast-armo-1-removebg-preview.png"}
        req_strength={2}
        req_agility={1}
        req_intelligence={1}
        defense={5}
        attack={0}
        hp={10}
        range={1}
      ></EquipmentCard>
    </div>
  );
}
