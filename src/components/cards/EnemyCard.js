import React, { useEffect, useState } from "react";
import "../../css/enemy-card.css";
import {
  GiRank1,
  GiRank2,
  GiRank3,
  GiShieldImpact,
  GiCaduceus,
  GiShieldBash,
  GiMagicSwirl,
  GiSwordsEmblem,
  GiPocketBow,
  GiBroadsword,
  GiSlime,
  GiAncientSword,
  GiSurroundedShield,
  GiFlamingArrow,
  GiStrikingSplinter,
} from "react-icons/gi";
import { MdShield } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { PiEyeClosedFill } from "react-icons/pi";
import { TbMilitaryRank } from "react-icons/tb";
export default function EnemyCard({
  card_name,
  customImgStyle,
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
  spell,
  spellValue,
}) {
  const [rank, setRank] = useState(<GiRank1 />);
  useEffect(() => {
    if (icon_left === "2") {
      setRank(<GiRank2 color="#111" size={30} />);
    } else if (icon_left === "3") {
      setRank(<GiRank3 color="#111" size={30} />);
    } else if (icon_left === "4") {
      setRank(<TbMilitaryRank color="#111" size={30} />);
    } else {
      setRank(<GiRank1 color="#111" size={30} />);
    }
  }, [icon_left]);

  const [type, setType] = useState(<GiMagicSwirl />);
  useEffect(() => {
    if (icon_right === "range") {
      setType(<GiPocketBow color="#111" size={30} />);
    } else if (icon_right === "melee") {
      setType(<GiBroadsword color="#111" size={30} />);
    } else {
      setType(<GiMagicSwirl color="#111" size={30} />);
    }
  }, [icon_right]);

  // Specials

  const [specials, setSpecials] = useState({ icon_1: "", icon_2: "" });
  useEffect(() => {
    if (special_1 === "piercing") {
      setSpecials({ ...specials, icon_1: <GiShieldImpact /> });
    } else if (special_1 === "heal") {
      setSpecials({ ...specials, icon_1: <GiCaduceus /> });
    } else if (special_1 === "slime") {
      setSpecials({ ...specials, icon_1: <GiSlime /> });
    } else if (special_1 === "no-weapon") {
      setSpecials({ ...specials, icon_1: <GiAncientSword /> });
    } else if (special_1 === "destroy-shield") {
      setSpecials({ ...specials, icon_1: <GiSurroundedShield /> });
    }
  }, [special_1]);

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
            <PiEyeClosedFill color="#111" size={70} />
          </div>
          {/* <div className="special">
            {special} <br /> 1x
          </div> */}
        </div>
        <section className="img-and-specials">
          <img
            src={img}
            alt="img"
            style={customImgStyle}
            className="enemy-img"
          />
          <section className="specials">
            <div className="special_1">{specials.icon_1}</div>
            <div className="special_2">{specials.icon_2}</div>
            {spell ? (
              <div className="spell">
                {spell}
                <div className="value">{spellValue}</div>
              </div>
            ) : null}
          </section>
        </section>
      </div>
      {children}
    </div>
  );
}
