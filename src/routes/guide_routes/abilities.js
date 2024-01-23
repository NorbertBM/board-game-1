import React from "react";
import AbilityCard from "../../components/cards/AbilityCard";
import { GiInfinity } from "react-icons/gi";
export default function Abilities() {
  return (
    <div className="sub-page">
      <h2>Abilities</h2>
      <h4>Hide</h4> — this is another new and appealing mechanic and this is how
      it goes. Hide uses ALL the stamina and makes the player “invisible” for
      the mobs. You do however have to be at least two squares away from the mob
      you’re trying to hide from (and not move of course). As stated, fears are
      really hard to defeat, so a lot of the times you will be running or hiding
      from them. However while the player is indeed hidden, the mob will move to
      your last known location and you will have to roll a dice to see if the
      mob sees you or not. If the mob does…good luck :D 6. Distract — another
      new action, not sure how it works yet, but going with the idea that mobs
      are hard to beat, you will be able to use items or sound to distract mobs
      to different squares so that you can go around them. Again you have to be
      a certain distance away from them, so you can’t distract a mob that is on
      the same square as you. 7. Dash — characters can dash across two squares
      for the price of 3 stamina. Example: normally you would pay 2 stamina to
      walk across 2 squares (1 stamina per square). However players can choose
      to dash across 2 squares for the price of 3 stamina. This ability will go
      on cool down for a number of turns and if useful when avoiding combat.
      <h4>Interact</h4>
      <p>
        at this point this is mainly for characters interacting with each other
        to trade items and such, but ideally we want them to be able to interact
        with NPCs and perhaps even the world itself. Just not sure HOW a player
        / character would interact with the world.
      </p>
      <h3>Enemy placement</h3>
      <p>The placement of the enemy is determined by two factors</p>
      {/* create a infinity sign */}
      <main className="main-container">
        <section className="units-section lvl_1">
          <AbilityCard
            card_name={"Hide"}
            stamina={<GiInfinity />}
            img={"/img/abilities/ability-hide-1.jpeg"}
          >
            <p className="description">
              Use all stamina to hide from enemies. Enemies will move to your
              last known location.
            </p>
          </AbilityCard>
        </section>
      </main>
    </div>
  );
}
