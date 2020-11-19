import {Player} from "./Player";
import {LobbyStateUpdate} from "./LobbyStateUpdate";

export class Lobby {
    private lastUpdate : LobbyStateUpdate;
    private playersList? : HTMLElement;
    private gameMasterIsYou : boolean;

    constructor() {
        this.playersList = document.getElementById('playersList');
        this.gameMasterIsYou = false;
    }
    
    public update(info : LobbyStateUpdate) : void {
        this.lastUpdate = info;
        
        // Update the UI - this may be replaced with some react stuff if I do that
        // Update players list
        this.playersList.innerHTML = '';
        this.players.forEach(player => {
            const el = document.createElement('li');
            el.innerText = player.name;
            if (player.isGameMaster) {
                el.classList.add('gameMaster');
            }
            if (player.isYou) {
                el.classList.add('you');
            }
            if (player.isYou && player.isGameMaster) {
                this.gameMasterIsYou = true;
            }
            this.playersList.appendChild(el);
        });
    }
    
    get players() : Player[] {
        return this.lastUpdate.players;
    }
}
