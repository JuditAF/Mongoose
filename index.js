const mongoose = require("mongoose");

let User = require('./userMDB');

mongoose.connect('mongodb://127.0.0.1:27017/codenotch', 
                {userNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User ({name: "Juan",
                              email: "ultimateSeason@gmail.com",
                              role: "Editor/a",
                              verified: false
});

// userDocument.save(checkRespuesta);                                   // OPCIÓN CALLBACK

// function checkRespuesta(error, respuesta) {
//     if(error){
//         console.log("Error :" + error);
//     } else {
//         console.log("Documento guardado Correctamente!");
//         console.log(respuesta);
//     }
// }

userDocument.save().then(respuesta => {                                 // OPCIÓN PROMESAS THEN/CATCH
    console.log(respuesta);
}) .catch(error =>  {
    console.log(error);
});