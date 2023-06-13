const express = require("express");
const router = express.Router();
const Attendence = require("../models/Attendence");

router.get("/", async (req, res) => {
  try {
    const attendence = await Attendence.find();
    res.status(200).json({
      data: attendence,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const attendence = await Attendence.findById(req.params.id);

    res.status(200).json({
      data: attendence,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const attendence = new Attendence(req.body);
    const newattendence = await attendence.save();

    res.status(200).json({
      data: newattendence,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const attendence = await Attendence.findById(req.params.id);

    if (!attendence) {
      return res.status(400).json({ message: "Attendence does not exist" });
    }
    attendence.ptitleName = req.body.ptitleName || attendence.ptitleName;
    attendence.pcategory = req.body.pcategory || attendence.pcategory;
    attendence.pfund = req.body.pfund || attendence.pfund;
    attendence.pstartDate = req.body.pstartDate || attendence.pstartDate;
    attendence.pendDate = req.body.pendDate || attendence.pendDate;
    attendence.pmilestone = req.body.pmilestone || attendence.pmilestone;
    attendence.pclientName = req.body.pclientName || attendence.pclientName;
  
    const updatedAttendence = await attendence.save();

    res.status(200).json({
      data: updatedAttendence,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Attendence.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Attendence is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
