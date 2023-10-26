import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const Todos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then( res => setProductos(res.data) )
            .catch( err => console.log(err) );
    }, [])

    const borrarProducto = id =>{
        axios.delete("http://localhost:8000/api/borrar/" + id)
            .then(res => {
                let nuevaLista = productos.filter(producto => producto._id !== id);
                setProductos(nuevaLista);
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <div>
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src="https://www.rcmart.com/image/cache/catalog/category_banner/hkrcmart-funko-pop-2000x700-4000x1000w.jpg" alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="https://lumen.com.mx/Content/Images/uploaded/videos-blog/Blg_Hdr_02102019_Funko.jpg" alt="Image 2"/>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="block">
                {
                productos.map((producto, index) => (
                    <div key={index} className="producto">
                        <div className="imagen">
                            <img src={producto.imagen} alt="Producto" className='img-fluid'/>
                        </div>
                        <h3>{producto.nombre}</h3>
                        <p><span className="negrita">Precio: </span>{producto.precio}</p>
                        <p><span className="negrita">Descripcion: </span>{producto.descripcion}</p>
                        <div>
                            
                            {
                                producto.envio ? <p> <span className="negrita">Envio incuido: </span><span className='text-success'>Si</span></p>  : <p><span className="negrita">Envio incuido: </span> <span className='text-danger'>No</span></p>
                            }
                        </div>
                        <div className="botones">
                            <Link to={`/editar/${producto._id}`} className="btn btn-warning">Editar</Link>
                            <button className='btn btn-danger ms-2' onClick={()=>borrarProducto(producto._id)}>Borrar</button>
                            <Link to={`/producto/${producto._id}`} className="btn btn-primary ms-2">Detalle</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Todos;