import React from "react";
import "../css/item.css";
export default function Item({ icon, name, children }) {
  return (
    <div className="item">
      <div className="item_icon">
        {/* <img src={icon} alt={name} />  */}
        {icon}
      </div>
      <div className="item_details">
        <h4 className="item_name">{name}</h4>
        {children}
      </div>
    </div>
  );
}
