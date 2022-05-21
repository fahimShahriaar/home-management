const express = require("express");
const app = express();
const adminHandler = require("./routeHandler/adminHandler");
const userHandler = require("./routeHandler/userHandler");

app.use("/user", userHandler);
app.use("/admin", adminHandler);

app.listen(8080, () => console.log("listening on port: 8080"));
