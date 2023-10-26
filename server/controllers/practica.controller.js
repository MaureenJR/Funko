const Producto = require("../models/practica.model");

module.exports.todos = (req, res) => {
    Producto.find()
        .then(productos => res.json(productos))
        .catch(err => res.json({message: "Se genero el siguiente error" + err}))
}

module.exports.un_producto = (req, res) => {
    Producto.findOne({ _id: req.params.id })
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Se genero el siguiente error" + err}))
}

module.exports.nuevo = (req, res) => {
    Producto.create( req.body )
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Se genero el siguiente error" + err}))
}

module.exports.editar = (req, res) => {
    Producto.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Se genero el siguiente error" + err}))
}

module.exports.borrar = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json({message: "Se genero el siguiente error" + err}))
}
