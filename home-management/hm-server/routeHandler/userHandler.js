const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../schemas/schemas");
const { MemberMeal } = require("../schemas/schemas");

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { name, mobile, password } = req.body;
    console.log(name, mobile, password);
    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // save to DB
    const newUser = new User({
      name,
      mobile,
      password: hashedPassword,
    });

    const result = await newUser.save();
    console.log(result);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });
    // console.log(user);
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const updatedUser = { ...user._doc };
        delete updatedUser.password;
        delete updatedUser.__v;
        // console.log(updatedUser);
        const userMealInfo = await mealInfo(mobile);
        console.log("userMealInfo", userMealInfo);
        res
          .status(200)
          .json({ success: true, user: updatedUser, mealInfo: userMealInfo });

        // res.status(200).json({ success: true, result: updatedUser });
      } else {
        res
          .status(401)
          .json({ success: false, result: "Authentication failed!" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, result: "You are not valid user!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error });
  }
});

// Get meal information of a user
async function mealInfo(mobile) {
  const memberMeals = await MemberMeal.findOne(
    { mobile },
    { __v: 0, createdAt: 0 }
  );
  // console.log(memberMeals);
  if (memberMeals) {
    // Calculating Per Meal Cost, Total Meals and Total BazarCost
    let totalMeals = 0;
    let totalBazarCost = 0;
    for (const meal of memberMeals.meals) {
      // console.log(meal);
      totalMeals += meal.mealCount;
      totalBazarCost += meal.bazarCost;
    }
    let perMealCost = totalBazarCost / totalMeals;

    console.log("totalMeals", totalMeals);
    console.log("totalBazarCost", totalBazarCost);
    console.log(`perMealCost: ${Math.ceil(perMealCost)}`);
    const userMealInfo = { totalMeals, totalBazarCost, perMealCost };
    console.log(userMealInfo);
    return userMealInfo;
  } else {
    return "No meal found";
  }
}

module.exports = router;
