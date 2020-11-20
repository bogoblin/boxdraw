import { AxiosStatic } from "axios";

export class ApiClient {
    private readonly _baseURL: string;
    private readonly axios: AxiosStatic;
    
    constructor(axios : AxiosStatic, baseURL : string) {
        this.axios = axios;
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
        this.axios.get(this.url('/api/lobby/createLobby.php'))
            .then(r => {
                console.log(r);
            })
            .catch(alert);
    }
}