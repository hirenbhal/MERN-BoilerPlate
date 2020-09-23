const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://hirenbhal:hiren123456bhal@usercluster.dxdr2.mongodb.net/mernBP?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
