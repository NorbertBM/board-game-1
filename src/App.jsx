// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import Quests from "./routes/quests";
import Index from "./routes/indexRoute";
import Guide from "./routes/guide";
import IndexGuide from "./routes/guide_routes/indexGuide";
import Units from "./routes/guide_routes/units";
import Items from "./routes/guide_routes/items";
import Explore from "./routes/guide_routes/explore";
import GamePlay from "./routes/guide_routes/game_play";
import Enemies from "./routes/guide_routes/enemies";
import Battle from "./routes/guide_routes/battle";
export default function App() {
  // responsive
  //   const [isMobile, setIsMobile] = useState(
  //     window.matchMedia("(max-width:600px)").matches
  //   );

  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       setIsMobile(window.matchMedia("(max-width:600px)").matches);
  //     });
  //   }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          {/* add index rout */}
          <Route index element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="quests" element={<Quests />} />
          <Route path="guide" element={<Guide />}>
            {/* nested routs */}
            <Route index element={<IndexGuide />} />
            <Route path="units" element={<Units />} />
            <Route path="items" element={<Items />} />
            <Route path="explore" element={<Explore />} />
            <Route path="gameplay" element={<GamePlay />} />
            <Route path="battle" element={<Battle />} />
            <Route path="enemies" element={<Enemies />} />
            <Route path="/guide/" element={<NoMatch />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h3>404 - Not found</h3>
      <Link to="/">Go home</Link>
    </div>
  );
}
