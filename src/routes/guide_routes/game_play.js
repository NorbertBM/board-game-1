import React from "react";

export default function GamePlay() {
  return (
    <div className="sub-page">
      <h2>Game Play</h2>

      <h3> Game Modes</h3>
      <p>
        There are two game modes in the game: <b>Classic</b> and <b>Time</b>.
      </p>
      <p>
        In <b>Classic</b> mode, the main protagonist is a proceeds through a set
        of levels, each with a different theme. The player must complete each
        level in order to progress to the next one. The player has a limited
        number of lives, and if they lose all of them, they must start the level
        over. The player can collect coins and powerups to help them complete
        the level.
      </p>
      <h3>Endings</h3>
      <p>
        There are two endings in the game: <b>good</b> and <b>bad</b>. The good
        ending is achieved by completing the game with 100% completion. The bad
        ending is achieved by completing the game with less than 100%
        completion.
      </p>
      <h3>Battle</h3>
      <p>A battle is initiated eider by the player or the enemies.</p>
      <p>
        The battle is turn-based. The player and the enemy take turns attacking
        each other. The player can choose to attack, use an item, or run away.
        The enemy can only attack. The player can also choose to use a special
        attack, which consumes a certain amount of MP.
      </p>
    </div>
  );
}
