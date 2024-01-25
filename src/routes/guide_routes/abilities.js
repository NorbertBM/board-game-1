import React from "react";
import styled from "styled-components";
import AbilityCard from "../../components/cards/AbilityCard";
import { GiInfinity } from "react-icons/gi";

import { GrVulnerability } from "react-icons/gr";

export default function Abilities() {
  return (
    <div className="sub-page">
      <h2>Abilities</h2>
      <p>
        The ability cards ar market with the symbol <GrVulnerability />
      </p>

      {/* create a infinity sign */}
      <MainContainer>
        <section className="abilities-section hide">
          <h3 className="section-title">Hide</h3>{" "}
          <p>
            this is another new and appealing mechanic and this is how it goes.
            Hide uses ALL the stamina and makes the player “invisible” for the
            mobs. You do however have to be at least two squares away from the
            mob you’re trying to hide from (and not move of course). As stated,
            fears are really hard to defeat, so a lot of the times you will be
            running or hiding from them. However while the player is indeed
            hidden, the mob will move to your last known location and you will
            have to roll a dice to see if the mob sees you or not. If the mob
            does…good luck :D
          </p>
          <AbilityCard
            card_name={"Hide"}
            stamina={<GiInfinity />}
            img={"/img/abilities/ability-hide-1.jpeg"}
          >
            <p className="description">
              Use all stamina to hide from enemies. Enemies will move to your
              last known location.
            </p>
          </AbilityCard>
        </section>
        <section className="abilities-section distract">
          {" "}
          <h3 className="section-title">Distract</h3>
          <p>
            {" "}
            another new action, not sure how it works yet, but going with the
            idea that mobs are hard to beat, you will be able to use items or
            sound to distract mobs to different squares so that you can go
            around them. Again you have to be a certain distance away from them,
            so you can’t distract a mob that is on the same square as you. Can
            not be used in combat.
          </p>
          <AbilityCard
            card_name={"Distract"}
            stamina={<GiInfinity />}
            img={"/img/abilities/distract-2.jpg"}
          >
            <p className="description">
              Move the enemy the equal amount of squares as your spend stamina.
            </p>
          </AbilityCard>
        </section>
        <section className="abilities-section dash">
          <h3 className="section-title">Dash</h3>
          <p>
            — characters can dash across two squares for the price of 3 stamina.
            Example: normally you would pay 2 stamina to walk across 2 squares
            (1 stamina per square). However players can choose to dash across 2
            squares for the price of 3 stamina. This ability will go on cool
            down for a number of turns and if useful when avoiding combat.
          </p>
          <AbilityCard
            card_name={"Dash"}
            stamina={3}
            img={"/img/abilities/dash-1.jpg"}
          >
            <p className="description">
              Dash across two squares for the price of 3 stamina.
            </p>
          </AbilityCard>
        </section>
        <section className="abilities-section interact">
          <h3 className="section-title">Interact</h3>
          <p>
            At this point this is mainly for characters interacting with each
            other to trade items and such, but ideally we want them to be able
            to interact with NPCs and perhaps even the world itself. Just not
            sure HOW a player / character would interact with the world.
          </p>
          <AbilityCard
            card_name={"Interact"}
            stamina={1}
            img={"/img/abilities/interact-1.jpg"}
          >
            <p className="description">
              Interact with a character or NPCs for 1 stamina.
            </p>
          </AbilityCard>
        </section>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.main`
  & .abilities-section {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    border-bottom: 1px solid beige;
    & .section-title {
      margin-bottom: 1rem;
      background-color: beige;
      color: #282c34;
      padding: 0.5rem 2.5rem;
      border-radius: 5px;
    }
  }
`;
