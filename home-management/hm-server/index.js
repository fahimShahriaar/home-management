const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminHandler = require("./routeHandler/adminHandler");
const userHandler = require("./routeHandler/userHandler");

// middlewares
app.use(express.json());

// db connection
mongoose
  .connect("mongodb://localhost:27017/home-management")
  .then(() => console.log("DB connection established..."))
  .catch((err) => console.error(err));

app.use("/user", userHandler);
app.use("/admin", adminHandler);

app.listen(8080, () => console.log("listening on port: 8080"));
