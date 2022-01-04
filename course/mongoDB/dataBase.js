const mongoose = require("mongoose");
const key = require("./secret").MONGO_URL;

async function conn() {
  try {
    const connection = await mongoose.connect(`${key}`);
    const Cat = connection.model("Cat", { name: String });
    const kitty = new Cat({ name: "yasso" });
    kitty
      .save()
      .then(() => connection.disconnect())
      .then(console.log("kitty saved"));
  } catch (error) {
    console.log(error);
  }
}

async function findCat() {
  try {
    const connection = await mongoose.connect(`${key}`);
    const Cat = connection.model("Cat", { name: String });
    const cats = await Cat.find({ name: "yasso" });
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

async function findCat() {
  try {
    const connection = await mongoose.connect(`${key}`);
    const Cat = connection.model("Cat", { name: String });
    const cats = await Cat.find();
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

async function findAndUpdate() {
  try {
    const connection = await mongoose.connect(`${key}`);
    const Cat = connection.model("Cat", { name: String });
    const cats = await Cat.findOneAndUpdate(
      {  },
      {  }
    );
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

async function findAndDelete() {
    try {
      const connection = await mongoose.connect(`${key}`);
      const Cat = connection.model("Cat", { name: String });
      const cats = await Cat.findOneAndDelete({name: ""});
      console.log(cats);
      const ans = await connection.disconnect();
    } catch (error) {
      console.log(error);
    }
  }

// findAndUpdate();
// findCat();
// findAndDelete()