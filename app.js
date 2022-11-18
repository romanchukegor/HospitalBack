require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { URL, PORT } = require("./config");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const start = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
