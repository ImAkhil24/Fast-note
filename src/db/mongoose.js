const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL = "mongodb://localhost:27017/task-manager-api";
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

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid");
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Age must be a positive number");
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      // here values come after triming;
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain password");
      }
    },
  },
});

// const me = new User({
//   name: "    Akhil",
//   email: "FSADFSjk@kfsajlk.com",
//   password: "AKhil     B     ",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    require: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "learn node js",
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((err) => {
    console.log(err);
  });
