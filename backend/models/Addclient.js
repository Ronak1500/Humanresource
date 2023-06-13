const mongoose = require("mongoose")

const AddclientSchema = mongoose.Schema({
   cName:String,
   cNumber:String,
   cEmail:String,
   cProTitle:String,
   cPurpose:String,
   cProMoney:String,
   cMilestone:String,
   cProGiveDate:String,
   cProTakeDate:String,
})

module.exports = mongoose.model("Addclient", AddclientSchema);