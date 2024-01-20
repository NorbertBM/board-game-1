import React, { useEffect, useState } from "react";
import "../../css/enemy-card.css";
import {
  GiRank1,
  GiRank2,
  GiRank3,
  GiShieldImpact,
  GiCaduceus,
} from "react-icons/gi";
import { MdShield } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

import { BsFillEyeFill } from "react-icons/bs";
import {
  GiSwordsEmblem,
  GiLightningBow,
  GiPocketBow,
  GiBroadsword,
} from "react-icons/gi";

export default function EnemyCard({
  card_name,
  icon_left,
  icon_left_value,
  icon_right,
  icon_right_value,
  img,
  children,
  attack,
  defense,
  hp,
  range,
  special_1,
  special_2,
}) {
  const [rank, setRank] = useState(<GiRank1 />);
  useEffect(() => {
    if (icon_left === "2") {
      setRank(<GiRank2 color="#111" size={30} />);
    } else if (icon_left === "3") {
      setRank(<GiRank3 color="#111" size={30} />);
    } else {
      setRank(<GiRank1 color="#111" size={30} />);
    }
  }, [icon_left]);

  const [type, setType] = useState(<GiLightningBow />);
  useEffect(() => {
    if (icon_right === "range") {
      setType(<GiPocketBow color="#111" size={30} />);
    } else if (icon_right === "melee") {
      setType(<GiBroadsword color="#111" size={30} />);
    } else {
      setType(<GiLightningBow color="#111" size={30} />);
    }
  }, [icon_right]);

  // Specials

  const [specials, setSpecials] = useState({ icon_1: "", icon_2: "" });
  useEffect(() => {
    if (special_1 === "piercing") {
      setSpecials({ ...specials, icon_1: <GiShieldImpact /> });
    } else if (special_1 === "heal") {
      setSpecials({ ...specials, icon_1: <GiCaduceus /> });
    }
  }, [specials, special_1]);
  return (
    <div className={`enemy-card`}>
      <header className="enemy-card-header">
        <div className="enemy-lvl">
          {rank}
          {icon_left_value === undefined ? null : icon_left_value}
        </div>
        <h2 className="card-name"> {card_name}</h2>
        <div className="icon-right">
          {type}
          {icon_right_value === undefined ? null : icon_right_value}
        </div>
      </header>
      <div className="enemy-details-container">
        <div className="enemy-details">
          <div className="defense">
            <p className="value">{defense}</p>{" "}
            <MdShield color="#111" size={45} />
          </div>
          <div className="body">
            <p className="value">{hp}</p> <IoIosHeart color="#111" size={50} />
          </div>
          <div className="attack">
            <p className="value">{attack}</p>
            <GiSwordsEmblem color="#111" size={50} />
          </div>
          <div className="range">
            <p className="value"> {range} </p>
            <BsFillEyeFill color="#111" size={50} />
          </div>
          {/* <div className="special">
            {special} <br /> 1x
          </div> */}
        </div>
        <section className="img-and-specials">
          <img src={img} alt="img" className="enemy-img" />
          <section className="specials">
            <div className="special_1">{specials.icon_1}</div>
            <div className="special_2">{specials.icon_2}</div>
          </section>
        </section>
      </div>
      {children}
    </div>
  );
}
