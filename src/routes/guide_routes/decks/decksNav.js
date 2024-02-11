import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function DecksNav() {
  const deckNavItems = [
    "Stock",
    "Behavior",
    "Explorer",
    "Combat1",
    "Discover",
    "Abilities",
    "Enemies",
    "CharacterPanel",
  ];
  return (
    <DeckNavStyle>
      <ul className="card-decks-nav">
        {deckNavItems.map((item) => (
          <li key={item}>
            <NavLink
              to={`/guide/decks/${item}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </DeckNavStyle>
  );
}
export const DeckNavStyle = styled.nav`
  .card-decks-nav {
    & li {
      list-style-type: none;
    }
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      padding: 10px;
      border-radius: 10px;
      &:hover {
        background-color: #ffffff;
        color: #000000;
      }
      &.active {
        background-color: #ffffff;
        color: #000000;
      }
    }
  }
`;
