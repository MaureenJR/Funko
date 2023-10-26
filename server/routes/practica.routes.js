const ProductoController = require("../controllers/practica.controller");

module.exports = (app) => {
    app.get("/api/productos", ProductoController.todos);
    app.get("/api/producto/:id", ProductoController.un_producto);
    app.post("/api/nuevo", ProductoController.nuevo);
    app.put("/api/editar/:id", ProductoController.editar);
    app.delete("/api/borrar/:id", ProductoController.borrar);
}