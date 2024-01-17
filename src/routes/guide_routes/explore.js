import React from "react";
import { FaWpexplorer } from "react-icons/fa";
import Card from "../../components/Card";
export default function Explore() {
  return (
    <div className="sub-page">
      <h2>Exploration</h2>
      <p>
        Exploration is the main part of the game. You will be exploring the
        wasteland, fighting enemies, and collecting items. You will also be
        completing quests and leveling up your character.
      </p>
      <h3>Exploration Icon</h3>
      <FaWpexplorer size={80} />
      <p>
        Exploration cards are marked with the icon above. You can explore the
      </p>
      <Card>
        <FaWpexplorer size={40} />
      </Card>
    </div>
  );
}
