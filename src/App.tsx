import { useState } from "react";
import "./App.css";
import StartMenu from "./screens/StartMenu";
import { Screen } from "./types";
import CharacterCreationScreen from "./screens/CharacterCreation";

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("startMenu");
  const [fade, setFade] = useState(true);

  const handleChangeScreen = (newScreen: Screen) => {
    setFade(false);
    setTimeout(() => {
      setCurrentScreen(newScreen);
      setFade(true);
    }, 300);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "characterCreation":
        return <CharacterCreationScreen screenChange={handleChangeScreen} />;
      default:
        return <StartMenu screenChange={handleChangeScreen} />;
    }
  };

  return (
    <main className={`screen-container ${fade ? 'fade-in' : ''}`}>
      <div className="container">{renderScreen()}</div>
    </main>
  );
}

export default App;
