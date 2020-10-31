import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateOverlay() {
  const [text, setText] = useState("");

  const navigate = useNavigate();
  function onOverlayClick() {
    navigate(`/overlay?${new URLSearchParams({ text })}`);
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={onOverlayClick}>get overlay</button>
    </div>
  );
}
