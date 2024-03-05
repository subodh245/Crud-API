const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello form Node API Server Updated");
});

mongoose
  .connect(
    // "mongodb+srv://kamblesubodh189:Password001@backenddb.5e4zynl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
    "mongodb+srv://kamblesubodh189:Password001@backenddb.5e4zynl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database! ");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
