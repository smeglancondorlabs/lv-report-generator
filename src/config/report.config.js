import dotenv from 'dotenv';
dotenv.config();

export const configReport = {
    authorization: process.env.AUTHORIZATION_TOKEN,
    sheetUrl: "",
    stats: [
        {
            page: "",
            url: process.env.STATE_STATS_URL,
            model: ""
        },
        {
            page: "",
            url: process.env.IMAGE_NOW_URL,
            model: ""
        },
        {
            page: "",
            url: process.env.SCREENSHOT_URL,
            model: ""
        }, 
    ]
}