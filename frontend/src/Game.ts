import {GameStateUpdate} from "./GameStateUpdate";
import {Section} from "./Section";

export class Game {
    lastUpdate: GameStateUpdate;
    
    update(gameUpdate : GameStateUpdate) {
        this.lastUpdate = gameUpdate;
    }
    
    get id() { return this.lastUpdate.id; }
    get sections() { return this.lastUpdate.sections; }
    
    get timeRemaining() {
        return this.lastUpdate.timeEnd - new Date().getUTCSeconds();
    }
    
    get imageURL() { return this.lastUpdate.gameOptions.imageURL; }
    get imageSplit() { return this.lastUpdate.gameOptions.imageSplit; }
}