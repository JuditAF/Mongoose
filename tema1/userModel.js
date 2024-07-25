const mongoose = require("mongoose");

const mongo = 'mongodb://localhost:27017/codenotch';
mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
  });

//   let userDocument = new User ({name: "Juan",
//     email: "ultimateSeason@gmail.com",
//     role: "Editor/a",
//     verified: false
// });

// userDocument.save().then(respuesta => {    
//     console.log("Documento guardado Correctamente!");                 // OPCIÓN PROMESAS THEN/CATCH
//     console.log(respuesta);
// }) .catch(error =>  {
//     console.log("Error :" + error);
// });

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = mongoose.model("User", UserSchema, "users");