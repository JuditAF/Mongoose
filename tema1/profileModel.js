const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: Date,
  Comments: String,
  rol: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

// module.exports = Profile;                                                  // ESTE MODELO NO CONECTA CON MONGO, EXPORTA UN ESQUEMA DIRECTO
module.exports = mongoose.model("Profile", ProfileSchema);                    //DEPRECATED?
