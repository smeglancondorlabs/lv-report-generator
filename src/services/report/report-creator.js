import { StateStats } from "./class/state-stats.js";
import { ImageNowStats } from "./class/image-now-stats.js";
import { ScreenshotStats } from "./class/screenshot-stats.js";

const reports = {
    StateStats,
    ImageNowStats,
    ScreenshotStats
}

export const ReportFactory = ({type, attributes}) =>{
    const reportType = reports[type];
    return new reportType(attributes);
}