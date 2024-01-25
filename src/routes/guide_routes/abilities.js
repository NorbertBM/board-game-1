import React from "react";
import styled from "styled-components";
import AbilityCard from "../../components/cards/AbilityCard";
// import { GiInfinity } from "react-icons/gi";
// import { AbilityCardStyle } from "../../components/cards/AbilityCardStyle";
import { GrVulnerability } from "react-icons/gr";
//
import { Print } from "../../components/Print";
export default function Abilities() {
  // const print = () => {
  //   const printContents = document.querySelector(".main-container");
  //   if (printContents) {
  //     const printWindow = window.open("", "_blank");
  //     printWindow.document.write(printContents.innerHTML);
  //     // printWindow.document.write(`${(<AbilityCardStyle />)}`);
  //     printWindow.document.close();
  //     printWindow.print();
  //   }
  // };

  return (
    <div className="sub-page">
      <h2>Abilities</h2>
      <p>
        The ability cards ar market with the symbol <GrVulnerability />
      </p>

      <button onClick={() => Print("main-container", elementStyle)}>
        Print
      </button>
      <MainContainer className="main-container">
        <section className="abilities-section hide">
          <h3 className="section-title">Hide</h3>{" "}
          <div className="abilities-details">
            <AbilityCard
              card_name={"Hide"}
              stamina={""}
              img={"/img/abilities/ability-hide-1.jpeg"}
            >
              <p className="description">
                Use all stamina to hide from enemies. Enemies will move to your
                last known location.
              </p>
            </AbilityCard>
            <p className="abilities-details-description">
              this is another new and appealing mechanic and this is how it
              goes. Hide uses ALL the stamina and makes the player “invisible”
              for the mobs. You do however have to be at least two squares away
              from the mob you’re trying to hide from (and not move of course).
              As stated, fears are really hard to defeat, so a lot of the times
              you will be running or hiding from them. However while the player
              is indeed hidden, the mob will move to your last known location
              and you will have to roll a dice to see if the mob sees you or
              not. If the mob does…good luck :D
            </p>
          </div>
        </section>
        <section className="abilities-section distract">
          {" "}
          <h3 className="section-title">Distract</h3>
          <div className="abilities-details">
            <AbilityCard
              card_name={"Distract"}
              stamina={""}
              img={"/img/abilities/distract-2.jpg"}
            >
              <p className="description">
                Move the enemy the equal amount of squares as your spend
                stamina.
              </p>
            </AbilityCard>
            <p className="abilities-details-description">
              {" "}
              another new action, not sure how it works yet, but going with the
              idea that mobs are hard to beat, you will be able to use items or
              sound to distract mobs to different squares so that you can go
              around them. Again you have to be a certain distance away from
              them, so you can’t distract a mob that is on the same square as
              you. Can not be used in combat.
            </p>
          </div>
        </section>
        <section className="abilities-section dash">
          <h3 className="section-title">Dash</h3>
          <div className="abilities-details">
            <AbilityCard
              card_name={"Dash"}
              stamina={3}
              img={"/img/abilities/dash-1.jpg"}
            >
              <p className="description">
                Dash across two squares for the price of 3 stamina.
              </p>
            </AbilityCard>
            <p className="abilities-details-description">
              — characters can dash across two squares for the price of 3
              stamina. Example: normally you would pay 2 stamina to walk across
              2 squares (1 stamina per square). However players can choose to
              dash across 2 squares for the price of 3 stamina. This ability
              will go on cool down for a number of turns and if useful when
              avoiding combat.
            </p>
          </div>
        </section>
        <section className="abilities-section interact">
          <h3 className="section-title">Interact</h3>
          <div className="abilities-details">
            <AbilityCard
              card_name={"Interact"}
              stamina={1}
              img={"/img/abilities/interact-1.jpg"}
            >
              <p className="description">
                Interact with a character or NPCs for 1 stamina.
              </p>
            </AbilityCard>
            <p className="abilities-details-description">
              At this point this is mainly for characters interacting with each
              other to trade items and such, but ideally we want them to be able
              to interact with NPCs and perhaps even the world itself. Just not
              sure HOW a player / character would interact with the world.
            </p>
          </div>
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
    padding: 1rem;
    border-bottom: 1px solid beige;
    height: 297mm;
    width: 210mm;
    margin: 0 auto;

    & .section-title {
      margin-bottom: 1rem;
      background-color: beige;
      color: #282c34;
      padding: 0.5rem 2.5rem;
      border-radius: 5px;
    }
    & .abilities-details {
      display: flex;
      width: 100%;
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      flex-wrap: wrap-reverse;
    }
    & .abilities-details-description {
      max-width: 300px;
    }
  }
`;
const elementStyle = `

@import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");
  :root {
    --border-radius: 15px;
  }


  .abilities-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid beige;
    height: 297mm;
    width: 210mm;
    margin: 0 auto;

    & .section-title {
      margin-bottom: 1rem;
      background-color: beige;
      color: #282c34;
      padding: 0.5rem 2.5rem;
      border-radius: 5px;
    }
    & .abilities-details {
      display: flex;
      width: 100%;
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      flex-wrap: wrap-reverse;
    }
    & .abilities-details-description {
      max-width: 300px;
    }
  }


.ability-card {
  font-family: "Philosopher", sans-serif;
  color: #fae9dd;
  width: 63.5mm;
  height: 88mm;
  &.flip {
    transform: rotateY(180deg);
  }
  &-mini {
    width: 41mm;
    height: 63mm;
  }
  background: rgb(16, 16, 17);
  background: -moz-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );

  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 20px 2px rgba(0, 0, 0, 0.2);
  }

  & .ability-card-header {
    height: 18%;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    background-color: inherit;

    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    .card-name {
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 600;
      text-shadow: 0 0 15px rgb(163, 11, 11);
    }
    .ability,
    .stamina {
      color: #111;
      height: 11mm;
      width: 11mm;
      background-color: #fae9dd;
      /* Create a gradiant inwords  */
      background: rgb(250, 233, 221);
      background: radial-gradient(
        circle,
        rgb(247, 237, 230) 0%,
        rgba(181, 163, 151, 1) 100%
      );
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      & .value {
        color: #c95503;
        text-shadow: 10px 10px 10px #2d1301;
        font-size: 1.8rem;
        position: absolute;
      }
    }
  }
  & .img-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    .card-img {
      width: 51mm;
      height: 51mm;
      /* margin: 10px; */
      margin: 0 auto;
      object-fit: cover;
      border-radius: var(--border-radius);
      border: 2px solid #5e534e;
    }
  }
  & .description {
    width: 51mm;
    height: 14mm;
    margin: 1mm auto;
    padding: 1mm;
    background: #fae9dd;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
    border: 1mm solid #000;
    border-radius: var(--border-radius);
    color: #111;
    font-size: 3.5mm;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`;
