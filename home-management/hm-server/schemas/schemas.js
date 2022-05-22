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

const memberSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  meals: [
    {
      mealCount: { type: Number, default: 0 },
      bazarCost: Number,
      date: { type: Date, default: Date.now },
    },
  ],
});

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
  { timestamp: true }
);

const activityLogSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    activity: String,
    date: { type: Date, default: Date.now },
  },
  { timestamp: true }
);

const Member = mongoose.model("Member", memberSchema);
const User = mongoose.model("User", userSchema);
const Utility = mongoose.model("Utility", utilitySchema);
const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = {
  Member,
  User,
  Utility,
  ActivityLog,
};
