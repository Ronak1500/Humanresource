const express = require("express");
const router = express.Router();
const Syllabus = require("../models/Syllabus");

router.get("/", async (req, res) => {
  try {
    const syllabus = await Syllabus.find();
    res.status(200).json({
      data: syllabus,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);

    res.status(200).json({
      data: syllabus,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const syllabus = new Syllabus(req.body);
    const newsyllabus = await syllabus.save();

    res.status(200).json({
      data: newsyllabus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const syllabus = await Syllabus.findById(req.params.id);

    if (!syllabus) {
      return res.status(400).json({ message: "Syllabus does not exist" });
    }
    syllabus.syllabus = req.body.syllabus || syllabus.syllabus;
    
    
  
    const updatedSyllabus = await syllabus.save();

    res.status(200).json({
      data: updatedSyllabus,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Syllabus.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Syllabus is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
