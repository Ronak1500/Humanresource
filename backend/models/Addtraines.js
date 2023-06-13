const mongoose = require("mongoose")

const AddtrainesSchema = mongoose.Schema({
   tfirstName:String,
   tlastName:String,
   tmobileNo:String,
   temail:String,
   batchTime:String,
   tdob:String,
   tjoiningDate:String,
   tdesignation:String,
   tcurrAddress:String,
   syllabus:Array
})

module.exports = mongoose.model("Addtraines", AddtrainesSchema);