const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const morgan = require('morgan');
const userRoute = require("./routers/user");
const taskRoute = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(userRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
