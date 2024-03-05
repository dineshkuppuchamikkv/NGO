const express = require("express");
const mongoose = require("mongoose");
const model = require("./Donation-Schema.jsx");
const model2 = require("./Join-Schema.jsx");
const model3 =require("./Contact-Schema.jsx")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/Donation")
  .then(() => {
    console.log("Connected to Donation MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to Donation MongoDB:", error);
  });


app.post("/pandi", (req, res) => {
  console.log("hi");
  const data = req.body;
  console.log(data);
  model2
    .create(data)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});
app.post("/Donate", (req, res) => {
  const data = req.body;
  console.log(data);
  model
    .create(data)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      console.error("Error during donation:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});
app.post("/Contact", (req, res) => {
  const data = req.body;
  console.log(data);
  model3
    .create(data)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      console.error("Error during donation:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});
