const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});

const Creedentials = mongoose.model("Creedentials", CreedentialsSchema);

// module.exports = Creedentials;                                                          // ESTE MODELO NO CONECTA CON MONGO, EXPORTA UN ESQUEMA DIRECTO
module.exports = mongoose.model("Creedentials", CreedentialsSchema);                      //DEPRECATED?