import React from "react";
import EquipmentCard from "../cards/EquipmentCard";
export default function Armor() {
  return (
    <>
      <EquipmentCard
        card_name={"Dragon Knight Chest"}
        isSetItem={true}
        img={"/img/equipment/armor/dragon-chast-armo-1-removebg-preview.png"}
        req_strength={2}
        req_agility={0}
        req_intelligence={1}
        defense={5}
        attack={0}
        hp={10}
        range={1}
      ></EquipmentCard>{" "}
      <EquipmentCard
        card_name={"Dragon Knight Helmet"}
        isSetItem={true}
        img={"/img/equipment/armor/dragon-helm-armor-2.jpeg"}
        req_strength={1}
        req_agility={1}
        req_intelligence={1}
        defense={2}
        attack={0}
        hp={1}
        range={2}
      ></EquipmentCard>
    </>
  );
}
