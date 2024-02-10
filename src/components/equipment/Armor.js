import React from "react";
import EquipmentCard from "../Cards/EquipmentCard";
export default function Armor() {
  return (
    <>
      <EquipmentCard
        card_name={"Dragon Knight Chest"}
        equipmentRarity={"set"}
        img={"/img/equipment/armor/dragon-chast-armo-1-removebg-preview.png"}
        req_strength={2}
        req_agility={0}
        req_intelligence={1}
        defense={5}
        attack={0}
        hp={10}
        range={1}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </EquipmentCard>{" "}
      <EquipmentCard
        card_name={"Dragon Knight Helmet"}
        equipmentRarity={"set"}
        img={"/img/equipment/armor/dragon-helm-armor-2-removebg.png"}
        req_strength={1}
        req_agility={1}
        req_intelligence={1}
        defense={2}
        attack={0}
        hp={1}
        range={2}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </EquipmentCard>
      <EquipmentCard
        card_name={"Dragon Knight Shield"}
        equipmentRarity={"set"}
        img={"/img/equipment/armor/dragon-shield-armor-2-removebg.png"}
        req_strength={3}
        req_agility={1}
        req_intelligence={1}
        defense={2}
        attack={0}
        hp={1}
        range={2}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </EquipmentCard>
      <EquipmentCard
        card_name={"Amanita Shield"}
        equipmentRarity={"unique"}
        img={
          "/img/equipment/armor/white-Amanita-mushrooms-shield-1-removebg.png"
        }
        req_strength={3}
        req_agility={1}
        req_intelligence={1}
        defense={2}
        attack={0}
        hp={0}
        range={0}
        card_description_title="Amanita Shield"
        card_description_text="Imbued with the powerful toxin of the destroying angels. This are actually several species of all-white mushrooms in the genus Amanita. These incredibly toxic fungi are very similar in appearance to edible button mushrooms and the meadow mushrooms, and have been collected by mistake on numerous occassions. One of these species, Amanita bisporigera, is considered to be the most toxic North American mushroom. Symptoms take 5 to 24 hours to appear and include vomiting, delirium, convulsions, diarrhea, liver and kidney failure, and often lead to death.."
      >
        Applies a toxic effect to your weapon.
      </EquipmentCard>
    </>
  );
}
