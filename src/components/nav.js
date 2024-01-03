import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>
  );
}

// <NavLink
//   to="/messages"
//   className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "active" : ""
//   }
// >
//   Messages
// </NavLink>;
