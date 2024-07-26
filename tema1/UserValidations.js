const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique:[ true, 'El login ya está en uso'],
        // maxlength:[15,"El Campo Login no puede contener más de 15 carácteres"]
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




// ProfileSchema.pre ('save', function(next){                                        // MIDDLEWARE
//     console.log("middleware de entrada");
//     if (this.role === "project manager" || this.role === "Chief Information Security Officer"){
//         console.log("Acceso aprobado, perfil permitido: " + this.role);
//     }else{
//         console.log("Acceso denegado, tu puesto es: " + this.role + ". ¡Solicita permiso a tu supervisor!");
//         next();
//     }
// })

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

// function calcularEdad(fecha_nacimiento) {
//     var hoy = new Date();
//     var cumpleanos = new Date(fecha_nacimiento);
//     var edad = hoy.getFullYear() - cumpleanos.getFullYear();
//     var m = hoy.getMonth() - cumpleanos.getMonth();
//     if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
//         edad--;
//     }
//     return edad;
// }

// var edad = calcularEdad(dateOfBirth);
// if(edad >= 18){
//     alert("Eres mayor de edad ✌️ ");
// }else{
//     alert("Eres menor de edad 😶‍🌫️ ");
// }

// userSchema.virtual("password_confirmation").get(function(){
//     return this.p_c
// }).set(function(password){
//     this.p_c=password;
// })

module.exports = mongoose.model("User", UserSchema);