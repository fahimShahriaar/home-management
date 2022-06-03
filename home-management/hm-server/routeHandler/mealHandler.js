const express = require("express");
const router = express.Router();
const { MemberMeal } = require("../schemas/schemas.js");
const { User } = require("../schemas/schemas.js");

// setting date
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();
// const dateStr = date + "-" + month + "-" + year;
const dateStr = year + "-" + month + "-" + date;
console.log(dateStr);

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

// CREATE a new memberMeal
router.post("/", async (req, res) => {
  try {
    const { name, mobile, mealCount, bazarCost } = req.body;
    console.log(name, mobile, mealCount, bazarCost);
    const user = await User.findOne({ mobile });
    // console.log("user", user);
    if (user) {
      const memberMeal = await MemberMeal.findOne({ mobile });
      // console.log("memberMeal", memberMeal);
      if (!memberMeal) {
        const newMemberMeal = new MemberMeal({
          name,
          mobile,
          meals: [
            {
              mealCount,
              bazarCost,
            },
          ],
        });
        const result = await newMemberMeal.save();
        res.status(200).json({ success: true, result });
      } else {
        res.status(500).json({
          success: false,
          error: "Alredy Exist! For update use Update API",
        });
      }
    } else {
      // write code here
      res.status(500).json({ success: false, error: "user doesnot exist" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

// UPDATE new day meal to memberMeal
router.put("/", async (req, res) => {
  try {
    const { name, mobile, mealCount, bazarCost } = req.body;
    const user = await User.findOne({ mobile });
    if (user) {
      const memberMeal = await MemberMeal.findOne({ mobile });
      if (memberMeal) {
        // memberMeal.meals.push({
        //   mealCount,
        //   bazarCost,
        // });
        // const result = await memberMeal.save();
        const result = await MemberMeal.findOneAndUpdate(
          { mobile },
          { $push: { meals: { mealCount, bazarCost } } },
          { new: true }
        );
        res.status(200).json({ success: true, result });
      } else {
        res.status(500).json({
          success: false,
          error: "MemberMeal doesnot exist",
        });
      }
    } else {
      // write code here
      res.status(500).json({ success: false, error: "user doesnot exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

// UPDATE a specific meal with the date of meal array
router.put("/:date", async (req, res) => {
  try {
    const { mobile, mealCount, bazarCost } = req.body;
    const { date } = req.params;
    await MemberMeal.findOneAndUpdate(
      { mobile, "meals.date": date },
      {
        $set: {
          "meals.$.mealCount": mealCount,
          "meals.$.bazarCost": bazarCost,
        },
      },
      { new: true }
    );
  } catch (error) {}
});

// Update meal
router.patch("/update-meal", async (req, res) => {
  try {
    const { mobile, mealCount, bazarCost, date } = req.body;
    console.log(mobile, mealCount, bazarCost);
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
        const isAlredyAdded = await MemberMeal.findOne({
          mobile,
          "meals.datetime": { $gte: new Date(date), $lt: new Date(nextDate) },
        });
        console.log("isAlredyAdded", isAlredyAdded);
        if (!isAlredyAdded) {
          const nextDate = addDaysToDate(date, 1);
          const result = await MemberMeal.findOneAndUpdate(
            {
              mobile,
              "meals.datetime": {
                $gte: new Date(date),
                $lt: new Date(nextDate),
              },
            },
            {
              $set: {
                "meals.$.mealCount": mealCount,
                "meals.$.bazarCost": bazarCost,
              },
            },
            { new: true }
          );
          res.status(200).json({ success: true, result: result });
        } else {
          // Meal already added
        }
        // console.log("l-125 IS_ALREADY_ADDED", isAlredyAdded);
      }
    } else {
      // write code here
      res.status(500).json({ success: false, error: "user doesnot exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
