const mongoose = require("mongoose");

const uri = "mongodb+srv://LuisADM:2bNgaTlIC94f7okT@cluster0.mqghqhb.mongodb.net/crud?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

module.exports = mongoose;