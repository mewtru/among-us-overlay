import React, { useState, useEffect } from "react";
import { Character } from "./Character";

interface Props {
  text: string;
  colors: string[] | "all";
}
function useDelayedMessage(
  message: string,
  timeoutMs: number,
  initialDelay: number
) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (length >= message.length) {
      return;
    }

    const timeout = setTimeout(
      () => {
        setLength((length) => length + 1);
      },
      length === 0 ? initialDelay : timeoutMs
    );

    return () => clearTimeout(timeout);
  }, [length]);

  return message.slice(0, length);
}

export function AmongUsScreen(props: Props) {
  const message = useDelayedMessage(props.text, 80, 2000);
  return (
    <>
      <Character color="blue" />
      <div className="screen">
        <div className="message">{message}</div>
        <div className="background-beeg" />
        <div className="background-smol" />
      </div>
    </>
  );
}
