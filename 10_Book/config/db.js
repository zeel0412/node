const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/zeel");
const db = mongoose.connection;

db.on("connected", () => {
  console.log("database connect");
});
