const express = require("express");
const router = express.Router();
const { MemberMeal } = require("../schemas/schemas");
const { User } = require("../schemas/schemas");
const { ActivityLog } = require("../schemas/schemas");

// setting date
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();
// const dateStr = date + "-" + month + "-" + year;
const dateStr = year + "-" + month + "-" + date;
const localDate = dateStr;
const localTime = d.toLocaleTimeString();
// console.log(localDate);
// console.log(localTime);

// Add days to Date object in JavaScript
function addDaysToDate(date, days) {
  const dates = new Date(date);
  const newDate = dates.setDate(dates.getDate() + parseInt(days));
  let updateDate = new Date(newDate);
  var dd = updateDate.getDate();

  var mm = updateDate.getMonth() + 1;
  var yyyy = updateDate.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  updateDate = yyyy + "-" + mm + "-" + dd;
  return updateDate;
}

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

// CREATE a new memberMeal
router.post("/", async (req, res) => {
  try {
    const { name, mobile, mealCount, bazarCost, date } = req.body;
    if (!(name, mobile, mealCount, bazarCost, date)) {
      return res.json({
        success: false,
        result: "Please provide all the data...",
      });
    }
    console.log(name, mobile, mealCount, bazarCost);
    const user = await User.findOne({ mobile });
    // console.log("user", user);
    if (user) {
      const memberMeal = await MemberMeal.findOne({ mobile });
      // console.log("memberMeal", memberMeal);
      // If there is no meal of the user add new Meal to him
      if (!memberMeal) {
        const newMemberMeal = new MemberMeal({
          name,
          mobile,
          meals: [
            {
              mealCount,
              bazarCost,
              localDate: date,
              localTime,
            },
          ],
        });
        const result = await newMemberMeal.save();
        updateActivityLog(name, mobile, "Added a new meal", date);
        res.status(200).json({ success: true, result });
      } else {
        // If the user already have a meal add new Day meal to the "meals" Array.
        //  && AND &&
        // Add a condition if the user already have a meal on the same date
        const isAlreadyExistOnTheSameDay = await MemberMeal.findOne({
          mobile,
          "meals.localDate": date,
        });
        console.log(
          "L91: isAlreadyExistOnTheSameDay",
          isAlreadyExistOnTheSameDay
        );
        if (!isAlreadyExistOnTheSameDay) {
          // Adding new Day meal in the "meals" Array
          const result = await MemberMeal.findOneAndUpdate(
            { mobile },
            {
              $push: {
                meals: { mealCount, bazarCost, localDate: date, localTime },
              },
            },
            { new: true }
          );
          updateActivityLog(name, mobile, "Added a new meal", date);
          res.status(200).json({ success: true, result });
        } else {
          res.status(200).json({
            success: false,
            result: "You already have a meal on this date",
          });
        }
      }
    } else {
      // USER DOES NOT EXIST BLOCK
      res.status(500).json({ success: false, error: "user does not exist" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

// Update existing meal
router.patch("/update-meal", async (req, res) => {
  try {
    const { mobile, mealCount, bazarCost, date } = req.body;
    console.log(mobile, mealCount, bazarCost);
    if (!(mobile, mealCount, bazarCost, date)) {
      return res.json({
        success: false,
        result: "Please provide all the data...",
      });
    }
    const user = await User.findOne({ mobile });
    // console.log("user", user);
    if (user) {
      const memberMeal = await MemberMeal.findOne(
        { mobile },
        { __v: 0, createdAt: 0, updatedAt: 0 }
      );
      // console.log(memberMeal);
      if (!memberMeal) {
        console.log("member meal not found", memberMeal);
        res
          .status(400)
          .json({ success: false, error: "No meal found! Please add first" });
      } else if (memberMeal.name) {
        const isMealExistOnTheDay = await MemberMeal.findOne({
          mobile,
          "meals.localDate": date,
        });
        console.log("isMealExistOnTheDay", isMealExistOnTheDay);
        if (isMealExistOnTheDay) {
          // const nextDate = addDaysToDate(date, 1);
          const result = await MemberMeal.findOneAndUpdate(
            { mobile, "meals.localDate": date },
            {
              $set: {
                "meals.$.mealCount": mealCount,
                "meals.$.bazarCost": bazarCost,
              },
            },
            { new: true }
          );
          updateActivityLog(memberMeal.name, mobile, "Updated a meal", date);
          res.status(200).json({ success: true, result: result });
        } else {
          // Nothing to update
          res
            .status(200)
            .json({ success: false, result: "No Meal Exist On the Day!" });
        }
      }
    } else {
      // write code here
      res.status(500).json({ success: false, error: "user does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
