import React, { useState } from "react";
import EnemyCard from "../../components/cards/EnemyCard";
import { GiLightningBow, GiPocketBow, GiBroadsword } from "react-icons/gi";
import "../../css/page.css";
// import "../../css/units.css";
export default function Enemies() {
  // show hide units container by adding and removing the state of hide to the class name
  const [hide, setHide] = useState({ lvl_1: "", lvl_2: "", lvl_3: "" });
  // Toggle hide lvl_1
  const toggleHideLvl_1 = () => {
    if (hide.lvl_1 === "") {
      setHide({ ...hide, lvl_1: "hide" });
    } else {
      setHide({ ...hide, lvl_1: "" });
    }
  };

  // Toggle hide lvl_2
  const toggleHideLvl_2 = () => {
    if (hide.lvl_2 === "") {
      setHide({ ...hide, lvl_2: "hide" });
    } else {
      setHide({ ...hide, lvl_2: "" });
    }
  };
  // Toggle hide lvl_3
  const toggleHideLvl_3 = () => {
    if (hide.lvl_3 === "") {
      setHide({ ...hide, lvl_3: "hide" });
    } else {
      setHide({ ...hide, lvl_3: "" });
    }
  };

  return (
    <div className="sub-page">
      <h2>Enemies</h2>

      <h3>Enemy placement</h3>
      <p>The placement of the enemy is determined by two factors</p>
      <ul>
        <p>
          Enemy type: Range, {<GiPocketBow />}, Melee {<GiBroadsword />}, or
          Magic {<GiLightningBow />}, to be placed on the according icon.
        </p>

        <p>Enemy level</p>
      </ul>
      <main className="main-container">
        <section className="units-section lvl_1">
          <h4 onClick={() => toggleHideLvl_1()}>Lvl_1</h4>
          <div className={`units-container  ${hide.lvl_1}`}>
            {/* lvl_1 */}
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
            >
              {" "}
              {/* <p className="description">
                Skeleton Worrier is a basic melee unit with low attack and
                defense. It is the first unit you will encounter in the game.
              </p> */}
            </EnemyCard>{" "}
          </div>
        </section>
        {/* Soldiers */}
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideLvl_2()}>Solider</h4>
          <div className={`units-container  ${hide.soldiers}`}></div>
        </section>
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideLvl_3()}>Archer</h4>
          <div className={`units-container  ${hide.archer}`}></div>
        </section>
      </main>
    </div>
  );
}
