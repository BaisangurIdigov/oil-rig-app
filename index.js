const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(require("./routes/index.js"));
app.use(express.static(path.resolve(__dirname, "client", "build")))
app.get("*", (req,res)=> {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

const URL = process.env.URL
const PORT = process.env.PORT

async function start() {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => {
      console.log("server has been started...");
    });
  } catch (e) {
    console.log(e);
  }
}

start();
