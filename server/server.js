require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();
app.use(express.json());
app.use(cors()); // Enables CORS for all origins by default

connectDB().then(() => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
// Example route
app.get("/", (req, res) => res.send("API is running 🚀"));
