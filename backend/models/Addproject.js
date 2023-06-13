const mongoose = require("mongoose")

const AddprojectSchema = mongoose.Schema({
   ptitleName:String,
   pcategory:String,
   pfund:String,
   pstartDate:String,
   pendDate:String,
   pmilestone:String,
   pclientName:String,
   member:Array,
})

module.exports = mongoose.model("Addproject", AddprojectSchema);