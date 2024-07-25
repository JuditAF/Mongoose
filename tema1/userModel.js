const mongoose = require("mongoose");

const mongo = 'mongodb://localhost:27017/codenotch';
mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
  });

// let userModelDocument = new User ({
//     login: "struendOrtiga@this.getMaxListeners.com",
//     password: "456OPU987"
// });

// userModelDocument.save().then(respuesta => {    
//     console.log("Documento guardado Correctamente!");                 
//     console.log(respuesta);
// }) .catch(error =>  {
//     console.log("Error :" + error);
// });

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = mongoose.model("UserModel", UserSchema);