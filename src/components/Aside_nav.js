import React from "react";
import { Link } from "react-router-dom";
import "../css/aside_nav.css";
export default function Aside_nav() {
  return (
    <aside className="aside-nav">
      <ul className="nav-items">
        <li>
          <Link to="/guide/units">Units</Link>
        </li>
        <li>
          <Link to="/guide/items">Items</Link>
        </li>
        <li>
          <Link to="/guide/game_play">About</Link>
        </li>

        <li>
          <Link to="/guide/items">Guide</Link>
        </li>
        {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
            </li> */}
      </ul>
    </aside>
  );
}
