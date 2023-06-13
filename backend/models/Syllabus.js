const mongoose = require("mongoose")

const SyllabusSchema = mongoose.Schema({
   syllabus:Array,

})

module.exports = mongoose.model("Syllabus", SyllabusSchema);