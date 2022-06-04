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
      // If there is no meal of the user add new Meal to him
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
        // If the user already have a meal add new Day meal to the "meals" Array.
        // Add a condition if the user already have a meal on the same date
        const x = await MemberMeal.findOne({
          "meals.datetime": { $eq: new Date(dateStr) },
        });
        console.log(x);
        const result = await MemberMeal.findOneAndUpdate(
          { mobile },
          { $push: { meals: { mealCount, bazarCost } } },
          { new: true }
        );
        res.status(200).json({ success: true, result });
      }
    } else {
      // USER DOES NOT EXIST BLOCK
      res.status(500).json({ success: false, error: "user does not exist" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

// UPDATE new day meal to memberMeal
router.put("/", async (req, res) => {
  try {
    const { mobile, mealCount, bazarCost } = req.body;
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
          error: "MemberMeal does not exist",
        });
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

// Update existing meal
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
        const isAlreadyAdded = await MemberMeal.findOne({
          mobile,
          "meals.datetime": { $gte: new Date(date), $lt: new Date(nextDate) },
        });
        console.log("isAlreadyAdded", isAlreadyAdded);
        if (!isAlreadyAdded) {
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
        // console.log("l-125 IS_ALREADY_ADDED", isAlreadyAdded);
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

router.get("/test", async (req, res) => {
  try {
    const date = "2022-06-03";
    const toDate = "2022-06-03";
    const nextDate = addDaysToDate(toDate, 1);
    // const result = await MemberMeal.findOne(
    //   {
    //     mobile: "01717222222",
    //     // "meals.datetime": {
    //     //   $gte: new Date(date),
    //     //   $lt: new Date(nextDate),
    //     // },
    //   },
    //   {
    //     "meals.$": 1,
    //   }
    // );
    // const User = mongoose.model(
    //   "User",
    //   new mongoose.Schema({
    //     email: String,
    //     password: String,
    //     name: String,
    //     days: [
    //       {
    //         day: Date,
    //         data: {
    //           average_score: {
    //             type: mongoose.Schema.Types.Decimal128,
    //             default: 0,
    //           },
    //         },
    //       },
    //     ],
    //   })
    // );
    const result = await MemberMeal.aggregate([
      { $match: { _id: "629775b6ef5e536d14eaeca7" } },
      {
        $project: {
          meals: {
            $filter: {
              input: "$meals", // le tableau à limiter
              as: "index", // un alias
              cond: {
                $and: [
                  {
                    $gte: ["$$index.datetime", new Date("2022-06-02")],
                  },
                  {
                    $lte: ["$$index.datetime", new Date("2022-06-03")],
                  },
                ],
              },
            },
          },
        },
      },
    ]).project({
      "meals.datetime": 1,
      "meals.mealCount": 1,
      "meals.bazarCost": 1,
    });
    console.log(result);
    res.status(200).json({ success: true, data: result });
    // .then((result) => {
    //   console.log(result);
    //   res.status(200).json({ success: true, data: result });
    // });
    // console.log(nextDate);
    // res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
