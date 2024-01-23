import React from "react";
import EnemyCard from "../../components/cards/EnemyCard";
import { MdLocalPrintshop } from "react-icons/md";
import { EnemyStyle } from "./EnemyStyle";
export default function Lvl1Enemies() {
  const printEnemyCard = () => {
    console.log("print");
    const enemyCard = document.getElementById("enemy-card");
    if (enemyCard) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write(enemyCard.innerHTML);
      printWindow.document.write(
        `<style>
${EnemyStyle}
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
    <>
      {/* lvl_1 */}

      <>
        <button className="print-btn" onClick={printEnemyCard}>
          <MdLocalPrintshop />
        </button>
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
        />
        <EnemyCard
          card_name={"Skeleton Mage"}
          icon_left={"1"}
          icon_right={"magic"}
          img={"/img/units/enemies/lvl_1/skeleton-mage-warrior-1.jpeg"}
          defense={"1"}
          hp={"1"}
          attack={1}
          special={"none"}
          range={3}
          special_1={"heal"}
        />
      </>
    </>
  );
}
