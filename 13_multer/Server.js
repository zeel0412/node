const express = require("express");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const userModel = require("./model/userModel");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/uploadDB");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/upload", express.static(path.join(__dirname, "upload")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("image");

app.post("/insert", upload, async (req, res) => {
  const { username, password } = req.body;

  let image = "";
  if (req.file) {
    image = "/upload/" + req.file.filename;
  }

  await userModel.create({
    username,
    password,
    image,
  });

  res.redirect("/");
});

app.get("/", async (req, res) => {
  const data = await userModel.find({});
  res.render("form", { data });
});

app.listen(8002, () => {
  console.log("Server running");
});
