const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.SCHOOL_DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      /* useFindAndModify: false,
        useCreateIndex: true,
        */
    });
    console.log("Connection with MongoDB: ON");
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e);
    throw new Error("Error connecting to MongoDB");
  }
};
module.exports = { dbConnection };
