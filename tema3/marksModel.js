const mongoose = require("mongoose");
const Marks = require("./marks");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
});

let mark1 = new Marks({
    date: ("2024-03-10"),
    mark: 6,
    student_first_name: "Juan",
    student_last_name: "Torres Cuenca",
    group_name: "D",
    subject_name: "Dibujo Técnico",
    teachers: [{
        teacher_first_name: "Luis",
        teacher_last_name: "Cortés Mesa"
    }
    ]
});