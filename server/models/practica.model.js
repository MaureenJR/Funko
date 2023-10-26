const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema ({
    nombre: String,
    precio: Number,
    descripcion: String,
    imagen: String,
    envio: Boolean
}, {timestamps: true, versionKey: false});

const Producto = mongoose.model("productos", EsquemaProducto);
module.exports = Producto;