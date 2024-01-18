import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import AsideNav from "../components/Aside_nav";
import "../css/guide.css";

export default function Guide() {
  const [activate_nav, setActivate_nav] = useState("");

  function toggleNav() {
    !activate_nav ? setActivate_nav("active") : setActivate_nav("");
  }
  return (
    <>
      <nav className="guide_aside-nav">
        <button onClick={() => toggleNav()}>
          <BsFillMenuButtonWideFill />
        </button>
        <AsideNav activate_nav={activate_nav} />
      </nav>
      <div className="page">
        <h1>Game Guide</h1>
        <main className="guide">
          <Outlet className="guide_outlet" />
        </main>
      </div>
    </>
  );
}
