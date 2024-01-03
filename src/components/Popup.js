import React from "react";

export default function Popup() {
  return (
    <div>
      {/* create a react popup component */}
      <div className="popup">
        <div className="popup_inner">
          <h1>Popup</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    </div>
  );
}
