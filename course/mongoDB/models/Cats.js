const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  date: Date,
});

module.exports = mongoose.model("Cat", catSchema);
