export interface Section {
    x : number; // x coordinate of top left of section
    y : number; // y coordinate of top left of section
    width : number;
    height : number;
    playerId : string;
    submitted : boolean; // true if the player has submitted their section of the image
}