const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db ka connection is succesfull"))
    .catch((error) => {
      console.log("issue in Db");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
