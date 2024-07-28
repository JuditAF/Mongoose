const mongoose = require ("mongoose");
const Marks = require ("./");

mongoose.connect('mongodb://localhost:27017/t3', 
    { useNewUrlParser: true, useUnifiedTopology: true }
);