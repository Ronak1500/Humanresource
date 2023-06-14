const mongoose = require("mongoose")

const SyllabusSchema = mongoose.Schema({
   syllabus:Array,
   status:true,
})

module.exports = mongoose.model("Syllabus", SyllabusSchema);
