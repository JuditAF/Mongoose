const mongoose = require("mongoose");

let User = require('./userMDB');                                                            // IMPORTO ESQUEMA

const mongo = 'mongodb://localhost:27017/codenotch';                                        // CREAMOS CONEXIÓN CON BASE DE DATOS
mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

// mongoose.createConnection(mongo, { useNewUrlParser: true });                             // DEPRECATED WEB
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

// mongoose.connect('mongodb://localhost:27017/codenotch',                                  // DEPRECATED SLIDES
//                 {useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User ({name: "Juan",
                              email: "ultimateSeason@gmail.com",
                              role: "Editor/a",
                              verified: false
});

// let userDocument = new User ({name: "Alejandro",
//     email: "AnnversoUniverse@gmail.com",
//     role: "Periodista",
//     verified: true
// });

// userDocument.save(checkRespuesta);                                   // OPCIÓN CALLBACK

// function checkRespuesta(error, respuesta) {
//     if(error){
//         console.log("Error :" + error);
//     } else {
//         console.log("Documento guardado Correctamente!");
//         console.log(respuesta);
//     }
// }

userDocument.save().then(respuesta => {    
    console.log("Documento guardado Correctamente!");                 // OPCIÓN PROMESAS THEN/CATCH
    console.log(respuesta);
}) .catch(error =>  {
    console.log("Error :" + error);
});