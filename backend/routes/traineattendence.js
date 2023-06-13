const express = require("express");
const router = express.Router();
const TraineAttendence = require("../models/TraineAttendence");

router.get("/", async (req, res) => {
  try {
    const traineattendence = await TraineAttendence.find();
    res.status(200).json({
      data: traineattendence,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const traineattendence = await TraineAttendence.findById(req.params.id);

    res.status(200).json({
      data: traineattendence,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const traineattendence = new TraineAttendence(req.body);
    const newtraineattendence = await traineattendence.save();

    res.status(200).json({
      data: newtraineattendence,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const traineattendence = await TraineAttendence.findById(req.params.id);

    if (!traineattendence) {
      return res.status(400).json({ message: "TraineAttendence does not exist" });
    }
    traineattendence.ptitleName = req.body.ptitleName || traineattendence.ptitleName;
    traineattendence.pcategory = req.body.pcategory || traineattendence.pcategory;
    traineattendence.pfund = req.body.pfund || traineattendence.pfund;
    traineattendence.pstartDate = req.body.pstartDate || traineattendence.pstartDate;
    traineattendence.pendDate = req.body.pendDate || traineattendence.pendDate;
    traineattendence.pmilestone = req.body.pmilestone || traineattendence.pmilestone;
    traineattendence.pclientName = req.body.pclientName || traineattendence.pclientName;
  
    const updatedTraineAttendence = await traineattendence.save();

    res.status(200).json({
      data: updatedTraineAttendence,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await TraineAttendence.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "TraineAttendence is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
