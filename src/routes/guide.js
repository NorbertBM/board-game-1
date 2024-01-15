import React from "react";
import { Outlet } from "react-router-dom";
import AsideNav from "../components/Aside_nav";
import "../css/guide.css";

export default function guide() {
  return (
    <div className="page">
      <h1>Game Guide</h1>
      <main className="guide">
        {" "}
        <AsideNav />
        <Outlet className="guide_outlet" />
      </main>
    </div>
  );
}
