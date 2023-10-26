import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


const Actualizar = () => {
    const {id} = useParams();

    const [imagen, setImagen] = useState("");
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [envio, setEnvio] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/producto/" + id)
            .then(res => {
                setImagen(res.data.imagen);
                setNombre(res.data.nombre);
                setPrecio(res.data.precio);
                setDescripcion(res.data.descripcion);
                setEnvio(res.data.envio);
            })
            .catch(err => console.log(err));
    }, [id])

    const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/editar/"+ id, {
            imagen,
            nombre,
            precio,
            descripcion,
            envio
        })
            .then(res => navigate("/"))
            .catch(err => console.log(err));
    }

    return(
        <div className="tarjeta">
            <h1 className="mb-3">Producto</h1>
            <form onSubmit={actualizarProducto}>
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
                    <input type="url" name="imagen" value={imagen} className="form-control border border-dark-subtle" onChange={e => setImagen(e.target.value)}/>
                </div>
                <div>
                    <input type="checkbox" className="form-check-input" id="envio" name="envio" checked={envio} onChange={e => setEnvio(e.target.checked)}/>
                    <label htmlFor="envios"> Envio incuido</label>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Actualizar Producto"/>
            </form>
        </div>
    );
}

export default Actualizar;