const mongoose = require("mongoose");
var colors = require('colors');

const Students = require("./workSchema");

mongoose.connect("mongodb://localhost:27017/codenotch", {                                   // PARA EVITAR PROBLEMAS USAR LA DIRECCIÓN 127.0.0.1
    useNewUrlParser: false,
    useUnifiedTopology: false,
  });

//   Todas las notas de  un alumno

async function getMarksStudent(firstname, lastname) {
    try {
        const student = await Students.findOne({ firstname, lastname }, { "marks.mark": 1, _id: 0 });
        if(student){
            const marksStudent = student.marks.map(mark => mark.mark);
            console.log("Las notas registradas por el alumno " + firstname.red + " " + lastname.red + " son: " + marksStudent + " ✨");
        } else {
            console.log("🤪 El estudiante no existe 🤪");
        };
        mongoose.disconnect();
    } catch(error) {
        console.error("Error al obtener las notas del estudiante: " + firstname.red + " " + lastname + "\n ❌ Error tipo: " + error);
        mongoose.disconnect();
    }
};

getMarksStudent("Leonardo", "Merino Rodríguez");

//   Todos las asignaturas de un alumno

async function getSubjectsStudent(firstname, lastname) {
    try {
        const student = await Students.findOne({ firstname: firstname, lastname: lastname }, { "marks": 1, _id: 0 });
        if (student) {
            console.log(student);
            student.marks.map(mark => console.log(mark.subject.title));
            console.log(student.marks);
        } else {
            console.log("🤪 El estudiante no existe 🤪");
        };
    } catch (error) {
        console.error("Error al obtener las asignaturas del estudiante: " + firstname + " " + lastname + "\n ❌ Error tipo: " + error);
    }
};

getSubjectsStudent("Alana", "Hadey Anderson");

//   Todos los profesores de un alumno

// async function getTeachersStudent(firstname, lastname) {
//     try {
//         const student = await Students.findOne({ firstname, lastname }, { "marks.subject.teachers": 1, _id: 0 });
//         if (student) {
//             const teachers = [];
//             student.marks.forEach(mark => {
//                 mark.subject.teachers.map(teacher => {
//                     teachers.push(`${teacher.firstname} ${teacher.lastname}`);
//                 });
//             });
//             console.log("Los profesores quienes les imparten clase al alumno " + firstname + " " + lastname + " son: " + teachers + " 📕")
//             // return teachers;
//         } else {
//             console.log(console.log("🤪 El estudiante no existe 🤪"));
//             return [];
//         }
//         mongoose.disconnect();
//     } catch (error) {
//         console.error(error);
//         mongoose.disconnect();
//     }
// };

// getTeachersStudent("Libertad", "Padilla Franco");