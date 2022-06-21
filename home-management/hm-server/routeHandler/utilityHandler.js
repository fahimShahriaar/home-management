const express = require("express");
const router = express.Router();

const { Utility } = require("../schemas/schemas");
const { ActivityLog } = require("../schemas/schemas");

// Activity Log update
async function updateActivityLog(name, mobile, activity, date, res) {
  const description = { ...res._doc };
  delete description.__v;
  console.log(description);
  const activityLog = new ActivityLog({
    name,
    mobile,
    activity,
    description: JSON.stringify(description),
    date,
  });
  const result = await activityLog.save();
  return result;
}

// Create a new utility
router.post("/", async (req, res) => {
  try {
    const {
      currentBill,
      khalarBill,
      internetBill,
      houseRent,
      mobile,
      name,
      month,
      date,
    } = req.body;
    if (!(mobile, name, month, date)) {
      return res.json({
        success: false,
        result: "Please provide all the data...",
      });
    }
    // check if the month is already present in the database
    const isAlreadyExist = await Utility.findOne({ month });
    if (!isAlreadyExist) {
      //  save utility to DB
      const newUtility = new Utility({
        currentBill: currentBill ? currentBill : 0,
        khalarBill: khalarBill ? khalarBill : 0,
        internetBill: internetBill ? internetBill : 0,
        houseRent: houseRent ? houseRent : 0,
        month,
        createdBy: name,
      });
      const result = await newUtility.save();
      updateActivityLog(name, mobile, "Utility added", date, result);
      res.json({
        success: true,
        result,
      });
    } else {
      res.json({
        success: false,
        result: "Already Exist on this month",
      });
    }
  } catch (error) {
    res.json({ success: false, error });
  }
});

// Update a utility
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      currentBill,
      khalarBill,
      internetBill,
      houseRent,
      mobile,
      name,
      month,
      date,
    } = req.body;
    const isUtilityExist = await Utility.findOne({ _id: id });
    if (isUtilityExist) {
      const result = await Utility.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            currentBill,
            khalarBill,
            internetBill,
            houseRent,
            month,
            updatedBy: name,
          },
        },
        { new: true }
      );
      updateActivityLog(name, mobile, "Utility updated", date, result);
      res.json({
        success: true,
        result: result,
      });
    } else {
      res.json({
        success: false,
        result: "Utility not found",
      });
    }
    // console.log("isUtilityExist", isUtilityExist);s
  } catch (error) {}
});

module.exports = router;
