const express = require("express");
const app = express();
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blog");
const dbConnect = require("./config/database");

// Load environment variables from .env file
dotenv.config();

// Determine the port to run the server on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount blog routes at the specified path
app.use("/api/v1", blogRoutes);

// Connect to the database
dbConnect();

// Start the server
app.listen(PORT, () => {
  console.log(`App started successfully at port ${PORT}`);
});
