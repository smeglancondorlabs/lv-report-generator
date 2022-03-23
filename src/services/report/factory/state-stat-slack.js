import { Report } from "./report.js";

export class StateStatsSlack extends Report{
    createReport = async() =>{
        const data = (await this.getStatus()).data;
        let scheduled = 0;
        let processed = 0;
        const userSlack = 'UR5K3MJ73'
        if(data.messages.user === userSlack ){
        }
        return {
            scheduled,
            processed 
        }
    }
}