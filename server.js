require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();


app.use(express.json());


connectDB();

// Routes
app.use("/api", require("./routes/demo.routes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});