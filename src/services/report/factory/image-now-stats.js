import { Report } from "./report.js";

export class ImageNowStats extends Report{
    createReport = async() =>{
        const data = (await this.getStatus()).data;
        return {
            required: data.size,
            captured: data.statuses.completed,
            noCaptured: data.statuses.queued||0,
            notFound: data.statuses.notFound||0,
            missing: data.statuses.missing||0,
            completed: (data.statuses.completed/data.size)*100
        }
    }
}