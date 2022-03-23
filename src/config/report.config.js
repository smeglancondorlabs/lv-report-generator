import dotenv from 'dotenv';
dotenv.config();
import {calculateDate} from '../utils/dates.js'

export const configReport = {
    stats: [
        {
            type:"StateStats",
            attributes: {
                authorization: process.env.AUTHORIZATION_TOKEN,
                url: process.env.STATE_STATS_URL,
                model: "",
            }
        },
        {
            type:"StateStatsSlack",
            attributes: {
                authorization: process.env.AUTHORIZATION_SLACK_TOKEN,
                url: process.env.STATE_STATS_SLACK_URL,
                model: "",
            }
        },
        {
            type:"ImageNowStats",
            attributes: {
                authorization: process.env.AUTHORIZATION_TOKEN,
                url: process.env.IMAGE_NOW_URL,
                params:{
                    queuedDate: calculateDate("MM/DD/YYYY")
                }, 
                model: "",
            }
        },
        {
            type:"ScreenshotStats",
            attributes: {
                authorization: process.env.AUTHORIZATION_TOKEN,
                url: {
                    captured : process.env.CAPTURED_SCREENSHOT_URL,
                    missing : process.env.MISSING_SCREENSHOT_URL,
                    notFound : process.env.NOT_FOUND_SCREENSHOT_URL
                },
                params:{
                    dateToFilter: calculateDate("YYYY-MM-DD")
                }, 
                model: "",
            }
        }
    ]
}