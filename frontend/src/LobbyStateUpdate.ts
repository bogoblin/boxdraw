import {Player} from "./Player";
import {GameStateUpdate} from "./GameStateUpdate";

// from /lobby/getState.php

export interface LobbyStateUpdate {
    players : Player[];
    imageURL? : string;
    imageSplit : string; // "Horizontal" or "Vertical"
    gameTime: number; // in seconds
    allowImageUploads : boolean;
    gameStateUpdate? : GameStateUpdate // If not present; game hasn't started
}