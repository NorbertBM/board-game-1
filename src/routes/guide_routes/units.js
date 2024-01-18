import React, { useState } from "react";
import UnitCard from "../../components/cards/UnitCard";

import "../../css/page.css";
import "../../css/units.css";
export default function Units() {
  // show hide units container by adding and removing the state of hide to the class name
  const [hide, setHide] = useState({ dogs: "", soldiers: "", archer: "" });
  // Toggle hide dogs
  const toggleHideDogs = () => {
    if (hide.dogs === "") {
      setHide({ ...hide, dogs: "hide" });
    } else {
      setHide({ ...hide, dogs: "" });
    }
  };
  // Toggle hide soldiers
  const toggleHideSoldiers = () => {
    if (hide.soldiers === "") {
      setHide({ ...hide, soldiers: "hide" });
    } else {
      setHide({ ...hide, soldiers: "" });
    }
  };
  // Toggle hide archer
  const toggleHideArcher = () => {
    if (hide.archer === "") {
      setHide({ ...hide, archer: "hide" });
    } else {
      setHide({ ...hide, archer: "" });
    }
  };
  return (
    <div className="sub-page">
      <h2>Units</h2>

      <main className="main-container">
        <section className="units-section dogs">
          <h4 onClick={() => toggleHideDogs()}>Dogs</h4>
          <div className={`units-container  ${hide.dogs}`}>
            {/* Dogs */}
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Dog"}
              hp={30}
              attack={2}
              img={"/img/units/dogs/301289_Mutant_dog.png"}
              head={"10-9"}
              body={"8-6"}
              limbs={"5-1"}
            >
              {" "}
              <p className="description">
                Mutant dogs are the most common enemies in the game. They are
                fast and can easily overwhelm you if you are not careful. They
                are also the weakest enemies in the game. They are usually found
                in packs of 3-5.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Dog"}
              hp={30}
              attack={2}
              img={"/img/units/dogs/301287_Mutant_dog.png"}
              head={"10-9"}
              body={"8-6"}
              limbs={"5-1"}
            >
              {" "}
              <p className="description">
                Mutant dogs are the most common enemies in the game. They are
                fast and can easily overwhelm you if you are not careful. They
                are also the weakest enemies in the game. They are usually found
                in packs of 3-5.
              </p>
            </UnitCard>
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Dog"}
              hp={30}
              attack={2}
              img={"/img/units/dogs/301290_Mutant_dog.png"}
              head={"10-9"}
              body={"8-6"}
              limbs={"5-1"}
            >
              {" "}
              <p className="description">
                Mutant dogs are the most common enemies in the game. They are
                fast and can easily overwhelm you if you are not careful. They
                are also the weakest enemies in the game. They are usually found
                in packs of 3-5.
              </p>
            </UnitCard>
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Dog"}
              hp={30}
              attack={2}
              img={"/img/units/dogs/301288_Mutant dog.png"}
              head={"10-9"}
              body={"8-6"}
              limbs={"5-1"}
            >
              {" "}
              <p className="description">
                Mutant dogs are the most common enemies in the game. They are
                fast and can easily overwhelm you if you are not careful. They
                are also the weakest enemies in the game. They are usually found
                in packs of 3-5.
              </p>
            </UnitCard>
          </div>
        </section>
        {/* Soldiers */}
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideSoldiers()}>Solider</h4>
          <div className={`units-container  ${hide.soldiers}`}>
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Solider"}
              hp={140}
              attack={8}
              img={"/img/units/soldiers/323561_Enraged_Mutant_solider.png"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Solider"}
              hp={140}
              attack={8}
              img={"/img/units/soldiers/323560_Enraged _Mutant_solider.png"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Solider"}
              hp={140}
              attack={8}
              img={"/img/units/soldiers/323562_Enraged_Mutant_solider.png"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Mutant Solider"}
              hp={140}
              attack={8}
              img={"/img/units/soldiers/323563_Enraged_Mutant_solider.png"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>
          </div>
        </section>
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideArcher()}>Archer</h4>
          <div className={`units-container  ${hide.archer}`}>
            <UnitCard
              card-type="unit_card"
              card_name={"Archer"}
              hp={140}
              attack={8}
              img={"/img/units/archers/archer-1.jpeg"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Archer"}
              hp={140}
              attack={8}
              img={"/img/units/archers/archer-2.jpeg"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Archer"}
              hp={140}
              attack={8}
              img={"/img/units/archers/archer-3.jpeg"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>{" "}
            <UnitCard
              card-type="unit_card"
              card_name={"Archer"}
              hp={140}
              attack={8}
              img={"/img/units/archers/archer-4.jpeg"}
              head={"10"}
              body={"9-6"}
              limbs={"5-1"}
            >
              <p className="description">
                Mutant soldiers are the second most common enemies in the game.
                They are stronger than mutant dogs and can easily overwhelm you
                if you do not have a good weapon. They are usually found in
                packs of 2-3.
              </p>
            </UnitCard>
          </div>
        </section>
      </main>
    </div>
  );
}
