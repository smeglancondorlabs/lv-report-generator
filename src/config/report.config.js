import dotenv from 'dotenv';
dotenv.config();

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
            type:"ImageNowStats",
            attributes: {
                authorization: process.env.AUTHORIZATION_TOKEN,
                url: process.env.IMAGE_NOW_URL,
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
                model: "",
            }
        }
    ]
}