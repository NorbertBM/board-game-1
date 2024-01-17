import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/quests">Quests</Link>
        </li>{" "}
        <li>
          <Link to="/guide">Guide</Link>
        </li>
      </ul>
    </nav>
  );
}
