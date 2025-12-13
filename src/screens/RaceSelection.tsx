import { Screen } from "../types";
import { races, raceById } from "../data/coreGameData";
import { useEffect, useRef, useState } from "react";
import { FocusableRefs, moveFocus } from "../lib/controls";

interface RaceSelectionProps {
  screenChange: (newScreen: Screen) => void;
}

const RaceSelectionScreen: React.FC<RaceSelectionProps> = () => {
  const buttonRefs = useRef<FocusableRefs>([]);
  const [focusState, setFocusState] = useState(0);
  useEffect(() => {
    buttonRefs.current[focusState]?.focus();
  }, [focusState]);

  const racesItems = races.map((race) => ({
    label: raceById[race.id].name,
    action: () => {},
  }));

  return (
    <>
      <h1>Character Creation</h1>
      <p>
        {raceById[races[focusState]?.id]?.description}
        <br />
        <strong>Trait: {raceById[races[focusState]?.id]?.traits[0]}</strong>
      </p>
      {racesItems.map((item, idx) => (
        <button
          key={item.label}
          onClick={item.action}
          ref={(el) => (buttonRefs.current[idx] = el)}
          onKeyDown={(e) =>
            moveFocus(e, idx, buttonRefs.current, setFocusState)
          }
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default RaceSelectionScreen;
