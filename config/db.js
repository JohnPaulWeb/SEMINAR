const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Error:", err.message);
    process.exit(1);
  }
};

// this is mongoose connection file, we will use it to connect to our MongoDB database. We will call this function in our server.js file to establish the connection before starting the server.

module.exports = connectDB;ww