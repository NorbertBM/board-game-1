import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import ExplorationCard from "../../components/cards/ExplorationCard";
import Slider from "../../components/Slider";
export default function Explore() {
  return (
    <div className="sub-page">
      <h2>Exploration</h2>
      <p>
        Exploration is the main part of the game. You will be exploring the
        wasteland, fighting enemies, and collecting items. You will also be
        completing quests and leveling up your character.
      </p>
      <h3>Exploration Icon</h3>
      <FaWpexplorer size={80} />
      <p>
        Exploration cards are marked with the icon above. You can explore the
      </p>
      <Slider />
      <section className="exploration-section ">
        <h4>Exploration Cards</h4>
        <div
          className={`units-container `}
          style={{
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ExplorationCard
            card_name={"Cave"}
            card_type={"explore"}
            img={"/img/explore/explore-1.jpg"}
            speed={2}
            sight={-1}
          >
            <p className="description">
              You came across a cave. Explore the cave and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>{" "}
          <ExplorationCard
            card_name={"Cave"}
            card_type={"explore"}
            img={"/img/explore/explore-undergraund-cave-1.jpg"}
            speed={3}
            sight={-2}
          >
            <p className="description">
              You came across a cave. Explore the cave and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"House"}
            card_type={"explore"}
            img={"/img/explore/explore-house-1.jpg"}
            speed={1}
            sight={-1}
          >
            <p className="description">
              You came across a house. Explore the house and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Temple"}
            card_type={"explore"}
            img={"/img/explore/explore-temple shrine-4.jpg"}
            speed={1}
            sight={-3}
          >
            <p className="description">
              You came across a temple. Explore the temple and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Temple"}
            card_type={"explore"}
            img={"/img/explore/explore-temple shrine-1.jpg"}
            speed={1}
            sight={-1}
          >
            <p className="description">
              You came across a temple. Explore the temple and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Temple"}
            card_type={"explore"}
            img={"/img/explore/explore-temple shrine-2.jpg"}
            speed={1}
            sight={-1}
          >
            <p className="description">
              You came across a temple. Explore the temple and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>{" "}
          <ExplorationCard
            card_name={"Temple"}
            card_type={"explore"}
            img={"/img/explore/explore-temple shrine-3.jpg"}
            speed={1}
            sight={-1}
          >
            <p className="description">
              You came across a temple. Explore the temple and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Castle"}
            card_type={"explore"}
            img={"/img/explore/explore-castel-1.jpg"}
            speed={1}
            sight={-1}
          >
            <p className="description">
              You came across a temple. Explore the temple and see what you can
              find. You might find some treasure or you might find some enemies.
            </p>
          </ExplorationCard>
        </div>
      </section>
    </div>
  );
}
