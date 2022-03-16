const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LVStatusReport = new Schema({
  size: {
    type: Number,
    required: true
  },
  completed: {
    type: Number,
  },
  queued: {
    type: Number,
  },
  dateOfEntry: {
    type: Date,
    default: Date.now() //Cambiar la fecha al dia anterior 
  }
});
export default mongoose.model('lv_status_report', LVStatusReport);