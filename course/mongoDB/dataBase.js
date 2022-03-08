const mongoose = require("mongoose");
const key = require("./secret").MONGO_URL;
const { catSchema } = require("./models/Cats");
async function conn() {
  try {
    return await mongoose.connect(`${key}`);
  } catch (error) {
    console.log(error);
  }
}

async function addCat() {
  try {
    const connection = await conn();
    const Cat = connection.model("Cat", catSchema);
    const kitty = new Cat({ name: "new Cat", age: "28", date: 9999999999999 });
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
    const connection = await conn();
    const Cat = connection.model("Cat", catSchema);
    const cats = await Cat.find({ name: "shimon" });
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

async function findAndUpdate() {
  try {
    const connection = await conn();
    const Cat = connection.model("Cat", catSchema);
    const cats = await Cat.findOneAndUpdate({}, {});
    console.log(cats);
    const ans = await connection.disconnect();
  } catch (error) {
    console.log(error);
  }
}

async function findAndDelete() {
  try {
    const connection = await conn();
    const Cat = connection.model("Cat", catSchema);
    const cats = await Cat.findOneAndDelete({ name: "5" });
    console.log(cats);
    const ans = await disConn(connection);
  } catch (error) {
    console.log(error);
  }
}

async function disConn(connection) {
  connection.disconnect(connection);
}

// findAndDelete();
// addCat();
// findAndUpdate();
findCat();
