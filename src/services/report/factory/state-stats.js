import { Report } from "./report.js";

export class StateStats extends Report{
    createReport = async() =>{
        let scheduled = 0;
        let processed = 0;
        const data = (await this.getStatus()).data;
        data.forEach(element => {
            scheduled += element.newLv + element.oldLv;
            processed += element.processed;
        });
        return {
            date : new Date(),
            scheduled,
            processed,
            notProcessed: scheduled-processed,
            completed: (processed/scheduled)*100
        }
    }
}