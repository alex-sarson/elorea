import { useEffect, useRef, useState } from "react";
import { exitGame } from "../lib/game";
import { Screen } from "../types";
import { FocusableRefs, moveFocus } from "../lib/controls";

interface StartMenuProps {
  screenChange: (newScreen: Screen) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ screenChange }) => {
  const buttonsRef = useRef<FocusableRefs>([]);
  const [focusState, setFocusState] = useState(0);

  const menuItems = [
    { label: "New Game", action: () => screenChange("raceSelection") },
    { label: "Exit Game", action: exitGame },
  ];

  useEffect(() => {
    buttonsRef.current[focusState]?.focus();
  }, [focusState]);
  return (
    <>
      <h1>Welcome to Elorea</h1>

      {menuItems.map((item, idx) => (
        <button
          key={item.label}
          onClick={item.action}
          onKeyDown={(e) =>
            moveFocus(e, idx, buttonsRef.current, setFocusState)
          }
          ref={(el) => (buttonsRef.current[idx] = el)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default StartMenu;
