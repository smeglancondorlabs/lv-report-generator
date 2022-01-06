import { configReport } from '../config/report.config.js';
import { ReportFactory } from './report/report-creator.js';

/** TODO 
 * - migrate this to a controller.
 */
export const buildReports = () =>{
    configReport.stats.forEach(async(statistic) => {
        console.log(await ReportFactory(statistic).createReport())
    });
}