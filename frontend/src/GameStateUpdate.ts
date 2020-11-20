import {Section} from "./Section";
import {GameOptions} from "./GameOptions";

export interface GameStateUpdate {
    id : string;
    sections : Section[];
    gameOptions: GameOptions;
    timeCreation: number; // UTC seconds
    timeEnd: number; // UTC seconds
}