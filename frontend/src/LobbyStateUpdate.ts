import {Player} from "./Player";
import {GameStateUpdate} from "./GameStateUpdate";
import {GameOptions} from "./GameOptions";
import {LobbyOptions} from "./LobbyOptions";

// from /lobby/getState.php

export interface LobbyStateUpdate {
    players : Player[];
    gameOptions: GameOptions;
    lobbyOptions: LobbyOptions;
    gameStateUpdate? : GameStateUpdate // If not present; game hasn't started
}