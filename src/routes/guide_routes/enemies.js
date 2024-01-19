import React, { useState } from "react";
import EnemyCard from "../../components/cards/EnemyCard";

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
      <h2>Units</h2>

      <main className="main-container">
        <section className="units-section lvl_1">
          <h4 onClick={() => toggleHideLvl_1()}>Lvl_1</h4>
          <div className={`units-container  ${hide.lvl_1}`}>
            {/* lvl_1 */}
            <EnemyCard
              icon_left={"2"}
              card_name={"Skeleton Worrier"}
              img={"/img/units/enemies/lvl_1/skeleton-worier-1.jpeg"}
              defence={"2"}
              hp={"2"}
            >
              {" "}
              <p className="description">
                Mutant dogs are the most common enemies in the game. They are
                fast and can easily overwhelm you if you are not careful. They
                are also the weakest enemies in the game. They are usually found
                in packs of 3-5.
              </p>
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
