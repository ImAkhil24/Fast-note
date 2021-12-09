const mongoose = require("mongoose");

const connectionURL = "mongodb+srv://akhil:akhil@cluster0.arece.mongodb.net/task-manager-api?retryWrites=true&w=majority";
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("connnected");
  })
  .catch((err) => {
    console.log("Cannot connect");
    console.log(err);
  });
