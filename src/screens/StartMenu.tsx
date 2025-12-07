import { exitGame} from "../lib/game";
import { Screen } from "../types";

interface StartMenuProps {
  screenChange: (newScreen: Screen) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ screenChange }) => {
  return (
    <>
      <h1>Welcome to Elorea</h1>

      <button onClick={() => screenChange("characterCreation")}>New Game</button>
      <button onClick={exitGame}>Exit Game</button>
    </>
  );
}

export default StartMenu;