import React, { useState } from "react";

import { GiLightningBow, GiPocketBow, GiBroadsword } from "react-icons/gi";
import "../../css/page.css";
import Lvl1Enemies from "../../components/enemies/Lvl1Enemies";
import Lvl2Enemies from "../../components/enemies/Lvl2Enemies";
import Lvl3Enemies from "../../components/enemies/Lvl3Enemies";
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
  const printExplorationCards = () => {
    console.log("object");
    const printContents = document.querySelector(".main-container");
    if (printContents) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(printContents.innerHTML);
      printWindow.document.write(
        `<style>
        @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");

        .enemy-card {
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
        
          .description {
            margin: auto;
            font-size: 0.88rem;
            color: #ddd;
            padding: 0 10px;
          }
        }
        .enemy-card-header {
          width: 100%;
          height: 18mm;
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
        
          .card-name {
            text-transform: uppercase;
            font-size: 1.1rem;
            font-weight: 600;
            text-shadow: 0 0 15px rgb(163, 11, 11);
          }
          .enemy-lvl,
          .icon-right {
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
          }
          .enemy-lvl {
            margin-left: 10px;
          }
          .icon-right {
            margin-right: 10px;
          }
          .card-name {
            /* background-color: #296a2d; */
            padding: 5px 10px;
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
        .enemy-details-container {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          height: 50mm;
          .enemy-img {
            width: 40mm;
            height: 40mm;
        
            object-fit: cover;
            border-radius: 10px;
            /* With or withoud borders */
            border: 2px solid #5e534e;
          }
          .enemy-details {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 5px;
            .defense,
            .body,
            .attack,
            .range {
              position: relative;
              margin-left: 10px;
              height: 13mm;
              width: 13mm;
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
        
              .value {
                position: absolute;
                top: 5px;
                font-size: 1.4rem;
                color: rgb(245, 162, 103);
                /* color: #95440e; */
              }
            }
          }
        }
        .specials {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .special_1,
        .special_2 {
          position: relative;
          /* margin-left: 10px; */
          height: 15mm;
          width: 15mm;
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
          font-size: 3rem;
          color: #000;
        }
        .special_1 {
          background: radial-gradient(
            circle,
            rgb(246, 169, 114) 0%,
            rgb(149, 68, 14) 100%
          );
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
      <button onClick={printExplorationCards}>Print</button>
      <main className="main-container">
        <section className="units-section lvl_1">
          <h4 onClick={() => toggleHideLvl_1()}>Lvl_1</h4>
          <div className={`units-container  ${hide.lvl_1}`}>
            <Lvl1Enemies />
          </div>
        </section>
        {/* Soldiers */}
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideLvl_2()}>Solider</h4>
          <div className={`units-container  ${hide.lvl_2}`}>
            <Lvl2Enemies />
          </div>
        </section>
        <section className="units-section soldiers">
          <h4 onClick={() => toggleHideLvl_3()}>Archer</h4>
          <div className={`units-container  ${hide.lvl_3}`}>
            {" "}
            <Lvl3Enemies />
          </div>
        </section>
      </main>
    </div>
  );
}
