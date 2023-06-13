const mongoose = require("mongoose")

const AttendenceSchema = mongoose.Schema({
   name:String,
   number:String,
   status:String,
   date:String,
   fullMonth:String,
   month:String,
   year:String,
})

module.exports = mongoose.model("Attendence", AttendenceSchema);