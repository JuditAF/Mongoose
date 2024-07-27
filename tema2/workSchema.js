const mongoose = require("mongoose");

let studentsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});

let marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number
});

studentsSchema.add({marks: [marksSchema]});

let subjectsSchema = new mongoose.Schema({
    title: String
});

subjectsSchema.add({subject: subjectsSchema})           // Solo se le añade un campo(objeto literal=esquema), relación 1:1

let teachersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    groups: [String]
}); 

subjectsSchema.add({teachers: [teachersSchema]})


module.exports = mongoose.model("Students", studentsSchema, 'students');        // SOLO HAY QUE HACER LA COLECCIÓN ESTUDIANTES, TRABAJAREMOS CON SUBDOCUMENTOS