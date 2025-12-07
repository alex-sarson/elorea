import { invoke } from "@tauri-apps/api/core";

export async function saveGame() {
  const gameState = { level: 5, score: 1000 };
  const date = new Date().toISOString();
  const filename = `${date}_game_state.json`;
  try {
    await invoke("save_game_state", { filename: filename, state: gameState });
  } catch (error) {
    console.error("Failed to save game state:", error);
  }
}

export async function loadGame(filename: string) {
  try {
    const gameState = await invoke("load_game_state", { filename: filename });
    return gameState;
  } catch (error) {
    console.error("Failed to load game state:", error);
    return null;
  }
}

export async function exitGame() {
  try {
    await invoke("exit_game");
  } catch (error) {
    console.error("Failed to exit game:", error);
  }
}