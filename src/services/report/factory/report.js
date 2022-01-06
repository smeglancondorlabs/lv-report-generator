import axios from "axios";

export class Report{
    constructor({authorization, url, model}){
        this.authorization = authorization;
        this.url = url;
        this.model = model;
    }
    getStatus = async (url = this.url) =>{
        return await axios({
            method: 'get',
            url,
            headers:{
                authorization: this.authorization
            }
          })
    }
}