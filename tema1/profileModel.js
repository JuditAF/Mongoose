const mongoose = require("mongoose");

// const mongo = 'mongodb://localhost:27017/codenotch';
// mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    Comments: String,
    rol: String
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports =  Profile;
// module.exports = mongoose.model("Profile", ProfileSchema);                    //DEPRECATED?