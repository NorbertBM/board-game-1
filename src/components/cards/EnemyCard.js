import React, { useEffect, useState } from "react";
import "../../css/card.css";
import { GiRank1, GiRank2, GiRank3 } from "react-icons/gi";
import { MdShield } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { GiCrossedSwords } from "react-icons/gi";
import { BsFillEyeFill } from "react-icons/bs";
export default function EnemyCard({
  card_name,
  icon_left,
  icon_left_value,
  icon_right,
  icon_right_value,
  img,

  card_type,
  size,
  children,
  attack,
  defence,
  hp,
  special,
  range,
}) {
  const [rank, setRank] = useState(<GiRank1 />);
  useEffect(() => {
    if (icon_left === "2") {
      setRank(<GiRank2 size={30} />);
    } else if (icon_left === "3") {
      setRank(<GiRank3 size={30} />);
    } else {
      setRank(<GiRank1 size={30} />);
    }
  }, [icon_left]);

  return (
    <div className={`card ${size !== "mini" && null} game-card ${card_type}`}>
      <header className="card-header">
        <p className="icon-left">
          {rank}
          {icon_left_value === undefined ? null : icon_left_value}
        </p>
        <h2 className="card-name"> {card_name}</h2>
        <p className="icon-right">
          {icon_right}
          {icon_right_value === undefined ? null : icon_right_value}
        </p>
      </header>
      <div className="img-container">
        <div className="unit-parts">
          <div className="defance">
            <p className="value">{defence}</p>{" "}
            <MdShield color="#111" size={35} />
          </div>
          <div className="body">
            <p className="value">{hp}</p> <IoIosHeart color="#111" size={35} />
          </div>
          <div className="attack">
            {attack} <GiCrossedSwords color="#111" size={35} />
          </div>
          <div className="range">
            {range} <BsFillEyeFill color="#111" size={35} />
          </div>
          {/* <div className="special">
            {special} <br /> 1x
          </div> */}
        </div>
        <img src={img} alt="img" className="card-img" />
      </div>
      {/* {children} */}
    </div>
  );
}
