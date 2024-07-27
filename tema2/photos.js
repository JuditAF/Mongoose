const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    nameUser: String,
    urlPhoto: String,
    titlePhoto: String,
    description: String
});

const Photos = mongoose.model("Photos", PhotosSchema);

module.exports = mongoose.model("Photos", PhotosSchema, "photos"); 