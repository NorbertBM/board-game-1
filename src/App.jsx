import React from "react";
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
import Abilities from "./routes/guide_routes/abilities";
import Explore from "./routes/guide_routes/explore";
import GamePlay from "./routes/guide_routes/game_play";
import Enemies from "./routes/guide_routes/enemies";
import Battle from "./routes/guide_routes/battle";
import Equipment from "./routes/guide_routes/equipment";
import BasicMechanics from "./routes/guide_routes/basic_mechanics";
import Decks from "./routes/guide_routes/decks";
import BehaviorDeck from "./routes/guide_routes/decks/behaviorDeck";
import StockDeck from "./routes/guide_routes/decks/stockDeck";
import ExplorerDeck from "./routes/guide_routes/decks/explorerDeck";
import CharacterPanel from "./components/cards/CharacterPanel";
import CluesSolutions from "./routes/guide_routes/decks/CluesSolutions";
import CombatDeck1 from "./routes/guide_routes/decks/CombatDeck1";
import AbilitiesDeck from "./routes/guide_routes/decks/AbilitiesDeck";
import EnemiesDeck from "./routes/guide_routes/decks/EnemiesDeck";
import DiscoverDeck from "./routes/guide_routes/decks/DiscoverDeck";
import CombatDeck2 from "./routes/guide_routes/decks/CombatDeck2";
export default function App() {
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
            <Route path="basic_mechanics" element={<BasicMechanics />} />
            <Route path="decks" element={<Decks />}>
              <Route path="stock" element={<StockDeck />} />
              <Route path="behavior" element={<BehaviorDeck />} />
              <Route path="discover" element={<DiscoverDeck />} />
              <Route path="explorer" element={<ExplorerDeck />} />
              <Route path="combat1" element={<CombatDeck1 />} />
              <Route path="combat2" element={<CombatDeck2 />} />
              <Route path="characterPanel" element={<CharacterPanel />} />
              <Route path="cluessolutions" element={<CluesSolutions />} />
              <Route path="abilities" element={<AbilitiesDeck />} />
              <Route path="enemies" element={<EnemiesDeck />} />
            </Route>
            <Route path="units" element={<Units />} />
            <Route path="abilities" element={<Abilities />} />
            <Route path="items" element={<Items />} />
            <Route path="equipment" element={<Equipment />} />
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
