import axios from "axios";

export class Report{
    constructor({authorization, url, model, params}){
        this.authorization = authorization;
        this.url = url;
        this.params = params;
        this.model = model;
    }
    getStatus = async (url = this.url) =>{
        return await axios({
            method: 'get',
            params: this.params,
            url,
            headers:{
                authorization: this.authorization
            }
          })
    }
}