import React from "react";
import EnemyCard from "../../../../components/cards/EnemyCard";
import { GiFlamingArrow, GiFireball } from "react-icons/gi";
export const enemiesDb = [
  <EnemyCard
    icon_left={"1"}
    icon_right={"melee"}
    card_name={"Carver"}
    img={"/img/units/enemies/lvl_1/carver.jpg"}
    hp={4}
    defense={2}
    attack={1}
    range={3}
    speed={1}
    special_1={"piercing"}
    ability_1={"bleed"}
    ability_1Value={"2"}
  />,
  <EnemyCard
    icon_left={"1"}
    icon_right={"melee"}
    card_name={"Gorger"}
    img={"/img/units/enemies/lvl_1/gorger.jpg"}
    defense={2}
    hp={5}
    attack={1}
    range={3}
    speed={1}
    ability_1={"vomit"}
    ability_1Value={2}
  />,

  <EnemyCard
    icon_left={"1"}
    icon_right={"melee"}
    card_name={"Ru' Athar"}
    img={"/img/units/enemies/lvl_1/ruathar.jpg"}
    defense={"2"}
    hp={"3"}
    attack={1}
    range={3}
    speed={1}
  />,
  <EnemyCard
    icon_left={"1"}
    icon_right={"melee"}
    card_name={"Stalker"}
    img={"/img/units/enemies/lvl_1/stalker.jpg"}
    defense={"2"}
    hp={5}
    range={4}
    speed={2}
    attack={2}
    ability_1={"trick shot"}
    ability_1Value={1}
  />,
  <EnemyCard
    icon_left={"2"}
    icon_right={"melee"}
    card_name={"Raider"}
    img={"/img/units/enemies/lvl_1/raider.jpg"}
    hp={6}
    attack={3}
    range={3}
    speed={2}
    ability_1={"piercing"}
    ability_1Value={1}
    ability_2={"shield-bash"}
    ability_2Value={1}
  />,
  <EnemyCard
    icon_left={"2"}
    icon_right={"melee"}
    card_name={"Seeker"}
    img={"/img/units/enemies/lvl_1/seeker.jpg"}
    range={5}
    speed={3}
    hp={7}
    attack={3}
    ability_1={"dash"}
    ability_1Value={""}
    ability_2={"pounce"}
    ability_2Value={""}
  />,
  <EnemyCard
    icon_left={"2"}
    icon_right={"melee"}
    card_name={"Trapper"}
    img={"/img/units/enemies/lvl_1/trapper.jpg"}
    range={5}
    speed={3}
    hp={7}
    attack={3}
    ability_1={"trap"}
    ability_1Value={""}
    ability_2={"disengage"}
    ability_2Value={""}
  />,
  <EnemyCard
    icon_left={"3"}
    icon_right={"melee"}
    card_name={"Fiend"}
    img={"/img/units/enemies/lvl_1/fiend.jpg"}
    range={5}
    speed={3}
    hp={8}
    attack={5}
    ability_1={"silence"}
    ability_1Value={""}
    ability_2={"blind"}
    ability_2Value={""}
  />,
  <EnemyCard
    icon_left={"3"}
    icon_right={"melee"}
    card_name={"Overseer"}
    img={"/img/units/enemies/lvl_1/overseer.jpg"}
    range={5}
    speed={2}
    hp={8}
    attack={5}
    ability_1={"envelop"}
    ability_1Value={""}
    ability_2={"summons"}
    ability_2Value={""}
  />,
];
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Forest creature"}
//     img={"/img/units/enemies/lvl_1/alien-forest-1.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"slime"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Forest creature"}
//     img={"/img/units/enemies/lvl_1/alien-forest-2.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"no-weapon"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Rocker"}
//     img={"/img/units/enemies/lvl_1/stone-creature-1.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"destroy-shield"}
//   />,
//   <EnemyCard
//     icon_left={"2"}
//     icon_right={"melee"}
//     card_name={"Demonic Rocker"}
//     img={"/img/units/enemies/lvl_1/stone-creature-2.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={3}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Warrior"}
//     img={"/img/units/enemies/lvl_1/stone-creature-5.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Warrior"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-6.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Warrior"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-7.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Warrior"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-8.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     icon_left={"1"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"1"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-1.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   />,
//   <EnemyCard
//     card_name={"Barbarian warrior"}
//     icon_left={"1"}
//     icon_right={"melee"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-1.jpg"}
//     defense={"1"}
//     hp={"2"}
//     attack={3}
//     range={3}
//     ability_1={"heal"}
//   />,
//   <EnemyCard
//     icon_left={"2"}
//     icon_right={"melee"}
//     card_name={"Barbarian warrior"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-2.jpg"}
//     defense={"2"}
//     hp={"2"}
//     attack={2}
//     range={3}
//     ability_1={"piercing"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Warrior"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-3.jpg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Warrior"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-4.jpg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Warrior"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/barbarian-warrior-5.jpg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Vyver"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/stone-Vyver-2.jpg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Vyver"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/stone-Vyver-1.jpg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"2"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   ></EnemyCard>,
// ];
// export const enemiesDbTier34 = [
//   <EnemyCard
//     icon_left={"3"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//   />,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"3"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-1.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//   />,
//   <EnemyCard
//     card_name={"Forest Warrior"}
//     icon_left={"3"}
//     icon_right={"melee"}
//     img={"/img/units/melee/big-dude-1.jpeg"}
//     defense={"1"}
//     hp={"5"}
//     attack={3}
//     range={3}
//     ability_1={"heal"}
//   />,
//   <EnemyCard
//     icon_left={"4"}
//     icon_right={"melee"}
//     card_name={"Skeleton Warrior"}
//     img={"/img/units/enemies/lvl_1/skeleton-archer-warrior-1.jpeg"}
//     defense={"2"}
//     hp={"2"}
//     attack={1}
//     range={3}
//     ability_1={"piercing"}
//     spell={<GiFlamingArrow />}
//     spellValue={"2"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"4"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     ability_1={"heal"}
//     spell={<GiFireball />}
//     spellValue={"2(1)"}
//   ></EnemyCard>,
//   <EnemyCard
//     card_name={"Skeleton Mage"}
//     icon_left={"4"}
//     icon_right={"magic"}
//     img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-2.jpeg"}
//     defense={"1"}
//     hp={"1"}
//     attack={1}
//     range={3}
//     special_1={"heal"}
//     spell={<GiFireball />}
//     spellValue={"2"}
//   ></EnemyCard>,
// ];
