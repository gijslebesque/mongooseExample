const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// A Mongoose schema defines the structure of the document, default values, for example,
// whereas a Mongoose model provides an interface to the database,
// for creating, querying, updating, deleting records, etc.

//First defining structure :
const userSchema = new Schema({
  name: String,
  age: Number,
  likes: Array
});

// Secondly create the interface layer:

const UsersModel = mongoose.model("User", userSchema);

// The first argument here is the name of the collection

// IMPORTANT: mongoose will lowercase and pluralise

// Here we make this file exportable (so we can later require it)
module.exports = Users;
