const express = require("express");
const router = express.Router();

const { Utility } = require("../schemas/schemas");
const { ActivityLog } = require("../schemas/schemas");

// Activity Log update
async function updateActivityLog(name, mobile, activity, date) {
  const activityLog = new ActivityLog({
    name,
    mobile,
    activity,
    date,
  });
  const result = await activityLog.save();
  return result;
}

router.post("/", async (req, res) => {
  try {
    const {
      currentBill,
      khalarBill,
      internetBill,
      houseRent,
      mobile,
      name,
      date,
    } = req.body;
    if (!(mobile, name, date)) {
      return res.json({
        success: false,
        result: "Please provide all the data...",
      });
    }
    //  save utility to DB
    const newUtility = new Utility({
      currentBill: currentBill ? currentBill : 0,
      khalarBill: khalarBill ? khalarBill : 0,
      internetBill: internetBill ? internetBill : 0,
      houseRent: houseRent ? houseRent : 0,
    });

    const result = await newUtility.save();
    updateActivityLog(name, mobile, "Utility added", date);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    res.json({ success: false, error });
  }
});

// Update a utility
router.put("/:id", async (req, res) => {
  try {
    const {
      currentBill,
      khalarBill,
      internetBill,
      houseRent,
      mobile,
      name,
      date,
    } = req.body;
    if (!(mobile, name, date)) {
      return res.json({
        success: false,
        result: "Please provide all the data...",
      });
    }
    const result = await Utility.findOneAndUpdate(
      { _id: req.params.id },
      {
        currentBill: currentBill ? currentBill : 0,
        khalarBill: khalarBill ? khalarBill : 0,
        internetBill: internetBill ? internetBill : 0,
        houseRent: houseRent ? houseRent : 0,
      }
    );
    updateActivityLog(name, mobile, "Utility updated", date);
    res.json({
      success: true,
      result,
    });
  } catch (error) {
    res.json({ success: false, error });
  }
});

module.exports = router;
