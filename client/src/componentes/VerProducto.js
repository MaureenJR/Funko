import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VerProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/producto/" + id)
            .then(res => {
                setProducto(res.data);
            })
            .catch(err => console.log(err));
    })
    return(
        <div className="block-2">
            <div className="funko">
                <img src={producto.imagen} alt="Producto" className='img-fluid'/>
            </div>
            <div className="info_funko">
                <h1>{producto.nombre}</h1>
                <h2>{producto.precio}</h2>
                <p>{producto.descripcion}</p>
                <p>{producto.envio}</p>
                <Link to="/" className="btn btn-outline-info">Regresar</Link>
            </div>
            
            
        </div>
    );
}

export default VerProducto;