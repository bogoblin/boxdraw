export interface Player {
    id : string; // Unique to the player within the lobby
    name : string;
    isGameMaster : boolean;
    isYou : boolean;
}