import React from "react";
import "./Character.css";

interface Props {
  color: string;
}

export function Character(props: Props) {
  return (
    <div className="container">
      <div className="body">
        <div className="body-light-part"></div>
        <div className="face">
          <div className="face-light-part">
            <div className="shimmer"></div>
          </div>
        </div>
        <div className="backpack">
          <div className="backpack-light-part"></div>
        </div>
        <div className="leg-left-under"></div>
        <div className="leg-left"></div>
        <div className="leg-right-under"></div>
        <div className="leg-right"></div>
      </div>
    </div>
  );
}
