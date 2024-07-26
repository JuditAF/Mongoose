const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [1,"El Campo Login debe contener más de 4 carácteres"],
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    surname: {
        type: String,
        required: true,
        minlength: [1,"El Campo Login debe contener más de 4 carácteres"],
        maxlength: [45,"El Campo Login no puede contener más de 45 carácteres"]
    },
    dateOfBirth: {
        type: Date,
        required: true,
        pattern: "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))1|(?:(?:29|30)(/|-|.)(?:0?[1,3-9]|1[0-2])2))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?23(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))4(?:(?:1[6-9]|[2-9]d)?d{2})$"
    },
    comments: {
        type: String, 
        minlength: [4,"El Campo Login debe contener más de 4 carácteres"],
        maxlength: [200,"El Campo Login no puede contener más de 200 carácteres"]
    },
    role: {
        type: String,
        required: true,
        enum: ["project manager", "programador Full_Stack", "Diseñador/a UX/UI" , "Chief Information Security Officer"]
    },
});

module.exports = mongoose.model("Profile", ProfileSchema);