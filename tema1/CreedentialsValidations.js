const mongoose = require("mongoose");


const CredentialsSchema = new mongoose.Schema({
    adress: {
        type: String,
        minlength: [1,"El Campo Login no puede contener más de 1 carácteres"],
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    phone: {
        type: Number,
        min: 7,
        max: 15,
        pattern: "/ ^ \ (? (\ d {3}) \)? [-]? (\ d {3}) [-]? (\ d {4}) $ /"
    },
    email: {
        type: String,
        required: true,
        validator:function(password){
            return password.length >= 9 && password.includes("@");
        },
        message:"El email debe contener más de NUEVE carácteres",
        match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
        pattern: "/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/"
    }
});

module.exports = mongoose.model("Creendentials", CredentialsSchema); 