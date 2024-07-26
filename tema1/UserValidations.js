const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique:[ true, 'El login ya está en uso'],
        maxlength:[15,"El Campo Login no puede contener más de 15 carácteres"]
    },
    password: {
        type: String,
        required: true,
        validate:{
            validator:function(pass){
                    if( this.password_confirmation!=undefined)
                        return this.password_confirmation==pass;
                    else{
                        return true;
                    }
            },
            message:"Las contraseñas NO coinciden"
        },
        validate:{
            validator:function(password){
                return password.length >= 8;
            },
            message:"El password debe contener más de OCHO carácteres",
        select: false,
        pattern: ["^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$", "La Contraseña no es lo bastante segura"]
    }
    }
});

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    surname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    dateOfBirth: {
        type: Date,
        required: true,
        minlength: 1,
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"],
        pattern: "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))1|(?:(?:29|30)(/|-|.)(?:0?[1,3-9]|1[0-2])2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?23(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))4(?:(?:1[6-9]|[2-9]d)?d{2})$"
    },
    comments: {
        String, 
        minlength: 4,
        maxlength: [200,"El Campo Login no puede contener más de 200 carácteres"]
    },
    role: {
        type: String,
        required: true,
        enum: ["project manager", "programador Full_Stack", "Diseñador/a UX/UI" , "Chief Information Security Officer"]
    },
});

const CredentialsSchema = new mongoose.Schema({
    adress: {
        String,
        minlength: 1,
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    phone: {
        Number,
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

ProfileSchema.pre ('save', function(next){                                        // MIDDLEWARE
    console.log("middleware de entrada");
    if (this.role === "project manager" || this.role === "Chief Information Security Officer"){
        console.log("Acceso aprobado, perfil permitido: " + this.role);
    }else{
        console.log("Acceso denegado, tu puesto es: " + this.role + ". ¡Solicita permiso a tu supervisor!");
        next();
    }
})

// ProfileSchema.pre ('save', functioncalcularEdad(fecha_nacimiento){              // MIDDLEWARE
//     let hoy = new Date();
//     let cumpleanos = dateOfBirth;
//     let edad = hoy.getFullYear() - cumpleanos.getFullYear();
//     let m = hoy.getMonth() - cumpleanos.getMonth();
            
//     console.log("middleware en trabajo...");

//     if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())){
//         edad--;
//         console.log(¡Bienvenido!);
//     }else{
//         console.log("Sólo pueden acceder mayores de edad");
//         next();
//     }
// });

function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

var edad = calcularEdad(dateOfBirth);
if(edad >= 18){
    alert("Eres mayor de edad ✌️ ");
}else{
    alert("Eres menor de edad 😶‍🌫️ ");
}

// userSchema.virtual("password_confirmation").get(function(){
//     return this.p_c
// }).set(function(password){
//     this.p_c=password;
// })

const User = mongoose.model("User", UserSchema);
const Profile = mongoose.model("Profile", ProfileSchema);
const Credentials = mongoose.model("Credentials", CredentialsSchema);

module.exports = mongoose.model = {User, Profile, Credentials};