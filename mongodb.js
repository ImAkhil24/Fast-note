// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://root:pass12345@localhost:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log(error);
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("tasks")
    //   .insertMany([
    //     {
    //       description: "Workout",
    //       completed: false,
    //     },
    //     {
    //       description: "Play brawlhalla",
    //       completed: true,
    //     },
    //     {
    //       description: "learn node js",
    //       completed: false,
    //     },
    //   ])
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: { completed: true },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
