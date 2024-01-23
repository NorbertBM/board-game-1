import React, { useEffect, useState } from "react";
import "../../css/equipment-card.css";
import {
  GiBiceps,
  GiHand,
  GiHeadbandKnot,
  GiCapeArmor,
  // GiSwitchWeapon,
  GiGears,
  // GiHorseshoe,
  GiSwordsEmblem,
} from "react-icons/gi";

import { MdShield } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { BsFillEyeFill } from "react-icons/bs";

export default function EquipmentCard({
  card_name,
  isSetItem,
  icon_left,
  icon_left_value,
  icon_right,
  icon_right_value,
  img,
  req_strength,
  req_agility,
  req_intelligence,
  customImgStyle,
  attack,
  defense,
  hp,
  range,
}) {
  const [equipmentType, setEquipmentType] = useState(<GiCapeArmor />);
  useEffect(() => {
    if (icon_left === "armor") {
      setEquipmentType(<GiCapeArmor color="#111" size={30} />);
    } else if (icon_left === "weapon") {
      setEquipmentType(<GiHand color="#111" size={30} />);
    } else {
      setEquipmentType(<GiCapeArmor color="#111" size={30} />);
    }
  }, [icon_left]);
  const [set_item, setSetItem] = useState("");
  useEffect(() => {
    if (isSetItem === true) {
      setSetItem("set-item");
    }
  }, [isSetItem]);
  return (
    <div className={`equipment-card ${set_item}`}>
      <header className="equipment-card-header">
        <div className="icon-left">
          {icon_left === undefined ? (
            <GiGears color="#111" size={30} />
          ) : (
            icon_left
          )}
          {icon_left_value === undefined ? null : icon_left_value}
        </div>
        <h2 className="card-name"> {card_name}</h2>
        <div className="icon-right">
          {equipmentType}
          {icon_right_value === undefined ? null : icon_right_value}
        </div>
      </header>
      <div className="stats-container">
        <div className="stats-required">
          <div className="strength">
            <GiBiceps color="#111" size={20} />
            <p className="value">{req_strength}</p>{" "}
          </div>
          <div className="agility">
            <GiHand color="#111" size={20} />
            <p className="value">{req_agility}</p>{" "}
          </div>
          <div className="intelligence">
            <GiHeadbandKnot color="#111" size={20} />
            <p className="value">{req_intelligence}</p>
          </div>
          {/* <div className="range">
            <p className="value"> {range} </p>
            <BsFillEyeFill color="#111" size={50} />
          </div> */}
          {/* <div className="special">
            {special} <br /> 1x
          </div> */}
        </div>
        <div className="attributes-gained">
          <div className="defense">
            <p className="value">{defense}</p>{" "}
            <MdShield color="#111" size={40} />
          </div>
          <div className="health">
            <p className="value">{hp}</p> <IoIosHeart color="#111" size={40} />
          </div>
          <div className="attack">
            <p className="value">{attack}</p>
            <GiSwordsEmblem color="#111" size={41} />
          </div>
          <div className="range">
            <p className="value"> {range} </p>
            <BsFillEyeFill color="#111" size={40} />
          </div>
        </div>
        <section className="img-and-specials">
          <img
            src={img}
            alt="img"
            style={customImgStyle}
            className="equipment-img"
          />

          <section className="specials">
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              facilis obcaecati
            </p>
            {/* <div className="special_1">{specials.icon_1}</div>
            <div className="special_2">{specials.icon_2}</div> */}
          </section>
        </section>
      </div>
    </div>
  );
}
