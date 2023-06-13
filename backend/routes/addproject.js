const express = require("express");
const router = express.Router();
const Addproject = require("../models/Addproject");

router.get("/", async (req, res) => {
  try {
    const addproject = await Addproject.find();
    res.status(200).json({
      data: addproject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const addproject = await Addproject.findById(req.params.id);

    res.status(200).json({
      data: addproject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const addproject = new Addproject(req.body);
    const newaddproject = await addproject.save();

    res.status(200).json({
      data: newaddproject,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const addproject = await Addproject.findById(req.params.id);

    if (!addproject) {
      return res.status(400).json({ message: "Addproject does not exist" });
    }
    addproject.ptitleName = req.body.ptitleName || addproject.ptitleName;
    addproject.pcategory = req.body.pcategory || addproject.pcategory;
    addproject.pfund = req.body.pfund || addproject.pfund;
    addproject.pstartDate = req.body.pstartDate || addproject.pstartDate;
    addproject.pendDate = req.body.pendDate || addproject.pendDate;
    addproject.pmilestone = req.body.pmilestone || addproject.pmilestone;
    addproject.pclientName = req.body.pclientName || addproject.pclientName;
    addproject.member = req.body.member || addproject.member;
  
    const updatedAddproject = await addproject.save();

    res.status(200).json({
      data: updatedAddproject,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Addproject.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Addproject is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
