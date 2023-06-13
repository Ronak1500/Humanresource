const express = require("express");
const router = express.Router();
const AddEmploye = require("../models/AddEmploye");

router.get("/", async (req, res) => {
  try {
    const addemploye = await AddEmploye.find();
    res.status(200).json({
      data: addemploye,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const addemploye = await AddEmploye.findById(req.params.id);

    res.status(200).json({
      data: addemploye,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const addemploye = new AddEmploye(req.body);
    const newaddemploye = await addemploye.save();

    res.status(200).json({
      data: newaddemploye,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const addemploye = await AddEmploye.findById(req.params.id);

    if (!addemploye) {
      return res.status(400).json({ message: "AddEmploye does not exist" });
    }
    addemploye.firstName = req.body.firstName || addemploye.firstName;
    addemploye.lastName = req.body.lastName || addemploye.lastName;
    addemploye.mobileNo = req.body.mobileNo || addemploye.mobileNo;
    addemploye.email = req.body.email || addemploye.email;
    addemploye.dob = req.body.dob || addemploye.dob;
    addemploye.employeeType = req.body.employeeType || addemploye.employeeType;
    addemploye.joiningDate = req.body.joiningDate || addemploye.joiningDate;
    addemploye.designation = req.body.designation || addemploye.designation;
    addemploye.currAddress = req.body.currAddress || addemploye.currAddress;
    addemploye.bankName = req.body.bankName || addemploye.bankName;
    addemploye.accNumber = req.body.accNumber || addemploye.accNumber;
    addemploye.ifsc = req.body.ifsc || addemploye.ifsc;
    addemploye.empSalary = req.body.empSalary || addemploye.empSalary;
    addemploye.empId = req.body.empId || addemploye.empId;
    addemploye.empSalaryDate = req.body.empSalaryDate || addemploye.empSalaryDate;
    addemploye.empDesignation = req.body.empDesignation || addemploye.empDesignation;
  
    const updatedAddEmploye = await addemploye.save();

    res.status(200).json({
      data: updatedAddEmploye,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await AddEmploye.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "AddEmploye is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
