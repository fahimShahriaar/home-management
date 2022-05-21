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

const userSchema = new mongoose.Schema({
  name: String,
  mobile: {
    type: String,
    unique: true,
  },
  password: String,
});

const Member = mongoose.model("Member", memberSchema);
const User = mongoose.model("User", userSchema);
module.exports = {
  Member,
  User,
};
