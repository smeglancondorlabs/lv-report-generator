import { Report } from "./report.js";
import {constants} from "../../../config/constants.js";
import {splitText} from "../../../utils/splitText.js"

export class StateStatsSlack extends Report{
    createReport = async() =>{
        const data = (await this.getStatus()).data;
        let results = [];
        let dateSlack = '';
        let processed = 0;
        let Notprocessed = 0;
        const userSlack = constants.userSlack;
        data.messages.forEach(element => {
            if(element.user === userSlack ){
                let text = element.text;
                text = splitText(text,'__________________________________________________________________');
                text.forEach(newelement => {
                    const newText = splitText(newelement,'\n');
                    newText.forEach(dataElement => {
                        if (dataElement != null) {
                            if (dataElement.slice(0,11)===constants.dateSlack){
                                dateSlack = splitText(dataElement, ':');
                            }
                            if (dataElement.slice(0,28)===constants.processSlack){
                                processed = splitText(dataElement,':');
                            }
                            if (dataElement.slice(0,32)===constants.NotprocessedSlack){
                                Notprocessed = splitText(dataElement,':');
                            }
                        }
                    })
                    const r = results.find(e =>
                        e.date === dateSlack[1]
                    )
                    if (!r){
                        results.push({
                            date: dateSlack[1],
                            processed: parseInt(processed[1]),
                            Not_processed:  parseInt(Notprocessed[1]),
                        })
                    }
                })
            }
        })
        return {
            name: this.name,
            results
        }
    }
}