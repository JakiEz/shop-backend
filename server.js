const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config")

mongoose.connect(
  process.env.mongo_url
);

app.use(express.json());
app.use(cors());

const productRoute = require("./router/product");

app.use("/", productRoute);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
