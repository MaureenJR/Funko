import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
    const [imagen, setImagen] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [envio, setEnvio] = useState(false);

    const navigate = useNavigate();

    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/nuevo", {
            imagen,
            nombre,
            precio,
            descripcion,
            envio
        })
            .then ( res => navigate("/"))
            .catch (err => console.log(err));
    }

    return(
        <div className="tarjeta">
            <h1 className="mb-3">Producto</h1>
            <form onSubmit={guardarProducto}>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" onChange={e => setNombre(e.target.value)} value={nombre}/>
                </div>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="number" onChange={e => setPrecio(e.target.value)} value={precio} className="ms-3"/>
                </div>
                <div className="mb-2 d-flex justify-content-evenly">
                    <label>Descripción:</label>
                    <input id="descripcion" name="descripcion" type="text" onChange={e => setDescripcion(e.target.value)} value={descripcion} className="me-2"/>
                </div>
                <div>
                    <label>Imagen del producto:</label>
                    <input type="file" name="imagen" value={imagen} className="form-control border border-dark-subtle" onChange={e => setImagen(e.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" id="envio" name="envio" checked={envio} onChange={e => setEnvio(e.target.checked)}/>
                    <label htmlFor="envios"> Envio incuido</label>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar Producto"/>
            </form>
        </div>
    );
}

export default Formulario;