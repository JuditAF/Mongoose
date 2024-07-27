const mongoose = require("mongoose");

const Photos = require("./photos");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
  });

  let data1 = new Photos({
    nameUser: "Plutarco de Queronea",
    urlPhoto: "https://www.religionenlibertad.com/images/carpeta_relacionados/2023/03/26/146492_educacic3b3n-grecia1.jpg",
    titlePhoto: "Filósofo griego",
    description: "Imagen Plutarco y la Educación de los Hijos"
  });

  let data2 = new Photos({
    nameUser: "Publio Cornelio Escipión",
    urlPhoto: "https://hablaconlahistoria.es/wp-content/uploads/2024/03/trajano-768x1152.webp",
    titlePhoto: "IA Perfil General Romano",
    description: "Imagen tocando un instrumento"
  });

// Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’

Photos.create(data1)
.then(function(respuesta){
    console.log("¡Documento de " + data1.nameUser + " guardado correctamente! 🤗")
    console.log(respuesta)
    mongoose.disconnect();
})
.catch(function(){
    console.log("Error al escribir el documento")
})

// PROMESAS ASYNC/AWAIT

async function subir(data) {
    try {
        let user = new Photos(data);
        let respuesta = await user.save();
        console.log("¡Documento de " + data.nameUser + " guardado correctamente! 🤗");
        console.log(respuesta);
    } catch (error) {
        console.log("Error al escribir el documento");
        console.log(error);
    }
    mongoose.disconnect();
};

subir(data2);
  
// Obtener fotos:
// Dado un usuario obtener todas sus fotos.

async function getPhotos(name) {
    try {
        let user = await Photos.find({ "nameUser": name });
        console.log(user);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al obtener las fotos. Error tipo: " + error);
        mongoose.disconnect();
    }
}

getPhotos("Plutarco de Queronea");

// Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripción.

async function descriptionUp(title, commment) {
    try {
        let user = await Photos.updateOne({ "titlePhoto": title }, { "description": commment });
        console.log(user);
        console.log("El " + title + " representado en la " + commment);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al obtener las fotos. Error tipo: " + error);
        mongoose.disconnect();
    }
}

descriptionUp("Filósofo griego", "Paideía griega iniciada en el hogar");

// Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto.

async function deleteOne(name, title) {
    try {
        let user = await Photos.deleteOne({ "$and": [{ "nameUser": name }, { "titlePhoto": title }] });
        console.log("¡Foto de " + name + " eliminada correctamente! ❌");
        console.log(user);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al eliminar la foto. Error tipo: " + error);
        mongoose.disconnect();
    }
};

deleteOne("Publio Cornelio Escipión", "IA Perfil General Romano")

// Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.

async function deleteAll(name) {
    try {
        let user = await Photos.deleteMany({ "nameUser": name });
        console.log("Se eliminaron todas las fotos de " + name + " ❌");
        console.log(user);
        mongoose.disconnect();
    } catch (error) {
        console.log("Error al eliminar las fotos. Error tipo: " + error);
        mongoose.disconnect();
    }
};

deleteAll("Publio Cornelio Escipión");