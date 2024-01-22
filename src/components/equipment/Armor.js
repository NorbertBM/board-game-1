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
      ></EquipmentCard>
    </div>
  );
}
