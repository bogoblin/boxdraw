import {Lobby} from "./Lobby";

export class UiManager {
    private readonly lobby: Lobby;
    
    // HTML Elements
    private playersList: HTMLElement;
    private gameTime : HTMLElement;
    private allowUploads: HTMLElement;
    private lobbyImage: HTMLImageElement;
    private startLobby: HTMLElement;
    private sectionsList: HTMLElement;
    private gameImage: HTMLImageElement;
    private imageUpload: HTMLInputElement;
    private uploadImage: HTMLImageElement;
    private stitchedImage: HTMLImageElement;
    private returnToLobby: HTMLElement;
    
    constructor(lobby : Lobby) {
        this.lobby = lobby;
        
        this.playersList = document.getElementById('playersList');
        this.gameTime = document.getElementById('gameTime');
        this.allowUploads = document.getElementById('allowUploads');
        this.lobbyImage = document.getElementById('lobbyImage') as HTMLImageElement;
        this.startLobby = document.getElementById('startLobby');
        
        this.sectionsList = document.getElementById('sectionsList');
        this.gameImage = document.getElementById('gameImage') as HTMLImageElement;
        this.imageUpload = document.getElementById('imageUpload') as HTMLInputElement;
        this.uploadImage = document.getElementById('uploadImage') as HTMLImageElement;
        
        this.stitchedImage = document.getElementById('stitchedImage') as HTMLImageElement;
        this.returnToLobby = document.getElementById('returnToLobby');
        
        this.startLobby.onclick = () => {
            lobby.start();
        }
    }

    update() : void {
        const lobby = this.lobby;
        
        this.gameTime.innerText = this.toMinutesAndSeconds(lobby.gameTime);
        this.allowUploads.innerText = lobby.allowImageUploads?'yes':'no';
        this.lobbyImage.src = lobby.imageURL;
        this.startLobby.hidden = !lobby.canStartLobby();
        this.gameImage.src = lobby.game.imageURL;
        
        // Update players list
        this.playersList.innerHTML = '';
        lobby.players.forEach(player => {
            let el : HTMLElement;
            el = document.createElement('li');
            el.innerText = player.name;
            if (player.isGameMaster) {
                el.classList.add('gameMaster');
            }
            if (player.isYou) {
                el.classList.add('you');
            }
            this.playersList.appendChild(el);
        });
        
        // Update sections
        const sections = lobby.game.sections;
        this.sectionsList.innerHTML = '';
        sections.forEach(section => {
            const el = document.createElement('li');
            const player = lobby.getPlayer(section.playerId);
            el.innerText = `${player.name} ${section.submitted?'submitted':'not submitted'}`;
            this.sectionsList.appendChild(el);
        });
    }
    
    toMinutesAndSeconds(seconds : number) : string {
        const min = Math.floor(seconds / 60);
        const sec = seconds - 60*min;
        return `${min}:`+`${sec}`.padStart(2, '0');
    }
}