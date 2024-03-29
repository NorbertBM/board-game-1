import React from "react";
import EnemyCard from "../../components/cards/EnemyCard";

export default function Lvl1Enemies() {
  return (
    <>
      {/* lvl_1 */}

      <>
        <EnemyCard
          icon_left={"1"}
          icon_right={"melee"}
          card_name={"Skeleton Warrior"}
          img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
          defense={"2"}
          hp={"2"}
          attack={1}
          special={"none"}
          range={3}
          special_1={"piercing"}
        />
        <EnemyCard
          card_name={"Skeleton Mage"}
          icon_left={"1"}
          icon_right={"magic"}
          img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-1.jpeg"}
          defense={"1"}
          hp={"1"}
          attack={1}
          special={"none"}
          range={3}
          special_1={"heal"}
        />
        <EnemyCard
          card_name={"Skeleton Mage"}
          icon_left={"1"}
          icon_right={"melee"}
          img={"/img/units/melee/big-dude-1.jpeg"}
          defense={"1"}
          hp={"2"}
          attack={3}
          special={"none"}
          range={3}
          special_1={"heal"}
        />
      </>
    </>
  );
}
