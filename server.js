const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/formRoutes"));

mongoose.connect("mongodb+srv://aditi06:Aditi123@cluster0.iyfwe.mongodb.net/formDB")

app.listen(3001, function(){
    console.log("express server is running on port 3001");
})