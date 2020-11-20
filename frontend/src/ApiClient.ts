import axios from 'axios';
export class ApiClient {
    private _baseURL: string;
    
    constructor(baseURL : string) {
        this._baseURL = baseURL;
    }
    
    public url(location : string, params? : {[key : string] : string}) : string {
        let result = this._baseURL+location;
        if (params) {
            result += '?';
            for (let key of Object.keys(params)) {
                result += `${key}=${params[key]}&`;
            }
        }
        return result;
    }
    
    public createLobby() {
        axios.get(this.url('/api/lobby/createLobby.php'))
            .then(r => {
                console.log(r);
            })
            .catch(alert);
    }
}