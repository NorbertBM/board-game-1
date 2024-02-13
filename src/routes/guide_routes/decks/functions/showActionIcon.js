import React from "react";
import { GiBarefoot, GiDiceFire, GiCrossedSwords } from "react-icons/gi";

export function showActionIcon(action) {
  if (action === "Move forward 1") {
    return (
      <>
        {action} <GiBarefoot className="dice" />
      </>
    );
  } else if (action === "Move forward 2") {
    return (
      <>
        {action}{" "}
        <div className="dice-container">
          <GiBarefoot className="dice" />
          <GiBarefoot className="dice" />
        </div>
      </>
    );
  } else if (action === "Basic Attack") {
    return (
      <>
        {action} <GiCrossedSwords className="dice" />
      </>
    );
  } else if (action === "Ability 1") {
    return (
      <>
        {action}{" "}
        <div className="dice-container">
          <GiDiceFire className="dice" color="#95440e" />
          <GiDiceFire className="dice" color="#95440e" />
        </div>
      </>
    );
  } else if (action === "Ability 2") {
    return (
      <>
        {action}
        <div className="dice-container">
          <GiDiceFire className="dice" color="#f6a972" />
          <GiDiceFire className="dice" color="#f6a972" />
        </div>
      </>
    );
  } else if (action === "Cast spell") {
    return (
      <>
        {action}
        <div className="dice-container">
          <GiDiceFire className="dice" color="blue" />
          <GiDiceFire className="dice" color="blue" />
        </div>
      </>
    );
  }
  return action;
}
