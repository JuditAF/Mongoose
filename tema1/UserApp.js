const mongoose = require("mongoose");

const User = require("./userModel");
const Profile = require("./profileModel");
let { Creedentials } = require("./creedentialsModel");

// const mongo = 'mongodb://localhost:27017/codenotch';                                     // DEPRECATED?
// mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );
mongoose.connect("mongodb://localhost:27017/codenotch", {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

let user1 = new User({
  login: "struendOrtiga",
  password: "456OPU987",
});

let user2 = new User({
  login: "sueñosApares",
  password: "123dREAm147",
});

user1
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤪");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

user2
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤪");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

let profile1 = new Profile({
  name: "Leonardo",
  surname: "Cruz",
  dateOfBirth: new Date(1984, 3, 10),
  Comments: "perfil Senior",
  rol: "programador Full_Stack",
});

let profile2 = new Profile({
  name: "Julia",
  surname: "Nuñez",
  dateOfBirth: new Date(1990, 11, 23),
  Comments: "perfil Senior",
  rol: "Chief Information Security Officer",
});

profile1
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 😃");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

profile2
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 😃");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

let creedentials1 = new Creedentials({
  address: "Calle El Quinto Pino",
  phone: 600458960,
  email: "viajandoAPie@gmail.es",
});

let creedentials2 = new Creedentials({
  address: "Calle Válgame Dios",
  phone: 652764312,
  email: "ultimoBillet@gmail.es",
});

creedentials1
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤩");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

creedentials2
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤩");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });
