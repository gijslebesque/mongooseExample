const data = require(__dirname + "/users.js");
const mongoose = require("mongoose");
const Users = require(__dirname + "/models/Users.js");
const Articles = require(__dirname + "/models/Articles.js");

mongoose
  .connect("mongodb://localhost/newdbtest")
  .then(result => {
    console.log("connected to db");
    return Users.deleteMany();
  })
  .then(result => {
    return Users.insertMany(data);
  })
  .then(result => {
    return Users.updateOne({ name: "Gijs" }, { age: 23 });
  })
  .then(updatedUser => {
    console.log(updatedUser);
    const anArticle = {
      title: "How to bake cookies",
      content: "First make dough. Then put in oven. Then eat",
      author: "Manouk"
    };
    return Articles.create(anArticle);
  })
  .then(success => {
    console.log(success);
    return mongoose.connection.close();
  })
  .then(result => {
    console.log("Connection closed", result);
  })
  .catch(err => {
    console.log("something went wrong", err);
  });
