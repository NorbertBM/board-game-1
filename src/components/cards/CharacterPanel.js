import React, { useState, useEffect, useMemo } from "react";
import { CharacterPanelStyle } from "./CharacterPanelStyle";

import { FaHeart } from "react-icons/fa";
import { GiFireBottle, GiEnrage } from "react-icons/gi";
export default function CharacterPanel({ characterCard }) {
  const initialHp = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );
  const initialMana = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );
  const initialSanity = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );

  // console.log(initialInventoryItems);
  const [hp, setHp] = useState(initialHp);
  const [mana, setMana] = useState(initialMana);
  const [sanity, setSanity] = useState(initialSanity);

  useEffect(() => {
    //  loop over the array of hp and return a div for each value in the array with the value as the text content
    setHp(
      initialHp.map((hp, index) => {
        return (
          <div className="hp" key={index}>
            <FaHeart />
          </div>
        );
      })
    );
    setMana(
      initialMana.map((mana, index) => {
        return (
          <div className="mana" key={index}>
            <GiFireBottle />
          </div>
        );
      })
    );
    setSanity(
      initialSanity.map((sanity, index) => {
        return (
          <div className="sanity" key={index}>
            <GiEnrage />
          </div>
        );
      })
    );
  }, [initialHp, initialMana, initialSanity]);

  return (
    <CharacterPanelStyle className="character-panel">
      <header className="character-panel-header">
        <aside className="character-profile-pic">
          {!characterCard && "Character card 95x70mm"}
        </aside>
        <main className="perks">
          <section className="character-spells">
            <div className="spell">
              Spell 1 <br /> 30x30mm
            </div>
            <div className="spell">
              Spell 2<br /> 30x30mm
            </div>
            <div className="spell">
              Spell 3<br /> 30x30mm
            </div>
          </section>
          <section className="character-items">
            <div className="item">
              Item 1<br /> 30x30mm
            </div>
            <div className="item">
              Item 2<br /> 30x30mm
            </div>
            <div className="item">
              Item 3<br /> 30x30mm
            </div>
          </section>
          <section className="character-abilities">
            <div className="ability">
              Ability 1<br /> 30x30mm
            </div>
            <div className="ability">
              Ability 2<br /> 30x30mm
            </div>
            <div className="ability">
              Ability 3<br /> 30x30mm
            </div>
            {/* <div className="ability">
              Ability 4<br /> 30x30mm
            </div>
            <div className="ability">
              Ability 5<br /> 30x30mm
            </div> */}
          </section>
        </main>
      </header>

      <aside className="character-status-info">
        <h4 className="character-status-info-title">Player status</h4>
        <section className="character-status-hp">{hp}</section>
        <section className="character-status-mana">{mana}</section>
        <section className="character-status-sanity">{sanity}</section>
      </aside>
    </CharacterPanelStyle>
  );
}
