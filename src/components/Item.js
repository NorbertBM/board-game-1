import React from "react";
import "../css/item.css";
export default function Item({ icon, img, name, children }) {
  return (
    <div className="item">
      <div className="item_icon">
        {!icon ? (
          <img className="item_icon_img" src={img} alt="img-name" />
        ) : (
          icon
        )}
      </div>
      <div className="item_details">
        <h4 className="item_name">{name}</h4>
        {children}
      </div>
    </div>
  );
}
