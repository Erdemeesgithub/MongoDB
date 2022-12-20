const express = require("express");
const cors = require("cors");
const connect = require("./helper/db");

const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())

connect();

const Cat = mongoose.model("Cat", { name: String });

app.get("/cat", async (req, res) => {
  const data = await cat.find({});
  res.send(data);
});

app.post("/cat", async (req, res) => {
  const body = req.body;
  const kitty = new Cat({ name: "erdem" });
  await kitty.save();
  res.send("next!!");
});

app.put("/cat/:id", async (req, res) => {
  const id = req.params.id;

  const cat = await Cat.findByIdAndUpdate(id, { name: "test" }, { new: true });
  res.send(cat);
});

app.delete("/cat/:id", async (req, res) => {
  const id = req.params.id;

  await Cat.deleteOne({ _id: id });
  res.send("Deleted");
});
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
