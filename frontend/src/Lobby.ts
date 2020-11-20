import {Player} from "./Player";
import {LobbyStateUpdate} from "./LobbyStateUpdate";
import {Section} from "./Section";
import {Game} from "./Game";
import {ApiClient} from "./ApiClient";

export class Lobby {
    private lastUpdate : LobbyStateUpdate;
    private gameMasterIsYou : boolean;
    private _game: Game;
    private _apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this._apiClient = apiClient;
        this.gameMasterIsYou = false;
        this._game = new Game();
    }
    
    public update(info : LobbyStateUpdate) : void {
        info.players.forEach(player => {
            if (player.isYou) {
                this.gameMasterIsYou = player.isGameMaster;
            }
        });
        this.lastUpdate = info;
        this._game.update(info.gameStateUpdate);
    }

    get players() : Player[] {
        return this.lastUpdate.players;
    }
    
    get gameTime() : number {
        return this.lastUpdate.gameOptions.gameTime;
    }
    
    get allowImageUploads() : boolean {
        return this.lastUpdate.gameOptions.allowImageUploads;
    }
    
    get imageURL() : string | undefined {
        return this.lastUpdate.gameOptions.imageURL;
    }
    
    get game() : Game {
        return this._game;
    }

    canStartLobby() : boolean {
        const numberOfPlayers = this.lastUpdate.players.length;
        return this.gameMasterIsYou && numberOfPlayers >= 2;
    }
    
    getPlayer(id : string) : Player {
        for (let player of this.players) {
            if (player.id == id) {
                return player;
            }
        }
    }

    start() : [boolean, string] {
        // Make the API request that starts the lobby
        return [true, ''];
    }
    
    uploadSection() : void {
        
    }
}
