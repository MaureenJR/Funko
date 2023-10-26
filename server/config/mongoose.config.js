const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/practica", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB conectada y lista para usar!"))
    .catch(err => console.log("Error al conectarse con DB", err));