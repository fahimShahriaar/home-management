const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  meals: [
    {
      date: { type: Date, default: Date.now },
      mealCount: Number,
      bazarCost: Number,
    },
  ],
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    mobile: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

const utilitySchema = new mongoose.Schema(
  {
    currentBill: Number,
    khalarBill: Number,
    internetBill: Number,
    houseRent: Number,
    otherBill: Number,
    date: { type: Date, default: Date.now },
  },
  { timestamp: true }
);

// const activityLogSchema = new mongoose.Schema({

// })

const Member = mongoose.model("Member", memberSchema);
const User = mongoose.model("User", userSchema);
module.exports = {
  Member,
  User,
};
