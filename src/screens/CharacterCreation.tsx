import { Screen } from "../types";
import { races, raceById } from "../data/coreGameData";
import { useEffect, useRef } from "react";
import { FocusableRefs, moveFocus } from "../lib/controls";

interface CharacterCreationProps {
  screenChange: (newScreen: Screen) => void;
}

const CharacterCreationScreen: React.FC<CharacterCreationProps> = ({
  screenChange,
}) => {
  const buttonRefs = useRef<FocusableRefs>([]);
  useEffect(() => {
    buttonRefs.current[0]?.focus();
  }, []);

  const racesItems = races.map((race) => ({
    label: raceById[race.id].name,
    action: () => {},
  }));

  console.log(racesItems);

  const menuItems = [
    ...racesItems,
    { label: "Back to Start Menu", action: () => screenChange("startMenu") },
  ];

  return (
    <>
      <h1>Character Creation</h1>
      {menuItems.map((item, idx) => (
        <button
          key={item.label}
          onClick={item.action}
          ref={(el) => (buttonRefs.current[idx] = el)}
          onKeyDown={(e) => moveFocus(e, idx, buttonRefs.current)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default CharacterCreationScreen;
