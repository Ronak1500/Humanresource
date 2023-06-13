const express = require("express");
const router = express.Router();
const Addclient = require("../models/Addclient");

router.get("/", async (req, res) => {
  try {
    const addclient = await Addclient.find();
    res.status(200).json({
      data: addclient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const addclient = await Addclient.findById(req.params.id);

    res.status(200).json({
      data: addclient,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const addclient = new Addclient(req.body);
    const newaddclient = await addclient.save();

    res.status(200).json({
      data: newaddclient,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const addclient = await Addclient.findById(req.params.id);

    if (!addclient) {
      return res.status(400).json({ message: "Addclient does not exist" });
    }
    addclient.cName = req.body.cName || addclient.cName;
    addclient.cNumber = req.body.cNumber || addclient.cNumber;
    addclient.cEmail = req.body.cEmail || addclient.cEmail;
    addclient.cProTitle = req.body.cProTitle || addclient.cProTitle;
    addclient.cPurpose = req.body.cPurpose || addclient.cPurpose;
    addclient.cProMoney = req.body.cProMoney || addclient.cProMoney;
    addclient.cMilestone = req.body.cMilestone || addclient.cMilestone;
    addclient.cProGiveDate = req.body.cProGiveDate || addclient.cProGiveDate;
    addclient.cProTakeDate = req.body.cProTakeDate || addclient.cProTakeDate;
    
  
    const updatedAddclient = await addclient.save();

    res.status(200).json({
      data: updatedAddclient,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Addclient.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Addclient is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
