const mongoose = require("mongoose");
const user = new mongoose.Schema({
  BookTitle: {
    type: String,
  },
  Author: {
    type: String,
  },
});

const userModel = new mongoose.model("emp", user);

module.exports = userModel;
