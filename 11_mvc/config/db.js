const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/rnw");
const db = mongoose.connection
db.on("connected",()=>{
  console.log("Database connect")
})
