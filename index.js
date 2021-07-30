const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));
app.use(require("./routes/index.js"));

const URL = process.env.URL
const PORT = process.env.PORT

async function start() {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(process.env.PORT || PORT, () => {
      console.log("server has been started...");
    });
  } catch (e) {
    console.log(e);
  }
}

start();
