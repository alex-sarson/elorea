import { Screen } from "../types";

interface CharacterCreationProps {
  screenChange: (newScreen: Screen) => void;
}

const CharacterCreationScreen: React.FC<CharacterCreationProps> = ({ screenChange }) => {
  return (
    <>
      <h1>Character Creation</h1>
      <button onClick={() => screenChange("startMenu")}>Back to Start Menu</button>
    </>
  )
}

export default CharacterCreationScreen;