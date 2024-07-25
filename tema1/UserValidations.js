const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     login: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         validate:[
//             function(password){
//                 return password.length >= 8;
//             },
//             'password necesita ser más largo'
//         ],
//         select: false
//     }
// });

// const ProfileSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 50
//     },
//     surname: {
//         type: String,
//         required: true,
//     },
//     dateOfBirth: Date,
//     comments: String, 
//     role: {
//         type: String,
//         required: true,
//         enum: ["USER", "ADMIN"]
//     },
// });

// const CredentialsSchema = new mongoose.Schema({
//     adress: String,
//     phone: String,
//     email: {
//         type: String,
//         required: true,
//         match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
//     }
// });