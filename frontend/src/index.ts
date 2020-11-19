import {Lobby} from "./Lobby";

let queryDict : any = {}
// @ts-ignore - this comes from stack overflow, I don't care how it works
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

let lobbyId : string = queryDict["l"];

const lobby = new Lobby();

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
    gameTime: 3000,
    allowImageUploads: true,
    imageSplit: 'Horizontal',
    imageURL: 'https://www.image.com/myImage.png',
    gameStateUpdate: {
        id: 'asdf123',
        imageSplit: 'Horizontal',
        imageURL: 'https://www.image.com/myImage.png',
        timeRemaining: 69,
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