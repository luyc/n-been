const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String
})

const User = mongoose.model("User", userSchema, "User")
module.exports = User
