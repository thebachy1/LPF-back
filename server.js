require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
const app = express();
const port = 3000;
const uri = process.env.MONGODB_URI;
const cors = require("cors");

console.log("The value of PORT is:", process.env.MONGODB_URI);
app.use(cors());

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Hola");
});

app.use(express.json());

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
