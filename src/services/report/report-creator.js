import { StateStatsSlack } from "./factory/state-stat-slack.js";
import { ImageNowStats } from "./factory/image-now-stats.js";
import { ScreenshotStats } from "./factory/screenshot-stats.js";

const reports = {
    StateStatsSlack,
    ImageNowStats,
    ScreenshotStats
}

export const ReportFactory = ({type, attributes}) =>{
    const reportType = reports[type];
    const report = new reportType(attributes);
    return report
}