const mongoose = require("mongoose")

const AddEmployeSchema = mongoose.Schema({
   firstName:String,
   lastName:String,
   mobileNo:String,
   email:String,
   dob:String,
   employeeType:String,
   joiningDate:String,
   designation:String,
   currAddress:String,
   bankName:String,
   accNumber:String,
   ifsc:String,
   empSalary:String,
   empId:String,
   empSalaryDate:String,
   empDesignation:String,
   
})

module.exports = mongoose.model("AddEmploye", AddEmployeSchema);