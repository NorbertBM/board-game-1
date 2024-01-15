import React from "react";
import Item from "../components/Item";
import { GiPoisonBottle } from "react-icons/gi";
export default function items() {
  return (
    <div className="sub-page">
      <h1>Items</h1>
      <p>
        Items are the main source of income in the game. They can be bought from
        the shop, or found in chests.
      </p>
      <section className="units-container" style={{ display: "flex", gap: 30 }}>
        <Item
          icon={<GiPoisonBottle color="green" size={60} />}
          name={"Poison vile"}
        >
          <p className="item_description ">
            A vile of poison that can be used to poison your enemies.
          </p>
        </Item>
      </section>
    </div>
  );
}
