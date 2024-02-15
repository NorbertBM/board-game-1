import React from "react";
import EnemyCard from "../../../../components/cards/EnemyCard";
import {
  GiFlamingArrow,
  GiFireball,
  GiBackstab,
  GiShieldImpact,
  GiCaduceus,
  GiShieldBash,
  GiMagicSwirl,
  GiSwordsEmblem,
  GiPocketBow,
  GiBroadsword,
  GiSlime,
  GiAncientSword,
  GiSurroundedShield,
  GiStrikingSplinter,
} from "react-icons/gi";

export const enemiesDbTier34 = [
  <EnemyCard
    icon_left={"3"}
    icon_right={"melee"}
    card_name={"Skeleton Warrior"}
    img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
    defense={"2"}
    hp={"2"}
    attack={1}
    special={"none"}
    range={3}
    special_1={"piercing"}
  />,
  <EnemyCard
    card_name={"Skeleton Mage"}
    icon_left={"3"}
    icon_right={"magic"}
    img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-1.jpeg"}
    defense={"1"}
    hp={"1"}
    attack={1}
    special={"none"}
    range={3}
    special_1={"heal"}
  />,
  <EnemyCard
    card_name={"Forest Warrior"}
    icon_left={"3"}
    icon_right={"melee"}
    img={"/img/units/melee/big-dude-1.jpeg"}
    defense={"1"}
    hp={"5"}
    attack={3}
    special={"none"}
    range={3}
    special_1={"heal"}
  />,
  <EnemyCard
    icon_left={"4"}
    icon_right={"melee"}
    card_name={"Skeleton Warrior"}
    img={"/img/units/enemies/lvl_1/skeleton-archer-warrior-1.jpeg"}
    defense={"2"}
    hp={"2"}
    attack={1}
    special={"none"}
    range={3}
    special_1={"piercing"}
    spell={<GiFlamingArrow />}
    spellValue={"2"}
  ></EnemyCard>,
  <EnemyCard
    card_name={"Skeleton Mage"}
    icon_left={"4"}
    icon_right={"magic"}
    img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
    defense={"1"}
    hp={"1"}
    attack={1}
    special={"none"}
    range={3}
    special_1={"heal"}
    spell={<GiFireball />}
    spellValue={"2(1)"}
  ></EnemyCard>,
  <EnemyCard
    card_name={"Skeleton Mage"}
    icon_left={"4"}
    icon_right={"magic"}
    img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
    defense={"1"}
    hp={"1"}
    attack={1}
    special={"none"}
    range={3}
    special_1={"heal"}
    spell={<GiFireball />}
    spellValue={"2"}
  ></EnemyCard>,
  <EnemyCard
    card_name={"Rogue"}
    icon_left={"3"}
    icon_right={"melee"}
    img={"/img/units/enemies/lvl_1/rogue-2.jpg"}
    defense={"1"}
    hp={"1"}
    attack={1}
    special={"none"}
    range={3}
    ability_1={"striking-splinter"}
    ability_1Value={"2"}
    spell={<GiBackstab />}
    spellValue={"4"}
  ></EnemyCard>,
];
