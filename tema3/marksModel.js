const mongoose = require("mongoose");
const Marks = require("./marks");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
});

let marks1 = new Marks({
    date: ("2024-03-10"),
    mark: 6,
    student_first_name: "Juan",
    student_last_name: "Torres Cuenca",
    group_name: "D",
    subject_name: "Dibujo Técnico",
    teachers: 
        [{teacher_first_name: "Luis",
          teacher_last_name: "Cortés Mesa"}]
});

let marks2 = new Marks({
    date: ("2024-01-22"),
    mark: 9,
    student_first_name: "Teresa",
    student_last_name: "Padilla Herias",
    group_name: "A",
    subject_name: "Genética molecular",
    teachers: 
        [{teacher_first_name: "Tirso",
          teacher_last_name: "Rueda Nieto"}]
});

let marks3 = new Marks({
    date: ("2024-6-29"),
    mark: 7,
    student_first_name: "Alana",
    student_last_name: "Franco Anderson",
    group_name: "B",
    subject_name: "Taller Cerámico",
    teachers: 
        [{teacher_first_name: "Nayara",
          teacher_last_name: "Ferrer Lebrón"}]
});

let marks4 = new Marks({
    date: ("2024-07-04"),
    mark: 5,
    student_first_name: "Isa",
    student_last_name: "Ballesteros Jiménez",
    group_name: "C",
    subject_name: "Literatura Clásica",
    teachers: 
        [{teacher_first_name: "Rodrigo",
          teacher_last_name: "Mencía Cortés"}]
});

let marks5 = new Marks({
    date: ("2024-05-20"),
    mark: 8,
    student_first_name: "Antonio",
    student_last_name: "Merino Blanes",
    group_name: "A",
    subject_name: "Derecho Civil",
    teachers: 
        [{teacher_first_name: "Manuel",
          teacher_last_name: "León Castillo"}]
});

let marks6 = new Marks({
    date: ("2024-04-22"),
    mark: 6,
    student_first_name: "Germán",
    student_last_name: "Rodríguez Saez",
    group_name: "C",
    subject_name: "Derecho Civil",
    teachers: 
        [{teacher_first_name: "Lidia",
          teacher_last_name: "Plaza Toro"}]
});

let marks7 = new Marks({
    date: ("2024-03-14"),
    mark: 9,
    student_first_name: "Alberto",
    student_last_name: "Izquierdo Núñez",
    group_name: "D",
    subject_name: "literatura clásica",
    teachers: 
        [{teacher_first_name: "Ernesto",
          teacher_last_name: "Torrejón Arcilla"}]
});

let marks8 = new Marks({
    date: ("2024-02-16"),
    mark: 6,
    student_first_name: "Verónica",
    student_last_name: "Cueto Ruiz",
    group_name: "B",
    subject_name: "Genética molecular",
    teachers: 
        [{teacher_first_name: "Ana",
          teacher_last_name: "Huertas del Valle"}]
});

let marks9 = new Marks({
    date: ("2024-05-26"),
    mark: 9,
    student_first_name: "Nieves",
    student_last_name: "Rodillo Blanco",
    group_name: "C",
    subject_name: "Taller Cerámico",
    teachers: 
        [{teacher_first_name: "Diana",
          teacher_last_name: "Lucio Almilla"}]
});

let marks10 = new Marks({
    date: ("2024-05-26"),
    mark: 7,
    student_first_name: "Susana",
    student_last_name: "Puertas Martínez",
    group_name: "D",
    subject_name: "Dibujo Técnico",
    teachers: 
        [{teacher_first_name: "Horacio",
          teacher_last_name: "Trujillo Sastre"}]
});