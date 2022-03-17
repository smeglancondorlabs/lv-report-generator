import dotenv from 'dotenv';
dotenv.config();

const date = (format) => {
    const date = new Date;
    const formatOne = format.replace('yy',date.getFullYear())
            .replace('mm',date.getMonth() + 1)
            .replace('dd',date.getDate() - 1)
    return formatOne;
}

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
                params:{
                    queuedDate: date("mm/dd/yy")
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
                    dateToFilter: date("yy-mm-dd")
                }, 
                model: "",
            }
        }
    ]
}