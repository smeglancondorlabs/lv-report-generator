import { configReport } from '../config/report.config.js';
import { ReportFactory } from './report/report-creator.js';

/** TODO 
 * - migrate this to a controller.
 * - add google sheet function.
 * - add mongo models.
 */
export const buildReports = () =>{
    configReport.stats.forEach(async(statistic) => {
        const results = await ReportFactory(statistic).createReport()
        console.log(results)
    });
}