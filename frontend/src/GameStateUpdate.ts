import {Section} from "./Section";

export interface GameStateUpdate {
    id : string;
    timeRemaining : number; // In seconds
    sections : Section[];
    imageURL : string; // Notice this is required; whereas it is not in the lobby
    imageSplit : string; // "Horizontal" or "Vertical"
}