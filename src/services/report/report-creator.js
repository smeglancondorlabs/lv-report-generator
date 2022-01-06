import { StateStats } from "./factory/state-stats.js";
import { ImageNowStats } from "./factory/image-now-stats.js";
import { ScreenshotStats } from "./factory/screenshot-stats.js";

const reports = {
    StateStats,
    ImageNowStats,
    ScreenshotStats
}

export const ReportFactory = ({type, attributes}) =>{
    const reportType = reports[type];
    return new reportType(attributes);
}