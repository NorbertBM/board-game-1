import React from "react";
import { NavLink } from "react-router-dom";

export default function Aside_nav({ activate_nav }) {
  return (
    <aside className={`guide_aside-nav ${activate_nav}`}>
      <ul className="nav-items">
        <li>
          <NavLink to="/guide/basic_mechanics">Mechanics</NavLink>
        </li>
        <li>
          <NavLink to="/guide/decks">Decks</NavLink>
        </li>
        {/* <li>
          <NavLink to="/guide/units">Units</NavLink>
        </li>
        <li>
          <NavLink to="/guide/items">Items</NavLink>
        </li>
        <li>
          <NavLink to="/guide/equipment">Equipment</NavLink>
        </li>
        <li>
          <NavLink to="/guide/abilities">Abilities</NavLink>
        </li>
        <li>
          <NavLink to="/guide/explore">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/guide/gameplay">Game</NavLink>
        </li>
        <li>
          <NavLink to="/guide/enemies">Enemies</NavLink>
        </li>{" "}
        <li>
          <NavLink to="/guide/battle">Battle</NavLink>
        </li> */}
        {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
      </ul>
    </aside>
  );
}
