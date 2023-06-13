const mongoose = require("mongoose")

const TraineAttendenceSchema = mongoose.Schema({
   name:String,
   number:String,
   status:String,
   date:String,
   fullMonth:String,
   month:String,
   year:String,
})

module.exports = mongoose.model("TraineAttendence", TraineAttendenceSchema);