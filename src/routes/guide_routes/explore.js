import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import ExplorationCard from "../../components/cards/ExplorationCard";
import Slider from "../../components/Slider";
export default function Explore() {
  // make the cards from the exploration printable

  const printExplorationCards = () => {
    console.log("object");
    const printContents = document.querySelector(".exploration-section");
    if (printContents) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(printContents.innerHTML);
      printWindow.document.write(
        `<style>
        @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");

        .card {
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
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#101011",endColorstr="#140619",GradientType=1);
        
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 20px 10px 2px rgba(0, 0, 0, 0.2);
          &:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 20px 2px rgba(0, 0, 0, 0.2);
          }
          .card-header {
            height: 18%;
            border-radius: 15px 15px 0 0;
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
            .icon-left,
            .icon-right {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              height: 100%;
              background-color: #fae9dd;
              /* Create a gradiant inwords  */
              background: rgb(250, 233, 221);
              background: radial-gradient(
                circle,
                rgb(247, 237, 230) 0%,
                rgba(181, 163, 151, 1) 100%
              );
              box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
              /* opacity: 0.7; */
              border-radius: 50%;
              .icon {
                font-size: 1.5rem;
                color: #fff;
                text-shadow: 0 0 15px rgb(163, 11, 11);
              }
            }
            .hp,
            .attack {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 10px;
              font-weight: 600;
              box-shadow: inset 0 5px 20px #000;
              border-radius: 15px;
              text-shadow: 0 0 15px rgb(163, 11, 11);
            }
            .hp {
              text-shadow: 0 0 15px rgb(163, 11, 11);
            }
            & h2 {
              font-size: 1.5rem;
              /* background-color: #296a2d; */
              /* padding: 5px 10px; */
              box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
              border-radius: 5px;
              &.exploration {
                background-color: #1267ac;
              }
            }
            .attack {
              text-shadow: 0 0 15px rgb(163, 11, 11);
            }
          }
          .img-container {
            position: relative;
            display: grid;
            grid-template-columns: 1fr auto;
            justify-content: center;
            align-items: center;
            .card-img {
              width: 42mm;
              height: 42mm;
              margin: 10px;
              object-fit: cover;
              border-radius: 10px;
              border: 2px solid #5e534e;
            }
            .unit-parts {
              z-index: 100;
              /* position: absolute; */
              top: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              /* height: 95%; */
              & div {
                position: relative;
                margin-left: 10px;
                height: 40px;
                width: 40px;
                background-color: #fae9dd;
                /* Create a gradiant inwords  */
                background: rgb(250, 233, 221);
                background: radial-gradient(
                  circle,
                  rgb(247, 237, 230) 0%,
                  rgba(181, 163, 151, 1) 100%
                );
                box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
                /* opacity: 0.7; */
                border-radius: 50%;
                border: 1px solid #111;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                .attack {
                  text-shadow: #000;
                }
                .value {
                  position: absolute;
                  top: -2px;
                  font-size: 1.4rem;
                  /* text-shadow: 0 0 15px rgb(163, 11, 11); */
                }
              }
            }
          }
          .description {
            margin: auto;
            font-size: 0.88rem;
            color: #ddd;
            padding: 0 10px;
          }
        }
        
        @media print {
          .print-btn {
            display: none;
          }
        }
        </style>`
      );
      printWindow.document.close();
      printWindow.print();
    }
  };
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
      {/* Create a button to proint the section */}
      <button onClick={printExplorationCards}>Print</button>
      <section className="exploration-section">
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
          <ExplorationCard
            card_name={"Cathedral of Nox"}
            card_type={"explore"}
            img={"/img/explore/explore-the-cathedral-of-nox-2.jpg"}
            speed={1}
            sight={1}
          >
            <p className="description">
              You came across the Cathedral of Nox. Here is where he meditated
              in silence for 10 years.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Amal refugee caves"}
            card_type={"explore"}
            img={"/img/explore/explore-Amal-refugee-caves-1.jpg"}
            speed={1}
            sight={1}
          >
            <p className="description">
              You came across Amal refugee caves. Here is where where Amal
              rescued them from the firestorm.
            </p>
          </ExplorationCard>
          <ExplorationCard
            card_name={"Court of Fools"}
            card_type={"explore"}
            img={"/img/explore/explore-court-of-fools-1.jpg"}
            speed={1}
            sight={1}
          >
            <p className="description">
              You came across the Court of Fools. A court where no justice will
              be served only judgmend.
            </p>
          </ExplorationCard>
        </div>
      </section>
    </div>
  );
}
