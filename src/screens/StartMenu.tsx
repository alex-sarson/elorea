import { useEffect, useRef } from "react";
import { exitGame } from "../lib/game";
import { Screen } from "../types";
import { FocusableRefs, moveFocus } from "../lib/controls";

interface StartMenuProps {
  screenChange: (newScreen: Screen) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ screenChange }) => {
  const buttonsRef = useRef<FocusableRefs>([]);
  useEffect(() => {
    buttonsRef.current[0]?.focus();
  }, []);

  const menuItems = [
    { label: "New Game", action: () => screenChange("characterCreation") },
    { label: "Exit Game", action: exitGame },
  ];

  return (
    <>
      <h1>Welcome to Elorea</h1>

      {menuItems.map((item, idx) => (
        <button
          key={item.label}
          onClick={item.action}
          onKeyDown={(e) => moveFocus(e, idx, buttonsRef.current)}
          ref={(el) => (buttonsRef.current[idx] = el)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default StartMenu;
