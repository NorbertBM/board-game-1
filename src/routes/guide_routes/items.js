import React from "react";
import Item from "../../components/Item";
import DiceRoller from "../../components/Dice";
// import { GiPoisonBottle } from "react-icons/gi";
export default function items() {
  return (
    <div className="sub-page">
      <h1>Items</h1>
      <p>
        Items are the main source of income in the game. They can be bought from
        the shop, or found in chests.
      </p>
      <section className="items-container" style={{ display: "flex", gap: 30 }}>
        <Item
          // icon={<GiPoisonBottle color="green" size={60} />}
          img="/img/items/vials/poison_vile.jpg"
          name={"Poison vial"}
        >
          <p className="item_description ">
            A vile of poison that can be used to poison your enemies.
          </p>
        </Item>
        <Item
          // icon={<GiPoisonBottle color="green" size={60} />}
          img="/img/items/vials/anesthetic_vial.jpg"
          name={"Anesthetic  vial"}
        >
          <p className="item_description ">
            A vile of anesthetic that can be used to put your enemies to sleep
            for 5 turnes.
          </p>
        </Item>
        <Item
          // icon={<GiPoisonBottle color="green" size={60} />}
          img="/img/items/soul-shards-1.jpeg"
          name={"Soul Shards"}
        >
          <p className="item_description ">
            Shards of a soul that can be used to summon a demon.
          </p>
        </Item>
        <DiceRoller />
      </section>
    </div>
  );
}
