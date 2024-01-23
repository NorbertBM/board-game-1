import React, { useState } from "react";
import Armor from "../../components/equipment/Armor";

export default function Equipment() {
  const [hide, setHide] = useState({ armors: "", weapons: "", lvl_3: "" });
  // Toggle hide lvl_1
  const toggleHideArmors = () => {
    if (hide.armors === "") {
      setHide({ ...hide, armors: "hide" });
    } else {
      setHide({ ...hide, armors: "" });
    }
  };
  return (
    <div className="sub-page">
      <h2>Equipment </h2>

      <h3>Equipment type</h3>
      <p>The placement of the enemy is determined by two factors</p>
      <ul>
        <p>
          {/* Enemy type: Range, {<GiPocketBow />}, Melee {<GiBroadsword />}, or
          Magic {<GiLightningBow />}, to be placed on the according icon. */}
        </p>
        <p>Enemy level</p>{" "}
      </ul>
      <main className="main-container">
        <section className="equipment-section Armors">
          <h4 onClick={() => toggleHideArmors()}>Armors</h4>
          <div
            className={`equipment-container  ${hide.armors}`}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            <Armor />
          </div>
        </section>
      </main>
    </div>
  );
}
