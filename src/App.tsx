import { useEffect, useState } from "react";
import "./App.css";
import StartMenu from "./screens/StartMenu";
import { Screen } from "./types";
import RaceSelection from "./screens/RaceSelection";

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

  useEffect(() => {
    const disableMouseClicks = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("mousedown", disableMouseClicks);
    return () => document.removeEventListener("mousedown", disableMouseClicks);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentScreen === "raceSelection") {
        setCurrentScreen("startMenu");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "raceSelection":
        return <RaceSelection screenChange={handleChangeScreen} />;
      default:
        return <StartMenu screenChange={handleChangeScreen} />;
    }
  };

  return (
    <main className={`screen-container ${fade ? "fade-in" : ""}`}>
      <div className="container">{renderScreen()}</div>
    </main>
  );
}

export default App;
