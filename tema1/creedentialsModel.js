const mongoose = require("mongoose");

// const mongo = 'mongodb://localhost:27017/codenotch';
// mongoose.connect( mongo, {useNewUrlParser: true, useUnifiedTopology: true} );

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});

const Creedentials = mongoose.model("Creedentials", CreedentialsSchema);

module.exports = Creedentials;
// module.exports = mongoose.model("Creedentials", CreedentialsSchema);                      //DEPRECATED?