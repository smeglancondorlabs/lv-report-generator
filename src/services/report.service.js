import { configReport } from '../config/report.config.js';
import axios from 'axios';

const getStatus = (statistic, authorization) =>{
    axios({
        method: 'get',
        url: statistic.url,
        headers:{
            authorization
        }
      })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export const buildReports = () =>{
    console.log(configReport)
    configReport.statistics.forEach(statistic => {
        getStatus(statistic, configReport.authorization)
    });
}