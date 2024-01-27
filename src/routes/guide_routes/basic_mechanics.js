import React from "react";

export default function BasicMechanics() {
  return (
    <div className="sub-page">
      <h2>Basic game mechanics</h2>
      <p>You start the game with the ability to do the following things:</p>
      <h3>Move</h3>
      <p>
        move your character from one square to another, one stamina per square.
        When you run out of stamina you can no longer move.
      </p>{" "}
      <h3>Dash</h3>
      <p>
        an improved “move” basically, let’s you move two squares for the price
        of three stamina. Goes on cool down after use.
      </p>{" "}
      <h3>Attack</h3>
      <p>
        perform a basic attack, either melee or ranged depending on the weapon /
        spell you have equipped.
      </p>{" "}
      <h3>Drop / pick up</h3>
      <p>drop or pick up a item (dose it take up stamina?).</p>
      <h3>Open / close</h3>
      <p>Open or close dors (dose it take up stamina?).</p>
      <h3>Hide</h3>
      <p>a) you have to have all your stamina to use.</p>
      <p>b) you have to be at least two squares from the mob.</p>
      <p>c) goes on long cool down.</p>
      <h3>Ambush</h3>
      <p>
        only accessible from Hide, uses a lot of stamina, only with certain
        types of weapons / spells, goes on long cool down.
      </p>{" "}
      <h3>Distract</h3>
      <p>
        you have to be a certain distance away from the mob (can’t be used when
        in melee range or combat), you have to have an item of some kind, goes
        on cool down.
      </p>
      <h3>Discover</h3>
      <p>
        ends your turn wherever you are or however much stamina you have left;
        lets you “find” something “normal” in the world (locations, enemies,
        friendlies, etc.).
      </p>{" "}
      <h3>Explore</h3>
      <p>
        like Discover, this lets you dig deeper into the world and find more
        exotic things. DOES NOT end the turn for the player, however the player
        can only do one of these per turn, either Discover or Explore, he cannot
        do both.
      </p>
    </div>
  );
}
