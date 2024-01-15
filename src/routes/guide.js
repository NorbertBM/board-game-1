import React from "react";
import { Link, Outlet } from "react-router-dom";
import Aside_nav from "../components/Aside_nav";
import "../css/guide.css";

export default function guide() {
  return (
    <div className="page">
      <h1>Game Guide</h1>
      <main className="guide">
        {" "}
        <Aside_nav />
        <Outlet className="guide_outlet" />
      </main>
    </div>
  );
}
