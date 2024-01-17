import React, { useState } from "react";
import "../css/sliders.css";
export default function Slider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <div className="slider-grid">
        <input
          className="slider"
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>

      <p>Slider Value: {sliderValue}</p>
    </div>
  );
}
