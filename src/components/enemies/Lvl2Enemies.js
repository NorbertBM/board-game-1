import React from "react";
import EnemyCard from "../../components/cards/EnemyCard";

export default function Lvl2Enemies() {
  return (
    <>
      {" "}
      {/* lvl_1 */}
      <EnemyCard
        icon_left={"2"}
        icon_right={"melee"}
        card_name={"Skeleton Warrior"}
        img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
        defense={"2"}
        hp={"2"}
        attack={1}
        special={"none"}
        range={3}
        special_1={"piercing"}
      ></EnemyCard>{" "}
      <EnemyCard
        card_name={"Skeleton Mage"}
        icon_left={"2"}
        icon_right={"magic"}
        img={
          "/img/units/enemies/lvl_1/skeleton-mage-warrior-1 Background Removed.png"
        }
        defense={"1"}
        hp={"1"}
        attack={1}
        special={"none"}
        range={3}
        special_1={"heal"}
      >
        {" "}
        {/* <p className="description">
    Skeleton Worrier is a basic melee unit with low attack and
    defense. It is the first unit you will encounter in the game.
  </p> */}
      </EnemyCard>{" "}
    </>
  );
}
