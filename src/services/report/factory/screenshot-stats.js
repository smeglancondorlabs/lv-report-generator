import { Report } from "./report.js";

export class ScreenshotStats extends Report{
    createReport = async() =>{
        let captured = 0;
        let missing = 0;
        let notFound = 0;
        const capturedData = (await this.getStatus(this.url.captured)).data;
        const missingData = (await this.getStatus(this.url.missing)).data;
        const notFoundData = (await this.getStatus(this.url.notFound)).data;
        Object.keys(capturedData).forEach(element => {
           captured += capturedData[element].totalScreenshots;
        });
        Object.keys(missingData).forEach(element => {
            missing += missingData[element].totalScreenshots;
        });
        Object.keys(notFoundData).forEach(element => {
            notFound += notFoundData[element].totalScreenshots;
        });
        return {
            date : new Date(),
            captured,
            missing,
            notFound,
            completed: ((captured)/(captured+missing+notFound))*100
        }
    }
}