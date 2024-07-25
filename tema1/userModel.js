const mongoose = require("mongoose");

const mongo = 'mongodb://localhost:27017/codenotch';
mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
  });

const User = mongoose.model("User", UserSchema);

module.exports = mongoose.model = { User };
  // module.exports = mongoose.model("User", UserSchema);                    //DEPRECATED?