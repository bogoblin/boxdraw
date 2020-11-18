import {Player} from "./Player";
import {GameStateUpdate} from "./GameStateUpdate";

// from /lobby/getState.php

export interface LobbyStateUpdate {
    players : Player[];
    imageURL? : URL;
    imageSplit : string; // "Horizontal" or "Vertical"
    gameTimeMinutes : number;
    allowImageUploads : boolean;
    gameStateUpdate? : GameStateUpdate // If not present; game hasn't started
}