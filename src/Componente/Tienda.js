import React, { useState } from 'react';
import hamb1 from '../img/hmbg1.jpg';
import hamb2 from '../img/hmbg2.jpg';
import hamb3 from '../img/hmbg3.jpg';
import hamb4 from '../img/hmbg4.jpg';
import './Tienda.css'; // Asegúrate de ajustar la ruta del archivo de estilos

const imagenes = [
    { src: hamb1, alt: 'Hamburguesa de carne', nombre: 'Hamburguesa de carne', descripcion: 'Granjera Simple', precio: 'S/.25.00' },
    { src: hamb2, alt: 'Hamburguesa de Duo Carne', nombre: 'Hamburguesa de Duo Carne', descripcion: 'Blue Label', precio: 'S/.35.00' },
    { src: hamb3, alt: 'Hamburguesa Vegana', nombre: 'Hamburguesa Vegana', descripcion: 'Cuarto de libra vegan', precio: 'S/.27.00' },
    { src: hamb4, alt: 'Hamburguesa Vegana Veggie Clásico', nombre: 'Hamburguesa Vegana', descripcion: 'Veggie Clásico', precio: 'S/.25.00' }
];

function Tienda() {
    const [indiceActual, setIndiceActual] = useState(0);

    const siguienteImagen = () => {
        setIndiceActual((prev) => (prev + 1) % imagenes.length);
    };

    const imagenAnterior = () => {
        setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    };

    return (
        <section className="shop" id="shop">
            <div className="middle-text">
                <h4>Tienda</h4>
                <h2>Hamburguesas más populares</h2>
            </div>

            <div className="shop-content">
                <button className="carrusel-boton" onClick={imagenAnterior}>‹</button>
                <div className="row">
                    <img src={imagenes[indiceActual].src} alt={imagenes[indiceActual].alt} />
                    <h3 className="txt">{imagenes[indiceActual].nombre}</h3>
                    <p className="txt1">{imagenes[indiceActual].descripcion}</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>{imagenes[indiceActual].precio}</h6>
                        </div>
                        <div className="s-btn">
                            <a href="https://wa.link/sol527">Pide ya!</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <button className="carrusel-boton" onClick={siguienteImagen}>›</button>
            </div>

            <div className="row-btn">
                <a href="https://img.freepik.com/psd-gratis/plantilla-menu-deliciosa-hamburguesa_23-2149825338.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid" className="btn">
                    Todos los productos <i className="bx bx bxs-right-arrow"></i>
                </a>
            </div>
        </section>
    );
}

export default Tienda;