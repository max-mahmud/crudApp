const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB}`
    );
    console.log("mongodb connected on newCrud");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;