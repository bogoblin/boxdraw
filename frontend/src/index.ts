import {Lobby} from "./Lobby";
import {UiManager} from "./UiManager";

let queryDict : any = {}
// @ts-ignore - this comes from stack overflow, I don't care how it works
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

let lobbyId : string = queryDict["l"];

const lobby = new Lobby();
const uiManager = new UiManager(lobby);

lobby.update({
    players: [
        {
            name: 'bobby',
            id: '1234',
            isGameMaster: true,
            isYou: true
        },
        {
            name: 'alex',
            id: '5678',
            isGameMaster: false,
            isYou: false
        }
    ],
    gameOptions : {
        gameTime: 3000,
        allowImageUploads: true,
        imageSplit: 'horizontal',
        imageURL: 'https://www.image.com/myImage.png',
    },
    lobbyOptions: {
        maxPlayers: 16,
        lobbyLocked: false
    },
    gameStateUpdate: {
        id: 'asdf123',
        gameOptions: {
            gameTime: 3000,
            allowImageUploads: true,
            imageSplit: 'horizontal',
            imageURL: 'https://www.image.com/myImage.png',
        },
        timeCreation: new Date().getUTCSeconds(),
        timeEnd: new Date().getUTCSeconds() + 1000,
        sections: [
            {
                x: 0,
                y: 0,
                width: 400,
                height: 300,
                playerId: '1234',
                submitted: true
            },
            {
                x: 0,
                y: 300,
                width: 400,
                height: 300,
                playerId: '5678',
                submitted: false
            }
        ]
    }
});
uiManager.update();