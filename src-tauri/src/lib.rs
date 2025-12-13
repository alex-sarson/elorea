use directories_next::ProjectDirs;
use std::fs;
use std::io::Error;
use std::{fs::File, path::PathBuf};

// Command to save game state
#[tauri::command]
fn save_game_state(filename: String, state: serde_json::Value) -> Result<String, String> {
    // filename validation
    if filename.contains('/') || filename.contains('\\') {
        return Err("Invalid filename".into());
    }

    // get per-user app config dir
    let proj: ProjectDirs = ProjectDirs::from("com", "yourorg", "elorea")
        .ok_or("Could not locate project directories".to_string())?;
    let dir: PathBuf = proj.config_dir().to_path_buf();
    fs::create_dir_all(&dir).map_err(|e: Error| e.to_string())?;

    let full_path: PathBuf = dir.join(filename);
    println!("Saving game state to: {}", full_path.display());

    let file: File = File::create(&full_path).map_err(|e: Error| e.to_string())?;
    // write real JSON bytes (not a quoted string)
    serde_json::to_writer_pretty(file, &state).map_err(|e: serde_json::Error| e.to_string())?;

    println!("Game state saved successfully.");
    Ok(full_path.to_string_lossy().into_owned())
}

// Command to exit the game
#[tauri::command]
fn exit_game() {
    std::process::exit(0);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_game_state, exit_game])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
