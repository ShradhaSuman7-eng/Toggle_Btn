import React, { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkBtn=isOn ? "on" : "off";
  const checkBackGround={backgroundColor: isOn ? "#4caf50" : "#f44336"};
  return (
    <div
      className="toggle-switch"
      style={checkBackGround}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkBtn}`}>
        <span className="switch-state">{checkBtn}</span>
      </div>
    </div>
  );
};
