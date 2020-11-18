export class Player {
    public readonly name : string;
    public readonly isGameMaster : boolean;
    public readonly isYou : boolean;
    
    constructor(playerObject : any) {
        this.name = playerObject?.name.toString();
        this.isGameMaster = playerObject["isGameMaster"] === true;
        this.isYou = playerObject["isYou"] === true;
    }
}