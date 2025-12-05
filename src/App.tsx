import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {

  async function saveGameState() {
    const gameState = { level: 5, score: 1000 };
    const date = new Date().toISOString().slice(0, 10);
    const filename = `${date}_game_state.json`;
    try {
      await invoke("save_game_state", { filename: filename, state: gameState });
      console.log("Game state saved");
    } catch (error) {
      console.error("Failed to save game state:", error);
    }
  }

  return (
    <main className="container">
      <h1>Welcome to Elorea</h1>

      <button onClick={saveGameState}>Save Game</button>
    </main>
  );
}

export default App;
