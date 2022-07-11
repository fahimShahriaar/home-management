const express = require("express");
const router = express.Router();

const { ActivityLog } = require("../schemas/schemas");

router.get("/", async (req, res) => {
  console.log("hitt");
  try {
    const result = await ActivityLog.find();
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
