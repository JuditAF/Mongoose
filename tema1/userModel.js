const mongoose = require("mongoose");

const mongo = "mongodb://localhost:27017/codenotch";
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  login: String,
  password: String,
});

// module.exports = User;                                               // ESTE MODELO NO CONECTA CON MONGO, EXPORTA UN ESQUEMA DIRECTO
module.exports = mongoose.model("User", UserSchema);                    //DEPRECATED?
