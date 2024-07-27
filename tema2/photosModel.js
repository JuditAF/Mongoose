const mongoose = require("mongoose");

const Photos = require("./photos");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
  });

  let photo1 = new Photos({
    nameUser: "Ricardo, Corazón de León",
    urlPhoto: "https://hablaconlahistoria.es/wp-content/uploads/2024/03/ricardo-corazon-de-leon.webp",
    titlePhoto: "IA Perfil",
    description: "Reproducción virtual del rostro"
  });

  let photo2 = new Photos({
    nameUser: "Cleopatra Filopátor Nea Thea",
    urlPhoto: "https://i.pinimg.com/474x/e9/eb/47/e9eb477edc68c9e20b629fcc70a59e41.jpg",
    titlePhoto: "IA Perfil",
    description: "Reproducción virtual del rostro"
  });

  let photo3 = new Photos({
    nameUser: "Leonardo Da Vinci",
    urlPhoto: "https://proportione.com/storage/2023/08/Leonardo_Modelando_Robot.png",
    titlePhoto: "IA Perfil generado",
    description: "Imagen diseñando un invento"
  });

  let photo4 = new Photos({
    nameUser: "Wallada bint al-Mustakfi",
    urlPhoto: "https://lclcarmen1bac.wordpress.com/wp-content/uploads/2019/03/taqqb.jpg",
    titlePhoto: "IA Perfil Poetisa Andalusí",
    description: "Imagen tocando un instrumento"
  });

  photo1.save()
  .then((respuesta) => {
    console.log("Foto de " +  photo1.nameUser + " guardado Correctamente! 🤩");
    console.log(respuesta);
    return photo2.save();
  })
  .then((respuesta) => {
    console.log("Foto de " +  photo2.nameUser + " guardado Correctamente! 🤩");
    console.log(respuesta);
    return photo3.save();
  })
  .then((respuesta) => {
    console.log("Foto de " +  photo3.nameUser + " guardado Correctamente! 🤩");
    console.log(respuesta);
    return photo4.save();
  })
  .then((respuesta) => {
    console.log("Foto de " +  photo4.nameUser + " guardado Correctamente! 🤩");
    console.log(respuesta);
  })
  .catch((error) => {
    console.log("Error :" + error);
  });


// url a modificar de cleopatra: "https://socientifica.com.br/wp-content/uploads/2021/01/Cleopatra_and_Caesar_by_Jean-Leon-Gerome.jpg"
// title: "imagen de Cleopatra en las dependencias de su palacio.  Pintura de Jean-Léon Gérôme"