import React from "react";
import styled from "styled-components";
// import { AbilityCardStyle } from "./AbilityCardStyle";
import { GrVulnerability } from "react-icons/gr";

import { GiWingfoot } from "react-icons/gi";
import "../../css/ability-card.css";
export default function AbilityCard({
  card_type,
  card_name,
  stamina,
  img,
  children,
}) {
  return (
    <AbilityCardStyle>
      <header className="ability-card-header">
        <p className="ability">
          <GrVulnerability size={35} />
          {/* {hp} */}
        </p>
        <h2 className="exploration">{card_name}</h2>
        <p className="stamina">
          <GiWingfoot size={35} />
          {stamina}
        </p>
      </header>
      <div className="img-container">
        <img src={img} alt="img" className="card-img" />
        {/* <div className="unit-parts"></div> */}
      </div>
      {children}
    </AbilityCardStyle>
  );
}

const AbilityCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");
  :root {
    --border-radius: 15px;
  }

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
`;
