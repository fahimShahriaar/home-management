const mongoose = require("mongoose");

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

const memberMealSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    meals: [
      {
        mealCount: { type: Number, default: 0 },
        bazarCost: Number,
        localDate: { type: String, required: true },
        localTime: { type: String, required: true },
        datetime: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const utilitySchema = new mongoose.Schema(
  {
    currentBill: Number,
    khalarBill: Number,
    internetBill: Number,
    houseRent: Number,
    otherBills: [
      {
        title: String,
        expenditure: Number,
      },
    ],
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const activityLogSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    activity: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const MemberMeal = mongoose.model("MemberMeal", memberMealSchema);
const User = mongoose.model("User", userSchema);
const Utility = mongoose.model("Utility", utilitySchema);
const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = {
  MemberMeal,
  User,
  Utility,
  ActivityLog,
};
