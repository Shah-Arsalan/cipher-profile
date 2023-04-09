const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.CONNECTION_URL;

const connectionFunc = async () => {
  try {
    await mongoose.connect(`${url}`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    console.log("Successfully connected mongoDB")
  } catch (error) {
    console.log("this is error", error);
  }
}

module.exports = connectionFunc;