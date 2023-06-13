const express = require("express");
const router = express.Router();
const Addtraines = require("../models/Addtraines");

router.get("/", async (req, res) => {
  try {
    const addtraines = await Addtraines.find();
    res.status(200).json({
      data: addtraines,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const addtraines = await Addtraines.findById(req.params.id);

    res.status(200).json({
      data: addtraines,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const addtraines = new Addtraines(req.body);
    const newaddtraines = await addtraines.save();

    res.status(200).json({
      data: newaddtraines,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const addtraines = await Addtraines.findById(req.params.id);

    if (!addtraines) {
      return res.status(400).json({ message: "Addtraines does not exist" });
    }
    addtraines.tfirstName = req.body.tfirstName || addtraines.tfirstName;
    addtraines.tlastName = req.body.tlastName || addtraines.tlastName;
    addtraines.tmobileNo = req.body.tmobileNo || addtraines.tmobileNo;
    addtraines.temail = req.body.temail || addtraines.temail;
    addtraines.tdob = req.body.tdob || addtraines.tdob;
    addtraines.tjoiningDate = req.body.tjoiningDate || addtraines.tjoiningDate;
    addtraines.tdesignation = req.body.tdesignation || addtraines.tdesignation;
    addtraines.tcurrAddress = req.body.tcurrAddress || addtraines.tcurrAddress;
    addtraines.batchTime = req.body.batchTime || addtraines.batchTime;
    addtraines.syllabus = req.body.syllabus || addtraines.syllabus;

    const updatedAddtraines = await addtraines.save();

    res.status(200).json({
      data: updatedAddtraines,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Addtraines.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Addtraines is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
