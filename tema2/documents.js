const mongoose = require("mongoose");

const Students = require("./workSchema");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
});

let student1 = new Students({
    firstname: "Rodrigo",
    lastname: "Campos de Castilla",
    marks:
        [
            {
                date: new Date("2424-03-21"),
                mark: 7,
                subject:
                {
                    title: "matemáticas",
                    teachers: [
                        {
                            firstname: "Marcos",
                            lastname: "Cruz de la Hoya",
                            groups: ["B", "D"]
                        }]
                }
            },
            {
                date: new Date("2424-05-10"),
                mark: 9,
                subject:
                {
                    title: "dibujo técnico", teachers: [
                        {
                            firstname: "Nayara",
                            lastname: "Uribe Franco",
                            groups: ["A", "C"]
                        }]
                }
            }
        ]
});

let student2 = new Students({
    firstname: "Alana",
    lastname: "Hadey Anderson",
    marks:
        [
            {
                date: new Date("2424-04-02"),
                mark: 8,
                subject:
                {
                    title: "artes escénicas",
                    teachers: [
                        {
                            firstname: "Alejandro",
                            lastname: "Soto de la Cruz",
                            groups: ["A", "D"]
                        }]
                }
            },
            {
                date: new Date("2424-07-23"),
                mark: 9,
                subject:
                {
                    title: "astronomía", teachers: [
                        {
                            firstname: "Idrys",
                            lastname: "Mencia Lupiañez",
                            groups: ["B", "C"]
                        }]
                }
            }
        ]
});

let student3 = new Students({
    firstname: "Libertad",
    lastname: "Padilla Franco",
    marks:
        [
            {
                date: new Date("2424-02-10"),
                mark: 7,
                subject:
                {
                    title: "programación",
                    teachers: [
                        {
                            firstname: "Laura",
                            lastname: "Días Descanso",
                            groups: ["C", "D"]
                        }]
                }
            },
            {
                date: new Date("2424-06-05"),
                mark: 8,
                subject:
                {
                    title: "diseño gráfico", teachers: [
                        {
                            firstname: "Manuel",
                            lastname: "Fernández Valle",
                            groups: ["A", "B"]
                        }]
                }
            }
        ]
});

let student4 = new Students({
    firstname: "Leonardo",
    lastname: "Merino Rodríguez",
    marks:
        [
            {
                date: new Date("2424-03-21"),
                mark: 7,
                subject:
                {
                    title: "literatura",
                    teachers: [
                        {
                            firstname: "Javier",
                            lastname: "Carvajal Pérez",
                            groups: ["A", "B"]
                        }]
                }
            },
            {
                date: new Date("2424-05-10"),
                mark: 9,
                subject:
                {
                    title: "artes escénicas", teachers: [
                        {
                            firstname: "Luis",
                            lastname: "González de la Sierra",
                            groups: ["C", "D"]
                        }]
                }
            }
        ]
});

function insertStudents() {
    Students.insertMany([student1, student2, student3, student4])
        .then((respuesta) => {
            console.log("Los estudiantes se han insertado correctamente! 🗳️");
            console.log(respuesta);
            mongoose.disconnect();
        })
        .catch((error) => {
            console.error("Error al insertar los estudiantes...  \n ❌ Error tipo: " + error);
            mongoose.disconnect();
        });
};

insertStudents();