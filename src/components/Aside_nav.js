import React from "react";
import { NavLink } from "react-router-dom";

export default function Aside_nav({ activate_nav }) {
  return (
    <aside className={`guide_aside-nav ${activate_nav}`}>
      <ul className="nav-items">
        <li>
          <NavLink to="/guide/units">Units</NavLink>
        </li>
        <li>
          <NavLink to="/guide/items">Items</NavLink>
        </li>
        <li>
          <NavLink to="/guide/game_play">About</NavLink>
        </li>

        <li>
          <NavLink to="/guide/gameplay">Game</NavLink>
        </li>
        <li>
          <NavLink to="/guide/dice">Guide</NavLink>
        </li>
        {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
      </ul>
    </aside>
  );
}
