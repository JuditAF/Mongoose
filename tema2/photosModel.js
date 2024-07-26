const mongoose = require("mongoose");

const Photos = require("./photos");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
  });

  let photo1 = new Photos({
    nameUser: "Ricardo",
    urlPhoto: "https://hablaconlahistoria.es/wp-content/uploads/2024/03/ricardo-corazon-de-leon.webp",
    titlePhoto: "IA Perfil",
    description: "Reproducción virtual del rostro"
  });

  photo1
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤩");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });

  let photo2 = new Photos({
    nameUser: "Cleopatra",
    urlPhoto: "https://i.pinimg.com/474x/e9/eb/47/e9eb477edc68c9e20b629fcc70a59e41.jpg",
    titlePhoto: "IA Perfil",
    description: "Reproducción virtual del rostro"
  });

  photo2
  .save()
  .then((respuesta) => {
    console.log("Documento guardado Correctamente! 🤩");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });